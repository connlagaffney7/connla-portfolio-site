"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Diagnose",
    body: "A seed-list test shows where your emails are landing, and why they land there.",
  },
  {
    number: "02",
    title: "Fix",
    body: "Clean the list, fix SPF, DKIM and DMARC, rework the unsubscribe flow, and warm the domain.",
  },
  {
    number: "03",
    title: "Confirm placement",
    body: "Re-test until it holds, with screenshots as proof.",
  },
];

const SURFACES = ["glass-cobalt", "glass", "glass-cream"];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24 md:px-10 md:py-36"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="how-it-works-heading"
            className="max-w-[22ch] font-display text-display font-extrabold leading-[1.04] tracking-[-0.035em] text-charcoal"
          >
            How it works.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            Three steps. The second half of the fee is only invoiced once the third one is done.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} index={index} amount={0.2}>
              <div
                className={`${SURFACES[index]} flex h-full flex-col rounded-2xl p-7 md:rounded-3xl md:p-8`}
              >
                <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
                  Step {step.number}
                </p>
                <h3 className="mt-3 font-display text-title font-extrabold leading-[1.1] tracking-[-0.03em] text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-4 text-small leading-relaxed text-charcoal-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
