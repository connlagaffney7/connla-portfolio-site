"use client";

import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "John Veylon",
    role: "Worked with John in the CMB community",
    src: "/testimonials/videos/john-veylon.mp4",
  },
  {
    name: "Devon Prochaska",
    role: "Worked with Devon in the CMB community",
    src: "/testimonials/videos/devon-prochaska.mp4",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-36" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="max-w-[22ch] font-display text-display font-extrabold leading-[1.04] tracking-[-0.035em] text-charcoal"
          >
            Peer credibility.
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            Devon and John have both worked with me. They speak to what I&rsquo;m like to work
            with: reliability, communication, skill.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.src} index={index} amount={0.2}>
              <div className="glass flex h-full flex-col gap-4 rounded-2xl p-7 md:rounded-3xl md:p-8">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-charcoal/5">
                  <video
                    className="h-full w-full bg-charcoal/5 object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    src={testimonial.src}
                  >
                    Your browser does not support embedded video.
                  </video>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-label uppercase tracking-[0.16em] text-charcoal-soft">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
