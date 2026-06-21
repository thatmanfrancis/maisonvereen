"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";
import Link from "next/link";

const houseValues = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.9" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="0.9" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
    title: "Heritage",
    body: "Rooted in Africa. Created for the world.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
      </svg>
    ),
    title: "Excellence",
    body: "We pursue the highest standards in every expression.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.9" />
      </svg>
    ),
    title: "Authenticity",
    body: "We stay true to our identity and our commitments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
        <path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
    title: "Legacy",
    body: "We create for today. We are remembered for tomorrow.",
  },
];

const principles = [
  { num: "01", title: "Rarity is not manufactured.", body: "We do not create scarcity for effect. 250 bottles is not a marketing strategy. It is a commitment to permanence over volume." },
  { num: "02", title: "Distinction is not sold. It is recognized.", body: "The house serves those who already carry it. We do not promise to make anyone more distinguished." },
  { num: "03", title: "Craft is non-negotiable.", body: "Every material, every element, every experience connected to Maison Vereen must be genuinely extraordinary. No exceptions." },
  { num: "04", title: "Africa is the origin, not the limitation.", body: "The house was born on this continent because this continent has produced the kind of people this house was built for." },
  { num: "05", title: "The house is built for decades.", body: "Every decision is made with the question: will we be proud of this in twenty years? If the answer is uncertain, the answer is no." },
];

export default function TheHousePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-[#0A0A0A]">

        {/* ── HERO — split layout: text left, architecture image right ── */}
        <section className="pt-[72px] border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">

              {/* Left — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">The House</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
                  >
                    Built on Heritage.<br />
                    <em className="text-gold not-italic">Guided by Vision.</em>
                  </h1>
                  <p className="text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                    Maison Vereen is an African luxury fragrance house reimagining fragrance as a symbol of identity, excellence, and timeless sophistication.
                  </p>
                  <p className="text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                    We do not create exceptional scents, but cultural legacies.
                  </p>
                  <Link href="/philosophy" className="link-gold">
                    <span>Our Philosophy</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>

              {/* Right — dark moody architecture image */}
              <div className="relative min-h-[400px] lg:min-h-0 bg-[#060608] overflow-hidden">
                <Image
                  src="/images/dark-architecture.jpg"
                  alt="Maison Vereen — The House"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.65 }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#120E08]/25" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 VALUE ICONS — HERITAGE, EXCELLENCE, AUTHENTICITY, LEGACY ── */}
        <section className="bg-[#0D0D0D] border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.05]">
              {houseValues.map((v, i) => (
                <div
                  key={i}
                  className="group px-8 py-10 flex flex-col items-center text-center gap-4 hover:bg-white/[0.015] transition-colors duration-400"
                >
                  <div className="text-gold/50 group-hover:text-gold transition-colors duration-400">{v.icon}</div>
                  <div className="w-4 h-px bg-gold/25 group-hover:w-8 group-hover:bg-gold/50 transition-all duration-500" />
                  <span className="uppercase tracking-[0.22em] text-[#8A8178] group-hover:text-[#C8C0B4] transition-colors duration-300 font-medium" style={{ fontSize: "16px" }}>
                    {v.title}
                  </span>
                  <p className="text-[#4A4440] font-light leading-[1.7]" style={{ fontSize: "16px" }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MORE THAN A FRAGRANCE ── */}
        <section className="border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              {/* Left — dark moody fragrance image */}
              <div className="relative min-h-[380px] lg:min-h-0 bg-[#060608] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/images/fragrance-dark.jpg"
                  alt="More Than a Fragrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.65 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#1A1000]/25" />
              </div>

              {/* Right — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28 order-1 lg:order-2 bg-[#0D0D0D]">
                <div className="space-y-7 max-w-[460px]">
                  <span className="section-tag">More Than a Fragrance</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                  >
                    More Than<br />
                    <em className="text-gold not-italic">a Fragrance</em>
                  </h2>
                  <p className="text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                    Every Maison Vereen fragrance is a story of place, people, and purpose — carefully composed to evoke emotion, presence, and lasting impact.
                  </p>
                  <p className="text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                    This is a statement.
                  </p>
                  <Link href="/philosophy" className="link-gold">
                    <span>Our Philosophy</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIVE PRINCIPLES ── */}
        <section className="border-b border-white/[0.05] bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-14">
            <div className="space-y-4">
              <span className="section-tag">What we stand for</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Five principles.<br />
                <em className="text-gold not-italic">No compromises.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {principles.map((p, i) => (
                <div key={i} className="bg-[#0D0D0D] px-8 py-10 space-y-4 hover:bg-white/[0.02] transition-colors duration-300">
                  <span className="font-mono text-gold/40" style={{ fontSize: "16px" }}>{p.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4]" style={{ fontSize: "16px" }}>{p.title}</h3>
                  <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "16px" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                You will know if this is for you.
              </h3>
              <p className="text-[#5A5449] font-light" style={{ fontSize: "16px" }}>
                We do not have a customer profile. We have a character profile.
              </p>
            </div>
            <div className="flex items-center gap-5 flex-shrink-0">
              <Link href="/philosophy" className="link-gold">
                <span>Our Philosophy</span>
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
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
