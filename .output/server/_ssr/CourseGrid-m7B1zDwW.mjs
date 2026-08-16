import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Clock, F as ArrowRight, a as Search, i as Signal, u as MonitorSmartphone } from "../_libs/lucide-react.mjs";
import { i as cn, r as Button, s as courses } from "./router-TqFQiJeJ.mjs";
import { n as Input } from "./FAQ-OLVfVKNF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CourseGrid-m7B1zDwW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CourseCard({ course }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-semibold text-foreground",
				children: course.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: course.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-5 grid gap-2 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "size-4 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Duration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: course.duration })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
								className: "size-4 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Skill level"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: course.level })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorSmartphone, {
								className: "size-4 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Learning mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: course.mode })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [course.tech.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
					children: t
				}, t)), course.tech.length > 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-foreground",
					children: [
						"+",
						course.tech.length - 6,
						" more"
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 flex-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "w-full justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/courses/$slug",
					params: { slug: course.slug },
					children: ["View Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4 transition-transform group-hover:translate-x-1",
						"aria-hidden": true
					})]
				})
			})
		]
	});
}
var levels = [
	"All Levels",
	"Beginner to Advanced",
	"Beginner to Intermediate"
];
function CourseGrid({ withFilters = true }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [level, setLevel] = (0, import_react.useState)(levels[0]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return courses.filter((c) => {
			const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.tech.some((t) => t.toLowerCase().includes(q));
			const matchesLevel = level === levels[0] || c.level === level;
			return matchesQuery && matchesLevel;
		});
	}, [query, level]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		withFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search courses or technologies",
					"aria-label": "Search courses",
					className: "h-11 rounded-full pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter by level",
				children: levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLevel(l),
					"aria-pressed": level === l,
					className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", level === l ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"),
					children: l.replace("Beginner to ", "")
				}, l))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.slug))
		}),
		filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 text-center text-muted-foreground",
			children: "No courses matched your search. Try a different keyword."
		}) : null
	] });
}
//#endregion
export { CourseGrid as t };
