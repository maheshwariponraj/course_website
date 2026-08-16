import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChartColumn, C as FileText, E as CodeXml, F as ArrowRight, M as BrainCircuit, N as BookOpenCheck, O as CircleCheck, P as BadgeCheck, S as Github, b as Handshake, d as Mic, f as MessageSquare, j as Briefcase, l as Palette, o as Rocket, p as MessageCircle, r as Users, s as Presentation, v as Layers, x as GraduationCap } from "../_libs/lucide-react.mjs";
import { a as careerPrep, c as faqs, d as whyChooseUs, l as journey, o as contact, r as Button, u as projects } from "./router-TqFQiJeJ.mjs";
import { n as SectionHeading, t as Section } from "./Section-CXu6bqw9.mjs";
import { t as FAQ } from "./FAQ-OLVfVKNF.mjs";
import { t as ContactForm } from "./ContactForm-D7yrKxfB.mjs";
import { t as ProjectCard } from "./ProjectCard-D5ItU9DR.mjs";
import { t as CourseGrid } from "./CourseGrid-m7B1zDwW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BlPqOZ86.js
var import_jsx_runtime = require_jsx_runtime();
var hero_learning_default = "/assets/hero-learning-CMcAnMSa.jpg";
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
	"AI-Powered Learning"
];
var academyTracks = [
	{
		icon: CodeXml,
		label: "Web Development"
	},
	{
		icon: BrainCircuit,
		label: "AI Tools"
	},
	{
		icon: ChartColumn,
		label: "Data Analytics"
	},
	{
		icon: Palette,
		label: "UI/UX Design"
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
function AcademyHeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto w-full max-w-[34rem] md:ml-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[1.75rem] border border-white/80 bg-background p-3 shadow-lift ring-1 ring-primary/10 sm:p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 px-2 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary",
						children: "Professional Academy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-bold text-foreground",
						children: "Project-first technology learning"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-foreground",
						children: "Enrolling"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[1.35rem] bg-primary-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_learning_default,
						alt: "Students learning coding, AI tools, data analytics, UI/UX design and project development",
						width: 1280,
						height: 1024,
						className: "aspect-[5/4] w-full object-cover object-center"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 pt-4 sm:grid-cols-2",
					children: academyTracks.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-2xl bg-primary-soft px-3 py-2 text-sm font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4 shrink-0",
							"aria-hidden": true
						}), label]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-2 sm:grid-cols-[0.85fr_1.15fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-2xl border border-primary/10 bg-background px-3 py-2 text-sm font-bold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							className: "size-4 shrink-0 text-primary",
							"aria-hidden": true
						}), "Full Stack + AI"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-accent-soft px-3 py-2 text-sm font-bold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
								className: "size-4",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
							children: "Career Growth"
						}), "Portfolio-ready projects"] })]
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-primary-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 py-14 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl md:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								className: "size-4",
								"aria-hidden": true
							}), "IT Training & Career Development"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl",
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
									to: "/courses",
									children: ["Explore Courses", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
									}), "Talk to an Advisor"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 flex flex-wrap gap-3",
							children: trustIndicators.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-4 shrink-0 text-primary",
									"aria-hidden": true
								}), label]
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademyHeroVisual, {})]
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Learning journey",
				title: "A Clear Path From Beginner to Career Ready",
				description: "Every program follows the same proven five-step progression."
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
			})]
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
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-card lg:grid-cols-2 lg:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Certification",
					title: "Earn a Certificate of Course Completion",
					description: "Certificates are issued on successful completion of the applicable program requirements, including assessments and project submissions."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: [
						"Awarded after assessments and project submissions",
						"Lists the technologies and modules you covered",
						"Shareable on LinkedIn and in your resume",
						"Supported by a documented project portfolio"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-xl bg-primary-soft p-4 text-sm text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
							className: "mt-0.5 size-4 shrink-0 text-primary",
							"aria-hidden": true
						}), item]
					}, item))
				})]
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
