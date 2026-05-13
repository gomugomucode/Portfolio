import { ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import * as React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { ArrowUp, Github, Linkedin, Mail, Menu, Terminal, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#region src/hooks/use-toast.ts
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
	if (toastTimeouts.has(toastId)) return;
	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		dispatch({
			type: "REMOVE_TOAST",
			toastId
		});
	}, TOAST_REMOVE_DELAY);
	toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TOAST": return {
			...state,
			toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
		};
		case "UPDATE_TOAST": return {
			...state,
			toasts: state.toasts.map((t) => t.id === action.toast.id ? {
				...t,
				...action.toast
			} : t)
		};
		case "DISMISS_TOAST": {
			const { toastId } = action;
			if (toastId) addToRemoveQueue(toastId);
			else state.toasts.forEach((toast) => {
				addToRemoveQueue(toast.id);
			});
			return {
				...state,
				toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? {
					...t,
					open: false
				} : t)
			};
		}
		case "REMOVE_TOAST":
			if (action.toastId === void 0) return {
				...state,
				toasts: []
			};
			return {
				...state,
				toasts: state.toasts.filter((t) => t.id !== action.toastId)
			};
	}
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
	memoryState = reducer(memoryState, action);
	listeners.forEach((listener) => {
		listener(memoryState);
	});
}
function toast({ ...props }) {
	const id = genId();
	const update = (props) => dispatch({
		type: "UPDATE_TOAST",
		toast: {
			...props,
			id
		}
	});
	const dismiss = () => dispatch({
		type: "DISMISS_TOAST",
		toastId: id
	});
	dispatch({
		type: "ADD_TOAST",
		toast: {
			...props,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) dismiss();
			}
		}
	});
	return {
		id,
		dismiss,
		update
	};
}
function useToast() {
	const [state, setState] = React.useState(memoryState);
	React.useEffect(() => {
		listeners.push(setState);
		return () => {
			const index = listeners.indexOf(setState);
			if (index > -1) listeners.splice(index, 1);
		};
	}, [state]);
	return {
		...state,
		toast,
		dismiss: (toastId) => dispatch({
			type: "DISMISS_TOAST",
			toastId
		})
	};
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/toast.tsx
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Viewport, {
	ref,
	className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
	...props
}));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
	variants: { variant: {
		default: "border bg-background text-foreground",
		destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
	} },
	defaultVariants: { variant: "default" }
});
var Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
	return /* @__PURE__ */ jsx(ToastPrimitives.Root, {
		ref,
		className: cn(toastVariants({ variant }), className),
		...props
	});
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Action, {
	ref,
	className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", className),
	...props
}));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Close, {
	ref,
	className: cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
	"toast-close": "",
	...props,
	children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
}));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, {
	ref,
	className: cn("text-sm font-semibold", className),
	...props
}));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, {
	ref,
	className: cn("text-sm opacity-90", className),
	...props
}));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
//#endregion
//#region src/components/ui/toaster.tsx
function Toaster() {
	const { toasts } = useToast();
	return /* @__PURE__ */ jsxs(ToastProvider, { children: [toasts.map(function({ id, title, description, action, ...props }) {
		return /* @__PURE__ */ jsxs(Toast, {
			...props,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-1",
					children: [title && /* @__PURE__ */ jsx(ToastTitle, { children: title }), description && /* @__PURE__ */ jsx(ToastDescription, { children: description })]
				}),
				action,
				/* @__PURE__ */ jsx(ToastClose, {})
			]
		}, id);
	}), /* @__PURE__ */ jsx(ToastViewport, {})] });
}
//#endregion
//#region src/components/Navbar.tsx
var navLinks = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "About",
		href: "/about"
	},
	{
		name: "Projects",
		href: "/projects"
	},
	{
		name: "Resources",
		href: "/resources"
	},
	{
		name: "Contact",
		href: "/contact"
	}
];
var Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location.pathname]);
	return /* @__PURE__ */ jsxs(motion.nav, {
		initial: { y: -100 },
		animate: { y: 0 },
		transition: { duration: .5 },
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-6xl mx-auto px-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between h-16",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-2 text-violet-500 group",
						"aria-label": "Home",
						children: [/* @__PURE__ */ jsx(Terminal, { className: "w-5 h-5 group-hover:rotate-12 transition-transform" }), /* @__PURE__ */ jsxs("span", {
							className: "font-bold font-mono text-white tracking-tight group-hover:text-violet-400 transition-colors",
							children: ["Anupam", /* @__PURE__ */ jsx("span", {
								className: "text-violet-500",
								children: ".dev"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex items-center gap-8",
						children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.href,
							className: `text-sm font-medium transition-colors hover:text-violet-400 ${location.pathname === link.href ? "text-violet-500" : "text-slate-300"}`,
							children: link.name
						}, link.name))
					}),
					/* @__PURE__ */ jsx("button", {
						className: "md:hidden text-slate-300 hover:text-white",
						onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
						"aria-label": "Toggle mobile menu",
						"aria-expanded": isMobileMenuOpen,
						children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
					})
				]
			})
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			className: "md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex flex-col px-4 py-4 space-y-4",
				children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
					to: link.href,
					className: `text-sm font-medium transition-colors hover:text-violet-400 ${location.pathname === link.href ? "text-violet-500" : "text-slate-300"}`,
					children: link.name
				}, link.name))
			})
		}) })]
	});
};
//#endregion
//#region src/components/Footer.tsx
var Footer = () => {
	return /* @__PURE__ */ jsx(motion.footer, {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
		transition: { duration: .5 },
		className: "w-full border-t border-border py-8 px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-sm text-muted-foreground text-center sm:text-left",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Anupam Baral. All rights reserved."
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "mailto:contact@anupambaral.com.np",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-500 transition-colors",
						children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "Email"
						})]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://linkedin.com/in/gomugomucode",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-400 transition-colors",
						children: [/* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "LinkedIn"
						})]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://github.com/gomugomucode",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors",
						children: [/* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "GitHub"
						})]
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/components/ScrollToTop.tsx
var ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 400) setIsVisible(true);
			else setIsVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(motion.button, {
		initial: {
			opacity: 0,
			scale: .5,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .5,
			y: 20
		},
		whileHover: { y: -5 },
		whileTap: { scale: .9 },
		onClick: scrollToTop,
		className: "fixed bottom-8 right-8 z-50 p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md hover:bg-emerald-500 hover:text-black transition-colors",
		"aria-label": "Scroll to top",
		children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5" })
	}) });
};
//#endregion
//#region src/components/Layout.tsx
var Layout = ({ children }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#020617] relative overflow-hidden font-inter",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-950/15 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "relative z-10 container pt-24 pb-12 px-4 min-h-[calc(100vh-100px)]",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(ScrollToTop, {})
		]
	});
};
//#endregion
//#region src/App.tsx
var Home = lazy(() => import("./assets/Home-CWyLgpgn.js"));
var About = lazy(() => import("./assets/About-C1AMXrDl.js"));
var Projects = lazy(() => import("./assets/Projects-DdHSJVJU.js"));
var Resources = lazy(() => import("./assets/Resources-DBSYhQjN.js"));
var Contact = lazy(() => import("./assets/Contact-dqrhAIpD.js"));
var NotFound = lazy(() => import("./assets/NotFound-BctJksyw.js"));
var queryClient = new QueryClient();
var PageLoader = () => /* @__PURE__ */ jsx("div", {
	className: "flex items-center justify-center min-h-[60vh]",
	children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" })
});
var App = () => /* @__PURE__ */ jsxs(QueryClientProvider, {
	client: queryClient,
	children: [/* @__PURE__ */ jsx(Toaster, {}), /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx(PageLoader, {}),
		children: /* @__PURE__ */ jsxs(Routes, { children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/",
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about",
				element: /* @__PURE__ */ jsx(About, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/projects",
				element: /* @__PURE__ */ jsx(Projects, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/resources",
				element: /* @__PURE__ */ jsx(Resources, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFound, {})
			})
		] })
	}) })]
});
var createApp = ViteReactSSG(App, { routes: [
	{ path: "/" },
	{ path: "/about" },
	{ path: "/projects" },
	{ path: "/resources" },
	{ path: "/contact" },
	{ path: "*" }
] }, ({ isClient }) => {
	if (isClient) {}
});
//#endregion
export { createApp, createApp as default, useToast as t };
