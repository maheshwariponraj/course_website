import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as FileText, O as Compass, h as MessageSquare, l as Presentation, m as Mic, w as Github, z as BookOpenCheck } from "../_libs/lucide-react.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as CTASection } from "./CTASection-Bd5e8F1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placements-B7Sgsp_r.js
var import_jsx_runtime = require_jsx_runtime();
var support = [
	{
		Icon: Compass,
		title: "Career Guidance",
		description: "One-to-one direction on suitable roles, skill gaps and realistic next steps."
	},
	{
		Icon: FileText,
		title: "Resume Support",
		description: "Structure, phrasing and project descriptions that read clearly to recruiters."
	},
	{
		Icon: Mic,
		title: "Interview Preparation",
		description: "Technical and HR round practice with structured, actionable feedback."
	},
	{
		Icon: Github,
		title: "Portfolio Development",
		description: "GitHub setup, documentation and a portfolio that presents your work well."
	},
	{
		Icon: BookOpenCheck,
		title: "Job-Readiness Training",
		description: "Fundamentals revision, problem solving practice and role-specific preparation."
	},
	{
		Icon: Presentation,
		title: "Project Explanation",
		description: "Learn to walk through architecture, decisions and trade-offs with confidence."
	},
	{
		Icon: MessageSquare,
		title: "Communication Skills",
		description: "Clear, professional communication for interviews and workplace collaboration."
	}
];
function PlacementsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "Career support",
				title: "Your Skills. Your Portfolio. Your Next Opportunity.",
				description: "We do not make placement guarantees. What we do provide is structured, honest preparation that makes you genuinely ready to apply and perform in interviews."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: support.map(({ Icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-base font-semibold text-foreground",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: description
					})
				]
			}, title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our commitment",
				title: "Honest Expectations, Serious Preparation",
				description: "Outcomes depend on your effort, consistency and the market. Our responsibility is to make sure your skills, projects and communication are ready for it."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Talk to Our Career Advisor",
			description: "Get a clear view of where you stand today and what to work on next.",
			primaryLabel: "Talk to Our Career Advisor"
		})
	] });
}
//#endregion
export { PlacementsPage as component };
