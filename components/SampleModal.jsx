"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "@phosphor-icons/react";

export default function SampleModal({ email, onClose }) {
  const reduce = useReducedMotion();
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!email) return;

    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [email, onClose]);

  return (
    <AnimatePresence>
      {email && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.16, ease: "easeOut" } }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="fixed inset-0 bg-charcoal/25 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-modal-subject"
            className="glass-strong relative my-auto w-full max-w-[720px] rounded-3xl"
            initial={reduce ? { opacity: 0, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0.14 } }
                : {
                    opacity: 0,
                    scale: 0.97,
                    y: 10,
                    // Exit stays fast and duration-based: the spring that makes
                    // the entrance feel weighted would drag on the way out.
                    transition: { duration: 0.18, ease: "easeOut" },
                  }
            }
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 260, damping: 26, mass: 0.9 }
            }
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-charcoal/10 bg-white/80 p-6 backdrop-blur-xl sm:p-8">
              <div>
                <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {email.tag} · {email.format}
                </p>
                <h3
                  id="sample-modal-subject"
                  className="mt-2 font-display text-display-sm font-extrabold leading-[1.15] tracking-[-0.025em] text-charcoal"
                >
                  {email.subject}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close email"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-charcoal/12 bg-white/70 text-charcoal transition-[transform,background-color,border-color] duration-200 hover:border-cobalt/40 hover:bg-cobalt-soft active:scale-95"
              >
                <X size={15} weight="bold" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="max-w-[62ch] space-y-4 text-base leading-[1.7] text-charcoal">
                {email.body.map((paragraph, index) =>
                  typeof paragraph === "string" ? (
                    <p key={index}>{paragraph}</p>
                  ) : (
                    <p key={index}>
                      <span className="facsimile-link">{paragraph.link}</span>
                    </p>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
