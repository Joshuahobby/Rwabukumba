interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative max-w-site mx-auto px-6">
        {breadcrumb && (
          <p className="text-gold/70 text-xs font-sans tracking-widest uppercase mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-lg max-w-2xl leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
