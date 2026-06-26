"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import { articles } from "@/lib/journal";

export default function JournalPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── PAGE HEADER ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-16 md:py-20 lg:py-24 space-y-6">
            <span className="section-tag">Journal</span>
            <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
              The Journal of Maison Vereen{" "}
              <em className="not-italic block mt-2" style={{ color: "#C9A84C" }}>is not a blog. It is the house&apos;s intellectual record.</em>
            </h1>
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
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="group block bg-charcoal hover:bg-white/1.5 transition-colors duration-500 anim-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <article>
                    <div className="relative h-56 overflow-hidden bg-[#080808]">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{
                          backgroundImage: `url(${a.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: a.imagePos,
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
                    <div className="px-6 sm:px-7 pt-7 pb-9 space-y-3">
                      <h2 className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "19px" }}>
                        {a.title}
                      </h2>
                      <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "15px" }}>
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGISTRY CTA ── */}
        <section className="border-t border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-14 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p className="font-serif font-light italic text-[#4A4540] max-w-[500px]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
              &ldquo;Continue reading the house&apos;s story. Join the Registry.&rdquo;
            </p>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="shrink-0 border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Apply for Access</span>
            </button>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}