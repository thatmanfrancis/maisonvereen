"use client";

import { useState } from "react";
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Page 15 — LEGACY (exact copy from document)

export default function LegacyPage() {

  return (
    <>
      <Header  />
      <main className="bg-charcoal">

        {/* ── OPENING — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[560px] space-y-10">
                  <span className="section-tag">Legacy</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}>
                    What makes it endure is not{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>the intention.</em>
                  </h1>
                  {/* Exact opening from document Page 15 */}
                  <p className="font-serif font-light text-[#7A7068] leading-[1.7]" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}>
                    Every institution that endures was once only an intention. What makes it endure is not the intention. It is the seriousness of the people who carried it forward.
                  </p>
                </div>
              </div>
              {/* Bottle — deep shadow, barely visible, maximum atmospheric treatment */}
              <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden bg-[#060506]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 12%", opacity: 0.44, filter: "brightness(0.52) saturate(0.32)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/58" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506]/94 via-[#060506]/35 to-[#060506]/15" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 46% 54% at 55% 20%, rgba(180,130,40,0.08) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE ARE BUILDING ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">What We Are Building</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}>
                    Not a brand.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>A permanent contribution.</em>
                  </h2>
                  {/* Exact copy from document Page 15 */}
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The greatest luxury houses in the world are not remembered because they were profitable. They are remembered because they were serious. Because the people who built them were building for something beyond the commercial moment. Because they refused to compromise the things that mattered most, even when compromise would have been easier and more profitable.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen is being built in that spirit. Not because we have earned the comparison yet. Because we have made the commitment. And commitment, held over decades, is what produces the thing you eventually call an institution.
                  </p>
                </div>
              </div>
              {/* Bottle — partial cap reveal, warm single light source */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 8%", opacity: 0.5, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 50% at 52% 22%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THIS HOUSE WILL MEAN ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">What This House Will Mean</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}>
                In ten years. In twenty.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>In fifty.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {[
                {
                  label: "In ten years",
                  body: "Maison Vereen will have produced multiple editions, each one a chapter in a growing mythology. The secondary market for Edition I will have told its own story. The Archive will be open. The house will be known — not everywhere, but in the rooms where the people this house was built for gather.",
                },
                {
                  label: "In twenty years",
                  body: "Maison Vereen will be the reference point for what African luxury looks like when it is built seriously. When historians write about the emergence of African luxury in the global market, they will have dates to cite. Maison Vereen Edition I will be one of them.",
                },
                {
                  label: "In fifty years",
                  body: "Maison Vereen will be older than most of the people reading this page right now. It will have produced more editions than anyone can count today. The 250 people who own Edition I will be in its founding record — permanently, irrevocably, as the individuals who were there first.",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-8 py-10 space-y-6 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="section-tag block">{item.label}</span>
                  <p className="text-[#6A6258] font-light leading-[1.85]" style={{ fontSize: "16px" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY BEGINNINGS MATTER — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              {/* Bottle on left — alternates rhythm from previous section */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 55%", opacity: 0.45, filter: "brightness(0.55) saturate(0.35)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 42% 48% at 48% 50%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Why Beginnings Matter</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}>
                    History does not remember the people who arrived{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>when everyone else did.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The founding owners of the great houses — Hermès, Rolex, Chanel, Patek Philippe — were not celebrated in their moment. They were simply people with the judgment to recognize something extraordinary before the world caught up. That is all. No special knowledge. No particular access. Just the ability to see something serious and respond to it seriously.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The founding owners of Maison Vereen are in the same position. The house is being built. The beginning is now. The question is not whether Maison Vereen will become something significant. The question is whether you will have been part of it from the beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT + CTA ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-24 md:py-36">
            <div className="max-w-[680px] mx-auto text-center space-y-12">
              <div className="w-8 h-px bg-gold/40 mx-auto" />
              {/* Exact closing statement from document Page 15 */}
              <p className="font-serif font-light text-[#C8BFB2] leading-[1.55]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}>
                We are building the house we always needed. We are building it with the seriousness it deserves. We are building it for the individuals who were always worthy of it. And we are building it to last.
              </p>
              <div className="w-8 h-px bg-gold/40 mx-auto" />
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-12 py-4 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-medium">Join the House. Begin the Story.</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
