"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────
//  NAV LINKS AND GROUPS
// ─────────────────────────────────────────────
const NAV_GROUPS = [
  {
    label: "The House",
    dropdown: [
      { label: "The House", href: "/the-house" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "The Founder", href: "/the-founder" },
      { label: "Our Story", href: "/our-story" },
      { label: "Future Vision", href: "/future" },
    ],
  },
  {
    label: "Collections",
    dropdown: [
      { label: "Edition I", href: "/edition-i" },
      { label: "Signature Collection", href: "/fragrance-library" },
      { label: "The First 250", href: "/the-first-250" },
      { label: "Legacy", href: "/legacy" },
    ],
  },
  {
    label: "Registry",
    dropdown: [
      { label: "The Registry", href: "/registry" },
      { label: "Join Waitlist", href: "/waitlist" },
    ],
  },
  {
    label: "HouseBook",
    dropdown: [
      { label: "The HouseBook", href: "/housebook" },
      { label: "House Journal", href: "/journal" },
      { label: "Social Proof", href: "/social-proof" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Contact",
    dropdown: [
      { label: "Contact & Concierge", href: "/contact" },
      { label: "Final Invitation", href: "/final-invitation" },
    ],
  },
];

// 10 curated mobile nav links — brand identity, products, conversion, contact
const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "The House", href: "/the-house" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "The Founder", href: "/the-founder" },
  { label: "Edition I", href: "/edition-i" },
  { label: "Signature Collection", href: "/fragrance-library" },
  { label: "Founding Registry", href: "/registry" },
  { label: "Access", href: "/access" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Final Invitation", href: "/final-invitation" },
];

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener — adds background after 30 px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  // Header background logic:
  // - Scrolled anywhere        → dark bg
  // - On home, not scrolled   → transparent
  // - On inner page, not scrolled → dark bg
  const headerBg =
    scrolled || !isHome
      ? "bg-black/95 backdrop-blur-md border-b border-white/6"
      : "bg-transparent";

  return (
    <>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${headerBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 h-[100px] md:h-[125px] flex items-center justify-between">
        {/* ── MOBILE HEADER (centered logo) ── */}
        <div className="relative md:hidden w-full h-full flex items-center justify-between">
          {/* Spacer — mirrors hamburger width to keep logo truly centered */}
          <div className="w-6 shrink-0" />

          {/* Centered logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={280}
              height={96}
              className="h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#9A9189] hover:text-[#E8E2D9] transition-colors shrink-0"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── DESKTOP HEADER ── */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Logo */}
          <Link href="/" className="shrink-0 group" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={320}
              height={110}
              className="h-[110px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="flex items-center gap-7 lg:gap-10 h-full"
            aria-label="Main navigation"
          >
            {NAV_GROUPS.map((group) => {
              if (group.dropdown) {
                const isAnyActive = group.dropdown.some((sub) => pathname === sub.href);
                return (
                  <div key={group.label} className="relative group py-5">
                    <button
                      className={`flex items-center gap-1.5 text-xs tracking-[0.28em] uppercase font-medium transition-colors duration-300 cursor-pointer ${isAnyActive
                        ? "text-gold"
                        : "text-[#9A9189] hover:text-[#E8E2D9]"
                        }`}
                    >
                      {group.label}
                      <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
                      <div className="bg-[#0B0B0B]/98 backdrop-blur-md border border-white/8 py-3 shadow-2xl flex flex-col">
                        {group.dropdown.map((subLink) => {
                          const active = pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`px-6 py-3 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${active
                                ? "text-gold bg-white/3"
                                : "text-[#9A9189] hover:text-[#E8E2D9] hover:bg-white/5"
                                }`}
                            >
                              {subLink.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/access"
            className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-6 py-2.5 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] transition-all duration-500 shrink-0"
          >
            Apply for Access
          </Link>
        </div>

      </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER
      ════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col transition-all duration-500 md:hidden ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 text-[#9A9189] hover:text-[#E8E2D9] transition-colors z-50"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="absolute top-6 left-8 z-50">
          <Image
            src="/logo.png"
            alt="Maison Vereen"
            width={240}
            height={80}
            className="h-14 w-auto object-contain opacity-90"
          />
        </div>

        {/* Nav links scroll container */}
        <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-16 overflow-y-auto w-full px-6">
          <nav className="flex flex-col items-center gap-4 w-full text-center">
            {MOBILE_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-lg font-light tracking-widest transition-colors duration-300 py-1 ${active ? "text-gold" : "text-[#E8E2D9] hover:text-gold"
                    }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/access"
              onClick={() => setIsOpen(false)}
              className="mt-6 border border-gold/50 px-8 py-3 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] hover:bg-gold/10 transition-all duration-300"
            >
              Apply for Access
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}