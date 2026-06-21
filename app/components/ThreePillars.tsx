"use client";

import React from "react";

const pillars = [
  {
    icon: (
      /* Globe/roots icon */
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
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
          rx="4"
          ry="10"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M2 12h20M4.5 6.5C6.8 8 9.3 9 12 9s5.2-1 7.5-2.5M4.5 17.5C6.8 16 9.3 15 12 15s5.2 1 7.5 2.5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "African by Roots",
    body: "Inspired by the richness of our heritage and the elegance of our future.",
  },
  {
    icon: (
      /* Star / craftsmanship icon */
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Crafted with Intention",
    body: "Every detail is deliberate. Every ingredient is chosen with purpose.",
  },
  {
    icon: (
      /* Diamond/endure icon */
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L3 9l9 12 9-12-9-6z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <path
          d="M3 9h18M8 9L12 3l4 6"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Made to Endure",
    body: "More than a scent. A legacy designed to be remembered.",
  },
];

export default function ThreePillars() {
  return (
    /* Design: CREAM/light background with dark text and gold icons */
    <section id="pillars" className="bg-[#F5F0E8] border-y border-[#E8E0D0]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E0D8C8]">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group px-10 py-12 md:py-14 flex flex-col items-center text-center gap-5 hover:bg-[#EDE8DE] transition-colors duration-500"
            >
              {/* Icon — gold */}
              <div className="text-[#B8962E] group-hover:text-[#96780E] transition-colors duration-400">
                {p.icon}
              </div>

              {/* Thin gold rule */}
              <div className="w-6 h-px bg-gold/50 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />

              {/* Title — dark, small caps tracking */}
              <h3
                className="uppercase tracking-[0.22em] text-[#1A1814] font-medium"
                style={{
                  fontSize: "16px",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                {p.title}
              </h3>

              {/* Body — muted dark */}
              <p
                className="text-[#6A6258] font-light leading-[1.75]"
                style={{ fontSize: "16px" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
