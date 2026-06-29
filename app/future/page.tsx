"use client";

import { useState } from "react";
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Page 8 — THE FUTURE OF THE HOUSE

const futureItems = [
  {
    tag: "Future Editions",
    title: "Edition II",
    status: "In Development",
    body: "Edition II is already in development. Drawing from a different African region, with a different visual identity, a different bottle architecture, and a different chapter in the house's mythology. Each edition builds on the last. Owners of Edition I will always hold the founding chapter.",
    access: "Registry members receive first notification.",
  },
  {
    tag: "Edition III",
    title: "Edition III",
    status: "Concept Phase",
    body: "The third chapter of the house is in its conceptual phase. Details will not be announced until Edition II is complete. Registry members receive advance notice before any public announcement.",
    access: "Registry members receive first notification.",
  },
  {
    tag: "Collector Releases",
    title: "Collector Objects",
    status: "Planned",
    body: "Between editions, Maison Vereen will release collector objects — not fragrances, but objects that belong to the world of the house. These will be available exclusively to Registry members and will never enter general retail.",
    access: "Registry members only.",
  },
  {
    tag: "Private Experiences",
    title: "Curated Experiences",
    status: "Planned",
    body: "The house intends to offer curated private experiences to Registry members — in Lagos, and eventually internationally. These are not events. They are experiences designed to deepen the relationship between the individual and the house.",
    access: "Registry members.",
  },
  {
    tag: "The Archive",
    title: "The Lagos Archive",
    status: "Planned",
    body: "A permanent physical home for the house is planned — a space in Lagos that functions as both a creative atelier and a collector's institution. The Archive will display the complete founding history of the house and will be open to collectors and invited guests.",
    access: "Collectors and invited guests.",
  },
];

export default function FuturePage() {

  return (
    <>
      <Header  />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[540px] space-y-8">
                  <span className="section-tag">The Future of the House</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}>
                    We are not building for the current moment.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>We are building for the permanent record.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every decision made in the founding of Maison Vereen is made with one question: will this be the right decision in twenty years? The scarcity model. The authentication system. The collector ecosystem. The Africa positioning. The founder-led communication. None of these are tactics. They are architecture. The house is being built to last. That is not aspiration. It is design.
                  </p>
                </div>
              </div>
              {/* Bottle — top cap emerging from darkness */}
              <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 0%", opacity: 0.5, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/52" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/32 to-[#060608]/12" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 52% at 54% 15%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IS COMING ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">What Is Coming</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                We are not building a brand.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>We are building an institution.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {futureItems.map((item, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-8 py-10 space-y-5 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-baseline justify-between">
                    <span className="uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px", color: "rgba(201,168,76,0.6)" }}>{item.tag}</span>
                    <span className="uppercase tracking-[0.15em] text-[#3A3530]" style={{ fontSize: "9px" }}>{item.status}</span>
                  </div>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "20px" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>{item.body}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-3 h-px bg-gold/25" />
                    <span className="text-[#4A4438] font-light" style={{ fontSize: "13px" }}>{item.access}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING — split layout ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[48vh]">
              {/* Bottle on left */}
              <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 60%", opacity: 0.46, filter: "brightness(0.55) saturate(0.35)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 48% at 48% 58%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The people who are part of Maison Vereen in its founding decade are not buying into what it is. They are buying into what it will be. And we are building to be worthy of that trust.
                  </p>
                  <div className="border-t border-white/5 pt-8">
                    <div className="w-8 h-px bg-gold/40 mb-6" />
                    <p className="font-serif font-light italic text-[#5A5449]" style={{ fontSize: "clamp(1.15rem, 1.9vw, 1.45rem)" }}>
                      &ldquo;Edition I is the beginning of a house that is designed to endure. The house being built today will still be standing in fifty years. The only question is whether you were there when it started.&rdquo;
                    </p>
                  </div>
                  <Link
                    href="/access"
                    className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                    style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                  >
                    <span className="uppercase font-medium">Join the Registry</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
