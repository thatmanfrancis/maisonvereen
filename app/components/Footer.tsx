"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "The House",          href: "/the-house"        },
  { label: "Philosophy",         href: "/philosophy"       },
  { label: "Edition I",          href: "/edition-i"        },
  { label: "Founding Registry",  href: "/registry"         },
  { label: "Signature Collection", href: "/fragrance-library" },
  { label: "Social Proof",       href: "/social-proof"     },
  { label: "FAQ",                href: "/faq"              },
  { label: "Contact",            href: "/contact"          },
  { label: "Final Invitation",   href: "/final-invitation" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/6 pt-10 pb-6">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14">

        {/* ── MAIN ROW ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 pb-8 border-b border-white/6">

          {/* Logo — kept subtle for footer context */}
          <Link href="/" className="group shrink-0" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={200}
              height={68}
              className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
          </Link>

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-6 md:gap-y-2"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] hover:text-[#E8E2D9] transition-colors duration-300 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5 shrink-0">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#5A5449] hover:text-gold transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-5 gap-3 text-center sm:text-left">

          <span className="text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#3A3530] font-light">
            © {year} Maison Vereen. All Rights Reserved.
          </span>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#4A4540] font-medium">
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-[#2A2520]">·</span>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Terms of Use
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}