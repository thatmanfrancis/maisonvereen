"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Drawn from document — Page 3: Our Story
const articles = [
  {
    tag: "Origin",
    title: "It started with a question no one was asking.",
    excerpt: "Not 'what fragrance do people want to wear?' That question has been asked by every house, answered by every house, and produced a world of beautiful things that smell largely the same. The question that started Maison Vereen was different. Harder. More personal.",
    date: "June 2024",
    readTime: "6 min read",
  },
  {
    tag: "Vision",
    title: "Africa's first. The world's next.",
    excerpt: "The vision was never modest. It was never regional. It was never 'let's make a nice fragrance.' The vision was Africa's first serious luxury fragrance house. Built to the standard of the world's greatest houses. Uncompromising in craft. Unapologetic in origin.",
    date: "May 2024",
    readTime: "5 min read",
  },
  {
    tag: "Craft",
    title: "Three years. One edition. No shortcuts.",
    excerpt: "Maison Vereen Edition I was not built quickly. The fragrance was developed with a master perfumer whose credentials are not decoration. The raw materials were sourced specifically from African regions — not as a story, but because those materials produce quality that cannot be replicated from elsewhere.",
    date: "April 2024",
    readTime: "7 min read",
  },
  {
    tag: "Origin",
    title: "Not in spite of where we are from. Because of it.",
    excerpt: "Africa is the youngest continent by median age. The fastest-growing consumer class. The source of more undocumented creative and intellectual authority than perhaps any civilization in recent history.",
    date: "March 2024",
    readTime: "5 min read",
  },
  {
    tag: "Distinction",
    title: "The Difference Between Presence and Performance.",
    excerpt: "Some people arrive in rooms with noise. Others arrive with weight. The difference is not volume. It is not charisma. It is something more fundamental — a quality that precedes the entry. Maison Vereen was built for the weight-carriers.",
    date: "February 2024",
    readTime: "4 min read",
  },
  {
    tag: "Legacy",
    title: "We are not building a brand. We are building an institution.",
    excerpt: "Edition I is the beginning of a house designed to endure. Future editions. Future collections. Future spaces. Each one building on the last. Each one deepening the mythology of what Maison Vereen is.",
    date: "January 2024",
    readTime: "6 min read",
  },
];

// Six distinct atmospheric dark images — no bottles, no light imagery
const IMAGES = [
  { src: "/images/dark-stone.jpg",        pos: "30% center" },
  { src: "/images/luxury-dark.jpg",       pos: "50% center" },
  { src: "/images/dark-architecture.jpg", pos: "40% center" },
  { src: "/images/journal-dark.jpg",      pos: "20% center" },
  { src: "/images/dark-stone.jpg",        pos: "70% center" },
  { src: "/images/luxury-dark.jpg",       pos: "60% center" },
];

export default function JournalPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-[#0A0A0A]">

        {/* ── PAGE HEADER ── */}
        <section className="border-b border-white/[0.05] pt-[72px]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-24 space-y-5">
            <span className="section-tag">Journal</span>
            <h1
              className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            >
              Thoughts on Culture,<br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                Excellence &amp; Legacy.
              </em>
            </h1>
            <p className="text-[#5A5449] font-light max-w-[480px]" style={{ fontSize: "13px" }}>
              Ideas, origins, and reflections from the house.
            </p>
          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {articles.map((a, i) => (
                <article
                  key={i}
                  className="group bg-[#0A0A0A] cursor-pointer hover:bg-white/[0.015] transition-colors duration-500 anim-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Distinct atmospheric dark image per card */}
                  <div className="relative h-56 overflow-hidden bg-[#080808]">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: `url(${IMAGES[i % IMAGES.length].src})`,
                        backgroundSize: "cover",
                        backgroundPosition: IMAGES[i % IMAGES.length].pos,
                        opacity: 0.48,
                        filter: "brightness(0.52) saturate(0.45) sepia(0.08)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/92 via-[#0A0A0A]/25 to-transparent" />
                    <div className="absolute inset-0 bg-[#06040A]/15" />
                    <div className="absolute bottom-5 left-6 z-10">
                      <span
                        className="uppercase tracking-[0.2em] border px-2 py-1"
                        style={{ fontSize: "8px", color: "rgba(201,168,76,0.7)", borderColor: "rgba(201,168,76,0.22)" }}
                      >
                        {a.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-7 pt-7 pb-9 space-y-3">
                    <h2
                      className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300"
                      style={{ fontSize: "15px" }}
                    >
                      {a.title}
                    </h2>
                    <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "12px" }}>
                      {a.excerpt}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-white/[0.04]">
                      <span
                        className="uppercase tracking-[0.2em] font-medium group-hover:text-[#C9A84C] transition-colors duration-300"
                        style={{ fontSize: "9px", color: "rgba(201,168,76,0.45)" }}
                      >
                        Read →
                      </span>
                      <div className="flex items-center gap-3 text-[#2A2420]" style={{ fontSize: "9px" }}>
                        <span>{a.date}</span>
                        <span>·</span>
                        <span>{a.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
