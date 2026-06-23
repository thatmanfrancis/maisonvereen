"use client";

import Link from "next/link";

// Exact pillars from document — Page 1 Home, Philosophy section
const pillars = [
  {
    num: "I",
    title: "Authority",
    body: "The house was built for individuals who lead — in their industries, their families, their communities. Not because they were given authority. Because they earned it, or claimed it, or simply were it.",
  },
  {
    num: "II",
    title: "Presence",
    body: "There are people who walk into rooms and shift them. Not through volume. Through weight. Maison Vereen was built for the weight-carriers.",
  },
  {
    num: "III",
    title: "Legacy",
    body: "We build for people who think in decades. The founding edition of this house will be owned by people who understand what it means to be early to something that will matter.",
  },
  {
    num: "IV",
    title: "Distinction",
    body: "Not performance. Not image. Not carefully constructed impression. The real thing. The unmanufactured version. The self that exists before the room fills.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-16">
        {/* Header — exact doc copy */}
        <div className="space-y-6 max-w-[680px]">
          <span className="section-tag">The House Philosophy</span>
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            The fragrance is not the luxury.{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              You are.
            </em>
          </h2>
          <p
            className="font-serif font-light text-[#C8BFB2]"
            style={{ fontSize: "20px" }}
          >
            Maison Vereen does not create distinction. It celebrates it.
          </p>
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "15px" }}
          >
            We do not believe in selling people an identity. We believe in
            recognizing the identity they already carry. Our fragrance is not
            designed to make you feel like someone else. It is designed to make
            you smell like exactly who you already are — amplified, clarified,
            and impossible to forget.
          </p>
          <Link href="/philosophy" className="link-gold w-fit">
            <span>Read More</span>
            <span className="text-gold">→</span>
          </Link>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/6 divide-y sm:divide-y-0 sm:divide-x divide-white/6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative px-8 py-9 space-y-5 hover:bg-white/2 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-baseline justify-between">
                <h3
                  className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                  style={{ fontSize: "20px" }}
                >
                  {p.title}
                </h3>
                <span
                  className="font-serif text-gold/40"
                  style={{ fontSize: "15px" }}
                >
                  {p.num}
                </span>
              </div>
              <p
                className="text-[#5A5449] font-light leading-[1.7]"
                style={{ fontSize: "15px" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── CLOSING QUOTE ── */}
        <div className="border-t border-white/5 pt-14 text-center">
          <p
            className="font-serif font-light italic text-[#4A4540] tracking-[0.12em] uppercase"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)" }}
          >
            &ldquo;We create scents. You create history.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
