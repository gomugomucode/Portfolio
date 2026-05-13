import { t as useToast } from "../main.mjs";
import { t as SEO } from "./SEO-Bcx7h14N.js";
import { t as AnimatedSection } from "./AnimatedSection-BRguisji.js";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ContactSection.tsx
var ContactSection = () => {
	const { toast } = useToast();
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [errors, setErrors] = useState({});
	const [sending, setSending] = useState(false);
	const validate = () => {
		const e = {};
		if (!form.name.trim()) e.name = "Name is required";
		if (!form.email.trim()) e.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
		if (!form.subject.trim()) e.subject = "Subject is required";
		if (!form.message.trim()) e.message = "Message is required";
		setErrors(e);
		return Object.keys(e).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setSending(true);
		const userEmail = form.email;
		const formData = new FormData();
		formData.append("access_key", "fbe72730-5191-4c44-bf5c-ac45ed87b137");
		formData.append("name", form.name);
		formData.append("email", form.email);
		formData.append("subject", `[Portfolio] ${form.subject}`);
		formData.append("message", form.message);
		formData.append("from_name", "Anupam's Portfolio");
		try {
			if ((await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			})).json()).success) {
				setForm({
					name: "",
					email: "",
					subject: "",
					message: ""
				});
				setErrors({});
				toast({
					title: "Message Dispatched",
					description: `Transmission successful. I will respond to ${userEmail} shortly.`,
					duration: 6e3
				});
			} else throw new Error("Transmission Failed");
		} catch (err) {
			toast({
				title: "Transmission Error",
				description: "Failed to dispatch message. Please connect via LinkedIn.",
				variant: "destructive"
			});
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("section", {
		className: "w-full max-w-6xl mx-auto px-4 pb-20",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "text-center mb-12",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight",
					children: ["Initiate ", /* @__PURE__ */ jsx("span", {
						className: "text-violet-500",
						children: "Connection"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-6",
					children: "Open for freelance opportunities, technical collaborations, and full-time roles. Let's discuss how my expertise can deliver value to your next project."
				}),
				/* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-violet-500/20 rounded-full mx-auto" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start",
			children: [/* @__PURE__ */ jsx("address", {
				className: "lg:col-span-1 space-y-4 not-italic",
				children: /* @__PURE__ */ jsxs("div", {
					className: "p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 space-y-6 shadow-lg shadow-black/10",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-slate-100 mb-4",
						children: "Communication Channels"
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:contact@anupambaral.com.np",
								className: "flex items-center gap-4 group",
								children: [/* @__PURE__ */ jsx("div", {
									className: "p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300",
									children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-500 uppercase font-mono tracking-widest",
									children: "Email Protocol"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-slate-200 group-hover:text-violet-400 transition-colors",
									children: "contact@anupambaral.com.np"
								})] })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "tel:+977-9767606302",
								className: "flex items-center gap-4 group",
								children: [/* @__PURE__ */ jsx("div", {
									className: "p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300",
									children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-500 uppercase font-mono tracking-widest",
									children: "Voice Link"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-slate-200 group-hover:text-indigo-400 transition-colors",
									children: "+977-9767606302"
								})] })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "https://linkedin.com/in/gomugomucode",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-4 group",
								children: [/* @__PURE__ */ jsx("div", {
									className: "p-3 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300",
									children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-500 uppercase font-mono tracking-widest",
									children: "Professional Network"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors",
									children: "gomugomucode"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20",
									children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-500 uppercase font-mono tracking-widest",
									children: "Current Coordinates"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-slate-200",
									children: "Butwal, Nepal"
								})] })]
							})
						]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-lg shadow-black/10",
					children: [
						/* @__PURE__ */ jsx("input", {
							type: "checkbox",
							name: "botcheck",
							className: "hidden",
							style: { display: "none" }
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "name",
									className: "block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest",
									children: "Client / Contact Name"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "name",
									type: "text",
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									className: `w-full bg-slate-950/50 border ${errors.name ? "border-red-500/50" : "border-slate-800"} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all`,
									placeholder: "John Doe"
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-red-500 mt-1.5 font-mono uppercase",
									children: errors.name
								})
							] }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "email",
									className: "block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest",
									children: "Return Address (Email)"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "email",
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									className: `w-full bg-slate-950/50 border ${errors.email ? "border-red-500/50" : "border-slate-800"} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all`,
									placeholder: "john@example.com"
								}),
								errors.email && /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-red-500 mt-1.5 font-mono uppercase",
									children: errors.email
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "subject",
								className: "block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest",
								children: "Subject Protocol"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "subject",
								type: "text",
								value: form.subject,
								onChange: (e) => setForm({
									...form,
									subject: e.target.value
								}),
								className: `w-full bg-slate-950/50 border ${errors.subject ? "border-red-500/50" : "border-slate-800"} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all`,
								placeholder: "Project Collaboration / Technical Inquiry"
							}),
							errors.subject && /* @__PURE__ */ jsx("p", {
								className: "text-[10px] text-red-500 mt-1.5 font-mono uppercase",
								children: errors.subject
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "message",
								className: "block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest",
								children: "Payload Data (Message)"
							}),
							/* @__PURE__ */ jsx("textarea", {
								id: "message",
								rows: 5,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: `w-full bg-slate-950/50 border ${errors.message ? "border-red-500/50" : "border-slate-800"} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none resize-none transition-all`,
								placeholder: "Outline the parameters of our potential collaboration..."
							}),
							errors.message && /* @__PURE__ */ jsx("p", {
								className: "text-[10px] text-red-500 mt-1.5 font-mono uppercase",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: sending,
							className: "w-full flex items-center justify-center gap-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-violet-500 transition-all active:scale-95 disabled:opacity-50 relative overflow-hidden group",
							children: sending ? /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2 font-mono uppercase text-[11px] tracking-widest",
								children: [/* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }), "Transmitting..."]
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" }), /* @__PURE__ */ jsx("span", {
								className: "font-mono uppercase text-[11px] tracking-widest font-bold",
								children: "Dispatch Message"
							})] })
						})
					]
				})
			})]
		})]
	}) });
};
//#endregion
//#region src/pages/Contact.tsx
var Contact = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: "Hire Anupam Baral | Freelance Developer Nepal",
			description: "Get in touch with Anupam Baral for freelance development work, open-source collaborations, or full-time opportunities.",
			keywords: "Hire Anupam Baral, Freelance Developer Nepal, Contact gomugomucode",
			canonicalUrl: "https://anupambaral.com.np/contact"
		}), /* @__PURE__ */ jsx("div", {
			className: "pt-8",
			children: /* @__PURE__ */ jsx(ContactSection, {})
		})]
	});
};
//#endregion
export { Contact as default };
