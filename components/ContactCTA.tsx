import Link from "next/link";
import { PhoneIcon } from "./Icons";

interface ContactCTAProps {
  heading?: string;
  body?: string;
}

export default function ContactCTA({
  heading = "Ready to discuss your matter?",
  body = "Contact Me RWABUKUMBA Moussa for a confidential consultation. Available in English, French and Kinyarwanda.",
}: ContactCTAProps) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-site mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
          {heading}
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded text-sm transition-colors"
          >
            Send a Message
          </Link>
          <a
            href="tel:+250788673699"
            className="flex items-center justify-center gap-2 border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded text-sm transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
