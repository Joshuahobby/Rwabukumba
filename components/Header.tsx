"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/notary", label: "Notary Services" },
  { href: "/clients-cases", label: "Clients & Cases" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      {/* Top contact strip */}
      <div className="bg-navy-dark border-b border-navy-light/30 hidden md:block">
        <div className="max-w-site mx-auto px-6 py-1.5 flex justify-end items-center gap-6 text-xs text-white/70">
          <a href="tel:+250788673699" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <PhoneIcon className="w-3.5 h-3.5" />
            +250 788 673 699
          </a>
          <a href="mailto:moussa@rwabukumbalaw.rw" className="hover:text-gold transition-colors">
            moussa@rwabukumbalaw.rw
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-site mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="text-white font-serif text-lg font-bold tracking-wide group-hover:text-gold transition-colors">
            Me RWABUKUMBA Moussa
          </span>
          <span className="text-gold/80 text-xs font-sans tracking-widest uppercase">
            Attorney · Notary · Kigali
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-2 text-sm font-sans rounded transition-colors ${
                    isActive
                      ? "text-gold font-medium"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded transition-colors"
            >
              Discuss Your Case
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light/30 px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 text-sm font-sans border-b border-navy-light/20 transition-colors ${
                      isActive
                        ? "text-gold font-medium"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="tel:+250788673699"
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <PhoneIcon className="w-4 h-4 text-gold" />
              +250 788 673 699
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-navy font-semibold text-sm px-5 py-3 rounded text-center"
            >
              Discuss Your Case
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
