"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";

// Page 4 — THE FOUNDER

export default function TheFounderPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── OPENING — split: text + founder image ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
              {/* Left — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28 order-2 lg:order-1">
                <div className="space-y-9 max-w-[520px]">
                  <span className="section-tag">The Founder</span>
                  {/* Opening statement — exact from document Page 4 */}
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                    She didn&apos;t find the house she was looking for.{" "}
                    <em className="block not-italic mt-3" style={{ color: "#C9A84C" }}>
                      So she built it.
                    </em>
                  </h1>
                  {/* Exact opening statement from doc Page 4 */}
                  <p className="font-serif font-light italic text-[#C8BFB2]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
                    &ldquo;I did not build Maison Vereen to compete with existing houses. I built it because the house I was looking for did not exist. And I needed it to.&rdquo;
                  </p>
                </div>
              </div>
              {/* Right — founder image: side profile, low light, looking away */}
              <div className="relative min-h-[500px] lg:min-h-0 overflow-hidden bg-[#060608] order-1 lg:order-2">
                <Image
                  src="/images/founder.png"
                  alt="Founder of Maison Vereen — side profile"
                  fill priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.75, filter: "brightness(0.62) saturate(0.5)" }}
                />
                {/* Single light source — from document design note */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 55% at 62% 32%, rgba(180,130,40,0.1) 0%, transparent 65%)" }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/85 via-[#060608]/25 to-[#060608]/20" />
                <div className="absolute inset-0 bg-linear-to-r from-charcoal/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/30" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>
                    The Founder of Maison Vereen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SHE STARTED — Page 4 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">Why She Started</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                She looked for it first.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>Then she built it.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                There was a version of this story where she found the house she was looking for — an existing fragrance built for the kind of woman she was becoming. Authoritative. Grounded. Building something serious in a world that had not finished deciding how seriously to take her.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                That house did not exist. Not in Paris. Not in London. Not anywhere she looked. Every great house she admired was built for a different version of a person she was not. So she built the version that was missing.
              </p>
            </div>
          </div>
        </section>

        {/* ── HER PHILOSOPHY — Page 4 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-[#060608]">
                {/* Bottle neck/cap — partial reveal from above, suggestion not disclosure */}
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 10%", opacity: 0.45, filter: "brightness(0.55) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 50% 25%, rgba(180,130,40,0.08) 0%, transparent 65%)" }} />
              </div>
              <div className="flex items-center px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Her Philosophy</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Luxury is not what you wear.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>It is what you project without trying.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    She has spent years thinking about the nature of presence. What it is. How it is built. Why some people carry rooms with them and others perform for rooms. Her conclusion: presence is not cultivated. It is revealed. And the objects that serve people with genuine presence should reveal, not perform.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen is the physical manifestation of that belief. A fragrance designed not to make you smell like someone. To smell like you — amplified, clarified, and permanent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT DRIVES HER — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">What Drives Her</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Not the market.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>The people the market ignores.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    She did not build Maison Vereen for a market gap. She built it for a person gap. The fragrance world has spent decades building products for aspiration — for the person you want to become. She spent years thinking about the person who does not need to become anyone. Who already is. Who has been overlooked by every house because their identity is not for sale.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    That is who Maison Vereen was built for. And she believes there are more of them than the market has noticed.
                  </p>
                </div>
              </div>
              {/* Bottle — mid-body crop, angled light */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 50%", opacity: 0.46, filter: "brightness(0.58) saturate(0.36)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/25 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 42% 50% at 52% 45%, rgba(180,130,40,0.07) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── HER VIEW ON LEGACY — split layout ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              {/* Bottle on left — varies rhythm */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 65%", opacity: 0.44, filter: "brightness(0.55) saturate(0.35)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 48% at 48% 60%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Her View on Legacy</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    She is building for people{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>she will never meet.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The houses she admires most were built by people who were not thinking about next quarter. They were thinking about next century. She is building with the same intention. Edition I will be owned by 250 people. Some of them will pass their bottles to their children. Some will be referenced in future discussions of African luxury that have not yet been written.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    She is building for those future moments — even the ones she cannot predict.
                  </p>
                  {/* Closing quote from document */}
                  <div className="border-t border-white/5 pt-8">
                    <div className="w-8 h-px bg-gold/40 mb-6" />
                    <p className="font-serif font-light italic text-[#5A5449]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
                      &ldquo;The measure of a house is not what it achieves in its founding decade. It is what it means in its founding century.&rdquo;
                    </p>
                  </div>
                </div>
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
