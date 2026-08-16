import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as CircleCheck } from "../_libs/lucide-react.mjs";
import { l as journey, r as Button, s as courses } from "./router-TqFQiJeJ.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as CTASection } from "./CTASection-Dgy2fcwV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-WW2KOqiy.js
var import_jsx_runtime = require_jsx_runtime();
var programs = [
	{
		name: "Foundation Program",
		for: "Absolute beginners",
		duration: "6-8 weeks",
		points: [
			"Programming fundamentals",
			"Web basics & tooling",
			"Guided practice sessions",
			"Mini project"
		]
	},
	{
		name: "Career Track Program",
		for: "Students & graduates targeting jobs",
		duration: "4-6 months",
		points: [
			"Complete course syllabus",
			"Multiple real projects",
			"Portfolio & GitHub setup",
			"Interview preparation"
		]
	},
	{
		name: "Weekend Program",
		for: "Working professionals",
		duration: "5-7 months",
		points: [
			"Weekend batches",
			"Recorded support material",
			"Project-based assessments",
			"Career guidance"
		]
	},
	{
		name: "Fast-Track Program",
		for: "Learners with some experience",
		duration: "8-12 weeks",
		points: [
			"Accelerated schedule",
			"Advanced modules first",
			"Capstone project",
			"Mock interviews"
		]
	}
];
function ProgramsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "Programs",
				title: "Training Programs Built Around Your Schedule",
				description: "Every course is available in multiple program formats so students, graduates and working professionals can learn at a realistic pace."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-foreground",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"For ",
							p.for,
							" · ",
							p.duration
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-2 text-sm text-muted-foreground",
						children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-0.5 size-4 shrink-0 text-primary",
								"aria-hidden": true
							}), pt]
						}, pt))
					})
				]
			}, p.name))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Available tracks",
				title: "Pick Your Specialisation",
				description: "Each program format can be applied to any of our four core courses."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-3",
				children: courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/courses/$slug",
						params: { slug: c.slug },
						children: c.name
					})
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Method",
			title: "The Same Proven Progression in Every Program"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5",
			children: journey.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
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
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Find the program that fits your schedule",
			description: "Tell us your availability and goals, and we will suggest the right batch and format.",
			primaryLabel: "Enquire Now"
		})
	] });
}
//#endregion
export { ProgramsPage as component };
