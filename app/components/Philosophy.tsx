"use client";

import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Intention",
    body: "Everything we create begins with deliberate purpose. No detail is incidental. No material is chosen without reason.",
  },
  {
    num: "02",
    title: "Craftsmanship",
    body: "We hold a standard of excellence that refuses to compromise. Genuine craft is not a feature — it is the foundation.",
  },
  {
    num: "03",
    title: "Rarity",
    body: "We do not manufacture scarcity. 250 bottles is a commitment to permanence, not a marketing strategy.",
  },
  {
    num: "04",
    title: "Presence",
    body: "There are people who walk into rooms and shift them. Not through volume. Through weight. We build for the weight-carriers.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-20">
        {/* ── SPLIT ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div className="space-y-8">
            <span className="section-tag">Philosophy</span>

            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1] tracking-[0.01em]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              We don&apos;t follow trends.
              <br />
              <em className="text-gold not-italic">We create timelessness.</em>
            </h2>

            <p
              className="text-[#7A7268] font-light leading-[1.8] tracking-wide max-w-[440px]"
              style={{ fontSize: "16px" }}
            >
              True luxury is not loud. It is intentional. It is restrained. It
              is a standard of excellence that speaks for itself.
            </p>

            <Link href="/philosophy" className="link-gold">
              <span>Our Beliefs</span>
              <span className="text-gold">→</span>
            </Link>
          </div>

          {/* Right — dark atmospheric fragrance image */}
          <div className="relative h-[300px] md:h-[420px] overflow-hidden bg-[#060608]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/images/luxury-dark.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.55,
                filter: "brightness(0.7) saturate(0.65)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/80 via-transparent to-[#060608]/30" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/40" />
            <div className="absolute inset-0 bg-[#0A0800]/20" />
            {/* Corner accents */}
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((c, idx) => (
              <div
                key={idx}
                className={`absolute ${c} w-5 h-5`}
                style={{ borderColor: "rgba(201,168,76,0.2)" }}
              />
            ))}
          </div>
        </div>

        {/* ── FOUR PILLAR CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/6 divide-y sm:divide-y-0 sm:divide-x divide-white/6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative px-8 py-9 space-y-5 hover:bg-white/2 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-baseline justify-between">
                <h3
                  className="font-serif font-light text-[#C8C0B4] tracking-wide group-hover:text-[#E8E2D9] transition-colors duration-300"
                  style={{ fontSize: "16px" }}
                >
                  {p.title}
                </h3>
                <span className="font-mono text-gold/50 text-xs">{p.num}</span>
              </div>
              <p
                className="text-[#5A5449] font-light leading-[1.7] tracking-wide"
                style={{ fontSize: "16px" }}
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
