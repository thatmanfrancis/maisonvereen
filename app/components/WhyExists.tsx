"use client";

import Link from "next/link";
import Image from "next/image";

const iconPillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="3.5"
          ry="10"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M2 12h20M5 6.5c2.2 1.5 4.5 2.5 7 2.5s4.8-1 7-2.5M5 17.5c2.2-1.5 4.5-2.5 7-2.5s4.8 1 7 2.5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "African Heritage",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l1.9 5.8H20l-5 3.6 1.9 5.8L12 14.6l-4.9 3.6 1.9-5.8L4 8.8h6.1L12 3z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Modern Luxury",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Timeless Design",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7v10l9 5 9-5V7L12 2z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v20M3 7l9 5 9-5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Limited Creation",
  },
];

export default function WhyExists() {
  return (
    <section id="the-house" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* ── SPLIT ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          {/* Left — Text panel */}
          <div className="flex items-center px-8 md:px-14 lg:px-16 py-20 md:py-28">
            <div className="space-y-8 max-w-[460px]">
              <span className="section-tag">The House</span>

              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Built on Heritage.
                <br />
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  Guided by Vision.
                </em>
              </h2>

              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "16px" }}
              >
                Maison Vereen is an African luxury fragrance house reimagining
                fragrance as a symbol of identity, excellence, and timeless
                sophistication.
              </p>

              <Link href="/the-house" className="link-gold w-fit">
                <span>Our Philosophy</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>

          {/* Right — dark architecture image */}
          <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
            <Image
              src="/images/dark-architecture.jpg"
              alt="The vision behind Maison Vereen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ opacity: 0.65 }}
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/40" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-[#060608]/20" />
            <div className="absolute inset-0 bg-[#120E08]/25" />
          </div>
        </div>

        {/* ── ICON PILLARS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/4 border-t border-white/5">
          {iconPillars.map((p, i) => (
            <div
              key={i}
              className="group px-7 py-9 flex flex-col items-center gap-4 text-center hover:bg-white/15 transition-colors duration-400"
            >
              <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-400">
                {p.icon}
              </div>
              <span
                className="uppercase tracking-[0.22em] text-[#4A4438] group-hover:text-[#7A7068] transition-colors duration-300 font-medium"
                style={{ fontSize: "16px" }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
