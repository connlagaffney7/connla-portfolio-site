"use client";

import Reveal from "./Reveal";

// Deliberately empty. Real quotes replace these; nothing here is fabricated.
const SLOTS = [
  {
    label: "Testimonial coming soon",
    copy: "I'm collecting results from current client work. The first real quote, with real numbers, goes here.",
    wide: true,
  },
  {
    label: "Testimonial coming soon",
    copy: "Reserved for the next cognitive supplement brand I work with.",
    wide: false,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-36" aria-labelledby="results-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="results-heading"
            className="max-w-[22ch] font-display text-display font-extrabold leading-[1.04] tracking-[-0.035em] text-charcoal"
          >
            Client results.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            This section holds real client outcomes only. I&rsquo;d rather show you an honest empty
            space than an invented quote.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-5 md:gap-6">
          {SLOTS.map((slot, index) => (
            <Reveal
              key={slot.copy}
              index={index}
              amount={0.2}
              className={slot.wide ? "md:col-span-3" : "md:col-span-2"}
            >
              <div className="glass-provisional flex h-full min-h-[13rem] flex-col justify-center gap-3 rounded-2xl p-7 md:rounded-3xl md:p-8">
                <p className="text-label font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {slot.label}
                </p>
                <p className="max-w-[38ch] text-base leading-relaxed text-charcoal-soft">
                  {slot.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
