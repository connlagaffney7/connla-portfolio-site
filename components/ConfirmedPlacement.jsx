"use client";

import Reveal from "./Reveal";

// The bar, per provider, exactly as the agreement defines it.
const PROVIDERS = [
  { name: "Gmail", lands: "Primary tab", excludes: "Not Promotions, Updates or Spam." },
  { name: "Outlook", lands: "Focused inbox", excludes: "Not Other." },
  { name: "Yahoo", lands: "Inbox", excludes: "Not Spam." },
];

export default function ConfirmedPlacement() {
  return (
    <section
      id="confirmed"
      className="px-6 py-24 md:px-10 md:py-36"
      aria-labelledby="confirmed-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="confirmed-heading"
            className="max-w-[22ch] font-display text-display font-extrabold leading-[1.04] tracking-[-0.035em] text-charcoal"
          >
            What &ldquo;confirmed&rdquo; means.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            Verified on 3 separate sends across 3 separate days. All three providers have to hit
            their bar, and you get the screenshots.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {PROVIDERS.map((provider, index) => (
            <Reveal key={provider.name} index={index} amount={0.2}>
              <div className="glass flex h-full flex-col rounded-2xl p-7 md:rounded-3xl md:p-8">
                <p className="text-label font-semibold uppercase tracking-[0.16em] text-charcoal-soft">
                  {provider.name}
                </p>
                <h3 className="mt-3 font-display text-title font-extrabold leading-[1.1] tracking-[-0.03em] text-charcoal">
                  {provider.lands}
                </h3>
                <p className="mt-4 text-small leading-relaxed text-charcoal-soft">
                  {provider.excludes}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
