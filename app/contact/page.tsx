import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, EmailIcon, LocationIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Me RWABUKUMBA Moussa — commercial litigator and notary in Kigali, Rwanda. Phone, email and contact form available.",
};

const contactDetails = [
  {
    icon: "phone",
    label: "Phone",
    value: "+250 788 673 699",
    href: "tel:+250788673699",
  },
  {
    icon: "email",
    label: "Email",
    value: "moussa@rwabukumbalaw.rw",
    href: "mailto:moussa@rwabukumbalaw.rw",
  },
  {
    icon: "location",
    label: "Office",
    value: "Kigali, Rwanda",
    href: null,
  },
];

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "phone") return <PhoneIcon className="w-5 h-5" />;
  if (icon === "email") return <EmailIcon className="w-5 h-5" />;
  return <LocationIcon className="w-5 h-5" />;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title="Get in Touch"
        subtitle="Available for a confidential consultation in English, French or Kinyarwanda."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* Contact info */}
          <aside className="flex flex-col gap-8">
            <div>
              <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Contact Details</p>
              <h2 className="font-serif text-2xl text-navy font-bold mb-6">
                Me RWABUKUMBA Moussa
              </h2>
              <p className="text-slate-body text-sm leading-relaxed mb-6">
                Africa International Law Firm<br />
                Kigali, Rwanda
              </p>

              <ul className="flex flex-col gap-5">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <span className="text-navy">
                        <ContactIcon icon={icon} />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-muted uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="inline-block py-1 text-navy font-medium hover:text-gold-dark transition-colors text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-navy rounded-lg p-6">
              <p className="text-gold text-xs font-sans tracking-widest uppercase mb-2">Languages</p>
              <p className="text-white font-serif text-xl font-bold">
                English · French · Kinyarwanda
              </p>
              <p className="text-white/60 text-sm mt-2">
                All consultations and correspondence can be conducted in your preferred language.
              </p>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-100 aspect-video bg-offwhite">
              <iframe
                title="Africa International Law Firm — Kigali, Rwanda"
                src="https://www.google.com/maps?q=Africa+International+Law+Firm,+Kigali,+Rwanda&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Send a message</p>
            <h2 className="font-serif text-2xl text-navy font-bold mb-2">
              Describe your matter
            </h2>
            <p className="text-slate-body text-sm mb-8 leading-relaxed">
              Complete the form below and Me RWABUKUMBA Moussa will respond promptly. All enquiries are treated in strict confidence.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
