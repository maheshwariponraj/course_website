import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as BadgeCheck, C as GraduationCap, E as FileText, H as ArrowRight, I as Briefcase, L as BriefcaseBusiness, M as ChevronRight, N as ChevronLeft, R as BookText, S as Handshake, T as FolderKanban, V as Award, d as PencilLine, g as MessageCircle, h as MessageSquare, i as Sparkles, j as CircleCheck, k as CodeXml, l as Presentation, m as Mic, o as ShieldCheck, r as Users, s as Share2, w as Github, z as BookOpenCheck } from "../_libs/lucide-react.mjs";
import { a as careerPrep, c as faqs, d as whyChooseUs, l as journey, o as contact, r as Button, s as courses, u as projects } from "./router-j9fIEjLB.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as FAQ } from "./FAQ-OLVfVKNF.mjs";
import { t as ContactForm } from "./ContactForm-BAbCv0bj.mjs";
import { t as ProjectCard } from "./ProjectCard-D5ItU9DR.mjs";
import { t as CourseGrid } from "./CourseGrid-BnsznPNd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cy6nBgu_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trustPoints = [
	{
		icon: BookOpenCheck,
		title: "Industry-Relevant Curriculum",
		description: "Learn skills companies actually use."
	},
	{
		icon: CodeXml,
		title: "Practical Projects",
		description: "Build projects that strengthen your portfolio."
	},
	{
		icon: Users,
		title: "Experienced Trainers",
		description: "Learn from professionals with practical industry experience."
	},
	{
		icon: Briefcase,
		title: "Career-Focused Learning",
		description: "Prepare for interviews, jobs and real-world work."
	}
];
var trustIndicators = [
	"Industry-Relevant Skills",
	"Real-World Projects",
	"AI-Powered Learning",
	"Career Guidance",
	"Free Counselling"
];
var featuredCourses = [
	{
		course: courses[0],
		label: "Professional Program",
		image: projects[0]?.image
	},
	{
		course: courses[1],
		label: "Professional Program",
		image: projects[1]?.image
	},
	{
		course: courses[2],
		label: "Professional Program",
		image: projects[2]?.image
	},
	{
		course: courses[3],
		label: "Professional Program",
		image: projects[3]?.image
	}
];
var prepIcons = [
	FileText,
	Github,
	Mic,
	BookOpenCheck,
	MessageSquare,
	Presentation,
	Handshake
];
function CourseCarousel() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (featuredCourses.length <= 1 || isPaused) return;
		const timer = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % featuredCourses.length);
		}, 4500);
		return () => window.clearInterval(timer);
	}, [isPaused]);
	const activeCourse = featuredCourses[activeIndex];
	const slideCourse = activeCourse.course;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto w-full max-w-[30rem] md:ml-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-square rounded-[2rem] border border-primary/10 bg-white p-3 shadow-lift ring-1 ring-primary/5 sm:p-4",
			onMouseEnter: () => setIsPaused(true),
			onMouseLeave: () => setIsPaused(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid h-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-[1.6rem] border border-primary/5 bg-primary-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-border/80 bg-background/80 px-4 py-3 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary",
							children: "Course / Professional Program"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Previous course",
								className: "inline-flex size-8 items-center justify-center rounded-full border border-border bg-white text-primary transition-transform hover:-translate-x-0.5 hover:bg-primary-soft",
								onClick: () => setActiveIndex((prev) => prev === 0 ? featuredCourses.length - 1 : prev - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
									className: "size-4",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Next course",
								className: "inline-flex size-8 items-center justify-center rounded-full border border-border bg-white text-primary transition-transform hover:translate-x-0.5 hover:bg-primary-soft",
								onClick: () => setActiveIndex((prev) => (prev + 1) % featuredCourses.length),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-4",
									"aria-hidden": true
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col transition-all duration-500 ease-out",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: activeCourse.image,
								alt: slideCourse.name,
								className: "h-[42%] w-full object-cover object-center sm:h-[45%]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-0 flex-1 flex-col justify-between space-y-3 bg-background p-4 sm:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-accent-soft px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground",
											children: activeCourse.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
											children: [
												activeIndex + 1,
												"/",
												featuredCourses.length
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-extrabold leading-tight text-foreground sm:text-[1.7rem]",
										children: slideCourse.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
										children: slideCourse.short
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 text-xs font-semibold text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full border border-primary/10 bg-primary-soft px-2.5 py-1.5",
											children: ["Duration: ", slideCourse.duration]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-wrap gap-2",
										children: slideCourse.tech.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-secondary-foreground",
											children: tech
										}, tech))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between gap-3 pt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											variant: "accent",
											className: "h-10 px-4 text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/courses/$slug",
												params: { slug: slideCourse.slug },
												children: "View Course"
											})
										})
									})
								]
							})]
						}, slideCourse.slug)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-2 border-t border-border/80 bg-background/80 px-4 py-3",
						children: featuredCourses.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Show course ${index + 1}`,
							onClick: () => setActiveIndex(index),
							className: ["h-2.5 rounded-full transition-all duration-300", index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"].join(" ")
						}, item.course.slug))
					})
				]
			})
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.08),_transparent_32%),linear-gradient(180deg,_rgba(14,92,67,0.02),_rgba(14,92,67,0.0))]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 py-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:gap-14 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl md:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary shadow-card ring-1 ring-primary/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								className: "size-4",
								"aria-hidden": true
							}), "IT Training & Career Development"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl",
							children: [
								"Learn. Build. Get",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Industry-Ready."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Job-focused training programs designed to help you master in-demand skills, build real-world projects, use AI tools effectively, and prepare for your professional career."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "accent",
								className: "w-full sm:w-auto md:w-full lg:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Get Free Counselling", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": true
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "w-full sm:w-auto md:w-full lg:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": true
									}), "Talk to an Expert"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-primary sm:text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										className: "size-3.5",
										"aria-hidden": true
									}), "Free Career Counselling"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5",
									children: "Free Course Enquiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-2.5 py-1.5",
									children: "No Charges"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 grid gap-3 sm:grid-cols-2",
							children: trustIndicators.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-background/80 px-3 py-2.5 text-sm font-semibold text-foreground shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-4 shrink-0 text-primary",
									"aria-hidden": true
								}), label]
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCarousel, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page pb-12 lg:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: trustPoints.map(({ icon: Icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-border bg-background p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-bold text-foreground",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: description
							})
						]
					}, title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 max-w-3xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-extrabold text-foreground sm:text-3xl",
						children: "Learn Skills. Build Projects. Launch Your Career."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: "From fundamentals to industry-ready projects, our programs are designed around practical learning and modern technology."
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "courses",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Courses",
				title: "Explore Our Career-Focused Courses",
				description: "Structured programs that take you from fundamentals to real, portfolio-ready projects."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseGrid, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why us",
				title: "Why Learn With Ilai Digital Solutions?",
				description: "A training experience built around practice, projects and career outcomes."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: whyChooseUs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background p-6 shadow-card transition-transform duration-300 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-base font-semibold text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: item.description
						})
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "journey",
			className: "relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,92,67,0.05),_transparent_35%),linear-gradient(180deg,_rgba(236,246,241,0.9),_rgba(255,255,255,0.9))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-5xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm",
							children: "Learning Journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl",
							children: "A Clear Path From Beginner to Career Ready"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Every program follows the same proven five-step progression."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12 hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[8%] right-[8%] top-10 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 shadow-[0_0_18px_rgba(14,92,67,0.18)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 lg:grid-cols-5",
						children: journey.map((s, index) => {
							const Icon = [
								BookOpenCheck,
								PencilLine,
								CodeXml,
								Presentation,
								BriefcaseBusiness
							][index] ?? BookOpenCheck;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative z-10",
								style: { animationDelay: `${index * 120}ms` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-black text-primary shadow-[0_12px_24px_rgba(14,92,67,0.12)] ring-4 ring-primary-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_30px_rgba(14,92,67,0.18)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.step })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 rounded-[1.75rem] border border-primary/10 bg-white/95 p-5 text-center shadow-[0_15px_35px_rgba(15,52,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(15,52,42,0.12)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-sm ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-5",
												"aria-hidden": true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-lg font-bold text-foreground",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground",
											children: s.description
										})
									]
								})]
							}, s.step);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-5",
						children: journey.map((s, index) => {
							const Icon = [
								BookOpenCheck,
								PencilLine,
								CodeXml,
								Presentation,
								BriefcaseBusiness
							][index] ?? BookOpenCheck;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative pl-12",
								style: { animationDelay: `${index * 120}ms` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-sm font-black text-primary shadow-[0_10px_20px_rgba(14,92,67,0.12)] ring-4 ring-primary-soft",
									children: s.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[1.5rem] border border-primary/10 bg-white/95 p-4 shadow-[0_10px_24px_rgba(15,52,42,0.08)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-4",
												"aria-hidden": true
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-bold text-foreground",
											children: s.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: s.description
									})]
								})]
							}, s.step);
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			id: "projects",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Projects",
					title: "Learn by Building Real Projects",
					description: "You finish each program with applications you can demonstrate and explain."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: projects.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { ...p }, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							children: "See All Projects"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Career preparation",
				title: "More Than Training. We Prepare You for the Industry.",
				description: "Technical skill alone rarely wins an offer. We work on how you present your work, communicate your thinking and handle interviews."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: careerPrep.map((item, i) => {
					const Icon = prepIcons[i % prepIcons.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4 shrink-0 text-primary",
							"aria-hidden": true
						}), item]
					}, item);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				variant: "accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Enquire Now"
				})
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "certification",
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,92,67,0.10),_transparent_24%),linear-gradient(135deg,_rgba(236,246,241,0.9),_rgba(255,255,255,0.98)_52%,_rgba(239,247,241,0.96))] p-6 shadow-[0_22px_56px_rgba(15,52,42,0.08)] sm:p-8 lg:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary/6 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-4 right-8 h-28 w-28 rounded-full bg-[#f0c86a]/12 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(14,92,67,0.06),_transparent_20%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-3.5",
									"aria-hidden": true
								}), "Certification"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-6 md:flex-row md:items-start lg:flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-3xl font-black leading-tight tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.8rem]",
										children: ["Earn a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Certificate of Course Completion"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
										children: "Certificates are issued on successful completion of the applicable program requirements, including assessments and project submissions."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative mx-auto w-full max-w-[220px] shrink-0 md:mx-0 md:mt-1 lg:mx-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative rounded-[1.6rem] border border-primary/10 bg-white/90 p-3 shadow-[0_18px_40px_rgba(15,52,42,0.10)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[1.25rem] border-2 border-primary/10 bg-[linear-gradient(135deg,_rgba(14,92,67,0.04),_rgba(255,255,255,0.95))] p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-[0.55rem] font-bold uppercase tracking-[0.2em] text-primary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ilai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
															className: "size-3.5",
															"aria-hidden": true
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 rounded-xl border border-dashed border-primary/15 bg-primary-soft/40 p-3 text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
															className: "size-5",
															"aria-hidden": true
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-primary",
														children: "Certified"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 border-t border-primary/10 pt-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
														children: "Course Completion"
													})
												})
											]
										})
									})
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
							children: [
								{
									text: "Awarded after assessments and project submissions",
									icon: Award,
									accent: "bg-[#fef5df] text-[#9b6a00] border-[#f6d88a]"
								},
								{
									text: "Lists the technologies and modules you covered",
									icon: BookText,
									accent: "bg-[#edf8ef] text-[#155b45] border-[#dfeee5]"
								},
								{
									text: "Shareable on LinkedIn and in your resume",
									icon: Share2,
									accent: "bg-[#f2f7ff] text-[#1f4a7d] border-[#dfeaff]"
								},
								{
									text: "Supported by a documented project portfolio",
									icon: FolderKanban,
									accent: "bg-[#f6f1ff] text-[#5d3a8d] border-[#e7d9ff]"
								}
							].map(({ text, icon: Icon, accent }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "group flex items-start gap-3 rounded-[1.25rem] border border-primary/10 bg-white/80 p-4 shadow-[0_12px_26px_rgba(15,52,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(15,52,42,0.10)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl border ${accent}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed text-foreground",
									children: text
								})]
							}, text))
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			id: "faq",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "Frequently Asked Questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: faqs })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "contact",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						eyebrow: "Enquiry",
						title: "Ready to Start Learning?",
						description: "Share your details and our team will get back to you with batch schedules, fees and curriculum details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 grid gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-widest text-muted-foreground",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.phoneHref,
								className: "font-semibold text-foreground hover:text-primary",
								children: contact.phone
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-widest text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${contact.email}`,
								className: "font-semibold text-foreground hover:text-primary",
								children: contact.email
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-widest text-muted-foreground",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: contact.location
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.whatsapp,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Chat on WhatsApp"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
