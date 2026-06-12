import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { practiceAreas } from "@/lib/practiceAreas";
import { PracticeIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Commercial litigation, banking, tax, foreign investment, IP, labour, family law and arbitration. Full-service legal practice by Me RWABUKUMBA Moussa in Kigali, Rwanda.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Practice Areas"
        title="Areas of Practice"
        subtitle="A comprehensive practice covering commercial, corporate, banking, regulatory and civil matters — with full notary services under Rwandan law."
      />

      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-white border border-gray-100 rounded-lg p-7 hover:border-gold/40 hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-navy flex items-center justify-center mb-5 transition-colors">
                  <PracticeIcon
                    iconKey={area.iconKey}
                    className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  />
                </div>
                <h2 className="font-serif text-xl text-navy font-semibold mb-3 group-hover:text-navy-light transition-colors">
                  {area.title}
                </h2>
                <p className="text-slate-body text-sm leading-relaxed flex-1">
                  {area.excerpt}
                </p>
                <span className="mt-5 flex items-center gap-1.5 text-gold text-xs font-semibold group-hover:gap-3 transition-all">
                  View details <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Not sure which area applies?"
        body="Contact Me RWABUKUMBA Moussa to discuss your situation. He will advise on the right approach and the relevant areas of Rwandan law."
      />
    </>
  );
}
