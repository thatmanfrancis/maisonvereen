"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";

const features = [
  {
    title: "Limited to 250",
    body: "Not per year. Not per region. In the world, total, forever.",
  },
  {
    title: "Extrait de Parfum",
    body: "The highest concentration of fragrance. The most enduring expression.",
  },
  {
    title: "Hand-Finished",
    body: "Every bottle individually inspected, numbered, and authenticated by hand.",
  },
  {
    title: "Collector's Piece",
    body: "Designed as sculpture before vessel. An object worthy of permanence.",
  },
];

const notes = {
  top: ["Bergamot", "Pink Pepper", "Cardamom"],
  heart: ["Oud", "Iris", "Vetiver"],
  base: ["Amber", "Sandalwood", "Musk"],
};

export default function EditionIPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-charcoal">
        {/* ── HERO — split: text left, bottle image right ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
              {/* Left — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Collection One</span>
                  {/* Exact headline from document */}
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
                  >
                    The Founding
                    <br />
                    <em className="text-gold not-italic">Expression</em>
                  </h1>
                  <div
                    className="space-y-3 text-[#7A7268] font-light leading-[1.85]"
                    style={{ fontSize: "16px" }}
                  >
                    <p>A rare composition. A limited release.</p>
                    <p>Only 250 bottles will ever be created.</p>
                    <p>Each bottle is individually numbered.</p>
                    <p>Each one is a collector&apos;s piece.</p>
                  </div>
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
                  style={{ opacity: 0.8 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/30" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/75 via-transparent to-charcoal/20" />
                <div className="absolute inset-0 bg-[#1A1000]/20" />
                {/* Bottle label overlay */}
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/50" />
                  <span
                    className="block uppercase tracking-widest text-[#7A7068]"
                    style={{ fontSize: "16px" }}
                  >
                    Maison Vereen
                  </span>
                  <span
                    className="block uppercase tracking-widest text-[#5A5448]"
                    style={{ fontSize: "16px" }}
                  >
                    Edition I
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 FEATURE CARDS ── */}
        <section className="border-t border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 space-y-10">
            <span className="section-tag">The Object</span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-[#0D0D0D] px-7 py-10 space-y-4 hover:bg-white/2 transition-colors duration-300"
                >
                  <div className="w-5 h-px bg-gold/40" />
                  <h3
                    className="font-serif font-light text-[#C8C0B4] uppercase tracking-[0.12em]"
                    style={{ fontSize: "16px" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-[#5A5449] font-light leading-[1.7]"
                    style={{ fontSize: "16px" }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCENT PROFILE ── */}
        <section className="border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 space-y-12">
            <div className="space-y-4">
              <span className="section-tag">Scent Profile</span>
              <h2 className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}>
                A composition of permanence.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {(["Top Notes", "Heart Notes", "Base Notes"] as const).map(
                (label, i) => {
                  const key = (["top", "heart", "base"] as const)[i];
                  return (
                    <div key={i} className="bg-charcoal px-8 py-10 space-y-5">
                      <span className="text-xs uppercase tracking-[0.28em] text-[#5A5449] font-medium">
                        {label}
                      </span>
                      <ul className="space-y-2">
                        {notes[key].map((n) => (
                          <li
                            key={n}
                            className="font-serif font-light text-[#C8C0B4]"
                            style={{ fontSize: "16px" }}
                          >
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </section>

        {/* ── WHY 250 ── */}
        <section className="border-t border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 space-y-8 max-w-[720px]">
            <span className="section-tag">Why Only 250</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
            >
              Two hundred and fifty bottles.
              <br />
              <em className="text-gold not-italic">
                One edition. No second chances.
              </em>
            </h2>
            <p
              className="text-[#7A7268] font-light leading-[1.85]"
              style={{ fontSize: "16px" }}
            >
              Edition I of Maison Vereen will exist exactly once. 250 numbered
              bottles — not per country, not per year. In the world. The
              production run is complete when it is complete. The edition
              retires when it is sold.
            </p>
            <p
              className="text-[#7A7268] font-light leading-[1.85]"
              style={{ fontSize: "16px" }}
            >
              Bottle 1 and Bottle 250 are equally permanent, equally rare,
              equally final. Owners of Edition I will hold the founding chapter
              of this house.
            </p>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "16px", letterSpacing: "0.26em" }}
            >
              <span className="uppercase font-medium">Apply for Access</span>
            </button>
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
