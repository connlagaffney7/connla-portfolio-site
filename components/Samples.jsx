"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import SampleModal from "./SampleModal";
import useHasHover from "@/lib/useHasHover";
import { emails } from "@/lib/emails";

// Asymmetric bento: five items, five cells. Lead cognitive-supplement sample
// takes the wide cell; the rest fall into a three-up row beneath it.
const CELLS = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

const SURFACES = ["glass-cobalt", "glass-strong", "glass", "glass-cream", "glass"];

export default function Samples() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();
  const hasHover = useHasHover();
  const canAnimateHover = hasHover && !reduce;

  return (
    <section id="samples" className="px-6 py-24 md:px-10 md:py-36" aria-labelledby="samples-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="samples-heading"
            className="max-w-[20ch] font-display text-display font-extrabold leading-[1.04] tracking-[-0.035em] text-charcoal"
          >
            Emails I&rsquo;ve written.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            Five from my portfolio, written for supplement and wellness brands. Subject line
            first, exactly as it lands in the inbox. Open one to read it in full.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-min gap-5 md:grid-cols-6 md:gap-6">
          {emails.map((email, index) => (
            <Reveal
              key={email.id}
              index={index}
              amount={0.15}
              className={`${CELLS[index]} min-w-0`}
            >
              <motion.button
                type="button"
                onClick={() => setActive(email)}
                whileHover={canAnimateHover ? { y: -6, scale: 1.012 } : undefined}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className={`${SURFACES[index]} group flex h-full w-full flex-col rounded-2xl p-6 text-left transition-shadow duration-200 ease-out hover:shadow-glass-lift sm:p-7 md:rounded-3xl`}
              >
                <p
                  className={`text-label font-semibold uppercase tracking-[0.16em] ${
                    email.niche ? "text-cobalt" : "text-charcoal-soft"
                  }`}
                >
                  {email.tag} · {email.format}
                </p>

                <h3
                  className={`mt-3 font-display font-extrabold leading-[1.1] tracking-[-0.03em] text-charcoal ${
                    index === 0
                      ? "text-display-lead"
                      : "text-title"
                  }`}
                >
                  {email.subject}
                </h3>

                <p
                  className={`mt-4 leading-relaxed text-charcoal-soft ${
                    index === 0 ? "max-w-[42ch] text-base" : "text-small"
                  }`}
                >
                  {email.teaser}
                </p>

                <span className="mt-auto flex items-center gap-2 pt-7 text-micro font-semibold uppercase tracking-[0.12em] text-cobalt">
                  Read full email
                  <ArrowRight
                    size={14}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                  />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <SampleModal email={active} onClose={() => setActive(null)} />
    </section>
  );
}
