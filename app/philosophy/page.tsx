"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

// Exact pillars from document — Page 1, Home (Philosophy section)
const pillars = [
  {
    num: "I",
    title: "Authority",
    body: "The house was built for individuals who lead — in their industries, their families, their communities. Not because they were given authority. Because they earned it, or claimed it, or simply were it.",
  },
  {
    num: "II",
    title: "Presence",
    body: "There are people who walk into rooms and shift them. Not through volume. Through weight. Maison Vereen was built for the weight-carriers.",
  },
  {
    num: "III",
    title: "Legacy",
    body: "We build for people who think in decades. The founding edition of this house will be owned by people who understand what it means to be early to something that will matter.",
  },
  {
    num: "IV",
    title: "Distinction",
    body: "Not performance. Not image. Not carefully constructed impression. The real thing. The unmanufactured version. The self that exists before the room fills.",
  },
];

export default function PhilosophyPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">
        {/* ── HERO — with craft/luxury dark image split ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              {/* Left — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-6 max-w-[520px]">
                  <span className="section-tag">The House Philosophy</span>
                  {/* Exact headline from document */}
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                  >
                    The fragrance is not the luxury.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      You are.
                    </em>
                  </h1>
                  {/* Exact subheadline from document */}
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "20px" }}
                  >
                    Maison Vereen does not create distinction. It celebrates it.
                  </p>
                  <p
                    className="text-[#7A7068] font-light leading-[1.85] max-w-[480px]"
                    style={{ fontSize: "15px" }}
                  >
                    We do not believe in selling people an identity. We believe
                    in recognizing the identity they already carry. Our
                    fragrance is not designed to make you feel like someone
                    else. It is designed to make you smell like exactly who you
                    already are — amplified, clarified, and impossible to
                    forget.
                  </p>
                </div>
              </div>
              {/* Right — dark craft/luxury image */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/luxury-dark.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.55,
                    filter: "brightness(0.6) saturate(0.55)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/75 via-transparent to-[#060608]/25" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUR PILLARS ── */}
        <section className="bg-charcoal border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-12">
            <span className="section-tag">The Pillars</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="group bg-[#0D0D0D] px-10 py-12 space-y-5 hover:bg-white/15 transition-colors duration-500 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="font-serif font-light text-[#E8E2D9]"
                      style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                    >
                      {p.title}
                    </h3>
                    <span
                      className="font-serif text-gold/40 shrink-0 mt-1"
                      style={{ fontSize: "15px" }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <p
                    className="text-[#6A6258] font-light leading-[1.8]"
                    style={{ fontSize: "15px" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[700px] mx-auto text-center space-y-8">
              <div className="gold-rule mx-auto" />
              <p
                className="font-serif font-light italic text-[#8A8178] leading-[1.55] tracking-[0.03em]"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}
              >
                &ldquo;We do not believe in selling people an identity. We
                believe in recognizing the identity they already carry.&rdquo;
              </p>
              <div className="gold-rule mx-auto" />
              <p
                className="font-serif font-light italic text-[#aca9a6] tracking-widest uppercase"
                style={{ fontSize: "15px" }}
              >
                We create scents. You create history.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3
                className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
              >
                Ready to apply?
              </h3>
              <p
                className="text-[#5A5449] font-light"
                style={{ fontSize: "14px" }}
              >
                250 positions. Individually numbered. Not available to everyone.
              </p>
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <Link href="/edition-i" className="link-gold">
                <span>Edition I</span>
                <span className="text-gold">→</span>
              </Link>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-7 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "16px", letterSpacing: "0.26em" }}
              >
                <span className="uppercase font-medium">Apply for Access</span>
              </button>
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
