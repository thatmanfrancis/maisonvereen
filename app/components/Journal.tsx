"use client";

import React from "react";
import Link from "next/link";

// Each card gets its own distinct atmospheric image
const CARD_IMAGES = [
  { src: "/images/dark-stone.jpg",   pos: "30% center" },
  { src: "/images/luxury-dark.jpg",  pos: "60% center" },
  { src: "/images/dark-architecture.jpg", pos: "40% center" },
];

// Titles drawn from document themes — Our Story / Journal pages
const articles = [
  {
    tag: "Origin",
    title: "It started with a question no one was asking.",
    excerpt: "Not 'what fragrance do people want to wear?' The question that started Maison Vereen was harder. More personal.",
    date: "June 2024",
  },
  {
    tag: "Vision",
    title: "Africa's first. The world's next.",
    excerpt: "The vision was never modest. Africa's first serious luxury fragrance house — built to the standard of the world's greatest houses.",
    date: "May 2024",
  },
  {
    tag: "Craft",
    title: "Three years. One edition. No shortcuts.",
    excerpt: "The fragrance was developed with a master perfumer. The bottle was designed to be a sculpture before it is a vessel.",
    date: "April 2024",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-[#0A0A0A] border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-5">
            <span className="section-tag">Journal</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Thoughts on Culture,<br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                Excellence &amp; Legacy.
              </em>
            </h2>
          </div>
          <Link href="/journal" className="link-gold self-end flex-shrink-0">
            <span>Read Journal</span>
            <span className="text-gold">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
          {articles.map((a, idx) => (
            <article
              key={a.tag}
              className="group bg-[#0A0A0A] cursor-pointer hover:bg-white/[0.015] transition-colors duration-500"
            >
              {/* Each card has its own distinct image */}
              <div className="relative h-52 overflow-hidden bg-[#080808]">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${CARD_IMAGES[idx].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: CARD_IMAGES[idx].pos,
                    opacity: 0.50,
                    filter: "brightness(0.55) saturate(0.5) sepia(0.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/92 via-[#0A0A0A]/25 to-transparent" />
                <div className="absolute inset-0 bg-[#08060A]/15" />
                <div className="absolute bottom-5 left-5 z-10">
                  <span
                    className="uppercase tracking-[0.2em] border px-2 py-1"
                    style={{ fontSize: "8px", color: "rgba(201,168,76,0.75)", borderColor: "rgba(201,168,76,0.25)" }}
                  >
                    {a.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="px-7 pt-6 pb-8 space-y-3">
                <h3
                  className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300"
                  style={{ fontSize: "15px" }}
                >
                  {a.title}
                </h3>
                <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "11px" }}>
                  {a.excerpt}
                </p>
                <div className="pt-3 flex items-center justify-between">
                  <span
                    className="uppercase tracking-[0.22em] font-medium group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ fontSize: "9px", color: "rgba(201,168,76,0.45)" }}
                  >
                    Read →
                  </span>
                  <span style={{ fontSize: "9px", color: "#3A3530" }}>{a.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
