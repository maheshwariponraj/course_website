import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as contact } from "./router-j9fIEjLB.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-BREC82qF.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Information We Collect",
		body: "We collect the details you voluntarily submit through our enquiry forms, such as your name, phone number, email address, course of interest and preferred learning mode."
	},
	{
		title: "How We Use Your Information",
		body: "Your information is used to respond to course enquiries, share batch schedules and curriculum details, and provide learner support during a program."
	},
	{
		title: "Information Sharing",
		body: "We do not sell your personal information. Details are shared only with our internal team members who handle admissions and learner support."
	},
	{
		title: "Data Retention",
		body: "Enquiry details are retained only as long as needed to respond to your request and maintain learner records where applicable."
	},
	{
		title: "Your Choices",
		body: "You may request correction or deletion of your details at any time by contacting us using the details below."
	},
	{
		title: "Contact",
		body: `For any privacy-related request, write to ${contact.email} or call ${contact.phone}.`
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
		as: "h1",
		align: "left",
		eyebrow: "Legal",
		title: "Privacy Policy"
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
export { PrivacyPage as component };
