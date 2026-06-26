"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Page 6 — THE FIRST 250

const ownershipItems = [
  "The Edition I bottle — hand-blown glass, African mineral inclusions, individually numbered, engraved.",
  "The Gold Ownership Card — 18-micron gold-plated metal, laser-engraved with owner name and bottle number, QR-authenticated.",
  "The Private Ownership Portal — personal digital archive, founder's video letter, edition provenance, authentication record.",
  "The Certificate of Authentication — security-printed, UV-reactive, holographic strip. Matches the bottle number.",
  "The Founder's Personal Letter — written for Edition I. Signed. Part of the edition's permanent record.",
  "Collector's Register entry — permanent documentation of ownership in the Maison Vereen founding archive.",
  "Priority access to Edition II — confirmed register members receive first access before any public announcement.",
];

export default function TheFirst250Page() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[540px] space-y-8">
                  <span className="section-tag">The First 250</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
                    Because rarity is a form of respect —{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>for the object and for its owners.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    250 was not chosen for scarcity&apos;s sake. It was chosen because the founding chapter of a house should be owned by people who understand its significance, not everyone who can afford it. There are more than 250 people in the world who can afford ₦400,000 on a fragrance. Not all of them are the founding-chapter type. The number 250 is a filter, not a ceiling.
                  </p>
                </div>
              </div>
              {/* Bottle — only the neck and cap visible at top */}
              <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 5%", opacity: 0.52, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/30 to-[#060608]/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 52% at 54% 16%, rgba(180,130,40,0.1) 0%, transparent 65%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>250 Bottles · Edition I</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE NUMBERED BOTTLES — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">The Numbered Bottles</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Your bottle number is permanent.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>So is your place in this story.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every bottle in Edition I carries a number: 1 through 250. That number is engraved into the glass. It is registered on the blockchain. It is inscribed on your Gold Ownership Card. It is in the founding documentation of this house.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Bottle 1 exists. Bottle 250 exists. Every number in between exists — exactly once, forever. When you own one, you own a specific position in a specific history. That is not metaphor. That is the architecture of the house.
                  </p>
                </div>
              </div>
              {/* Bottle — base/number detail crop, slightly angled */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 70%", opacity: 0.5, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/25 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 52% 60%, rgba(180,130,40,0.07) 0%, transparent 60%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>No. 001 — 250 · Edition I</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HISTORICAL SIGNIFICANCE — split layout ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Historical Significance</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    What is happening here has happened before.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>The people who recognized it early were glad they did.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The first people to own a Patek Philippe were not told it would become the most collected mechanical watch in history. They simply recognized something extraordinary and responded to it. The first owners of Hermès leatherwork did not know they were holding the beginning of a multigenerational house. But they were.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The first 250 owners of Maison Vereen Edition I are in the same position. We cannot tell you what this house will become. We can tell you it was built to become something.
                  </p>
                </div>
              </div>
              {/* Bottle — mid section, label area */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.49, filter: "brightness(0.57) saturate(0.37)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/22 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 42% 50% at 52% 32%, rgba(180,130,40,0.08) 0%, transparent 63%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── COLLECTOR VALUE — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              {/* Bottle left, text right — alternating rhythm */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 45%", opacity: 0.48, filter: "brightness(0.55) saturate(0.35)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/85 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 42% 48% at 48% 45%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Collector Value</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    The value of a founding edition is set by{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>the future of the house, not the present.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Edition I is priced at ₦400,000 today. Its secondary market value in five years depends entirely on what Maison Vereen becomes. If the house grows into what it is designed to become — Africa&apos;s most respected luxury house — Edition I will be its rarest artifact.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Not the most expensive. The most permanent. The most significant. The bottle owned by someone who was there first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT OWNERS RECEIVE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">What Owners Receive</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                Complete Edition I{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>Ownership Package.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4 max-w-[960px]">
              {ownershipItems.map((item, i) => (
                <div key={i} className="bg-[#0D0D0D] px-8 py-7 flex items-start gap-5 hover:bg-white/2 transition-colors duration-300">
                  <div className="shrink-0 w-4 h-px bg-gold/35 mt-[13px]" />
                  <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "16px" }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Secure Your Position in Edition I</span>
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
