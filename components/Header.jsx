"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/8 bg-cream/70 backdrop-blur-xl backdrop-saturate-150"
      initial={reduce ? { y: 0 } : { y: -64 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.7, bounce: 0, delay: 0.05 }}
    >
      <div className="mx-auto flex max-w-[1200px] items-baseline justify-between gap-4 px-6 py-4 md:px-10">
        <span className="font-display text-small font-extrabold uppercase tracking-[0.06em] text-charcoal">
          Connla Gaffney
        </span>
        <span className="hidden text-label font-semibold uppercase tracking-[0.16em] text-charcoal-soft sm:block">
          Email copywriting · List management
        </span>
      </div>
    </motion.header>
  );
}
