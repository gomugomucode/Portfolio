import { t as SEO } from "./SEO-Bcx7h14N.js";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code2, FileText, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/HeroSection.tsx
var HeroSection = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" }),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "relative mb-14",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-tilt" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-b from-violet-500/50 to-slate-900 shadow-2xl",
						children: /* @__PURE__ */ jsx("div", {
							className: "w-full h-full rounded-full border-[6px] border-[#020617] overflow-hidden bg-slate-950",
							children: /* @__PURE__ */ jsx("img", {
								src: "/my-photo.webp",
								alt: "Anupam Baral - Full Stack Developer from Butwal, Nepal",
								className: "w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 hover:scale-105",
								loading: "eager"
							})
						})
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: {
							delay: .8,
							type: "spring"
						},
						className: "absolute bottom-1 right-2 flex items-center gap-1.5 bg-slate-950 border border-violet-500/30 px-4 py-2 rounded-full shadow-2xl backdrop-blur-xl",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-violet-500" })]
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-black text-violet-400 uppercase tracking-widest",
							children: "Active Status"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .3 },
				className: "group flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-violet-500/40 transition-all mb-10",
				children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4 text-violet-400" }), /* @__PURE__ */ jsxs("span", {
					className: "text-xs font-mono text-slate-300 tracking-tight",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-violet-500 font-bold",
							children: "~"
						}),
						"/gomugomucode ",
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-600",
							children: "--status"
						}),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-cyan-400 font-bold",
							children: "online"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto mb-10",
				children: /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .4,
						duration: .8
					},
					children: /* @__PURE__ */ jsx("span", {
						className: "text-xs md:text-sm font-black uppercase tracking-[0.5em] text-violet-400/80 mb-6 block",
						children: "The Intersection of Code & Intelligence"
					})
				})
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .5 },
				className: "max-w-3xl mx-auto space-y-8 mb-16",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "text-xl md:text-2xl font-bold text-slate-100 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-violet-400" }),
							"Hi, I'm Anupam Baral",
							/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-slate-700" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-cyan-400 uppercase text-xs tracking-[0.3em] font-black",
								children: "from Nepal"
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-slate-400 text-base md:text-xl leading-relaxed font-medium px-4",
						children: [
							"Architecting ",
							/* @__PURE__ */ jsx("span", {
								className: "text-slate-100",
								children: "scalable digital ecosystems"
							}),
							" and high-impact frontend experiences. Specializing in neural-driven",
							/* @__PURE__ */ jsx("span", {
								className: "text-violet-400 font-serif italic ml-1.5",
								children: " intelligent architectures."
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap justify-center gap-3",
						children: [
							"React",
							"TypeScript",
							"Python",
							"Solana",
							"AI/ML"
						].map((skill) => /* @__PURE__ */ jsx("span", {
							className: "px-4 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-violet-500/50 transition-colors cursor-default",
							children: skill
						}, skill))
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .6 },
				className: "flex flex-wrap items-center justify-center gap-6",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/projects",
						className: "group relative inline-flex items-center gap-3 bg-violet-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-violet-500 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-violet-600/30 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" }),
							/* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" }),
							"Explore Work",
							/* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform group-hover:translate-x-1.5" })
						]
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-3 bg-slate-900 text-white border border-slate-800 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-slate-800 hover:border-violet-500/40 active:scale-95 shadow-xl",
						children: [/* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5 text-cyan-400" }), "Partner Up"]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6 mt-6 md:mt-0 md:ml-6 pl-8 border-l border-slate-800 hidden sm:flex",
						children: [
							/* @__PURE__ */ jsx(motion.a, {
								whileHover: {
									y: -4,
									color: "#a855f7"
								},
								href: "https://github.com/gomugomucode",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-500 transition-colors",
								children: /* @__PURE__ */ jsx(Github, { className: "w-7 h-7" })
							}),
							/* @__PURE__ */ jsx(motion.a, {
								whileHover: {
									y: -3,
									color: "#0077b5"
								},
								href: "https://linkedin.com/in/gomugomucode",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 transition-colors",
								children: /* @__PURE__ */ jsx(Linkedin, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ jsx(motion.a, {
								whileHover: {
									y: -4,
									color: "#a855f7"
								},
								href: "/Anupambaral-cv.docx",
								download: true,
								className: "text-slate-500 transition-colors",
								children: /* @__PURE__ */ jsx(FileText, { className: "w-7 h-7" })
							})
						]
					})
				]
			})
		]
	});
};
//#endregion
//#region src/pages/Home.tsx
var personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Anupam Baral",
	"alternateName": "gomugomucode",
	"url": "https://anupambaral.com.np",
	"jobTitle": "Full Stack Developer",
	"sameAs": ["https://github.com/gomugomucode", "https://www.linkedin.com/in/gomugomucode/"],
	"knowsAbout": [
		"React",
		"TypeScript",
		"Python",
		"Artificial Intelligence",
		"Machine Learning",
		"Full Stack Development"
	],
	"address": {
		"@type": "PostalAddress",
		"addressCountry": "Nepal"
	}
};
var Home = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: "Anupam Baral (gomugomucode) | Full Stack Developer Nepal",
			description: "Anupam Baral (gomugomucode) is a Full Stack Developer & AI/ML Engineer from Nepal specializing in React, TypeScript, and Python.",
			keywords: "Anupam Baral, gomugomucode, Developer in Nepal, React Developer Nepal, TypeScript Engineer, AI/ML Builder, Python Developer Nepal",
			schema: personSchema
		}), /* @__PURE__ */ jsx(HeroSection, {})]
	});
};
//#endregion
export { Home as default };
