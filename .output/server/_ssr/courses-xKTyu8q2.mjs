import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as faqs } from "./router-TqFQiJeJ.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as FAQ } from "./FAQ-OLVfVKNF.mjs";
import { t as CTASection } from "./CTASection-Dgy2fcwV.mjs";
import { t as CourseGrid } from "./CourseGrid-m7B1zDwW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-xKTyu8q2.js
var import_jsx_runtime = require_jsx_runtime();
function CoursesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "Courses",
				title: "Explore Our Career-Focused Courses",
				description: "Search by technology or skill level to find the program that matches your goals."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseGrid, {})]
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
