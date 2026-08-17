import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as faqs } from "./router-j9fIEjLB.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as FAQ } from "./FAQ-OLVfVKNF.mjs";
import { t as CTASection } from "./CTASection-Bd5e8F1W.mjs";
import { t as CourseGrid } from "./CourseGrid-BnsznPNd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-Ky2u0ppE.js
var import_jsx_runtime = require_jsx_runtime();
function CoursesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(219,149,23,0.08),_transparent_22%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm",
							children: "Courses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl",
							children: "Explore Our Career-Focused Courses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Search by technology or skill level to find the program that matches your goals."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseGrid, {})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Course Questions, Answered"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: faqs.slice(0, 6) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Not sure which course fits you?",
			description: "Talk to our advisors about your background and career goals, and we will recommend the right track.",
			primaryLabel: "Talk to an Advisor"
		})
	] });
}
//#endregion
export { CoursesPage as component };
