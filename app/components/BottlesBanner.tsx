"use client";

import React from "react";

export default function BottlesBanner() {
  return (
    <section className="bg-[#060606] border-y border-white/5 overflow-hidden py-16 md:py-20">
      {/* Subtle centre glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 800, height: 200,
          background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 text-center space-y-5">
        {/* Exact headline from document */}
        <p
          className="font-serif font-light text-[#E8E2D9] tracking-[0.22em] md:tracking-[0.3em] uppercase"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 3rem)" }}
        >
          Two hundred and fifty bottles.
        </p>
        <p
          className="font-serif font-light tracking-[0.22em] md:tracking-[0.3em] uppercase"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 3rem)", color: "#C9A84C" }}
        >
          One edition. No second chances.
        </p>
        {/* Thin gold rule */}
        <div className="w-10 h-px bg-gold/30 mx-auto mt-6" />
        <p
          className="text-[#5A5449] font-light tracking-wider"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          Edition I of Maison Vereen will exist exactly once.
        </p>
      </div>
    </section>
  );
}
