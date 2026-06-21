"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const articles = [
  {
    tag: "Culture",
    title: "The New Identity of African Luxury",
    excerpt:
      "A generation of creators is redefining what luxury means on the continent — not as aspiration, but as expression. The question is no longer 'what does the world think of Africa?' but 'what does Africa think of the world?'",
    date: "June 2024",
    readTime: "6 min read",
  },
  {
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
    readTime: "7 min read",
  },
  {
    tag: "Origin",
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
  },
];

export default function JournalPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-charcoal">
        {/* ── HEADER ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-24 space-y-5">
            <span className="section-tag">Journal</span>
            <h1
              className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Thoughts on Culture,
              <br />
              <em className="text-gold not-italic">Excellence &amp; Legacy.</em>
            </h1>
          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {articles.map((a, i) => (
                <article
                  key={i}
                  className="group bg-charcoal cursor-pointer hover:bg-white/15 transition-colors duration-500"
                >
                  {/* Placeholder image area */}
                  <div className="relative h-52 bg-[#0D0D0D] overflow-hidden">
                    <div className="absolute inset-0 bg-linear-gradient-to-br from-[#1a1a1a] to-[#080808] group-hover:from-[#202020] transition-all duration-700" />
                    <div className="absolute bottom-5 left-6">
                      <span
                        className="uppercase tracking-[0.2em] text-gold/60 border border-gold/20 px-2.5 py-1.5"
                        style={{ fontSize: "16px" }}
                      >
                        {a.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-7 pt-7 pb-9 space-y-3">
                    <h2
                      className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300"
                      style={{ fontSize: "16px" }}
                    >
                      {a.title}
                    </h2>
                    <p
                      className="text-[#5A5449] font-light leading-[1.75]"
                      style={{ fontSize: "16px" }}
                    >
                      {a.excerpt}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-white/4">
                      <span
                        className="uppercase tracking-[0.22em] text-gold/50 group-hover:text-gold transition-colors duration-300 font-medium"
                        style={{ fontSize: "16px" }}
                      >
                        Read →
                      </span>
                      <div
                        className="flex items-center gap-3 text-[#3A3530]"
                        style={{ fontSize: "16px" }}
                      >
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
