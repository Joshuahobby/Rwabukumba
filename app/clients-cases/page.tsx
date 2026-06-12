import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Clients & Cases",
  description:
    "Me RWABUKUMBA Moussa serves companies, banks, foreign investors and private clients. Listed by the U.S. Embassy in Rwanda among attorneys in Kigali.",
};

const clientCategories = [
  {
    title: "Local & Regional Companies",
    description:
      "SMEs and larger corporations facing commercial and contractual disputes — supplier issues, shareholder conflicts, unpaid invoices and breach of contract claims.",
  },
  {
    title: "Banks & Financial Institutions",
    description:
      "Banks, microfinance institutions and insurance companies requiring representation in disputes, recovery actions and enforcement of security interests under Rwandan law.",
  },
  {
    title: "Foreign Investors & Companies",
    description:
      "International companies and investors entering Rwanda needing legal structuring, contracts and dispute support. Full service from company formation to ongoing commercial advisory.",
  },
  {
    title: "Private Clients",
    description:
      "Professionals and business owners with personal legal needs — wills, property matters, adoption, custody, succession and civil disputes handled with discretion.",
  },
];

const trustSignals = [
  {
    label: "U.S. Embassy Listed Attorney",
    detail:
      "Listed by the U.S. Embassy in Rwanda among attorneys in Kigali, with recognised practice areas including commercial law, foreign investments, patents, taxes, labour, adoption, child custody, insurance and auto accidents.",
  },
  {
    label: "12+ Years of Practice",
    detail:
      "Over twelve years of continuous practice in commercial litigation and business-related disputes before Rwandan courts at all levels.",
  },
  {
    label: "Active in Commercial Courts",
    detail:
      "Appears in Rwandan judiciary cause lists as counsel in economic and commercial matters, including cases before the Nyarugenge TGI economic chamber.",
  },
  {
    label: "Trilingual Service",
    detail:
      "Full legal services in English, French and Kinyarwanda, enabling effective representation for both local and international clients.",
  },
];

export default function ClientsCasesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Clients & Cases"
        title="Clients & Cases"
        subtitle="Serving companies, financial institutions, investors and private clients before Rwandan courts and in alternative dispute resolution."
      />

      {/* Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Who we serve</p>
          <h2 className="font-serif text-3xl text-navy font-bold mb-10">
            Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clientCategories.map(({ title, description }) => (
              <div
                key={title}
                className="bg-offwhite border border-gray-100 rounded-lg p-7"
              >
                <h3 className="font-serif text-xl text-navy font-semibold mb-3">{title}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20 bg-navy">
        <div className="max-w-site mx-auto px-6">
          <p className="text-gold text-xs font-sans tracking-widest uppercase mb-3">Trust &amp; Recognition</p>
          <h2 className="font-serif text-3xl text-white font-bold mb-10">
            Why clients trust Me RWABUKUMBA Moussa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustSignals.map(({ label, detail }) => (
              <div
                key={label}
                className="bg-navy-light/30 border border-white/10 rounded-lg p-7"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <h3 className="font-serif text-lg text-gold font-semibold">{label}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-8">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality note */}
      <section className="py-16 bg-gold/5 border-y border-gold/20">
        <div className="max-w-site mx-auto px-6 max-w-2xl text-center">
          <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">Confidentiality</p>
          <h2 className="font-serif text-2xl text-navy font-bold mb-4">
            Client confidentiality is paramount
          </h2>
          <p className="text-slate-body leading-relaxed">
            Specific case details are not disclosed. All client matters are handled with strict professional confidentiality in accordance with the professional rules governing attorneys in Rwanda. Enquiries are treated in confidence from the first contact.
          </p>
        </div>
      </section>

      <ContactCTA
        heading="Discuss your situation"
        body="Contact Me RWABUKUMBA Moussa for a confidential first consultation. Available in English, French and Kinyarwanda."
      />
    </>
  );
}
