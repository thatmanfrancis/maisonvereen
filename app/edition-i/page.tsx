"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";

// Page 5 — COLLECTION ONE

const ownershipItems = [
  "The Edition I bottle — hand-blown glass, African mineral inclusions, individually numbered, engraved.",
  "The Gold Ownership Card — 18-micron gold-plated metal, laser-engraved with owner name and bottle number, QR-authenticated.",
  "The Private Ownership Portal — personal digital archive, founder's video letter, edition provenance, authentication record.",
  "The Certificate of Authentication — security-printed, UV-reactive, holographic strip. Matches the bottle number.",
  "The Founder's Personal Letter — written for Edition I. Signed. Part of the edition's permanent record.",
  "Collector's Register entry — permanent documentation of ownership in the Maison Vereen founding archive.",
  "Priority access to Edition II — confirmed register members receive first access before any public announcement.",
];

// const notes = {
//   top: ["Bergamot", "Pink Pepper", "Cardamom"],
//   heart: ["Oud", "Iris", "Vetiver"],
//   base: ["Amber", "Sandalwood", "Musk"],
// };

export default function EditionIPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO — "The first chapter is always the most significant." ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Collection One</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}>
                    The first chapter is always{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>the most significant.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Collection One is not Maison Vereen&apos;s debut. It is Maison Vereen&apos;s declaration. A statement about who we are, what we believe, and what we intend to build. Everything that follows will build on what begins here.
                  </p>
                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                    style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                  >
                    <span className="uppercase font-medium">Apply for Ownership of Collection One</span>
                  </button>
                </div>
              </div>
              {/* Bottle — silhouette only, anticipation not unveiling */}
              <div className="relative min-h-[420px] lg:min-h-0 bg-[#060608] overflow-hidden">
                <Image
                  src="/images/the bottle.png"
                  alt="Maison Vereen Edition I bottle"
                  fill priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.8 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/30" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/75 via-transparent to-charcoal/20" />
                <div className="absolute inset-0 bg-[#1A1000]/18" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 55% at 55% 40%, rgba(180,130,40,0.07) 0%, transparent 65%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/50" />
                  <span className="block uppercase tracking-widest text-[#7A7068]" style={{ fontSize: "10px" }}>Maison Vereen</span>
                  <span className="block uppercase tracking-widest text-[#5A5448]" style={{ fontSize: "10px" }}>Edition I — 250 Bottles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 FEATURE CARDS BAR — from screenshot layout, doc Page 5 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/4">
              {[
                { title: "Limited to 250", body: "Not per year. Not per region. In the world, total, forever." },
                { title: "Extrait de Parfum", body: "The highest concentration of fragrance. The most enduring expression." },
                { title: "Hand-Finished", body: "Every bottle individually inspected, numbered, and authenticated by hand." },
                { title: "Collector's Piece", body: "Designed as sculpture before vessel. An object worthy of permanence." },
              ].map((f, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-7 py-10 space-y-4 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-5 h-px bg-gold/40" />
                  <h3 className="font-serif font-light text-[#C8C0B4] uppercase tracking-[0.12em] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "16px" }}>
                    {f.title}
                  </h3>
                  <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "16px" }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSPIRATION — Page 5 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">Inspiration</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                Drawn from the continent.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>Expressed for the individual.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                Collection One was built around a single question: what does the presence of a person who has built something significant smell like? Not their success. Their presence. The quality that exists before achievement, that gives weight to the room before a word is spoken.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                The answer came from African raw materials — from regions whose natural characteristics produce a depth, a permanence, and an authority that cannot be manufactured elsewhere.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE FRAGRANCE — Page 5 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[760px]">
              <span className="section-tag">The Fragrance</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                A fragrance built for{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>the long game.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                Collection One opens with presence — not loudness. The opening is composed. It announces without announcing. The heart is where the African materials speak most clearly: deep, mineral, permanent, unlike anything produced in the standard global fragrance supply chain.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                The dry-down is the part that stays — the invisible signature that remains after everything performative has evaporated. Expected wear: 10–14 hours on skin. Performance has been tested across months, not weeks.
              </p>
            </div>
            {/* Scent notes */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {(["Top Notes", "Heart Notes", "Base Notes"] as const).map((label, i) => {
                const key = (["top", "heart", "base"] as const)[i];
                return (
                  <div key={i} className="bg-charcoal px-8 py-10 space-y-5">
                    <span className="uppercase tracking-[0.28em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>{label}</span>
                    <ul className="space-y-2">
                      {notes[key].map((n) => (
                        <li key={n} className="font-serif font-light text-[#C8C0B4]" style={{ fontSize: "20px" }}>{n}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div> */}
          </div>
        </section>

        {/* ── CRAFTSMANSHIP — Page 5 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">Craftsmanship</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                Built by a master.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>Finished by design.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                Collection One was developed in collaboration with a master perfumer. The collaboration was not brief. Not because the fragrance was difficult to create — because the fragrance had to be extraordinary. Difficulty was never the standard. Excellence was.
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTLE DESIGN — Page 5 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the bottle.png"
                  alt="Maison Vereen Edition I — bottle design"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.7 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 55% at 50% 45%, rgba(180,130,40,0.08) 0%, transparent 65%)" }} />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Bottle Design</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                    A sculpture that holds{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>something rare.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The bottle of Collection One was designed as an object before it was designed as a vessel. Hand-blown glass. African mineral inclusions embedded in the material — specific to the region the edition draws from. The result is a bottle that is never quite the same twice, because the material itself is never quite the same.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The base carries a hallmark unique to Edition I. The edition number and bottle number are engraved — not printed, not labeled, not stickered. Engraved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OWNERSHIP EXPERIENCE — Page 5 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">The Ownership Experience</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                Receiving it should feel like{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>receiving a title.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                Collection One arrives in a presentation that is designed as a ceremony, not packaging. The outer case. The inner reveal. The sealed authentication envelope. The unboxing of Collection One takes approximately three minutes if done correctly. Those three minutes are part of the product.
              </p>
            </div>
            {/* Ownership package list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4 max-w-[960px]">
              {ownershipItems.map((item, i) => (
                <div key={i} className="bg-[#0D0D0D] px-8 py-7 flex items-start gap-5 hover:bg-white/2 transition-colors duration-300">
                  <div className="shrink-0 w-4 h-px bg-gold/35 mt-[13px]" />
                  <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "16px" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATE OF AUTHENTICITY — from client blueprint ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              {/* Certificate image — displayed as museum artefact */}
              <div className="relative min-h-[480px] lg:min-h-0 overflow-hidden bg-[#080808] flex items-center justify-center p-8 md:p-12">
                {/* Subtle marble texture overlay */}
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />
                {/* Certificate image */}
                <div className="relative w-full max-w-[420px] mx-auto">
                  <div className="relative aspect-3/4 shadow-2xl" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.12)" }}>
                    <Image
                      src="/images/certificate.png"
                      alt="Maison Vereen Edition I — Certificate of Authenticity & Ownership"
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-contain"
                      style={{ opacity: 0.97 }}
                    />
                  </div>
                  {/* Museum caption */}
                  <p className="text-center uppercase tracking-[0.25em] text-[#4A4438] font-light mt-4" style={{ fontSize: "9px" }}>
                    Certificate of Authenticity &amp; Ownership — Edition I
                  </p>
                </div>
              </div>
              {/* Text — certificate details */}
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Certificate of Authenticity</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                    Numbered by hand.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>Authenticated for life.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every Edition I bottle is accompanied by a signed certificate of authenticity — security-printed, UV-reactive, holographic. It records the collector&apos;s name, the edition number, the bottle number, and the date of acquisition. A document designed to be kept for a century.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The certificate is permanently tied to its specific bottle number. It cannot be reproduced, replaced, or transferred independently of the bottle it was issued with. Ownership is documented, irreversible, and permanent.
                  </p>
                  {/* Certificate detail items */}
                  <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-8">
                    {[
                      { label: "Collector Name", value: "Engraved permanently" },
                      { label: "Edition Number", value: "01 / 250" },
                      { label: "Bottle Number", value: "Individual — 000001 to 000250" },
                      { label: "Authorized Signature", value: "Founder & Creative Director" },
                      { label: "Authentication", value: "UV-reactive · Holographic · Unique" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b border-white/5">
                        <span className="uppercase tracking-[0.2em] text-[#5A5449] font-medium shrink-0" style={{ fontSize: "10px" }}>{item.label}</span>
                        <span className="text-[#8A8178] font-light text-right" style={{ fontSize: "13px" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <span className="uppercase tracking-[0.25em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>
                      Est. 2025 · The Beginning of a Legacy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NUMBERING PHILOSOPHY ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Numbering Philosophy</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  Your number reflects{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>when you were recognised.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Numbers are assigned in the order applicants are formally accepted into the Founding Registry — meaning a bottle&apos;s number reflects not when it was purchased, but when its owner was recognised by the House. Early conviction is rewarded with early numbering.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Bottle 001 belongs to the first person the House accepted. Bottle 250 belongs to the last. Every number between them is equally permanent, equally authentic, and equally part of the founding record. But the lower the number, the earlier the belief.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">Why Edition I Will Never Return</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  The founding chapter does{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>not have a sequel.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen will not reissue, extend, or reproduce Edition I under any future circumstance, regardless of demand. This is not a marketing position. It is the same discipline that makes any founding edition, in any serious collectible category, worth holding in the first place.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  When the two hundred and fiftieth bottle is placed into a collector&apos;s hands, the edition closes permanently — not paused, not revisited in a future &ldquo;anniversary&rdquo; release, but closed, in the way a first edition of any serious work closes the moment its print run ends.
                </p>
                {/* Gravity number */}
                <div className="border border-white/6 bg-[#080808] px-6 py-6 text-center">
                  <p className="font-mono text-gold" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", letterSpacing: "0.1em" }}>250</p>
                  <p className="uppercase tracking-[0.3em] text-[#4A4438] font-medium mt-2" style={{ fontSize: "9px" }}>No More. Ever.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO IT WAS CREATED FOR + PRICE + CTA — Page 5 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">Who It Was Created For</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                You will know.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                We could write a description of the person this fragrance was created for. We have chosen not to. If you are reading this page and you recognize yourself in the philosophy of this house — if the language of this house sounds like a language you have been fluent in for years — then this was created for you. If you are not sure, it was probably not.
              </p>

              <div className="border-t border-white/5 pt-10 space-y-6">
                <span className="section-tag">What Makes It Rare</span>
                <h3 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}>
                  Not the price.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>The permanence.</em>
                </h3>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  The price of Collection One is ₦400,000. This is not the source of its rarity. The source of its rarity is permanence. When Edition I is sold — all 250 bottles — it is retired. The formula is never reproduced in this specific form. The bottle design is never repeated. The numbered sequence 1–250 is closed.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  The founders of this house have committed: what is made rare stays rare. That commitment is what makes ₦400,000 not a luxury price. An ownership price.
                </p>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                  style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                >
                  <span className="uppercase font-medium">Apply for Ownership of Collection One</span>
                </button>
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
