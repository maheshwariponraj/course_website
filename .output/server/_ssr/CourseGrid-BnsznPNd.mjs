import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Clock, F as ChartColumn, H as ArrowRight, a as Signal, c as Search, f as Palette, k as CodeXml, p as MonitorSmartphone } from "../_libs/lucide-react.mjs";
import { i as cn, r as Button, s as courses } from "./router-j9fIEjLB.mjs";
import { n as Input } from "./FAQ-OLVfVKNF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CourseGrid-BnsznPNd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getCourseVisual(course) {
	const name = course.name.toLowerCase();
	if (name.includes("mern") || name.includes("full stack")) return {
		theme: "from-[#e8f3eb] via-[#ebf7ef] to-[#dfeee7]",
		accent: "bg-[#0d5b45]",
		label: "Web Development",
		icon: MonitorSmartphone
	};
	if (name.includes("python")) return {
		theme: "from-[#edf4ff] via-[#edf9f4] to-[#ecf6ee]",
		accent: "bg-[#0c8a6b]",
		label: "Programming",
		icon: CodeXml
	};
	if (name.includes("data")) return {
		theme: "from-[#fff6ea] via-[#f6fff9] to-[#eefaf3]",
		accent: "bg-[#dd9a14]",
		label: "Analytics",
		icon: ChartColumn
	};
	return {
		theme: "from-[#f4f3ff] via-[#f5faf6] to-[#edf7f2]",
		accent: "bg-[#b96a00]",
		label: "Design",
		icon: Palette
	};
}
function CourseCard({ course }) {
	const visual = getCourseVisual(course);
	const Icon = visual.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/90 p-0 shadow-[0_18px_45px_rgba(15,52,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_22px_50px_rgba(15,52,42,0.12)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden bg-gradient-to-br ${visual.theme} p-4`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/35 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 left-8 h-20 w-20 rounded-full bg-primary/5 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-white/70 bg-white/75 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm",
						children: visual.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `inline-flex size-10 items-center justify-center rounded-full ${visual.accent} text-white shadow-md`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4",
							"aria-hidden": true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-4 rounded-[1.3rem] border border-white/60 bg-white/55 p-4 shadow-inner backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-[118px] items-center justify-center rounded-[1rem] bg-gradient-to-br from-white to-primary-soft/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center rounded-[1rem] border border-primary/10 bg-background/90 p-5 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-12 text-primary",
								"aria-hidden": true
							})
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary-soft px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary",
						children: "Career Track"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground",
						children: course.level
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-xl font-extrabold leading-tight text-foreground sm:text-[1.4rem]",
					children: course.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: course.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 grid gap-2.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2",
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
							className: "flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2",
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
							className: "flex items-center gap-2.5 rounded-xl bg-secondary/40 px-2.5 py-2",
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
					children: [course.tech.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-primary/10 bg-primary-soft px-2.5 py-1 text-[0.68rem] font-semibold text-primary",
						children: t
					}, t)), course.tech.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-full border border-[#f4c76f]/40 bg-[#fff4d9] px-2.5 py-1 text-[0.68rem] font-semibold text-[#8b6500]",
						children: [
							"+",
							course.tech.length - 4,
							" more"
						]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-auto w-full justify-between rounded-full bg-primary px-5 py-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_20px_rgba(14,92,67,0.22)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_16px_24px_rgba(14,92,67,0.25)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses/$slug",
						params: { slug: course.slug },
						children: ["View Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
							"aria-hidden": true
						})]
					})
				})
			]
		})]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-8 top-0 -z-10 h-52 rounded-full bg-[radial-gradient(circle,_rgba(20,90,68,0.12),_transparent_70%)] blur-3xl" }),
			withFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search courses or technologies",
						"aria-label": "Search courses",
						className: "h-12 rounded-full border border-primary/10 bg-white/80 pl-10 text-sm shadow-[0_10px_30px_rgba(14,92,67,0.08)] transition-all duration-300 placeholder:text-muted-foreground/80 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 sm:justify-end",
					role: "group",
					"aria-label": "Filter by level",
					children: levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLevel(l),
						"aria-pressed": level === l,
						className: cn("rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300", level === l ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(14,92,67,0.2)]" : "border-border bg-white/80 text-muted-foreground shadow-sm hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"),
						children: l.replace("Beginner to ", "")
					}, l))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
				children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.slug))
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-muted-foreground",
				children: "No courses matched your search. Try a different keyword."
			}) : null
		]
	});
}
//#endregion
export { CourseGrid as t };
