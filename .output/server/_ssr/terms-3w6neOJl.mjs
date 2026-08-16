import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-3w6neOJl.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Enrolment",
		body: "Enrolment is confirmed once the applicable admission process is completed and a batch is allocated. Batch schedules may be adjusted with prior notice."
	},
	{
		title: "Course Delivery",
		body: "Courses are delivered in online or classroom mode as agreed at the time of enrolment. Syllabus content may be updated to stay aligned with current industry practice."
	},
	{
		title: "Certification",
		body: "A certificate of course completion is issued only after successfully meeting the applicable program requirements, including assessments and project submissions."
	},
	{
		title: "Career Support",
		body: "We provide career guidance, resume support, portfolio development and interview preparation. We do not guarantee employment or specific hiring outcomes."
	},
	{
		title: "Learner Conduct",
		body: "Learners are expected to maintain professional conduct in all sessions and communication channels, and to respect course materials and intellectual property."
	},
	{
		title: "Website Use",
		body: "Content on this website is provided for informational purposes and may be updated without prior notice."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
		as: "h1",
		align: "left",
		eyebrow: "Legal",
		title: "Terms & Conditions"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid max-w-3xl gap-8",
		children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-semibold text-foreground",
			children: s.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: s.body
		})] }, s.title))
	})] });
}
//#endregion
export { TermsPage as component };
