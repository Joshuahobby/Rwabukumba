export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  iconKey: string;
  overview: string;
  services: string[];
  clientTypes: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-litigation",
    title: "Commercial & Corporate Litigation",
    shortTitle: "Commercial Litigation",
    excerpt:
      "Strategic representation in complex business disputes before Rwandan courts — from contract enforcement to shareholder conflicts.",
    iconKey: "briefcase",
    overview:
      "Me RWABUKUMBA Moussa provides robust representation in commercial and corporate disputes before Rwandan courts at all levels. With over twelve years of litigation experience, he handles the full range of business conflicts with the precision and strategic judgment that complex matters demand.",
    services: [
      "Contract disputes and breach of contract claims",
      "Shareholder and partnership conflicts",
      "Debt recovery and enforcement of judgments",
      "Supplier and distribution disputes",
      "Corporate governance disputes",
      "Enforcement of foreign judgments in Rwanda",
    ],
    clientTypes:
      "Local and regional companies, SMEs, corporations and business owners facing commercial disputes of any size.",
  },
  {
    slug: "banking-financial-law",
    title: "Banking & Financial Law",
    shortTitle: "Banking & Finance",
    excerpt:
      "Representation of banks and financial institutions in disputes, recovery actions and enforcement of security interests.",
    iconKey: "bank",
    overview:
      "Me RWABUKUMBA Moussa has extensive experience advising and representing banks and financial institutions operating in Rwanda. He handles the full spectrum of banking litigation and advisory work, from non-performing loan recovery to security enforcement and regulatory compliance.",
    services: [
      "Non-performing loan recovery and enforcement",
      "Security interest enforcement (mortgages, pledges, charges)",
      "Dispute resolution with borrowers and guarantors",
      "Guaranty and surety disputes",
      "Regulatory compliance advice",
      "Financial institution licensing matters",
    ],
    clientTypes:
      "Banks, microfinance institutions, insurance companies and other financial institutions operating in Rwanda.",
  },
  {
    slug: "tax-regulatory",
    title: "Tax & Regulatory",
    shortTitle: "Tax & Regulatory",
    excerpt:
      "Guidance and representation on Rwandan tax obligations, RRA disputes and sector-specific regulatory matters.",
    iconKey: "document",
    overview:
      "Navigating Rwanda's tax and regulatory environment requires both legal precision and commercial understanding. Me RWABUKUMBA Moussa advises businesses and individuals on tax compliance, tax planning, and disputes with the Rwanda Revenue Authority (RRA), as well as sector-specific regulatory requirements.",
    services: [
      "Tax dispute representation before RRA and courts",
      "Tax compliance advice for businesses",
      "Corporate tax structuring guidance",
      "Regulatory licensing and compliance",
      "Sector-specific regulatory advice",
      "Administrative appeals and objections",
    ],
    clientTypes:
      "Local and foreign companies operating in Rwanda, investors, and individuals facing tax assessments or regulatory issues.",
  },
  {
    slug: "foreign-investment",
    title: "Foreign Investment & Business Entry",
    shortTitle: "Foreign Investment",
    excerpt:
      "End-to-end legal support for foreign companies and investors entering Rwanda — from corporate structuring to operational contracts.",
    iconKey: "globe",
    overview:
      "Rwanda is one of Africa's most business-friendly destinations. Me RWABUKUMBA Moussa provides foreign investors and companies with the legal foundation they need to enter and operate in Rwanda with confidence — handling everything from company formation to ongoing commercial contracts.",
    services: [
      "Company incorporation and structuring",
      "Investment license applications (RDB)",
      "Joint venture and partnership agreements",
      "Commercial and distribution contracts",
      "Real estate acquisition and leasing",
      "Employment contracts and labour law compliance",
      "Ongoing legal advisory for foreign investors",
    ],
    clientTypes:
      "Foreign companies entering Rwanda, multinational corporations, joint venture partners and international investors.",
  },
  {
    slug: "insurance-liability",
    title: "Insurance & Liability",
    shortTitle: "Insurance & Liability",
    excerpt:
      "Representation in insurance disputes, liability claims and coverage matters for individuals and businesses.",
    iconKey: "shield",
    overview:
      "Me RWABUKUMBA Moussa handles insurance and liability matters for both claimants and insurers. His practice covers motor vehicle accidents, property damage claims, professional liability and coverage disputes across the full range of insurance products available in Rwanda.",
    services: [
      "Motor vehicle accident claims and litigation",
      "Property and casualty insurance disputes",
      "Professional indemnity and liability claims",
      "Insurance coverage analysis and disputes",
      "Personal injury claims",
      "Representation before insurers and in court",
    ],
    clientTypes:
      "Insurance companies, businesses with liability exposure, and individuals pursuing insurance claims.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property & Patents",
    shortTitle: "Intellectual Property",
    excerpt:
      "Protection of inventions, trademarks, copyrights and trade secrets under Rwandan law, including registration and enforcement.",
    iconKey: "lightbulb",
    overview:
      "Protecting intellectual assets is increasingly critical for businesses operating in Rwanda and across the region. Me RWABUKUMBA Moussa advises clients on the registration, protection and enforcement of intellectual property rights under Rwandan law and applicable treaties.",
    services: [
      "Patent registration and protection",
      "Trademark registration and enforcement",
      "Copyright advice and enforcement",
      "Trade secret protection",
      "IP licensing agreements",
      "IP infringement litigation",
    ],
    clientTypes:
      "Innovators, technology companies, creative businesses, manufacturers and brands seeking IP protection in Rwanda.",
  },
  {
    slug: "labor-employment",
    title: "Labor & Employment",
    shortTitle: "Labor & Employment",
    excerpt:
      "Advice and representation on employment contracts, workplace disputes, dismissals and compliance with Rwandan labour law.",
    iconKey: "users",
    overview:
      "Rwanda's Labour Code governs the relationship between employers and employees across all sectors. Me RWABUKUMBA Moussa advises employers and employees on their rights and obligations, and represents parties in employment disputes before the courts and labour authorities.",
    services: [
      "Employment contract drafting and review",
      "Wrongful termination and dismissal disputes",
      "Workplace discrimination and harassment matters",
      "Labour law compliance for employers",
      "Collective labour disputes",
      "Severance and compensation negotiations",
    ],
    clientTypes:
      "Employers (companies, NGOs, international organisations) and individual employees in Rwanda.",
  },
  {
    slug: "family-private-client",
    title: "Family & Private Client",
    shortTitle: "Family & Private Client",
    excerpt:
      "Sensitive, discreet handling of family matters — marriage, divorce, custody, adoption, inheritance and succession.",
    iconKey: "home",
    overview:
      "Family and personal legal matters require not only legal expertise but also discretion and sensitivity. Me RWABUKUMBA Moussa advises and represents private clients on the full range of family and civil matters under Rwandan personal and family law.",
    services: [
      "Marriage contracts and matrimonial advice",
      "Separation and divorce proceedings",
      "Child custody and guardianship",
      "Adoption proceedings",
      "Succession, inheritance and wills",
      "Property disputes between spouses or family members",
    ],
    clientTypes:
      "Individuals, families and private clients across Rwanda seeking personal legal support.",
  },
  {
    slug: "arbitration-mediation",
    title: "Arbitration & Mediation",
    shortTitle: "Arbitration & Mediation",
    excerpt:
      "Alternative dispute resolution as advocate — for commercial, contractual and cross-border disputes requiring confidential, efficient resolution.",
    iconKey: "balance",
    overview:
      "Not every dispute needs to go to court. Me RWABUKUMBA Moussa represents clients in arbitration and mediation proceedings as an experienced advocate, helping resolve commercial, contractual and cross-border disputes efficiently and confidentially, including proceedings before the Kigali International Arbitration Centre (KIAC).",
    services: [
      "Commercial arbitration (domestic and international)",
      "Mediation representation and facilitation",
      "KIAC and ad hoc arbitration proceedings",
      "Arbitration clause drafting and review",
      "Enforcement of arbitral awards",
      "Dispute resolution strategy advice",
    ],
    clientTypes:
      "Businesses, financial institutions and investors who prefer ADR to court proceedings, particularly for cross-border or high-value disputes.",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
