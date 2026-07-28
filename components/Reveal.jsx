"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Fires once, animates transform + opacity only so it
 * can never shift layout. `index` staggers siblings in a group.
 *
 * Reduced motion is expressed through the animated *values*, never by swapping
 * the variants out: framer-motion does not clear inline styles it has already
 * written, so toggling variants off mid-render would strand elements at opacity 0.
 */
export default function Reveal({
  children,
  index = 0,
  y = 30,
  className = "",
  as = "div",
  amount = 0.25,
  delay = 0,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              type: "spring",
              duration: 0.7,
              bounce: 0.1,
              delay: delay + index * 0.06,
            }
      }
    >
      {children}
    </MotionTag>
  );
}
