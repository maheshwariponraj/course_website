import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as BadgeCheck } from "../_libs/lucide-react.mjs";
import { l as journey } from "./router-j9fIEjLB.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as CTASection } from "./CTASection-Bd5e8F1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CjCqT_b_.js
var import_jsx_runtime = require_jsx_runtime();
var highlights = [
	{
		title: "Practical Learning",
		description: "Every concept is applied through guided, hands-on work in the same session."
	},
	{
		title: "Industry Relevance",
		description: "Curriculum mapped to the tools and workflows used by working teams today."
	},
	{
		title: "Project-Based Education",
		description: "You build complete applications, not disconnected exercises."
	},
	{
		title: "Student Support",
		description: "Doubt-clearing, mentoring and structured feedback throughout the program."
	},
	{
		title: "Career Readiness",
		description: "Resume, portfolio, interview and communication preparation built into the track."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "About us",
				title: "About Ilai Digital Solutions",
				description: "We are a career-focused technology training academy committed to helping learners develop practical, industry-relevant skills through structured learning, hands-on projects, and career preparation."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-base font-semibold text-foreground",
						children: h.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: h.description
					})
				]
			}, h.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our approach",
				title: "How We Teach",
				description: "A consistent five-step method applied across every program."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5",
				children: journey.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-border bg-background p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold tracking-widest text-accent",
							children: s.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-semibold text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: s.description
						})
					]
				}, s.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Learn with a team focused on your outcomes",
			description: "Speak to our advisors about your background, goals and the right program for you.",
			primaryLabel: "Talk to an Advisor"
		})
	] });
}
//#endregion
export { AboutPage as component };
