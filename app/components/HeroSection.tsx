"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenApply: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  const [showCTA, setShowCTA] = useState(false);

  // CTA appears after 3 seconds — subtle fade-in, never urgent
  useEffect(() => {
    const t = setTimeout(() => setShowCTA(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#060506]"
    >
      {/* Background — hero-section-image.png, city at golden hour */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section-image.png"
          alt="Maison Vereen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.62 }}
        />
        {/* Left panel very dark so text is fully legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060506]/96 via-[#060506]/72 to-[#060506]/15" />
        {/* Top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060506]/85 via-transparent to-[#060506]/50" />
        {/* Warm amber tone — matches golden hour */}
        <div className="absolute inset-0 bg-[#1C0E04]/12" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-14 pt-[72px]">
        <div className="max-w-[700px] py-28 md:py-36 space-y-8">

          {/* Headline — exact from document */}
          <h1
            className="font-serif font-light text-[#EDE7DC] leading-[1.08] anim-fade-up"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)" }}
          >
            Some people change every room they enter.{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              Not by speaking first. By simply arriving.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            className="font-serif font-light text-[#C8BFB2] tracking-wide anim-fade-up-d1"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
          >
            Maison Vereen was built for them.
          </p>

          {/* Supporting copy */}
          <p
            className="text-[#8A8070] font-light leading-[1.85] max-w-[500px] anim-fade-up-d2"
            style={{ fontSize: "13px", letterSpacing: "0.02em" }}
          >
            A House of Distinction. Africa&apos;s first. Not a perfume company. Not a brand.
            A house — built around the belief that the individuals who shape the world deserve
            something shaped for them. Something rare. Something permanent. Something worthy
            of their presence.
          </p>

          {/* CTA — appears after 3 seconds, subtle fade-in, never urgent */}
          <div
            className="pt-2 transition-all duration-1000 ease-out"
            style={{ opacity: showCTA ? 1 : 0, transform: showCTA ? "translateY(0)" : "translateY(8px)" }}
          >
            <button
              onClick={onOpenApply}
              className="border border-[#E8E2D9]/40 hover:border-[#C9A84C] hover:text-[#C9A84C] px-7 py-3 text-[#E8E2D9] transition-all duration-500 pointer-events-auto"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              aria-label="Join the Ownership Registry"
            >
              <span className="uppercase font-medium">Join the Ownership Registry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 group"
      >
        <div className="w-8 h-8 rounded-full border border-[#2A2420] group-hover:border-[#C9A84C]/50 flex items-center justify-center transition-all duration-300">
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none"
            className="text-[#3A3028] group-hover:text-[#C9A84C] transition-colors duration-300">
            <path d="M5 1v8M1 5l4 4 4-4" stroke="currentColor" strokeWidth="1.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </section>
  );
}
