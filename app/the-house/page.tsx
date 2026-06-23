"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

// Page 2 — THE HOUSE: Five Principles (exact from document)
const principles = [
  {
    num: "01",
    title: "Rarity is not manufactured.",
    body: "We do not create scarcity for effect. 250 bottles is not a marketing strategy. It is a commitment to permanence over volume.",
  },
  {
    num: "02",
    title: "Distinction is not sold. It is recognized.",
    body: "The house serves those who already carry it. We do not promise to make anyone more distinguished.",
  },
  {
    num: "03",
    title: "Craft is non-negotiable.",
    body: "Every material, every element, every experience connected to Maison Vereen must be genuinely extraordinary. No exceptions.",
  },
  {
    num: "04",
    title: "Africa is the origin, not the limitation.",
    body: "The house was born on this continent because this continent has produced the kind of people this house was built for. That origin is the story, not the asterisk.",
  },
  {
    num: "05",
    title: "The house is built for decades.",
    body: "Every decision is made with the question: will we be proud of this in twenty years? If the answer is uncertain, the answer is no.",
  },
];

export default function TheHousePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — Page 2: "A House is not a company. It is a position." ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[520px]">
                  <span className="section-tag">The House</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
                  >
                    A House is not a company.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      It is a position.
                    </em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Companies sell products. Houses carry meaning. The distinction matters because it changes everything — what we build, who we build it for, how long we intend it to last, and what we refuse to compromise to keep it alive.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen is a luxury identity house. Our first offering is a fragrance. Our permanent offering is a philosophy: that the individuals who shape the world deserve a house that recognizes them — not attempts to create them.
                  </p>
                  <Link href="/philosophy" className="link-gold w-fit">
                    <span>Our Philosophy</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-0 bg-[#060608] overflow-hidden">
                {/* Bottle — partial reveal, cropped from top, the cap/neck only — never the full form */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/hero-bottle.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 15%",
                    opacity: 0.55,
                    filter: "brightness(0.6) saturate(0.4)",
                  }}
                />
                {/* Heavy gradient — bottle never fully revealed */}
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/30 to-[#060608]/15" />
                {/* Warm amber glow — single light source */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 60% at 55% 30%, rgba(180,130,40,0.09) 0%, transparent 65%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-ICON PILLARS BAR — from screenshot layout, copy from doc Page 2 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.9"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="0.9"/><path d="M2 12h20M4.5 6.5C6.8 8 9.3 9 12 9s5.2-1 7.5-2.5M4.5 17.5C6.8 16 9.3 15 12 15s5.2 1 7.5 2.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Heritage",
                  sub: "Rooted in Africa. Created for the world.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/></svg>,
                  label: "Excellence",
                  sub: "We pursue the highest standards in every creation.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  label: "Authenticity",
                  sub: "We stay true to our identity and our purpose.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/><path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Legacy",
                  sub: "We create for today. We are remembered for tomorrow.",
                },
              ].map((item, i) => (
                <div key={i} className="group px-7 py-10 flex flex-col items-center text-center gap-4 hover:bg-white/2 transition-colors duration-400">
                  <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-400">{item.icon}</div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <span className="uppercase tracking-[0.22em] text-[#8A8178] group-hover:text-[#C8C0B4] font-medium transition-colors duration-300" style={{ fontSize: "11px" }}>{item.label}</span>
                  <p className="text-[#3A3530] font-light leading-[1.6] group-hover:text-[#5A5449] transition-colors duration-300" style={{ fontSize: "13px" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY IT WAS CREATED — Page 2 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Why it was created</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                  Because the house that should have existed{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>didn&apos;t.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Walk into any luxury fragrance counter in any city in the world. You will find houses built for aspiration — for who you want to become, what lifestyle you want to signal, what identity you want to purchase.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  What you will not find is a house built for who you already are. For the builder. The founder. The creator who needs no validation. The leader whose authority is not borrowed. This is the gap Maison Vereen was built to fill.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">The Meaning of Distinction</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                  Distinction is not an achievement.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>It is a characteristic.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Achievements can be listed. Distinction is felt. It is the quality in a person that makes a room rearrange itself when they enter. It is not performed. It is not purchased. It is carried.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen was built around the belief that this quality deserves to be recognized — not created, not simulated, not sold. The fragrance does not make you distinguished. The fragrance recognizes the distinction you already possess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IT MEANS TO BELONG — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              {/* Bottle left — alternates from hero */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 40%", opacity: 0.46, filter: "brightness(0.56) saturate(0.36)" }} />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/58" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 48% at 48% 42%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
              </div>
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">What it means to belong</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Belonging here is not about what you own.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>It is about who you are.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Ownership of Maison Vereen Edition I is not a transaction. It is a recognition. The House selected 250 individuals to carry the founding chapter. Those individuals are documented. Their bottle numbers are permanent. Their names are in the first chapter of something that is being built to last.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    To belong to the House is to be the kind of person who recognizes something significant before the world does. It has always been this way with the greatest houses. Early ownership is not luck. It is judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIVE PRINCIPLES — Page 2 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4">
              <span className="section-tag">What we stand for</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                Five principles.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>No compromises.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {principles.map((p, i) => (
                <div key={i} className="group bg-charcoal px-8 py-10 space-y-4 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-mono text-gold/40" style={{ fontSize: "10px" }}>{p.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "19px" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "16px" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO MAISON VEREEN SERVES — split layout ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Who Maison Vereen serves</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    You will know if this is for you.
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    We do not have a customer profile. We have a character profile.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The person Maison Vereen was built for has built something with their hands or their mind. They lead — formally or informally. They have a point of view they have never been willing to compromise. They think in decades. They have walked into rooms and shifted them without meaning to. They have been described as having a presence.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    We did not create this person. We recognized them. And we built a house worthy of the recognition.
                  </p>
                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                    style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                  >
                    <span className="uppercase font-medium">Apply for Access</span>
                  </button>
                </div>
              </div>
              {/* Bottle — lower body crop */}
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 75%", opacity: 0.47, filter: "brightness(0.57) saturate(0.36)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/22 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 52% 68%, rgba(180,130,40,0.07) 0%, transparent 62%)" }} />
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
