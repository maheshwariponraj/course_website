import "./lib/error-capture";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const ENQUIRIES_PATH = fileURLToPath(new URL("../data/enquiries.json", import.meta.url));

async function ensureEnquiriesFile() {
  const directory = dirname(ENQUIRIES_PATH);
  await mkdir(directory, { recursive: true });

  try {
    await readFile(ENQUIRIES_PATH, "utf-8");
  } catch (error) {
    await writeFile(ENQUIRIES_PATH, "[]", "utf-8");
  }
}

async function handleEnquiryRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ success: false, message: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    const allowedKeys = new Set(["name", "email", "phone", "course", "mode", "message"]);
    const payload = Object.fromEntries(
      Object.entries(body).filter(([key, value]) => allowedKeys.has(key) && value !== undefined),
    );

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const course = typeof payload.course === "string" ? payload.course.trim() : "";
    const mode = typeof payload.mode === "string" ? payload.mode.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || !email || !phone || !course || !mode) {
      return new Response(
        JSON.stringify({ success: false, message: "Please complete all required fields." }),
        { status: 400, headers: { "content-type": "application/json; charset=utf-8" } },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(JSON.stringify({ success: false, message: "Please enter a valid email address." }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    await ensureEnquiriesFile();

    const content = await readFile(ENQUIRIES_PATH, "utf-8");
    let existing: unknown;

    if (!content.trim()) {
      existing = [];
    } else {
      const parsed = JSON.parse(content) as unknown;
      if (!Array.isArray(parsed)) {
        throw new Error("Stored enquiries data is invalid.");
      }
      existing = parsed;
    }

    const enquiry = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      course,
      mode,
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    const nextEntries = [...(existing as Array<Record<string, unknown>>), enquiry];
    await writeFile(ENQUIRIES_PATH, JSON.stringify(nextEntries, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true, message: "Enquiry submitted successfully" }), {
      status: 200,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Unable to submit your enquiry. Please try again." }), {
      status: 500,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    if (url.pathname === "/api/enquiries") {
      return handleEnquiryRequest(request);
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
