"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

const cardSpring = { type: "spring", stiffness: 120, damping: 18, mass: 0.9 };

function useParallax(pointer, range, reduce) {
  const raw = useTransform(pointer, [-0.5, 0.5], reduce ? [0, 0] : range);
  return useSpring(raw, { stiffness: 90, damping: 20, mass: 0.6 });
}

/**
 * Layered glass cards holding real portfolio content: subject lines Connla has
 * actually written. Nothing here is invented.
 *
 * The back card carries deliberate bottom padding so the front card overlaps
 * empty space rather than clipping a subject line mid-word.
 */
export default function FloatingStack({ pointerX, pointerY }) {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const [onScreen, setOnScreen] = useState(true);

  // The drift loops are infinite; running them while the hero is scrolled away
  // burns battery for motion nobody can see.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const backX = useParallax(pointerX, [18, -18], reduce);
  const backY = useParallax(pointerY, [12, -12], reduce);
  const frontX = useParallax(pointerX, [-26, 26], reduce);
  const frontY = useParallax(pointerY, [-18, 18], reduce);

  const float = (duration) =>
    reduce || !onScreen
      ? { y: 0 }
      : {
          y: [0, -10, 0],
          transition: { duration, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div ref={rootRef} className="relative h-[440px] w-full sm:h-[470px] lg:h-[520px]">
      {/* Back card: the portfolio index */}
      <motion.div
        style={{ x: backX, y: backY }}
        initial={reduce ? { opacity: 1, y: 0, rotate: -2.5 } : { opacity: 0, y: 44, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -2.5 }}
        transition={{ ...cardSpring, delay: 0.45 }}
        className="absolute left-0 top-16 w-[88%] max-w-[380px]"
      >
        <motion.div
          animate={float(7.5)}
          className="glass-strong rounded-2xl p-5 pb-14 sm:p-6 sm:pb-16"
        >
          <p className="text-label font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
            Portfolio
          </p>
          <ul className="mt-4 space-y-3.5">
            <li>
              <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
                Story email
              </p>
              <p className="mt-1 font-display text-small font-bold leading-snug text-charcoal">
                I blanked in front of my biggest client
              </p>
            </li>
            <li className="hidden border-t border-charcoal/8 pt-3.5 sm:block">
              <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
                Launch
              </p>
              <p className="mt-1 font-display text-small font-bold leading-snug text-charcoal">
                We just launched the pre-workout other brands don&rsquo;t want you to see
              </p>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Front card: a single email, as it lands */}
      <motion.div
        style={{ x: frontX, y: frontY }}
        initial={reduce ? { opacity: 1, y: 0, rotate: 2.5 } : { opacity: 0, y: 56, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 2.5 }}
        transition={{ ...cardSpring, delay: 0.6 }}
        className="absolute bottom-0 right-0 w-[86%] max-w-[360px]"
      >
        <motion.div animate={float(6)} className="glass-cobalt rounded-2xl p-5 sm:p-6">
          <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
            Cognitive supplement · Get the click
          </p>
          <p className="mt-2.5 font-display text-title font-extrabold leading-[1.15] tracking-[-0.02em] text-charcoal">
            Your 3pm crash isn&rsquo;t caffeine&rsquo;s fault
          </p>
          <p className="mt-3 text-small leading-relaxed text-charcoal-soft">
            Let me guess, you&rsquo;re drinking coffee or something else early in the morning.
          </p>
          <p className="mt-2 text-small leading-relaxed text-charcoal-soft">
            3pm rolls around and BOOM, you feel like you are ready for bed.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
