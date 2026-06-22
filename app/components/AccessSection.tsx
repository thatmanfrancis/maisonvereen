"use client";

import React from "react";

interface AccessSectionProps {
  onOpenApply: () => void;
}

export default function AccessSection({ onOpenApply }: AccessSectionProps) {
  return (
    <section id="access" className="relative bg-[#0D0D0D] border-t border-white/[0.05] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: "20%", top: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left — exact document copy: Waiting List CTA */}
          <div className="lg:col-span-7 space-y-8">
            <span className="section-tag">The Ownership Registry</span>

            {/* Exact headline from document */}
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
            >
              The Ownership Application{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>is open.</em>
            </h2>

            {/* Exact subheadline */}
            <p
              className="font-serif font-light text-[#C8BFB2]"
              style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
            >
              250 positions. Individually numbered. Not available to everyone.
            </p>

            {/* Exact body copy from document */}
            <div className="space-y-3 text-[#7A7268] font-light leading-[1.85] max-w-[540px]"
              style={{ fontSize: "13px" }}>
              <p>
                If you are reading this, you have found Maison Vereen before most people will.
              </p>
              <p>
                The Ownership Application for Edition I is currently open to a limited number
                of individuals. Applications are reviewed. Not every application is accepted.
                This is not a purchase form. It is an introduction.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <button
                onClick={onOpenApply}
                className="border hover:bg-white/[0.04] px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "10px", letterSpacing: "0.28em", borderColor: "rgba(201,168,76,0.5)" }}
              >
                <span className="uppercase font-medium">Begin Your Application</span>
              </button>
              {/* Exact CTA note from document */}
              <p className="text-[#3A3530] font-light" style={{ fontSize: "10px", letterSpacing: "0.02em" }}>
                Application does not guarantee allocation. All positions are subject to review.
              </p>
            </div>
          </div>

          {/* Right — wax seal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url(/images/wax-seal.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.7,
                  filter: "brightness(0.6) saturate(0.8) sepia(0.15)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/30 via-transparent to-[#0D0D0D]/55" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-1.5">
                  <span
                    className="block font-serif font-light tracking-[0.35em]"
                    style={{ fontSize: "26px", color: "rgba(201,168,76,0.55)" }}
                  >
                    MV
                  </span>
                  <div className="w-8 h-px mx-auto" style={{ background: "rgba(201,168,76,0.22)" }} />
                  <span
                    className="block uppercase tracking-[0.2em]"
                    style={{ fontSize: "7px", color: "rgba(201,168,76,0.28)", fontFamily: "monospace" }}
                  >
                    Est. MMXXIV
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
