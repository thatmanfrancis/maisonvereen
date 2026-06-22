"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Drawn from document — Page 3: Our Story
const articles = [
  {
<<<<<<< HEAD
    tag: "Origin",
    title: "It started with a question no one was asking.",
    excerpt: "Not 'what fragrance do people want to wear?' That question has been asked by every house, answered by every house, and produced a world of beautiful things that smell largely the same. The question that started Maison Vereen was different. Harder. More personal.",
=======
    tag: "Culture",
    title: "The New Identity of African Luxury",
    excerpt:
      "A generation of creators is redefining what luxury means on the continent — not as aspiration, but as expression. The question is no longer 'what does the world think of Africa?' but 'what does Africa think of the world?'",
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
    date: "June 2024",
    readTime: "6 min read",
  },
  {
<<<<<<< HEAD
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
=======
    tag: "Craft",
    title: "The Art of Craftsmanship",
    excerpt:
      "True craftsmanship is not about perfection. It is about the intention behind every decision, every material, every hand-finished detail. Perfection is a destination. Craftsmanship is a practice.",
    date: "May 2024",
    readTime: "4 min read",
  },
  {
    tag: "Legacy",
    title: "Legacy Is Built in Silence",
    excerpt:
      "The things that endure are rarely announced. They are built carefully, consistently, over decades — without the need for applause. The loudest rooms are often the emptiest.",
    date: "April 2024",
    readTime: "5 min read",
  },
  {
    tag: "Excellence",
    title: "On the Weight of Early Ownership",
    excerpt:
      "There is something distinct about being first. Not the first to know about something — but the first to believe in it enough to act. Early ownership of anything serious is an act of judgment.",
    date: "March 2024",
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
    readTime: "7 min read",
  },
  {
    tag: "Origin",
<<<<<<< HEAD
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
=======
    title: "Why Africa. Why Now.",
    excerpt:
      "Africa is the youngest continent by median age. The fastest-growing consumer class. The source of more undocumented creative and intellectual authority than perhaps any civilization in recent history.",
    date: "February 2024",
    readTime: "8 min read",
  },
  {
    tag: "Distinction",
    title: "The Difference Between Presence and Performance",
    excerpt:
      "Some people arrive in rooms with noise. Others arrive with weight. The difference is not volume. It is not charisma. It is something more fundamental — a quality that precedes the entry.",
    date: "January 2024",
    readTime: "5 min read",
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
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

<<<<<<< HEAD
      <main className="bg-[#0A0A0A]">

        {/* ── PAGE HEADER ── */}
        <section className="border-b border-white/[0.05] pt-[72px]">
=======
      <main className="bg-charcoal">
        {/* ── HEADER ── */}
        <section className="border-b border-white/5 pt-[72px]">
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-24 space-y-5">
            <span className="section-tag">Journal</span>
            <h1
              className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            >
<<<<<<< HEAD
              Thoughts on Culture,<br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                Excellence &amp; Legacy.
              </em>
=======
              Thoughts on Culture,
              <br />
              <em className="text-gold not-italic">Excellence &amp; Legacy.</em>
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
            </h1>
            <p className="text-[#5A5449] font-light max-w-[480px]" style={{ fontSize: "13px" }}>
              Ideas, origins, and reflections from the house.
            </p>
          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {articles.map((a, i) => (
                <article
                  key={i}
<<<<<<< HEAD
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
=======
                  className="group bg-charcoal cursor-pointer hover:bg-white/15 transition-colors duration-500"
                >
                  {/* Placeholder image area */}
                  <div className="relative h-52 bg-[#0D0D0D] overflow-hidden">
                    <div className="absolute inset-0 bg-linear-gradient-to-br from-[#1a1a1a] to-[#080808] group-hover:from-[#202020] transition-all duration-700" />
                    <div className="absolute bottom-5 left-6">
                      <span
                        className="uppercase tracking-[0.2em] text-gold/60 border border-gold/20 px-2.5 py-1.5"
                        style={{ fontSize: "16px" }}
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
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
<<<<<<< HEAD
                    <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "12px" }}>
=======
                    <p
                      className="text-[#5A5449] font-light leading-[1.75]"
                      style={{ fontSize: "16px" }}
                    >
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
                      {a.excerpt}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-white/4">
                      <span
<<<<<<< HEAD
                        className="uppercase tracking-[0.2em] font-medium group-hover:text-[#C9A84C] transition-colors duration-300"
                        style={{ fontSize: "9px", color: "rgba(201,168,76,0.45)" }}
                      >
                        Read →
                      </span>
                      <div className="flex items-center gap-3 text-[#2A2420]" style={{ fontSize: "9px" }}>
=======
                        className="uppercase tracking-[0.22em] text-gold/50 group-hover:text-gold transition-colors duration-300 font-medium"
                        style={{ fontSize: "16px" }}
                      >
                        Read →
                      </span>
                      <div
                        className="flex items-center gap-3 text-[#3A3530]"
                        style={{ fontSize: "16px" }}
                      >
>>>>>>> f0e0a2ab327b9899dee39b44002596db12dd29dc
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
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
