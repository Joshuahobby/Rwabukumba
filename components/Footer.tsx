import Link from "next/link";
import { PhoneIcon, EmailIcon, LocationIcon } from "./Icons";

const practiceLinks = [
  { href: "/practice-areas/commercial-litigation", label: "Commercial Litigation" },
  { href: "/practice-areas/banking-financial-law", label: "Banking & Finance" },
  { href: "/practice-areas/foreign-investment", label: "Foreign Investment" },
  { href: "/practice-areas/tax-regulatory", label: "Tax & Regulatory" },
  { href: "/practice-areas/arbitration-mediation", label: "Arbitration & Mediation" },
  { href: "/notary", label: "Notary Services" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="max-w-site mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex flex-col leading-tight mb-4 group">
            <span className="text-white font-serif text-lg font-bold group-hover:text-gold transition-colors">
              Me RWABUKUMBA Moussa
            </span>
            <span className="text-gold/70 text-xs tracking-widest uppercase font-sans mt-0.5">
              Attorney · Notary · Kigali
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60 mt-4">
            Commercial litigator, corporate adviser and notary serving businesses, banks and investors in Kigali, Rwanda.
          </p>
          <p className="text-xs text-white/40 mt-4">
            Practising in English, French and Kinyarwanda.
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="text-white font-serif text-sm font-semibold mb-5 uppercase tracking-wider">
            Practice Areas
          </h4>
          <ul className="flex flex-col gap-2.5">
            {practiceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-serif text-sm font-semibold mb-5 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { href: "/about", label: "About Me" },
              { href: "/notary", label: "Notary Services" },
              { href: "/clients-cases", label: "Clients & Cases" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-serif text-sm font-semibold mb-5 uppercase tracking-wider">
            Contact
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="tel:+250788673699"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors group"
              >
                <PhoneIcon className="w-4 h-4 mt-0.5 text-gold/60 group-hover:text-gold shrink-0" />
                +250 788 673 699
              </a>
            </li>
            <li>
              <a
                href="mailto:moussa@rwabukumbalaw.rw"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors group"
              >
                <EmailIcon className="w-4 h-4 mt-0.5 text-gold/60 group-hover:text-gold shrink-0" />
                moussa@rwabukumbalaw.rw
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <LocationIcon className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" />
                <span>Kigali, Rwanda</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-site mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Me RWABUKUMBA Moussa. All rights reserved.
          </p>
          <p>
            Africa International Law Firm · Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
