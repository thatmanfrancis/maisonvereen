"use client";

import React from "react";

const articles = [
  {
    tag: "Culture",
    title: "The New Identity of African Luxury",
    excerpt:
      "A generation of creators is redefining what luxury means on the continent — not as aspiration, but as expression.",
    date: "June 2024",
    pos: "20%",
  },
  {
    tag: "Craft",
    title: "The Art of Craftsmanship",
    excerpt:
      "True craftsmanship is not about perfection. It is about the intention behind every decision, every material, every detail.",
    date: "May 2024",
    pos: "50%",
  },
  {
    tag: "Legacy",
    title: "Legacy Is Built in Silence",
    excerpt:
      "The things that endure are rarely announced. They are built carefully, consistently, over decades — without applause.",
    date: "April 2024",
    pos: "80%",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-5">
            <span className="section-tag">Journal</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Thoughts on Culture,
              <br />
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                Excellence &amp; Legacy.
              </em>
            </h2>
          </div>
          <button className="shrink-0 link-gold self-end">
            <span>Read Journal</span>
            <span style={{ color: "#C9A84C" }}>→</span>
          </button>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
          {articles.map((a) => (
            <article
              key={a.tag}
              className="group bg-charcoal cursor-pointer hover:bg-white/15 transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#080808]">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: "url(/images/journal-dark.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: `${a.pos} center`,
                    opacity: 0.6,
                    filter: "brightness(0.7) saturate(0.75)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute inset-0 bg-[#0A0600]/20" />
                <div className="absolute bottom-5 left-5 z-10">
                  <span
                    className="uppercase tracking-[0.2em] border px-2.5 py-1.5"
                    style={{
                      fontSize: "16px",
                      color: "rgba(201,168,76,0.7)",
                      borderColor: "rgba(201,168,76,0.2)",
                    }}
                  >
                    {a.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="px-7 pt-6 pb-8 space-y-3">
                <h3
                  className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300"
                  style={{ fontSize: "16px" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-[#5A5449] font-light leading-[1.7]"
                  style={{ fontSize: "16px" }}
                >
                  {a.excerpt}
                </p>
                <div className="pt-3 flex items-center justify-between">
                  <span
                    className="uppercase tracking-[0.22em] font-medium group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: "16px", color: "rgba(201,168,76,0.5)" }}
                  >
                    Read →
                  </span>
                  <span style={{ fontSize: "16px", color: "#3A3530" }}>
                    {a.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
