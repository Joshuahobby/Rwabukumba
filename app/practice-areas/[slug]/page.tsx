import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas, getPracticeArea } from "@/lib/practiceAreas";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { PracticeIcon, CheckIcon, ArrowRightIcon } from "@/components/Icons";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getPracticeArea(params.slug);
  if (!area) return {};
  return {
    title: area.title,
    description: `${area.excerpt} Me RWABUKUMBA Moussa, commercial litigator in Kigali, Rwanda.`,
  };
}

export default function PracticeAreaPage({ params }: Props) {
  const area = getPracticeArea(params.slug);
  if (!area) notFound();

  const related = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        breadcrumb={`Practice Areas / ${area.shortTitle}`}
        title={area.title}
        subtitle={area.excerpt}
      />

      {/* Main content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                <PracticeIcon iconKey={area.iconKey} className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-gold-dark text-xs font-sans tracking-widest uppercase">Practice Area</p>
                <h2 className="font-serif text-2xl text-navy font-bold">{area.shortTitle}</h2>
              </div>
            </div>

            <p className="text-slate-body leading-relaxed text-lg mb-10">
              {area.overview}
            </p>

            <h3 className="font-serif text-xl text-navy font-bold mb-5">
              Services in this area
            </h3>
            <ul className="flex flex-col gap-3 mb-10">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-slate-body">
                  <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="bg-navy/5 border border-navy/10 rounded-lg p-6">
              <h4 className="font-serif text-lg text-navy font-semibold mb-2">
                Who this serves
              </h4>
              <p className="text-slate-body text-sm leading-relaxed">{area.clientTypes}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Contact card */}
            <div className="bg-navy rounded-lg p-6 text-white">
              <h4 className="font-serif text-lg font-bold mb-2">Discuss your matter</h4>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Contact Me RWABUKUMBA Moussa for a confidential consultation.
              </p>
              <Link
                href="/contact"
                className="block bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-3.5 rounded text-center transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+250788673699"
                className="block mt-3 border border-white/20 hover:border-gold text-white/80 hover:text-gold text-sm px-5 py-3.5 rounded text-center transition-colors"
              >
                +250 788 673 699
              </a>
            </div>

            {/* Related areas */}
            <div className="bg-offwhite rounded-lg p-6">
              <h4 className="font-serif text-base text-navy font-semibold mb-4">
                Related Practice Areas
              </h4>
              <ul className="flex flex-col gap-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/practice-areas/${a.slug}`}
                      className="flex items-center justify-between gap-2 text-sm text-slate-body hover:text-navy group transition-colors"
                    >
                      <span>{a.shortTitle}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/practice-areas"
                className="block mt-4 text-xs text-gold-dark font-semibold hover:underline"
              >
                All Practice Areas →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
