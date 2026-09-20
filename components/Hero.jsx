"use client";

import { useMemo } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import FloatingStack from "./FloatingStack";
import { CALENDLY_URL } from "@/lib/emails";

const HEADLINE =
  "I help supplement and wellness brands whose emails land in spam or Promotions get seen in the inbox, or they don't pay the second half.";
const ACCENT_WORD = "spam";
const WORDS = HEADLINE.split(" ");

export default function Hero() {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // Variants stay defined in both cases; only the values change. Swapping
  // variants to undefined would leave framer's inline opacity:0 behind.
  const { container, word, block } = useMemo(() => {
    if (reduce) {
      const still = { opacity: 1, y: 0, filter: "blur(0px)" };
      return {
        container: { hidden: {}, show: { transition: { staggerChildren: 0 } } },
        word: { hidden: still, show: { ...still, transition: { duration: 0 } } },
        block: {
          hidden: { opacity: 1, y: 0 },
          show: { opacity: 1, y: 0, transition: { duration: 0 } },
        },
      };
    }
    return {
      container: {
        hidden: {},
        show: { transition: { staggerChildren: 0.028, delayChildren: 0.12 } },
      },
      word: {
        // 4px blur, not 6: framer animates `filter` on the main thread, and this
        // runs across every word of the headline at once.
        hidden: { opacity: 0, y: "0.5em", filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", duration: 0.65, bounce: 0.08 },
        },
      },
      block: {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 0.8, bounce: 0.1 },
        },
      },
    };
  }, [reduce]);

  const handlePointerMove = (event) => {
    if (reduce || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative flex items-center px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32 lg:min-h-[100dvh]"
      aria-labelledby="bio-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={block}
            className="text-label font-semibold uppercase tracking-[0.18em] text-cobalt"
          >
            For supplement &amp; wellness DTC brands
          </motion.p>

          <h1 id="bio-heading" className="mt-6">
            <motion.span
              variants={block}
              className="block font-display text-display-sm font-bold tracking-[-0.01em] text-charcoal-soft"
            >
              Hey I&rsquo;m Connla,
            </motion.span>
            <span className="mt-2 block font-display text-display-xl font-extrabold leading-[1.06] tracking-[-0.035em] text-charcoal">
              {WORDS.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={word}
                  className={`inline-block whitespace-pre ${w === ACCENT_WORD ? "text-cobalt" : ""}`}
                >
                  {w}
                  {i < WORDS.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={block}
            className="mt-7 max-w-[46ch] text-base leading-relaxed text-charcoal-soft"
          >
            I run Connla Gaffney Copywriting around one specific problem: supplement and wellness
            brands whose emails aren&rsquo;t showing up where they should. My approach is diagnose,
            fix, confirm &mdash; find exactly why you&rsquo;re landing in spam or Promotions, fix
            it, then prove it&rsquo;s fixed before you pay the second half. If you&rsquo;re not sure
            your subscribers are actually seeing what you send them, that&rsquo;s the first thing I
            look at.
          </motion.p>

          <motion.div variants={block} className="glass mt-8 max-w-[52ch] rounded-2xl p-5 sm:p-6">
            <p className="text-base leading-relaxed text-charcoal">
              A one-off fix, £1,500 in two parts: the second part is only invoiced once your
              emails land in the inbox.{" "}
              <a
                href={CALENDLY_URL}
                className="font-semibold text-cobalt underline decoration-2 underline-offset-[3px] transition-[text-decoration-thickness,text-underline-offset] duration-200 hover:decoration-[3px] hover:underline-offset-[5px]"
              >
                Book a 15-minute inbox diagnosis
              </a>
              .
            </p>
          </motion.div>
        </motion.div>

        <FloatingStack pointerX={pointerX} pointerY={pointerY} />
      </div>
    </section>
  );
}
