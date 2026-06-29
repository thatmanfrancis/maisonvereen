"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { articles, getArticle } from "@/lib/journal";

export default function ArticlePage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getArticle(slug);


  if (!article) return notFound();

  // Find prev/next articles for navigation
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      <Header  />

      <main className="bg-charcoal">

        {/* ── HERO IMAGE ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div
            className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-[#060606]"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${article.image})`,
                backgroundSize: "cover",
                backgroundPosition: article.imagePos,
                opacity: 0.55,
                filter: "brightness(0.52) saturate(0.42) sepia(0.08)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-[#060606]/40 via-transparent to-transparent" />

            {/* Tag + issue */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="max-w-[860px] mx-auto px-6 sm:px-8 md:px-14 pb-10 md:pb-14 space-y-4">
                <div className="flex items-center gap-4">
                  <span
                    className="uppercase tracking-[0.2em] border px-2.5 py-1"
                    style={{
                      fontSize: "10px",
                      color: "rgba(201,168,76,0.8)",
                      borderColor: "rgba(201,168,76,0.25)",
                    }}
                  >
                    {article.tag}
                  </span>
                  <span className="font-mono text-[#4A4438]" style={{ fontSize: "9px" }}>
                    {article.issue}
                  </span>
                </div>
                <h1
                  className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
                >
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 text-[#5A5449] font-light" style={{ fontSize: "12px" }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[860px] mx-auto px-6 sm:px-8 md:px-14 py-14 md:py-20">

            {/* Back link */}
            <Link
              href="/housebook"
              className="inline-flex items-center gap-2 text-[#5A5449] hover:text-gold transition-colors duration-300 mb-12 group"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  d="M13 5H1M1 5L5 1M1 5L5 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="uppercase font-medium">The HouseBook</span>
            </Link>

            {/* Gold rule */}
            <div className="w-8 h-px bg-gold/40 mb-10" />

            {/* Body paragraphs */}
            <div className="space-y-7">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-light leading-[1.95] text-[#9A9188]"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* End rule + issue stamp */}
            <div className="mt-14 pt-10 border-t border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="w-5 h-px bg-gold/30" />
                <span
                  className="block uppercase tracking-[0.3em] text-[#3A3530] font-medium"
                  style={{ fontSize: "9px" }}
                >
                  Maison Vereen HouseBook
                </span>
                <span
                  className="block uppercase tracking-[0.2em] text-[#2A2520]"
                  style={{ fontSize: "9px" }}
                >
                  {article.issue} · {article.date}
                </span>
              </div>
              <span
                className="font-serif text-[#2A2520] italic"
                style={{ fontSize: "12px" }}
              >
                A House of Distinction.
              </span>
            </div>
          </div>
        </section>

        {/* ── PREV / NEXT NAVIGATION ── */}
        {(prev || next) && (
          <section className="border-b border-white/5 bg-[#0D0D0D]">
            <div className="max-w-[1400px] mx-auto">
              <div className={`grid grid-cols-1 ${prev && next ? "sm:grid-cols-2" : ""} divide-y sm:divide-y-0 sm:divide-x divide-white/5`}>
                {prev && (
                  <Link
                    href={`/housebook/${prev.slug}`}
                    className="group flex flex-col gap-3 px-6 sm:px-8 md:px-14 py-10 hover:bg-white/2 transition-colors duration-300"
                  >
                    <span className="text-[#3A3530] uppercase tracking-[0.25em] font-medium flex items-center gap-2" style={{ fontSize: "10px" }}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M11 4H1M1 4L4 1M1 4L4 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Previous
                    </span>
                    <p
                      className="font-serif font-light text-[#5A5449] group-hover:text-[#C8C0B4] transition-colors duration-300 leading-snug"
                      style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                    >
                      {prev.title}
                    </p>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/housebook/${next.slug}`}
                    className={`group flex flex-col gap-3 px-6 sm:px-8 md:px-14 py-10 hover:bg-white/2 transition-colors duration-300 ${prev ? "sm:items-end sm:text-right" : ""}`}
                  >
                    <span className="text-[#3A3530] uppercase tracking-[0.25em] font-medium flex items-center gap-2" style={{ fontSize: "10px" }}>
                      Next
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 4H11M11 4L8 1M11 4L8 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="font-serif font-light text-[#5A5449] group-hover:text-[#C8C0B4] transition-colors duration-300 leading-snug"
                      style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                    >
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="bg-charcoal">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p
              className="font-serif font-light italic text-[#4A4540] max-w-[500px]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
            >
              &ldquo;Continue reading the house&apos;s story.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <Link
                href="/housebook"
                className="text-[#5A5449] hover:text-gold transition-colors duration-300 uppercase tracking-[0.22em] font-medium"
                style={{ fontSize: "11px" }}
              >
                ← All Issues
              </Link>
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Apply for Access</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
