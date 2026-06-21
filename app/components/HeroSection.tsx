"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenApply: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  const scrollDown = () => {
    document
      .getElementById("pillars")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A0808]"
    >
      {/* ── BACKGROUND — golden-hour African cityscape ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-city.jpg"
          alt="African cityscape at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
          style={{ opacity: 0.55 }}
        />
        {/* Deep left gradient — text readable area */}
        <div className="absolute inset-0 bg-linear-to-r from-[#060504]/97 via-[#060504]/80 to-[#060504]/20" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-[#060504]/90 via-transparent to-[#060504]/50" />
        {/* Warm amber tint to match golden hour */}
        <div className="absolute inset-0 bg-[#2A1A08]/20" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-14 pt-[72px]">
        <div className="max-w-[680px] py-28 md:py-36 space-y-8">
          {/* Headline */}
          <h1
            className="font-serif text-[#EDE7DC] leading-[0.98] anim-fade-up"
            style={{
              fontSize: "clamp(3.2rem, 8vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            A NEW
            <br />
            CHAPTER
            <br />
            IN AFRICAN
            <br />
            <span style={{ color: "#C9A84C" }}>LUXURY</span>
          </h1>

          {/* Sub-line */}
          <p
            className="text-[#9A8E80] font-light leading-[1.8] max-w-[400px] anim-fade-up-d1"
            style={{ fontSize: "16px", letterSpacing: "0.03em" }}
          >
            Maison Vereen is a fragrance house born from culture, crafted with
            intention, and created to endure.
          </p>

          {/* CTA — small outlined button exactly as in design */}
          <div className="anim-fade-up-d2 pt-1">
            <button
              onClick={onOpenApply}
              className="border border-[#E8E2D9]/40 hover:border-gold hover:text-gold px-6 py-2.5 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "16px", letterSpacing: "0.28em" }}
            >
              <span className="uppercase font-medium tracking-[0.28em]">
                Discover the House
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 group"
      >
        <div className="w-8 h-8 rounded-full border border-[#3A3028] group-hover:border-gold/50 flex items-center justify-center transition-all duration-300">
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            className="text-[#4A4038] group-hover:text-gold transition-colors duration-300"
          >
            <path
              d="M5 1v8M1 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}
