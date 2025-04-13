"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Variant for stroke drawing animation
const pathStrokeVariants = {
  initial: { pathLength: 0 },
  inView: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// Variant for fill fade-in animation
const fillOpacityVariants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: {
      delay: 2, // start fill animation after stroke animation completes
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function AnimatedPolygonLogo() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      id="svg126"
      version="1.1"
      viewBox="-35.3175 -50 306.085 300"
      className="cursor-pointer"
    >
      <defs>
        <style>{`.cls-1{fill:#0061ff}`}</style>
      </defs>

      {/* Polygon 1 */}
      <motion.path
        d="M58.86 75l58.87-37.5L58.86 0 0 37.5z"
        stroke="#0061ff"
        strokeWidth="1"
        fill="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={pathStrokeVariants}
      />
      <motion.path
        d="M58.86 75l58.87-37.5L58.86 0 0 37.5z"
        fill="#0061ff"
        stroke="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={fillOpacityVariants}
      />

      {/* Polygon 2 */}
      <motion.path
        d="M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z"
        stroke="#0061ff"
        strokeWidth="1"
        fill="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={pathStrokeVariants}
      />
      <motion.path
        d="M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z"
        fill="#0061ff"
        stroke="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={fillOpacityVariants}
      />

      {/* Polygon 3 */}
      <motion.path
        d="M117.73 112.5L58.86 75 0 112.5 58.86 150z"
        stroke="#0061ff"
        strokeWidth="1"
        fill="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={pathStrokeVariants}
      />
      <motion.path
        d="M117.73 112.5L58.86 75 0 112.5 58.86 150z"
        fill="#0061ff"
        stroke="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={fillOpacityVariants}
      />

      {/* Polygon 4 */}
      <motion.path
        d="M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z"
        stroke="#0061ff"
        strokeWidth="1"
        fill="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={pathStrokeVariants}
      />
      <motion.path
        d="M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z"
        fill="#0061ff"
        stroke="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={fillOpacityVariants}
      />

      {/* Polygon 5 */}
      <motion.path
        d="M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z"
        stroke="#0061ff"
        strokeWidth="1"
        fill="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={pathStrokeVariants}
      />
      <motion.path
        d="M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z"
        fill="#0061ff"
        stroke="none"
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        variants={fillOpacityVariants}
      />
    </motion.svg>
  );
}
