import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/AnimatedSection.tsx
var AnimatedSection = ({ children, className = "", delay = 0 }) => /* @__PURE__ */ jsx(motion.div, {
	initial: {
		opacity: 0,
		y: 30
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .5,
		delay,
		ease: "easeOut"
	},
	className,
	children
});
//#endregion
export { AnimatedSection as t };
