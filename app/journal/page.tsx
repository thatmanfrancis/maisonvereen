"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Page 9 — THE JOURNAL
// Exact 7 proposed first journal issues from document

const articles = [
  {
    issue: "Issue 01",
    tag: "Identity",
    title: "On Distinction — What It Is, Who Carries It, and Why It Cannot Be Purchased.",
    excerpt: "Not 'what fragrance do people want to wear?' The question that started Maison Vereen was different. Harder. More personal. What does the fragrance of someone who changes rooms smell like?",
    date: "June 2024",
    readTime: "6 min read",
  },
  {
    issue: "Issue 02",
    tag: "Craft",
    title: "The Craft Problem — Why Most Luxury Is Not Actually Crafted.",
    excerpt: "The word luxury has been borrowed, diluted, and redistributed until it covers almost everything. What remains when you remove the borrowed meaning? What does genuine craft actually look like?",
    date: "May 2024",
    readTime: "5 min read",
  },
  {
    issue: "Issue 03",
    tag: "Africa",
    title: "The African Luxury Moment — Why It Is Happening Now and What It Will Produce.",
    excerpt: "Africa is the youngest continent by median age. The fastest-growing consumer class. The source of more undocumented creative authority than perhaps any civilization in recent history.",
    date: "April 2024",
    readTime: "7 min read",
  },
  {
    issue: "Issue 04",
    tag: "Identity",
    title: "On Presence — The Difference Between Being Noticed and Being Felt.",
    excerpt: "Some people arrive in rooms with noise. Others arrive with weight. The difference is not volume. It is not charisma. It is something more fundamental — a quality that precedes the entry.",
    date: "March 2024",
    readTime: "5 min read",
  },
  {
    issue: "Issue 05",
    tag: "Luxury",
    title: "The Architecture of Scarcity — Why Limiting Production Is an Act of Respect.",
    excerpt: "250 was not chosen for scarcity's sake. It was chosen because the founding chapter of a house should be owned by people who understand its significance.",
    date: "February 2024",
    readTime: "6 min read",
  },
  {
    issue: "Issue 06",
    tag: "Legacy",
    title: "Legacy vs. Success — Why Builders Who Think in Decades Build Differently.",
    excerpt: "The houses she admires most were built by people who were not thinking about next quarter. They were thinking about next century. She is building with the same intention.",
    date: "January 2024",
    readTime: "5 min read",
  },
  {
    issue: "Issue 07",
    tag: "Legacy",
    title: "What Maison Vereen Was Built to Prove — And What Proving It Requires.",
    excerpt: "Edition I is the beginning of a house that is designed to endure. The only question is whether you were there when it started.",
    date: "December 2023",
    readTime: "4 min read",
  },
];

const IMAGES = [
  { src: "/images/dark-stone.jpg", pos: "30% center" },
  { src: "/images/luxury-dark.jpg", pos: "50% center" },
  { src: "/images/dark-architecture.jpg", pos: "40% center" },
  { src: "/images/journal-dark.jpg", pos: "20% center" },
  { src: "/images/dark-stone.jpg", pos: "70% center" },
  { src: "/images/luxury-dark.jpg", pos: "60% center" },
  { src: "/images/dark-architecture.jpg", pos: "35% center" },
];

export default function JournalPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── PAGE HEADER — exact doc copy Page 9 ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-24 space-y-6">
            <span className="section-tag">Journal</span>
            <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
              The Journal of Maison Vereen{" "}
              <em className="not-italic block mt-2" style={{ color: "#C9A84C" }}>is not a blog. It is the house&apos;s intellectual record.</em>
            </h1>
            {/* Exact intro from document Page 9 */}
            <p className="text-[#7A7068] font-light leading-[1.85] max-w-[680px]" style={{ fontSize: "17px" }}>
              Here, we write about the things we think about — which are the same things the people this house was built for think about. Distinction. Excellence. Craft. The relationship between identity and what we choose to own. The African creative moment and what it means for luxury. The nature of legacy. The difference between success and significance.
            </p>
            <p className="text-[#7A7068] font-light leading-[1.85] max-w-[680px]" style={{ fontSize: "17px" }}>
              These are not lifestyle posts. They are essays. Written with the belief that the people who read them are serious thinkers who deserve serious content.
            </p>
          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {articles.map((a, i) => (
                <article
                  key={i}
                  className="group bg-charcoal cursor-pointer hover:bg-white/1.5 transition-colors duration-500 anim-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="relative h-56 overflow-hidden bg-[#080808]">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: `url(${IMAGES[i % IMAGES.length].src})`,
                        backgroundSize: "cover",
                        backgroundPosition: IMAGES[i % IMAGES.length].pos,
                        opacity: 0.48,
                        filter: "brightness(0.52) saturate(0.45) sepia(0.08)",
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/92 via-charcoal/25 to-transparent" />
                    <div className="absolute bottom-5 left-6 z-10 flex items-center gap-3">
                      <span className="uppercase tracking-[0.2em] border px-2 py-1" style={{ fontSize: "10px", color: "rgba(201,168,76,0.7)", borderColor: "rgba(201,168,76,0.22)" }}>
                        {a.tag}
                      </span>
                      <span className="font-mono text-[#4A4438]" style={{ fontSize: "9px" }}>{a.issue}</span>
                    </div>
                  </div>
                  <div className="px-7 pt-7 pb-9 space-y-3">
                    <h2 className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "19px" }}>
                      {a.title}
                    </h2>
                    <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                      {a.excerpt}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-white/4">
                      <span className="uppercase tracking-[0.22em] font-medium group-hover:text-gold transition-colors duration-300" style={{ fontSize: "11px", color: "rgba(201,168,76,0.45)" }}>
                        Read →
                      </span>
                      <div className="flex items-center gap-3 text-[#3A3530]" style={{ fontSize: "11px" }}>
                        <span>{a.date}</span>
                        <span>·</span>
                        <span>{a.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGISTRY CTA — from document Page 9 ── */}
        <section className="border-t border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="font-serif font-light italic text-[#4A4540] max-w-[500px]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
              &ldquo;Continue reading the house&apos;s story. Join the Registry.&rdquo;
            </p>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="shrink-0 border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Join the Registry</span>
            </button>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
