import { t as SEO } from "./SEO-Bcx7h14N.js";
import { t as AnimatedSection } from "./AnimatedSection-BRguisji.js";
import { Cpu, Database, Globe, Terminal } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/AboutSection.tsx
var AboutSection = () => {
	return /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsx("section", {
		className: "w-full max-w-4xl mx-auto px-4 pb-20 pt-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col md:flex-row gap-12 items-center md:items-start",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: { duration: .5 },
				className: "w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-800 shrink-0 relative group",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/0 transition-colors z-10" }), /* @__PURE__ */ jsx("img", {
					src: "/my-photo.webp",
					alt: "Anupam Baral - Full Stack Developer from Butwal, Nepal",
					className: "w-full h-full object-cover",
					onError: (e) => {
						e.currentTarget.src = "https://github.com/gomugomucode.png";
					}
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-1 space-y-6 text-center md:text-left",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl font-bold text-white mb-2",
						children: ["About ", /* @__PURE__ */ jsx("span", {
							className: "text-violet-500",
							children: "Me"
						})]
					}), /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-violet-500/20 rounded-full mx-auto md:mx-0" })] }),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 text-slate-400 leading-relaxed text-sm md:text-base",
						children: [
							/* @__PURE__ */ jsxs("p", { children: [
								"Hello! I'm ",
								/* @__PURE__ */ jsx("span", {
									className: "text-violet-400 font-medium",
									children: "Anupam Baral"
								}),
								", a passionate software engineer based in Nepal. My journey in tech started with a curiosity for how web applications scale, which evolved into a deep dive into Full-Stack Development and Artificial Intelligence."
							] }),
							/* @__PURE__ */ jsx("p", { children: "I am currently pursuing my Bachelor of Computer Applications (BCA) at Butwal Kalika Campus, where I combine academic rigor with practical, hands-on engineering. I thrive on building resilient architectures, whether it's engineering a seamless React frontend or optimizing a Python-based machine learning pipeline." }),
							/* @__PURE__ */ jsx("p", { children: "Beyond writing code, I am deeply committed to open-source communities and technical mentorship. I believe that sharing knowledge and contributing to the global developer ecosystem is the most effective way to grow both personally and professionally." })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-4 flex flex-wrap justify-center md:justify-start gap-3",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50",
								children: "Problem Solver"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50",
								children: "Lifelong Learner"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50",
								children: "Open Source Advocate"
							})
						]
					})
				]
			})]
		})
	}) });
};
//#endregion
//#region src/components/SkillsSection.tsx
var skillCategories = [
	{
		title: "Frontend Architecture",
		icon: Globe,
		skills: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"TypeScript",
			"Framer Motion",
			"Vite"
		]
	},
	{
		title: "Backend Systems",
		icon: Database,
		skills: [
			"Node.js",
			"Express.js",
			"Python",
			"MySQL",
			"REST APIs",
			"SQLite"
		]
	},
	{
		title: "AI & Data Engineering",
		icon: Cpu,
		skills: [
			"Machine Learning",
			"NumPy",
			"Pandas",
			"Scikit-Learn"
		]
	},
	{
		title: "DevOps & Infrastructure",
		icon: Terminal,
		skills: [
			"Git / GitHub",
			"Vercel Actions",
			"Cloudflare",
			"Linux Administration"
		]
	}
];
var SkillsSection = () => {
	return /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("section", {
		className: "w-full max-w-6xl mx-auto px-4 pb-20",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "text-center mb-12",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "text-3xl md:text-4xl font-bold text-white tracking-tight mb-6",
					children: ["Technical ", /* @__PURE__ */ jsx("span", {
						className: "text-violet-500",
						children: "Arsenal"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-center mb-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-mono shadow-lg shadow-violet-500/5",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-violet-500" })]
						}), "Actively Architecting: Advanced AI/ML pipelines with Python"]
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed",
					children: "I leverage a robust ecosystem of modern tools to build scalable, high-performance applications. My approach combines strongly-typed frontend frameworks with resilient backend architectures."
				}),
				/* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-violet-500/20 rounded-full mx-auto mt-8" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
			children: skillCategories.map((cat, i) => {
				const Icon = cat.icon;
				return /* @__PURE__ */ jsxs(motion.article, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .08
					},
					className: "bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all shadow-lg shadow-black/10 group",
					children: [/* @__PURE__ */ jsxs("header", {
						className: "flex items-center gap-4 mb-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:bg-slate-800 transition-colors",
							children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-violet-500" })
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold text-slate-100 group-hover:text-violet-400 transition-colors",
							children: cat.title
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2.5",
						children: cat.skills.map((skill) => /* @__PURE__ */ jsx("span", {
							className: "text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-slate-700 group-hover:text-white transition-colors",
							children: skill
						}, skill))
					})]
				}, cat.title);
			})
		})]
	}) });
};
//#endregion
//#region src/pages/About.tsx
var About = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "About Anupam Baral | Developer in Nepal",
				description: "Learn more about Anupam Baral, a Full Stack Developer from Nepal with expertise in modern web technologies, Python, and AI/ML.",
				keywords: "Anupam Baral About, Developer in Nepal, React Developer, Full Stack Developer Nepal",
				canonicalUrl: "https://anupambaral.com.np/about"
			}),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AboutSection, {}) }),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SkillsSection, {}) }),
			/* @__PURE__ */ jsx("div", {})
		]
	});
};
//#endregion
export { About as default };
