"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Intention",
    body: "Everything we create begins with deliberate purpose. No detail is incidental. No material is chosen without reason. Intention is the first filter through which every decision passes.",
  },
  {
    num: "02",
    title: "Craftsmanship",
    body: "We hold a standard of excellence that refuses to compromise. Genuine craft is not a feature — it is the foundation. The difference between a product and a house is the refusal to accept good enough.",
  },
  {
    num: "03",
    title: "Rarity",
    body: "We do not manufacture scarcity. 250 bottles is a commitment to permanence, not a marketing strategy. What is rare because it is genuinely limited carries a different weight than what is rare by design.",
  },
  {
    num: "04",
    title: "Presence",
    body: "There are people who walk into rooms and shift them. Not through volume. Through weight. Maison Vereen was built for the weight-carriers. The fragrance was made to recognize that quality, not create it.",
  },
];

export default function PhilosophyPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-charcoal">
        {/* ── PAGE HERO — with dark stone background ── */}
        <section className="relative border-b border-white/5 pt-[72px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/dark-stone.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              filter: "brightness(0.5) saturate(0.4)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-charcoal/40" />

          <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32">
            <div className="space-y-6 max-w-[680px]">
              <span className="section-tag">Our Philosophy</span>
              <h1
                className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
              >
                We don&apos;t follow trends.
                <br />
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  We create timelessness.
                </em>
              </h1>
              <p
                className="text-[#7A7268] font-light leading-[1.85] max-w-[520px]"
                style={{ fontSize: "16px" }}
              >
                True luxury is not loud. It is intentional. It is restrained. It
                is a standard of excellence that speaks for itself.
              </p>
              <button
                className="link-gold mt-2"
                style={{ display: "inline-flex" }}
              >
                <span>The Maison Manifesto</span>
                <span className="text-gold">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── FOUR PILLARS ── */}
        <section className="bg-charcoal border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-12">
            <span className="section-tag">The Four Pillars</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="group bg-[#0D0D0D] px-10 py-12 space-y-6 hover:bg-white/15 transition-colors duration-500 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between">
                    <h3
                      className="font-serif font-light text-[#E8E2D9]"
                      style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
                    >
                      {p.title}
                    </h3>
                    <span className="font-mono text-gold/40 text-xs mt-1 shrink-0">
                      {p.num}
                    </span>
                  </div>
                  <p
                    className="text-[#6A6258] font-light leading-[1.8]"
                    style={{ fontSize: "16px" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] mx-auto text-center space-y-8">
              <div className="gold-rule mx-auto" />
              <p
                className="font-serif font-light italic text-[#8A8178] leading-normal tracking-[0.04em]"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
              >
                &ldquo;We do not believe in selling people an identity. We
                believe in recognizing the identity they already carry.&rdquo;
              </p>
              <p
                className="font-serif font-light text-[#C8C0B4] leading-[1.75] max-w-[540px] mx-auto"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.4rem)" }}
              >
                Our fragrance is not designed to make you feel like someone
                else. It is designed to make you smell like exactly who you
                already are — amplified, clarified, and impossible to forget.
              </p>
              <div className="gold-rule mx-auto" />
              <p
                className="font-serif font-light italic text-[#6A6258] tracking-[0.12em] uppercase"
                style={{ fontSize: "16px" }}
              >
                We create scents. You create history.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h3
              className="font-serif font-light text-[#E8E2D9]"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
            >
              Ready to apply?
            </h3>
            <div className="flex gap-6 shrink-0">
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
