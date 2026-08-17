import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,20}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  course: z.string().min(1, "Please select a course"),
  mode: z.string().min(1, "Please select a learning mode"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm({ defaultCourse }: { defaultCourse?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message ?? "Request failed");
      }

      form.reset();
      toast.success("Thank you! Your enquiry has been submitted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = "h-11 rounded-xl";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" className={fieldClass} placeholder="Your name" maxLength={100} />
        {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91 00000 00000" maxLength={20} />
        {errors.phone ? <p className="text-xs text-destructive">{errors.phone}</p> : null}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" maxLength={255} />
        {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="course">Course Interested In</Label>
        <select
          id="course"
          name="course"
          defaultValue={defaultCourse ?? ""}
          className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground"
        >
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.course ? <p className="text-xs text-destructive">{errors.course}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="mode">Preferred Learning Mode</Label>
        <select
          id="mode"
          name="mode"
          defaultValue=""
          className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground"
        >
          <option value="">Select a mode</option>
          <option value="Online">Online</option>
          <option value="Classroom">Classroom</option>
          <option value="Weekend Batch">Weekend Batch</option>
        </select>
        {errors.mode ? <p className="text-xs text-destructive">{errors.mode}</p> : null}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          className="rounded-xl"
          placeholder="Tell us about your background and goals"
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="accent" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </div>
    </form>
  );
}
