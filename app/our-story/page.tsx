"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

// Page 3 — OUR STORY

export default function OurStoryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[580px] space-y-8">
                  <span className="section-tag">Our Story</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
                    It started with a question{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>no one was asking.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Not &lsquo;what fragrance do people want to wear?&rsquo; That question has been asked by every house, answered by every house, and produced a world of beautiful things that smell largely the same. The question that started Maison Vereen was different. Harder. More personal.
                  </p>
                  <p className="font-serif font-light text-[#C8BFB2] italic" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}>
                    &ldquo;What does the fragrance of someone who changes rooms smell like?&rdquo;
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Not someone who wants to change rooms. Not someone aspiring to authority. The real thing. The person who walks in and the conversation shifts. The person whose silence has weight. The person who leads without theater.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    That question had no answer in the existing market. So the answer had to be built.
                  </p>
                </div>
              </div>
              {/* Bottle — heavy shadow, only the top third visible */}
              <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 0%", opacity: 0.52, filter: "brightness(0.6) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/35 to-[#060608]/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 46% 55% at 55% 18%, rgba(180,130,40,0.1) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE VISION ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[520px]">
                  <span className="section-tag">The Vision</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.08]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                    Africa&apos;s first.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>The world&apos;s next.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The vision was never modest. It was never regional. It was never &lsquo;let&rsquo;s make a nice fragrance.&rsquo; The vision was Africa&apos;s first serious luxury fragrance house. Built to the standard of the world&apos;s greatest houses. Uncompromising in craft. Unapologetic in origin. Built to last long after the founders who started it.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    That vision required a decision: build something significant or build nothing at all. There is no middle version of Maison Vereen. The house is exactly what it says it is, or it does not exist.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                {/* Bottle — angled partial crop, cap emerging from shadow */}
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 20%", opacity: 0.48, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/65" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/25 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 55% at 55% 28%, rgba(180,130,40,0.08) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OBSESSION WITH EXCELLENCE — split layout ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">The Obsession with Excellence</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Three years. One edition.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>No shortcuts.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen Edition I was not built quickly. The fragrance was developed with a master perfumer whose credentials are not decoration. The raw materials were sourced specifically from African regions — not as a story, but because those materials produce a quality of scent that cannot be replicated from elsewhere.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The bottle was designed to be a sculpture before it is a vessel. The authentication system was built before the product was launched, not after.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    None of this was fast. None of it was cheap. All of it was necessary. The house was built the way you build something that is meant to be permanent. Without the shortcuts that shorten everything.
                  </p>
                </div>
              </div>
              {/* Bottle — close crop on cap/neck, heavy atmospheric treatment */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 5%", opacity: 0.52, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 50% at 52% 22%, rgba(180,130,40,0.08) 0%, transparent 65%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>Edition I</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY AFRICA — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              {/* Bottle on left this time — varies the rhythm */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608] order-2 lg:order-1">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 35%", opacity: 0.45, filter: "brightness(0.55) saturate(0.35)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/85 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 45% at 48% 40%, rgba(180,130,40,0.07) 0%, transparent 65%)" }} />
              </div>
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28 order-1 lg:order-2">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Why Africa</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Not in spite of where we are from.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>Because of it.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Africa is the youngest continent by median age. The fastest-growing consumer class. The source of more undocumented creative and intellectual authority than perhaps any civilization in recent history. The world is beginning to understand what those of us who built things on this continent have always known: the quality of mind that comes from building in difficult environments is exceptional.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen was not born in Lagos by accident. It was born here because this is where the people it was built for are building things. The house reflects the continent&apos;s ambition back at itself — with the seriousness it has always deserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE FUTURE BEING BUILT — split layout ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">The Future Being Built</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Edition I is the first word.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>Not the last.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The founding chapter of Maison Vereen will be Edition I. But the story does not end there. Edition II is already being conceived. The Archive — a permanent physical home for the house in Lagos — is planned. International expansion is part of the original vision.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The collectors who own Edition I will watch the house they helped found become something that the global luxury market will need to reckon with. That future is not a promise. It is a design. And it has already begun.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 pt-2">
                    <Link href="/edition-i" className="link-gold w-fit">
                      <span>Collection One</span>
                      <span className="text-gold">→</span>
                    </Link>
                    <button
                      onClick={() => setIsApplyOpen(true)}
                      className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-medium">Apply for Ownership</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Bottle — lower portion, base emerging */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 80%", opacity: 0.48, filter: "brightness(0.57) saturate(0.36)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/22 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 48% at 52% 75%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
