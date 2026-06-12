import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/lib/practiceAreas";
import { PracticeIcon, ArrowRightIcon, CheckIcon } from "@/components/Icons";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Me RWABUKUMBA Moussa – Commercial Litigator & Notary | Kigali, Rwanda",
  description:
    "Trusted commercial litigator and notary in Kigali, Rwanda. Over 12 years representing businesses, banks and investors before Rwandan courts.",
};

const featuredAreas = practiceAreas.slice(0, 6);

const trustStats = [
  { value: "12+", label: "Years of Practice" },
  { value: "US Embassy", label: "Listed Attorney" },
  { value: "EN · FR · RW", label: "Three Languages" },
  { value: "Kigali", label: "Rwanda" },
];

const clientTypes = [
  "Local and regional companies facing commercial disputes",
  "Banks and financial institutions requiring litigation support",
  "Foreign investors entering the Rwandan market",
  "Private clients needing civil, family or notary services",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

        <div className="relative max-w-site mx-auto px-6 py-24 md:py-32 lg:py-40">
          <p className="text-gold text-xs font-sans tracking-widest uppercase mb-4">
            Africa International Law Firm · Kigali, Rwanda
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl text-balance">
            Trusted Commercial Litigator in Kigali
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
            Over 12 years representing businesses, banks and investors before Rwandan courts. Commercial litigation, corporate advisory and full notary services under Rwandan law.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded text-sm transition-colors text-center"
            >
              Discuss Your Case
            </Link>
            <Link
              href="/practice-areas"
              className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded text-sm transition-colors text-center"
            >
              Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-dark border-t border-white/5">
        <div className="max-w-site mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {trustStats.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p className="font-serif text-2xl md:text-3xl text-gold font-bold">{value}</p>
              <p className="text-white/50 text-xs font-sans mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas overview */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-12">
            <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">
              Areas of Practice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold">
              How I can help
            </h2>
            <p className="mt-3 text-slate-body max-w-xl">
              A comprehensive practice covering the full range of commercial, corporate and civil matters before Rwandan courts and in alternative dispute resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-white border border-gray-100 rounded-lg p-7 hover:border-gold/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-navy/5 group-hover:bg-navy flex items-center justify-center mb-5 transition-colors">
                  <PracticeIcon
                    iconKey={area.iconKey}
                    className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  />
                </div>
                <h3 className="font-serif text-lg text-navy font-semibold mb-2 group-hover:text-navy-light transition-colors">
                  {area.shortTitle}
                </h3>
                <p className="text-slate-body text-sm leading-relaxed line-clamp-3">
                  {area.excerpt}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-gold-dark text-xs font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 border border-navy/20 hover:border-navy text-navy font-semibold text-sm px-8 py-3.5 rounded transition-colors"
            >
              All Practice Areas <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-6">
              Single point of contact for litigation, advisory and notary work
            </h2>
            <p className="text-slate-body leading-relaxed mb-6">
              Me RWABUKUMBA Moussa is a Rwandan attorney and director at Africa International Law Firm, with over twelve years of experience in commercial litigation, corporate and banking matters, tax, insurance and civil disputes.
            </p>
            <p className="text-slate-body leading-relaxed mb-8">
              He advises and represents companies, financial institutions, investors and private clients before Rwandan courts and in arbitration and mediation proceedings, and provides a full range of notary services under Rwandan law.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {clientTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-body">
                  <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold text-sm px-8 py-4 rounded transition-colors"
            >
              More About Me <ArrowRightIcon />
            </Link>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-offwhite">
              <Image
                src="/moussa.jpg"
                alt="Me RWABUKUMBA Moussa – Commercial Litigator, Kigali"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            {/* Gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* Notary callout */}
      <section className="py-16 bg-gold/5 border-y border-gold/20">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-2">
              Notary Services
            </p>
            <h3 className="font-serif text-2xl text-navy font-bold">
              Full notary services under Rwandan law
            </h3>
            <p className="mt-2 text-slate-body text-sm max-w-xl">
              Certification of deeds, authentication of signatures, notarial wills, articles of association and all notarial instruments required under Rwandan law.
            </p>
          </div>
          <Link
            href="/notary"
            className="shrink-0 bg-navy hover:bg-navy-dark text-white font-semibold text-sm px-8 py-4 rounded transition-colors"
          >
            Notary Services
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
