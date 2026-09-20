import { EMAIL_ADDRESS } from "@/lib/emails";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/connlagaffney77/" },
  { label: "Facebook", href: "https://www.facebook.com/connla.gaffney.3/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
        <nav aria-label="Social profiles" className="flex gap-7">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-charcoal underline decoration-[1.5px] underline-offset-[4px] transition-[color,text-decoration-thickness,text-underline-offset] duration-200 hover:text-cobalt hover:decoration-[3px] hover:underline-offset-[6px]"
            >
              {social.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-small text-charcoal-soft sm:text-right">
          <p>Connla Gaffney · Connla Gaffney Copywriting</p>
          <p>10 Ballyrussell Road, Warrenpoint, BT34 3QE</p>
          <p>{EMAIL_ADDRESS}</p>
          <p>
            I contact business addresses on a legitimate-interest basis under UK GDPR, and every
            email carries a working opt-out.
          </p>
        </div>
      </div>
    </footer>
  );
}
