import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Me RWABUKUMBA Moussa — commercial litigator and notary with over 12 years of experience in Kigali, Rwanda. Director at Africa International Law Firm.",
};

const credentials = [
  "Over 12 years of legal practice in Rwanda",
  "Director, Africa International Law Firm",
  "Listed by the U.S. Embassy in Rwanda among attorneys in Kigali",
  "Active in Rwandan commercial and economic court proceedings",
  "Fluent in English, French and Kinyarwanda",
  "Authorised notary under Rwandan law",
];

const practiceHighlights = [
  {
    area: "Commercial & Corporate",
    note: "Contract disputes, shareholder conflicts, debt recovery, corporate governance matters.",
  },
  {
    area: "Banking & Finance",
    note: "Representation of banks in recovery actions, security enforcement and regulatory compliance.",
  },
  {
    area: "Foreign Investment",
    note: "Company formation, contracts and ongoing advisory for foreign investors entering Rwanda.",
  },
  {
    area: "Notary Services",
    note: "Certification of deeds, wills, articles of association and all notarial instruments under Rwandan law.",
  },
  {
    area: "Arbitration & Mediation",
    note: "Representation in KIAC and ad hoc arbitration proceedings as an experienced advocate.",
  },
  {
    area: "Civil & Family",
    note: "Adoption, custody, succession, wills and civil disputes for private clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        title="Me RWABUKUMBA Moussa"
        subtitle="Attorney, Notary and Director at Africa International Law Firm, Kigali, Rwanda."
      />

      {/* Bio section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-offwhite">
              <Image
                src="/moussa.jpg"
                alt="Me RWABUKUMBA Moussa – Commercial Litigator & Notary, Kigali"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-6 bg-navy rounded-lg p-6">
              <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">Languages</p>
              <p className="text-white font-serif text-lg font-bold">English · French · Kinyarwanda</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-2">
            <p className="text-gold text-xs font-sans tracking-widest uppercase mb-3">Biography</p>
            <h2 className="font-serif text-3xl text-navy font-bold mb-6">
              12+ years of commercial legal practice in Rwanda
            </h2>
            <div className="prose prose-slate max-w-none text-slate-body leading-relaxed space-y-5">
              <p>
                Me RWABUKUMBA Moussa is a Rwandan attorney and director at Africa International Law Firm, with over twelve years of experience in commercial litigation, corporate and banking matters, tax, insurance and civil disputes.
              </p>
              <p>
                He advises and represents companies, financial institutions, investors and private clients before Rwandan courts and in arbitration and mediation proceedings, and also provides a full range of notary services under Rwandan law.
              </p>
              <p>
                His practice spans the full commercial spectrum — from contract disputes and shareholder conflicts to debt recovery, regulatory compliance and foreign investment structuring. He is equally at home advising multinational corporations entering Rwanda as he is representing private clients on family and succession matters.
              </p>
              <p>
                Me RWABUKUMBA Moussa operates as a single point of contact, combining litigation strength, commercial advisory and notary services, which means clients receive consistent, joined-up advice across all aspects of their legal needs.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10">
              <h3 className="font-serif text-xl text-navy font-bold mb-5">
                Credentials &amp; Recognition
              </h3>
              <ul className="flex flex-col gap-3">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-body">
                    <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice highlights */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-site mx-auto px-6">
          <p className="text-gold text-xs font-sans tracking-widest uppercase mb-3">Practice</p>
          <h2 className="font-serif text-3xl text-navy font-bold mb-10">
            Areas of expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceHighlights.map(({ area, note }) => (
              <div key={area} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-serif text-lg text-navy font-semibold mb-2">{area}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA heading="Work with Me RWABUKUMBA Moussa" />
    </>
  );
}
