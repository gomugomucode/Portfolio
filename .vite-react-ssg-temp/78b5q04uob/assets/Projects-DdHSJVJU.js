import { t as SEO } from "./SEO-Bcx7h14N.js";
import { t as AnimatedSection } from "./AnimatedSection-BRguisji.js";
import { useState } from "react";
import { Briefcase, ExternalLink, Github, GraduationCap, Users } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#region src/components/TabbedContent.tsx
var tabs = [
	{
		id: "experience",
		label: "Engineering & Projects",
		icon: Briefcase
	},
	{
		id: "education",
		label: "Academic Background",
		icon: GraduationCap
	},
	{
		id: "leadership",
		label: "Mentorship & Open Source",
		icon: Users
	}
];
var ExperienceTab = () => /* @__PURE__ */ jsxs("div", {
	className: "space-y-12",
	children: [/* @__PURE__ */ jsxs("div", {
		className: "relative p-8 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/20 backdrop-blur-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute top-0 right-0 p-4 opacity-10",
			children: /* @__PURE__ */ jsx(Briefcase, { className: "w-24 h-24 text-violet-500" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-4",
					children: "Engineering Portfolio"
				}),
				/* @__PURE__ */ jsxs("h3", {
					className: "text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight",
					children: ["Crafting Scalable ", /* @__PURE__ */ jsx("span", {
						className: "text-violet-500",
						children: "Digital Solutions"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-400 text-sm md:text-base max-w-xl leading-relaxed",
					children: "Focused on building high-performance applications with clean architecture, robust security, and exceptional user experiences."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/50",
					children: [
						{
							label: "Stack",
							value: "Full Stack"
						},
						{
							label: "Experience",
							value: "2+ Years"
						},
						{
							label: "Focus",
							value: "Architecture"
						},
						{
							label: "Projects",
							value: "10+ Total"
						}
					].map((stat) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1",
						children: stat.label
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm font-semibold text-slate-200",
						children: stat.value
					})] }, stat.label))
				})
			]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4",
			children: [
				/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-slate-800" }),
				/* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]",
					children: "Featured Case Studies"
				}),
				/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-slate-800" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ jsx(ProjectCaseStudy, {
				title: "Scalable E-Learning Platform Architecture",
				impact: "Full-stack Engineering • System Design",
				description: "Engineered a comprehensive Learning Management System (LMS) designed for high concurrency and robust resource delivery. Implemented a decoupled React frontend with a secure Node.js/Express RESTful API, backed by an optimized MySQL schema for complex relational querying.",
				tags: [
					"React",
					"Node.js",
					"MySQL",
					"Express",
					"Tailwind"
				],
				imageUrl: "/elearning-preview.webp",
				liveLink: "https://elearn-lake.vercel.app",
				githubLink: "https://github.com/gomugomucode/elearn",
				stats: [{
					label: "Tech",
					value: "MERN+MySQL"
				}, {
					label: "Role",
					value: "Lead Dev"
				}]
			}), /* @__PURE__ */ jsx(ProjectCaseStudy, {
				title: "Web3 Decentralized Loyalty Protocol",
				impact: "Blockchain • Web3 Architecture",
				description: "Architected a Solana-based loyalty rewards decentralized application (dApp) for a Superteam Nepal bounty. Leveraged Next.js for SSR performance and integrated Web3.js to handle smart contract interactions and secure wallet authentication flows.",
				tags: [
					"Solana",
					"Next.js",
					"Web3.js",
					"TypeScript",
					"Rust"
				],
				imageUrl: "/solana.webp",
				liveLink: "https://solana-loyalty-d-app.vercel.app/",
				githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
				stats: [{
					label: "Chain",
					value: "Solana"
				}, {
					label: "Outcome",
					value: "Bounty Win"
				}]
			})]
		})]
	})]
});
var EducationTab = () => /* @__PURE__ */ jsxs("div", {
	className: "space-y-6",
	children: [/* @__PURE__ */ jsx(ContentCard, {
		title: "Bachelor of Computer Applications (BCA)",
		subtitle: "Butwal Kalika Campus · July 2023 – Present",
		description: "Advancing through my 5th semester with a rigorous focus on software engineering principles, distributed systems, advanced database architecture, and modern application development paradigms.",
		tags: [
			"Software Engineering",
			"Algorithms",
			"Database Architecture",
			"System Design"
		]
	}), /* @__PURE__ */ jsx(ContentCard, {
		title: "Civil Engineering Foundation (Secondary Education)",
		subtitle: "Janasewa Secondary School",
		description: "Acquired a strong analytical foundation in mathematics, structural analysis, and technical problem-solving, which heavily influences my logical approach to software architecture today.",
		tags: [
			"Applied Mathematics",
			"Analytical Thinking",
			"Structural Logic"
		]
	})]
});
var LeadershipTab = () => /* @__PURE__ */ jsxs("div", {
	className: "space-y-6",
	children: [/* @__PURE__ */ jsx(ContentCard, {
		title: "Technical Mentor: Web Technologies & DevOps",
		description: "Spearheading technical workshops for university juniors, focusing on modern web standards (HTML5/CSS3), advanced version control strategies (Git workflows), and CI/CD deployment pipelines utilizing GitHub and Vercel.",
		tags: [
			"Mentorship",
			"CI/CD",
			"Git Workflows",
			"Vercel",
			"Technical Communication"
		]
	}), /* @__PURE__ */ jsx(ContentCard, {
		title: "Digital Literacy & Fundamentals Instructor",
		description: "Facilitating structured training sessions on essential digital paradigms, empowering students with the technical literacy required for modern academic and professional environments.",
		tags: [
			"Instructional Design",
			"Digital Literacy",
			"Public Speaking"
		]
	})]
});
var ProjectCaseStudy = ({ title, impact, description, tags, imageUrl, liveLink, githubLink, stats }) => /* @__PURE__ */ jsx("div", {
	className: "group relative bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-500 shadow-2xl shadow-black/20",
	children: /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col lg:flex-row",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lg:w-2/5 relative h-56 lg:h-auto overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent z-10" }),
				/* @__PURE__ */ jsx("img", {
					src: imageUrl,
					alt: title,
					className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-4 left-4 z-20 flex gap-2",
					children: stats?.map((stat) => /* @__PURE__ */ jsxs("div", {
						className: "px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[9px] font-mono text-slate-300",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "text-slate-500 uppercase",
								children: [stat.label, ":"]
							}),
							" ",
							stat.value
						]
					}, stat.label))
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 lg:p-8 flex flex-col flex-1",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-between items-start mb-4",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-1",
						children: impact
					}), /* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-white tracking-tight leading-tight",
						children: title
					})] })
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-slate-400 text-sm leading-relaxed mb-6",
					children: description
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-1.5 mb-8",
					children: tags.map((tag) => /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/40 text-slate-300 border border-slate-700/50",
						children: tag
					}, tag))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-auto",
					children: [liveLink && /* @__PURE__ */ jsxs("a", {
						href: liveLink,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 text-[11px] font-bold px-5 py-2.5 bg-violet-500 text-white rounded-lg hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95",
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" }), "VIEW PROJECT"]
					}), githubLink && /* @__PURE__ */ jsxs("a", {
						href: githubLink,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 text-[11px] font-bold px-5 py-2.5 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 hover:text-white transition-all border border-slate-700 active:scale-95",
						children: [/* @__PURE__ */ jsx(Github, { className: "w-3.5 h-3.5" }), "CODEBASE"]
					})]
				})
			]
		})]
	})
});
var ContentCard = ({ title, subtitle, description, tags, imageUrl, liveLink, githubLink }) => /* @__PURE__ */ jsxs("div", {
	className: "bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-violet-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-lg shadow-black/10",
	children: [imageUrl && /* @__PURE__ */ jsx("div", {
		className: "w-full h-48 sm:h-64 overflow-hidden border-b border-slate-800",
		children: /* @__PURE__ */ jsx("img", {
			src: imageUrl,
			alt: title,
			className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
			loading: "lazy"
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: "p-5 md:p-6 flex flex-col flex-1",
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "text-lg font-bold text-slate-100 mb-1 leading-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "text-sm text-violet-500 font-mono mb-3",
				children: subtitle
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-slate-400 text-sm leading-relaxed mb-5 flex-grow",
				children: description
			}),
			tags.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2 mb-5",
				children: tags.map((tag) => /* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-violet-400 border border-slate-700/50",
					children: tag
				}, tag))
			}),
			(liveLink || githubLink) && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-3 mt-auto pt-5 border-t border-slate-800/50",
				children: [liveLink && /* @__PURE__ */ jsxs("a", {
					href: liveLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-violet-500/10 text-violet-400 hover:bg-violet-500 hover:text-white rounded-md transition-all border border-violet-500/20 active:scale-95",
					children: [/* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" }), "Live Deployment"]
				}), githubLink && /* @__PURE__ */ jsxs("a", {
					href: githubLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-all border border-slate-700 active:scale-95",
					children: [/* @__PURE__ */ jsx(Github, { className: "w-3.5 h-3.5" }), "Source Code"]
				})]
			})
		]
	})]
});
var TabbedContent = () => {
	const [activeTab, setActiveTab] = useState("experience");
	const content = {
		experience: /* @__PURE__ */ jsx(ExperienceTab, {}),
		education: /* @__PURE__ */ jsx(EducationTab, {}),
		leadership: /* @__PURE__ */ jsx(LeadershipTab, {})
	};
	return /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("section", {
		className: "w-full max-w-4xl mx-auto px-4 pb-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-3xl md:text-4xl font-bold text-white tracking-tight mb-4",
					children: ["Professional ", /* @__PURE__ */ jsx("span", {
						className: "text-violet-500 font-mono tracking-tighter",
						children: "Trajectory_"
					})]
				}), /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-violet-500/40 rounded-full mx-auto" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col sm:flex-row gap-1 p-1.5 bg-slate-900/50 backdrop-blur-sm rounded-xl mb-12 border border-slate-800",
				children: tabs.map((tab) => {
					const Icon = tab.icon;
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => setActiveTab(tab.id),
						className: `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,
						children: [/* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: tab.label
						})]
					}, tab.id);
				})
			}),
			/* @__PURE__ */ jsx(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -20
					},
					transition: {
						duration: .3,
						ease: "easeOut"
					},
					children: content[activeTab]
				}, activeTab)
			})
		]
	}) });
};
//#endregion
//#region src/pages/Projects.tsx
var Projects = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: "Projects by Anupam Baral | React, Python & AI/ML",
			description: "Explore projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions.",
			keywords: "Anupam Baral Projects, gomugomucode GitHub, React Projects, AI/ML Developer Nepal",
			canonicalUrl: "https://anupambaral.com.np/projects"
		}), /* @__PURE__ */ jsx("div", {
			className: "pt-8",
			children: /* @__PURE__ */ jsx(TabbedContent, {})
		})]
	});
};
//#endregion
export { Projects as default };
