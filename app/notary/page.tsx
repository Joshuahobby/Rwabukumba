import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Notary Services",
  description:
    "Full notary services under Rwandan law by Me RWABUKUMBA Moussa. Certification of deeds, notarial wills, articles of association and all notarial instruments.",
};

const services = [
  {
    title: "Certification & Authentication of Deeds and Signatures",
    description:
      "Formal certification and authentication of documents, signatures and instruments required under Rwandan law, ensuring legal validity and enforceability.",
  },
  {
    title: "Certification of Document Authenticity and Conformity",
    description:
      "Official certification that copies and translations of documents are true, accurate and conform to the originals, as required for legal, administrative and commercial purposes in Rwanda and abroad.",
  },
  {
    title: "Notarial Wills",
    description:
      "Preparation and authentication of notarial wills for the disposition of both movable and immovable property in accordance with Rwandan succession law.",
  },
  {
    title: "Notarisation of Articles of Association and Company Agreements",
    description:
      "Notarisation of articles of association, shareholder agreements, partnership deeds and other corporate instruments required for company formation and corporate governance in Rwanda.",
  },
  {
    title: "Other Notarial Deeds Required Under Rwandan Law",
    description:
      "Preparation and authentication of any other notarial instruments required under the laws of Rwanda, including powers of attorney, adoption deeds, land transfer instruments and other civil acts.",
  },
];

const notaryFAQ = [
  {
    q: "Why do I need a notary in Rwanda?",
    a: "Rwandan law requires notarisation for a range of legal transactions, including certain property transfers, company formation documents, wills and powers of attorney. A notarised document carries enhanced legal weight and is recognised by courts, government agencies and foreign authorities.",
  },
  {
    q: "How is a notary different from a regular attorney?",
    a: "A notary is an attorney with special authorisation under Rwandan law to authenticate documents, certify signatures and prepare certain categories of legal instruments that carry official state certification. Me RWABUKUMBA Moussa provides both litigation/advisory services and full notary services.",
  },
  {
    q: "Are notarised documents valid outside Rwanda?",
    a: "Yes. Notarised and apostilled Rwandan documents are generally recognised internationally, subject to any additional requirements of the receiving jurisdiction. We advise on the specific authentication steps needed for cross-border use.",
  },
];

export default function NotaryPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Notary Services"
        title="Notary Services"
        subtitle="Full range of notarial services under Rwandan law, ensuring your documents and instruments have full legal validity."
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Overview</p>
            <h2 className="font-serif text-3xl text-navy font-bold mb-6">
              Authorised notary under Rwandan law
            </h2>
            <p className="text-slate-body leading-relaxed mb-5 text-lg">
              As a notary, Me RWABUKUMBA Moussa certifies and authenticates deeds and signatures, notarises articles of association and agreements, and prepares notarial instruments such as wills and certificates of conformity, ensuring that clients' documents comply with Rwandan legal requirements.
            </p>
            <p className="text-slate-body leading-relaxed">
              Having both litigation and notary capabilities under one roof means that Me RWABUKUMBA Moussa can advise on the legal context of a transaction as well as execute the notarial formalities — a significant advantage for complex commercial and investment transactions.
            </p>
          </div>
          <aside>
            <div className="bg-navy rounded-lg p-6 text-white">
              <h4 className="font-serif text-lg font-bold mb-2">Request notary services</h4>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Contact us to discuss your notarial requirements and arrange an appointment.
              </p>
              <a
                href="/contact"
                className="block bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-3.5 rounded text-center transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="tel:+250788673699"
                className="block mt-3 border border-white/20 hover:border-gold text-white/80 hover:text-gold text-sm px-5 py-3.5 rounded text-center transition-colors"
              >
                +250 788 673 699
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-site mx-auto px-6">
          <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-serif text-3xl text-navy font-bold mb-10">
            Notarial services offered
          </h2>
          <div className="flex flex-col gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-lg p-7 flex gap-6"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-gold font-serif font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-body text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 max-w-3xl">
          <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-serif text-3xl text-navy font-bold mb-10">
            Common questions about notary services
          </h2>
          <div className="flex flex-col gap-8">
            {notaryFAQ.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-8 last:border-0">
                <h3 className="font-serif text-lg text-navy font-semibold mb-3 flex gap-3">
                  <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {q}
                </h3>
                <p className="text-slate-body text-sm leading-relaxed pl-8">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Need notarial services?"
        body="Contact Me RWABUKUMBA Moussa to arrange an appointment and discuss your notarial requirements."
      />
    </>
  );
}
