"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenApply: () => void;
}

const NAV_LINKS = [
  { label: "The House", href: "/the-house" },
  { label: "Our Story", href: "/our-story" },
  { label: "Edition I", href: "/edition-i" },
  { label: "Journal", href: "/journal" },
  { label: "Registry", href: "/registry" },
  { label: "Access", href: "/access" },
];

export default function Header({ onOpenApply }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/6"
            : isHome
              ? "bg-transparent"
              : "bg-black/95 backdrop-blur-md border-b border-white/6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 h-[72px] flex items-center justify-between">
          {/* ── LOGO — left-aligned stacked two lines ── */}
          <Link
            href="/"
            className="shrink-0 group"
            aria-label="Maison Vereen — Home"
          >
            <div className="leading-[1.15]">
              <span className="block font-serif text-xs tracking-[0.45em] text-[#E8E2D9] font-light group-hover:text-gold transition-colors duration-500 uppercase">
                Maison
              </span>
              <span className="block font-serif text-xs tracking-[0.45em] text-[#E8E2D9] font-light group-hover:text-gold transition-colors duration-500 uppercase">
                Vereen
              </span>
            </div>
          </Link>

          {/* ── CENTER NAV — desktop ── */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-10"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-[0.28em] uppercase font-medium transition-colors duration-300 ${
                    active ? "text-gold" : "text-[#9A9189] hover:text-[#E8E2D9]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT CTA + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-5 shrink-0">
            <button
              onClick={onOpenApply}
              className="hidden md:block border border-gold/50 hover:border-gold hover:bg-gold/10 px-6 py-2.5 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] transition-all duration-500"
            >
              Apply for Access
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#9A9189] hover:text-[#E8E2D9] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close btn top-right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 text-[#9A9189] hover:text-[#E8E2D9] transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo in drawer */}
        <div className="absolute top-6 left-8 leading-[1.15]">
          <span className="block font-serif text-xs tracking-[0.45em] text-[#E8E2D9] font-light uppercase">
            Maison
          </span>
          <span className="block font-serif text-xs tracking-[0.45em] text-[#E8E2D9] font-light uppercase">
            Vereen
          </span>
        </div>

        <nav className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-light tracking-widest text-[#E8E2D9] hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenApply();
            }}
            className="mt-4 border border-gold/50 px-8 py-3 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] hover:bg-gold/10 transition-all duration-300"
          >
            Apply for Access
          </button>
        </nav>
      </div>
    </>
  );
}
