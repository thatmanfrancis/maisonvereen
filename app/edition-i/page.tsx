"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";

export default function EditionIPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-[#0A0A0A]">

        {/* ── HERO — text left, bottle right ── */}
        <section className="pt-[72px] border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">

              {/* Left — exact doc copy */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Collection One</span>
                  {/* Exact headline from document */}
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
                  >
                    Collection One.{" "}
                    <em className="not-italic block mt-2 text-[#C8BFB2]"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}>
                      250 numbered bottles.
                    </em>
                    <em className="not-italic block" style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)", color: "#C9A84C" }}>
                      The first chapter begins.
                    </em>
                  </h1>

                  {/* Exact body copy from document */}
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
                    Edition I of Maison Vereen is not a product launch. It is the opening of a house.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
                    250 bottles will exist — in the world, total, forever. Each one individually
                    numbered. Each one authenticated. Each one owned by someone who understood what
                    it meant to be first.
                  </p>

                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-7 py-3 text-[#E8E2D9] transition-all duration-500"
                    style={{ fontSize: "10px", letterSpacing: "0.26em" }}
                  >
                    <span className="uppercase font-medium">Discover Collection One</span>
                  </button>
                </div>
              </div>

              {/* Right — bottle: SILHOUETTE ONLY — anticipation not unveiling */}
              <div className="relative min-h-[420px] lg:min-h-0 bg-[#060608] overflow-hidden">
                {/* Very low opacity + heavy blur = suggestion only */}
                <Image src="/images/hero-bottle.png" alt="Maison Vereen Edition I bottle"
                  fill priority sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.20, filter: "blur(8px) brightness(0.35) saturate(0.2)" }} />
                <div className="absolute inset-0 bg-gradient-to-l from-[#060608]/30 via-transparent to-[#0A0A0A]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-[#060608]/40 to-[#060608]/15" />
                {/* Single warm light source at centre — the "single light source" from doc */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse 35% 50% at 60% 40%, rgba(180,130,40,0.10) 0%, transparent 65%)",
                  }}
                />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-[#C9A84C]/35" />
                  <span className="block font-mono text-[#4A4438] uppercase tracking-widest" style={{ fontSize: "8px" }}>
                    Maison Vereen · Edition I
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE FIRST 250 BOTTLES ── */}
        <section className="border-b border-white/[0.05] bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-8 max-w-[760px]">
            <span className="section-tag">The First 250 Bottles</span>
            {/* Exact headline from document */}
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Two hundred and fifty bottles. One edition.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>No second chances.</em>
            </h2>
            {/* Exact copy from document */}
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
              Edition I of Maison Vereen will exist exactly once. 250 numbered bottles — not per
              country, not per year. In the world. The production run is complete when it is
              complete. The edition retires when it is sold.
            </p>
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
              Bottle 1 and Bottle 250 are equally permanent, equally rare, equally final.
              Owners of Edition I will hold the founding chapter of this house.
            </p>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-7 py-3 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "10px", letterSpacing: "0.26em" }}
            >
              <span className="uppercase font-medium">Apply for Ownership</span>
            </button>
          </div>
        </section>

        {/* ── SCENT PROFILE ── */}
        <section className="border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 space-y-10">
            <div className="space-y-4">
              <span className="section-tag">Scent Profile</span>
              <h2 className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}>
                A composition of permanence.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
              {[
                { label: "Top Notes",   notes: ["Bergamot", "Pink Pepper", "Cardamom"] },
                { label: "Heart Notes", notes: ["Oud", "Iris", "Vetiver"] },
                { label: "Base Notes",  notes: ["Amber", "Sandalwood", "Musk", "Vanilla"] },
              ].map((section) => (
                <div key={section.label} className="bg-[#0A0A0A] px-8 py-10 space-y-5">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-[#4A4438] font-medium">
                    {section.label}
                  </span>
                  <ul className="space-y-2">
                    {section.notes.map((n) => (
                      <li key={n} className="font-serif font-light text-[#C8C0B4]" style={{ fontSize: "15px" }}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
