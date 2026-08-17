import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as cn, r as Button, s as courses } from "./router-j9fIEjLB.mjs";
import { n as Input } from "./FAQ-OLVfVKNF.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactForm-BAbCv0bj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(100),
	phone: stringType().trim().regex(/^[0-9+\-\s()]{8,20}$/, "Please enter a valid phone number"),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	course: stringType().min(1, "Please select a course"),
	mode: stringType().min(1, "Please select a learning mode"),
	message: stringType().trim().max(1e3, "Message must be under 1000 characters").optional()
});
function ContactForm({ defaultCourse }) {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) next[issue.path[0]] = issue.message;
			setErrors(next);
			toast.error("Please correct the highlighted fields.");
			return;
		}
		setErrors({});
		setSubmitting(true);
		try {
			const response = await fetch("/api/enquiries", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data)
			});
			const result = await response.json().catch(() => null);
			if (!response.ok || result?.success !== true) throw new Error(result?.message ?? "Request failed");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "grid gap-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Full Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						className: fieldClass,
						placeholder: "Your name",
						maxLength: 100
					}),
					errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.name
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone Number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						name: "phone",
						type: "tel",
						className: fieldClass,
						placeholder: "+91 00000 00000",
						maxLength: 20
					}),
					errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.phone
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						className: fieldClass,
						placeholder: "you@example.com",
						maxLength: 255
					}),
					errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.email
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "course",
						children: "Course Interested In"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "course",
						name: "course",
						defaultValue: defaultCourse ?? "",
						className: "h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a course"
							}),
							courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.name,
								children: c.name
							}, c.slug)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Not sure yet",
								children: "Not sure yet"
							})
						]
					}),
					errors.course ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.course
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "mode",
						children: "Preferred Learning Mode"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "mode",
						name: "mode",
						defaultValue: "",
						className: "h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Online",
								children: "Online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Classroom",
								children: "Classroom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Weekend Batch",
								children: "Weekend Batch"
							})
						]
					}),
					errors.mode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.mode
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						rows: 4,
						maxLength: 1e3,
						className: "rounded-xl",
						placeholder: "Tell us about your background and goals"
					}),
					errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: errors.message
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					variant: "accent",
					disabled: submitting,
					className: "w-full sm:w-auto",
					children: submitting ? "Submitting..." : "Submit Enquiry"
				})
			})
		]
	});
}
//#endregion
export { ContactForm as t };
