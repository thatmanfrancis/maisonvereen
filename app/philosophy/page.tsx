"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

// Page 1 philosophy pillars — exact from document
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

        {/* ── HERO ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-7 max-w-[520px]">
                  <span className="section-tag">The House Philosophy</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.05]" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                    The fragrance is not the luxury.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>You are.</em>
                  </h1>
                  <p className="font-serif font-light text-[#C8BFB2]" style={{ fontSize: "22px" }}>
                    Maison Vereen does not create distinction. It celebrates it.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    We do not believe in selling people an identity. We believe in recognizing the identity they already carry. Our fragrance is not designed to make you feel like someone else. It is designed to make you smell like exactly who you already are — amplified, clarified, and impossible to forget.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/philosophy-hero.png"
                  alt="Maison Vereen — The House Philosophy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
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
                <div key={i} className="group bg-[#0D0D0D] px-10 py-12 space-y-5 hover:bg-white/2 transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}>
                      {p.title}
                    </h3>
                    <span className="font-serif text-gold/40 shrink-0 mt-1" style={{ fontSize: "15px" }}>{p.num}</span>
                  </div>
                  <p className="text-[#6A6258] font-light leading-[1.85]" style={{ fontSize: "17px" }}>{p.body}</p>
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
              <p className="font-serif font-light italic text-[#8A8178] leading-[1.55] tracking-[0.03em]" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}>
                &ldquo;We do not believe in selling people an identity. We believe in recognizing the identity they already carry.&rdquo;
              </p>
              <div className="gold-rule mx-auto" />
              <p className="font-serif font-light italic text-[#6A6560] tracking-widest uppercase" style={{ fontSize: "16px" }}>
                We create scents. You create history.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4-ICON VALUES BAR — from screenshot layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/><path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Intention",
                  sub: "Every detail is deliberate. Designed with purpose.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/></svg>,
                  label: "Craftsmanship",
                  sub: "Built by experts. Perfected by dedication.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3L3 9l9 12 9-12-9-6z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/><path d="M3 9h18M8 9L12 3l4 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  label: "Rarity",
                  sub: "Some things are not made to be mass produced.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.9"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="0.9"/><path d="M2 12h20" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Presence",
                  sub: "A scent that lingers. A legacy that remains.",
                },
              ].map((item, i) => (
                <div key={i} className="group px-7 py-10 flex flex-col items-center text-center gap-4 hover:bg-white/2 transition-colors duration-400">
                  <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-400">{item.icon}</div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <span className="uppercase tracking-[0.22em] text-[#8A8178] group-hover:text-[#C8C0B4] font-medium transition-colors duration-300" style={{ fontSize: "11px" }}>{item.label}</span>
                  <p className="text-[#3A3530] font-light leading-[1.6] group-hover:text-[#5A5449] transition-colors duration-300" style={{ fontSize: "13px" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <p className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
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
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
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
