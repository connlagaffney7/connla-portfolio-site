"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import useHasHover from "@/lib/useHasHover";
import { EMAIL_ADDRESS } from "@/lib/emails";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  const canAnimateHover = useHasHover() && !reduce;

  return (
    <section className="px-6 pb-24 md:px-10 md:pb-36" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-3xl px-7 py-14 sm:px-12 sm:py-16 md:rounded-[2rem] md:px-16 md:py-20">
            <h2
              id="cta-heading"
              className="max-w-[26ch] font-display text-display font-extrabold leading-[1.03] tracking-[-0.035em] text-charcoal"
            >
              One spot left <span className="text-cobalt">this month.</span>
            </h2>

            <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-charcoal-soft">
              If your cognitive supplement brand is stuck under $10k/month in email revenue, send me
              an email and let&rsquo;s talk about the system that gets you past it.
            </p>

            <motion.a
              href={`mailto:${EMAIL_ADDRESS}`}
              whileHover={canAnimateHover ? { scale: 1.03, y: -2 } : undefined}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="group mt-11 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cobalt px-8 py-4.5 font-display text-small font-bold tracking-[-0.01em] text-white shadow-cobalt transition-[background-color,box-shadow] duration-200 ease-out hover:bg-cobalt-deep hover:shadow-cobalt-lift sm:w-auto sm:text-base"
            >
              Email {EMAIL_ADDRESS}
              <ArrowRight
                size={16}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
