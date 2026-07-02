"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 13 — SOCIAL PROOF
// Elegant, evergreen framework for testimonials, press, and recognition
// Built to grow organically — nothing fabricated

const milestones = [
  {
    date: "2025",
    label: "Est.",
    title: "Maison Vereen Founded",
    body: "The House is established in Lagos, Nigeria — Africa's first luxury fragrance house built to the same uncompromising standard as the world's most respected maisons.",
  },
  {
    date: "2025",
    label: "Edition I",
    title: "Founding Registry Opens",
    body: "The Maison Vereen Founding Registry formally opens, accepting applications for the House's founding chapter — 250 individually numbered bottles, limited in perpetuity.",
  },
  {
    date: "Ongoing",
    label: "Growing",
    title: "The Registry Assembles",
    body: "Member by member, the founding generation of Maison Vereen takes shape. Each accepted applicant joins a permanent record that will be part of the House's history for as long as it exists.",
  },
];

// Placeholder testimonials — ready to populate as recognition arrives
const testimonialPlaceholders = [
  {
    quote: "This space is reserved for a reflection shared by a Founding Registry member.",
    attribution: "Founding Registry Member",
    location: "—",
    bottleNumber: null,
    placeholder: true,
  },
  {
    quote: "This space is reserved for a reflection shared by a collector.",
    attribution: "Collector",
    location: "—",
    bottleNumber: null,
    placeholder: true,
  },
  {
    quote: "This space is reserved for a reflection shared by a founding member.",
    attribution: "Founding Member",
    location: "—",
    bottleNumber: null,
    placeholder: true,
  },
];

export default function SocialProofPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[680px] space-y-8">
              <span className="section-tag">Recognition</span>
              <h1
                className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
              >
                Recognised by those{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  who know the difference.
                </em>
              </h1>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                This page exists as a living, growing record of recognition — collector testimonials, press coverage, and milestones — documented as the House&apos;s history, not displayed as advertising.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                At this stage, Maison Vereen carries its proof in the seriousness of its construction, the rigour of its founding process, and the individuals who have already chosen to be part of it. What appears below will grow honestly, as the House does.
              </p>
            </div>
          </div>
        </section>

        {/* ── HOUSE MILESTONES — chronological record ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">Press, Editorial &amp; Milestones</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
              >
                The unfolding record{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  of the House.
                </em>
              </h2>
              <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                A running record of milestones, notable events, and House history — displayed chronologically as the story of Maison Vereen continues to be written.
              </p>
            </div>

            <div className="relative max-w-[760px]">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/6" />
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-10 pb-12 last:pb-0 group">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full border border-gold/40 bg-[#0D0D0D] group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-gold/60" style={{ fontSize: "10px" }}>{m.date}</span>
                        <span className="uppercase tracking-[0.2em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>{m.label}</span>
                      </div>
                      <h3
                        className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                        style={{ fontSize: "20px" }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "15px" }}>
                        {m.body}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Future placeholder */}
                <div className="relative pl-10 group">
                  <div className="absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full border border-white/8 bg-[#0D0D0D]" />
                  <div className="space-y-2">
                    <span className="font-mono text-[#2A2520]" style={{ fontSize: "10px" }}>Future</span>
                    <p className="text-[#2A2520] font-light italic" style={{ fontSize: "15px" }}>
                      The story continues to be written.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLLECTOR & MEMBER REFLECTIONS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">Collector &amp; Member Reflections</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
              >
                Proof that does not{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  need to shout.
                </em>
              </h2>
              <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Reflections shared by Founding Registry members and collectors, presented as quoted excerpts with name, country, and bottle number — never as star ratings or review widgets. This section will populate as the House assembles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {testimonialPlaceholders.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#0D0D0D] px-8 py-10 space-y-6 relative flex flex-col"
                  style={{ opacity: t.placeholder ? 0.4 : 1 }}
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold/15" />
                  {/* Opening quote mark */}
                  <span
                    className="font-serif text-gold/20"
                    style={{ fontSize: "48px", lineHeight: 1 }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="font-serif font-light text-[#C8BFB2] italic leading-[1.6] flex-1"
                    style={{ fontSize: "17px" }}
                  >
                    {t.quote}
                  </p>
                  <div className="border-t border-white/5 pt-5 space-y-1.5">
                    <p className="text-[#6A6258] font-light" style={{ fontSize: "14px" }}>
                      — {t.attribution}
                    </p>
                    <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>
                      {t.location}
                    </p>
                    {t.bottleNumber && (
                      <p className="font-mono text-gold/50" style={{ fontSize: "10px" }}>
                        Bottle #{t.bottleNumber}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#3A3530] font-light italic max-w-[560px]" style={{ fontSize: "14px" }}>
              Nothing here will ever be fabricated or inflated. This section is built to grow honestly, even if that means starting quietly.
            </p>
          </div>
        </section>

        {/* ── PRESS & EDITORIAL PLACEHOLDER ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-10">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">Press &amp; Editorial</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
              >
                Recognition earned{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>quietly.</em>
              </h2>
              <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Press coverage, editorial features, and media recognition will be documented here as they arrive. For press inquiries, contact the House directly.
              </p>
            </div>

            {/* Press logos placeholder grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#0D0D0D] px-8 py-10 flex items-center justify-center"
                  style={{ opacity: 0.3 }}
                >
                  <div className="text-center space-y-2">
                    <div className="w-16 h-px bg-white/8 mx-auto" />
                    <p className="uppercase tracking-[0.25em] text-[#2A2520] font-medium" style={{ fontSize: "9px" }}>
                      Publication
                    </p>
                    <div className="w-16 h-px bg-white/8 mx-auto" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#3A3530] font-light" style={{ fontSize: "14px" }}>
              For press and editorial inquiries:{" "}
              <a href="mailto:press@maisonvereen.com" className="text-gold/50 hover:text-gold transition-colors">
                press@maisonvereen.com
              </a>
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#060608]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-[560px]">
              <p
                className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}
              >
                An institution is proven not by what it says about itself, but by what others say about it.
              </p>
              <p className="text-[#5A5449] font-light" style={{ fontSize: "17px" }}>
                This page will continue to grow. The House is being assembled now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/faq" className="link-gold">
                <span>Read Frequently Asked Questions</span>
                <span className="text-gold">→</span>
              </Link>
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Apply to the Founding Registry</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PAGE 13 → PAGE 14 transition */}
        <section className="bg-[#060608] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#3A3530]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Recognition answers some questions. Practical ones remain — and deserve clear answers.
            </p>
            <a href="/faq" className="inline-block mt-4 text-gold/40 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Read Frequently Asked Questions →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
