import { l as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { D as Clock, O as CircleCheck, P as BadgeCheck, i as Signal, u as MonitorSmartphone } from "./_libs/lucide-react.mjs";
import { c as faqs, n as Route, r as Button, u as projects } from "./_ssr/router-TqFQiJeJ.mjs";
import { n as SectionHeading, t as Section } from "./_ssr/Section-CXu6bqw9.mjs";
import { t as FAQ } from "./_ssr/FAQ-OLVfVKNF.mjs";
import { t as ContactForm } from "./_ssr/ContactForm-D7yrKxfB.mjs";
import { t as ProjectCard } from "./_ssr/ProjectCard-D5ItU9DR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CgmP68Nq.js
var import_jsx_runtime = require_jsx_runtime();
function CourseDetail() {
	const course = Route.useLoaderData();
	const courseProjects = projects.filter((p) => course.projects.includes(p.name));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								className: "hover:text-primary",
								children: "Courses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: " / "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: course.name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl",
						children: course.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: course.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 flex flex-wrap gap-3 text-sm",
						children: [
							{
								Icon: Clock,
								label: "Duration",
								value: course.duration
							},
							{
								Icon: Signal,
								label: "Level",
								value: course.level
							},
							{
								Icon: MonitorSmartphone,
								label: "Mode",
								value: course.mode
							}
						].map(({ Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 text-primary",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "sr-only",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium text-foreground",
									children: value
								})
							]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#enquiry",
								children: "Enquire About This Course"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								children: "View Other Courses"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-foreground",
					children: "Course Overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: course.overview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl font-bold text-foreground",
					children: "What You Will Learn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: course.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "mt-0.5 size-4 shrink-0 text-primary",
							"aria-hidden": true
						}), o]
					}, o))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl font-bold text-foreground",
					children: "Complete Syllabus"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4",
					children: course.syllabus.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-semibold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-accent",
								children: String(i + 1).padStart(2, "0")
							}), mod.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: mod.topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground",
								children: t
							}, t))
						})]
					}, mod.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl font-bold text-foreground",
					children: "Learning Methodology"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: "Concept sessions are followed immediately by guided practice, assignments and reviews. Each module ends with a build task, and the program closes with a complete project you document and present."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl font-bold text-foreground",
					children: "Certification"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: "A certificate of course completion is provided after successfully meeting the program requirements, including assessments and project submissions."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "grid gap-5 self-start lg:sticky lg:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-foreground",
							children: "Who Should Join"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2 text-sm text-muted-foreground",
							children: course.audience.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
									className: "mt-0.5 size-4 shrink-0 text-primary",
									"aria-hidden": true
								}), a]
							}, a))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-foreground",
							children: "Prerequisites"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2 text-sm text-muted-foreground",
							children: course.prerequisites.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", p] }, p))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-foreground",
							children: "Tools & Technologies"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: course.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary",
								children: t
							}, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-foreground",
							children: "Career Opportunities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2 text-sm text-muted-foreground",
							children: course.careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", c] }, c))
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Projects",
				title: "Projects You Will Build",
				description: "Portfolio-ready applications built during the program."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: courseProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { ...p }, p.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Frequently Asked Questions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: [...course.faqs, ...faqs.slice(0, 4)] })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			id: "enquiry",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Enquiry",
				title: `Enquire About ${course.name}`,
				description: "Send your details and our team will share batch schedules, fees and the detailed curriculum."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { defaultCourse: course.name })
			})]
		})
	] });
}
//#endregion
export { CourseDetail as component };
