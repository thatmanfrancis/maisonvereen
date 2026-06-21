"use client";

import React from "react";

interface AccessSectionProps {
  onOpenApply: () => void;
}

export default function AccessSection({ onOpenApply }: AccessSectionProps) {
  return (
    <section
      id="access"
      className="relative bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
    >
      {/* Radial amber glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: "20%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7 space-y-9">
            <span className="section-tag">Access</span>

            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Access is not purchased.
              <br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                It is earned.
              </em>
            </h2>

            <p
              className="text-[#7A7268] font-light leading-[1.85] max-w-[480px]"
              style={{ fontSize: "16px" }}
            >
              Maison Vereen is a house of rare creation. Edition I is limited to
              250 bottles. Access is by application only.
            </p>

            <div className="space-y-3 pt-1">
              <button
                onClick={onOpenApply}
                className="border hover:bg-white/5 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.26em",
                  borderColor: "rgba(201,168,76,0.5)",
                }}
              >
                <span className="uppercase font-medium">Apply for Access</span>
              </button>
              <p
                className="text-[#3A3530] font-light"
                style={{ fontSize: "16px" }}
              >
                Application does not guarantee allocation. All positions subject
                to review.
              </p>
            </div>
          </div>

          {/* Right — wax seal image (real photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url(/images/wax-seal.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.75,
                  filter: "brightness(0.65) saturate(0.8) sepia(0.15)",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#0D0D0D]/30 via-transparent to-[#0D0D0D]/50" />
              {/* MV text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-1">
                  <span
                    className="block font-serif font-light tracking-[0.35em]"
                    style={{ fontSize: "26px", color: "rgba(201,168,76,0.6)" }}
                  >
                    MV
                  </span>
                  <div
                    className="w-8 h-px mx-auto"
                    style={{ background: "rgba(201,168,76,0.25)" }}
                  />
                  <span
                    className="block uppercase tracking-[0.2em]"
                    style={{
                      fontSize: "16px",
                      color: "rgba(201,168,76,0.3)",
                      fontFamily: "monospace",
                    }}
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
