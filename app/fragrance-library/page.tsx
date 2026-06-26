"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

// Page 10 — THE FRAGRANCE LIBRARY

export default function FragranceLibraryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Fragrance Library</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
                    A fragrance house does not launch.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>It builds.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The Maison Vereen Fragrance Library is the permanent record of every edition and collection the house has created. It begins with one entry. It will grow with time, with intention, and without haste. Each entry in this library is permanent. Each one is a chapter. Each one is numbered.
                  </p>
                </div>
              </div>
              {/* Bottle — full atmospheric, mid-body */}
              <div className="relative min-h-[380px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 25%", opacity: 0.52, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/52" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/28 to-[#060608]/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 52% at 54% 28%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRENT ENTRY — Edition I ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-8">
            <span className="section-tag">Current Entry</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/4">
              <div className="bg-[#0D0D0D] px-10 py-12 space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-gold/50" style={{ fontSize: "10px" }}>001</span>
                  <span className="uppercase tracking-[0.2em] text-gold" style={{ fontSize: "10px" }}>In Allocation</span>
                </div>
                <h2 className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
                  Edition I
                </h2>
                <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                  250 bottles. The founding chapter. Currently in allocation.
                </p>
                <div className="space-y-2">
                  {[
                    ["Bottles", "250 — numbered 1 through 250"],
                    ["Status", "Currently in allocation"],
                    ["Access", "Application required"],
                    ["Price", "₦400,000"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline gap-4">
                      <span className="uppercase tracking-[0.2em] text-[#3A3530] shrink-0" style={{ fontSize: "9px" }}>{label}</span>
                      <span className="text-[#7A7068] font-light" style={{ fontSize: "16px" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/edition-i" className="link-gold w-fit">
                  <span>View Collection One</span>
                  <span className="text-gold">→</span>
                </Link>
              </div>

              {/* Future entries */}
              <div className="bg-charcoal space-y-px">
                {[
                  { num: "002", title: "Edition II", status: "In Development", note: "Registry members receive first notification." },
                  { num: "003", title: "Edition III", status: "Concept Phase", note: "Registry members receive first notification." },
                ].map((entry) => (
                  <div key={entry.num} className="bg-charcoal px-10 py-10 space-y-4 border border-white/4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[#3A3530]" style={{ fontSize: "10px" }}>{entry.num}</span>
                      <span className="uppercase tracking-[0.2em] text-[#3A3530]" style={{ fontSize: "9px" }}>{entry.status}</span>
                    </div>
                    <h3 className="font-serif font-light text-[#4A4438]" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}>
                      {entry.title}
                    </h3>
                    <p className="text-[#3A3028] font-light" style={{ fontSize: "16px" }}>
                      Details: Not yet announced.
                    </p>
                    <p className="text-[#3A3028] font-light" style={{ fontSize: "14px" }}>
                      {entry.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── REGISTRY CTA ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-[#7A7068] font-light leading-[1.85] max-w-[500px]" style={{ fontSize: "17px" }}>
              Registry members receive advance notice of all future editions before any public announcement.
            </p>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="shrink-0 border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Join the Registry for Early Access</span>
            </button>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
