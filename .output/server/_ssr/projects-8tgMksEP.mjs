import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as projects } from "./router-TqFQiJeJ.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as ProjectCard } from "./ProjectCard-D5ItU9DR.mjs";
import { t as CTASection } from "./CTASection-Dgy2fcwV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-8tgMksEP.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			as: "h1",
			eyebrow: "Projects",
			title: "Learn by Building Real Projects",
			description: "Each program is anchored to complete applications you can demonstrate, document and explain in interviews."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { ...p }, p.name))
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
		title: "Build a portfolio that speaks for you",
		description: "Join a project-based program and finish with work you are confident presenting."
	})] });
}
//#endregion
export { ProjectsPage as component };
