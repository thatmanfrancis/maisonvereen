"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";
import Link from "next/link";

// Exact copy from document — Page 2: THE HOUSE
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
        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[520px]">
                  <span className="section-tag">The House</span>
                  {/* Doc: "A House is not a company. It is a position." */}
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
                  >
                    A House is not a company.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      It is a position.
                    </em>
                  </h1>
                  <p
                    className="text-[#7A7068] font-light leading-[1.85]"
                    style={{ fontSize: "13px" }}
                  >
                    Companies sell products. Houses carry meaning. The
                    distinction matters because it changes everything — what we
                    build, who we build it for, how long we intend it to last,
                    and what we refuse to compromise to keep it alive.
                  </p>
                  <p
                    className="text-[#7A7068] font-light leading-[1.85]"
                    style={{ fontSize: "13px" }}
                  >
                    Maison Vereen is a luxury identity house. Our first offering
                    is a fragrance. Our permanent offering is a philosophy: that
                    the individuals who shape the world deserve a house that
                    recognizes them — not attempts to create them.
                  </p>
                  <Link href="/philosophy" className="link-gold w-fit">
                    <span>Our Philosophy</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-0 bg-[#060608] overflow-hidden">
                <Image
                  src="/images/dark-architecture.jpg"
                  alt="Maison Vereen — The House"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{
                    opacity: 0.5,
                    filter: "brightness(0.55) saturate(0.45)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-[#060608]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IT WAS CREATED ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Why it was created</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                >
                  Because the house that should have existed{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    didn&apos;t.
                  </em>
                </h2>
                <p
                  className="text-[#7A7068] font-light leading-[1.85]"
                  style={{ fontSize: "13px" }}
                >
                  Walk into any luxury fragrance counter in any city in the
                  world. You will find houses built for aspiration — for who you
                  want to become, what lifestyle you want to signal, what
                  identity you want to purchase.
                </p>
                <p
                  className="text-[#7A7068] font-light leading-[1.85]"
                  style={{ fontSize: "13px" }}
                >
                  What you will not find is a house built for who you already
                  are. For the builder. The founder. The creator who needs no
                  validation. The leader whose authority is not borrowed. This
                  is the gap Maison Vereen was built to fill.
                </p>
              </div>

              <div className="space-y-6">
                <span className="section-tag">Distinction</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                >
                  Distinction is not an achievement.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    It is a characteristic.
                  </em>
                </h2>
                <p
                  className="text-[#7A7068] font-light leading-[1.85]"
                  style={{ fontSize: "13px" }}
                >
                  Achievements can be listed. Distinction is felt. It is the
                  quality in a person that makes a room rearrange itself when
                  they enter. It is not performed. It is not purchased. It is
                  carried.
                </p>
                <p
                  className="text-[#7A7068] font-light leading-[1.85]"
                  style={{ fontSize: "13px" }}
                >
                  Maison Vereen was built around the belief that this quality
                  deserves to be recognized — not created, not simulated, not
                  sold. The fragrance does not make you distinguished. The
                  fragrance recognizes the distinction you already possess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MORE THAN A FRAGRANCE — dark split section from design ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              {/* Left — dark stone/luxury image */}
              <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-[#060608] order-2 lg:order-1">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/dark-stone.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.5,
                    filter: "brightness(0.55) saturate(0.4)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
              </div>
              {/* Right — text */}
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28 bg-[#0D0D0D] order-1 lg:order-2">
                <div className="space-y-6 max-w-[460px]">
                  <span className="section-tag">More Than a Fragrance</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                  >
                    More Than{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      a Fragrance
                    </em>
                  </h2>
                  <p
                    className="text-[#7A7068] font-light leading-[1.85]"
                    style={{ fontSize: "13px" }}
                  >
                    Every Maison Vereen fragrance is a story of place, people,
                    and purpose — carefully composed to evoke emotion, presence,
                    and lasting impact.
                  </p>
                  <p
                    className="text-[#7A7068] font-light leading-[1.85]"
                    style={{ fontSize: "13px" }}
                  >
                    This is more than a scent. This is a statement.
                  </p>
                  <Link href="/philosophy" className="link-gold w-fit">
                    <span>Our Philosophy</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BELONGING ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-8 max-w-[800px]">
            <span className="section-tag">What it means to belong</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Belonging here is not about what you own.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                It is about who you are.
              </em>
            </h2>
            <p
              className="text-[#7A7068] font-light leading-[1.85]"
              style={{ fontSize: "13px" }}
            >
              Ownership of Maison Vereen Edition I is not a transaction. It is a
              recognition. The House selected 250 individuals to carry the
              founding chapter. Those individuals are documented. Their bottle
              numbers are permanent. Their names are in the first chapter of
              something that is being built to last.
            </p>
            <p
              className="text-[#7A7068] font-light leading-[1.85]"
              style={{ fontSize: "13px" }}
            >
              To belong to the House is to be the kind of person who recognizes
              something significant before the world does. It has always been
              this way with the greatest houses. Early ownership is not luck. It
              is judgment.
            </p>
          </div>
        </section>

        {/* ── FIVE PRINCIPLES ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4">
              <span className="section-tag">What we stand for</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              >
                Five principles.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  No compromises.
                </em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="bg-charcoal px-8 py-10 space-y-4 hover:bg-white/2 transition-colors duration-300"
                >
                  <span
                    className="font-mono text-gold/40"
                    style={{ fontSize: "9px" }}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="font-serif font-light text-[#C8C0B4]"
                    style={{ fontSize: "14px" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[#5A5449] font-light leading-[1.7]"
                    style={{ fontSize: "11px" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO MV SERVES ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-8 max-w-[760px]">
            <span className="section-tag">Who Maison Vereen serves</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              You will know if this is for you.
            </h2>
            <p
              className="text-[#7A7068] font-light leading-[1.85]"
              style={{ fontSize: "13px" }}
            >
              We do not have a customer profile. We have a character profile.
            </p>
            <p
              className="text-[#7A7068] font-light leading-[1.85]"
              style={{ fontSize: "13px" }}
            >
              The person Maison Vereen was built for has built something with
              their hands or their mind. They lead — formally or informally.
              They have a point of view they have never been willing to
              compromise. They think in decades. They have walked into rooms and
              shifted them without meaning to. They have been described as
              having a presence.
            </p>
            <p
              className="text-[#7A7068] font-light leading-[1.85]"
              style={{ fontSize: "13px" }}
            >
              We did not create this person. We recognized them. And we built a
              house worthy of the recognition.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-7 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "16px", letterSpacing: "0.26em" }}
              >
                <span className="uppercase font-medium">Apply for Access</span>
              </button>
            </div>
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
