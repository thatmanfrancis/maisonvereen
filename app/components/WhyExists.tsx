"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhyExists() {
  return (
    <section id="why-exists" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* ── SPLIT ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          {/* Left — text panel */}
          <div className="flex items-center px-8 md:px-14 lg:px-16 py-20 md:py-28">
            <div className="space-y-8 max-w-[520px]">
              <span className="section-tag">Why Maison Vereen Exists</span>

              {/* Exact headline from document — Page 1 Home */}
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                There was a gap.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  We built the house to fill it.
                </em>
              </h2>

              {/* Exact body copy from document */}
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                Every luxury fragrance house in the world was built by someone,
                somewhere, for a vision they could not find elsewhere. Chanel
                saw a woman the fashion world hadn&apos;t dressed yet. Hermès
                saw an object the market hadn&apos;t built yet. We saw an
                individual the fragrance world had never celebrated.
              </p>
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                The builder. The visionary. The founder. The creator. The
                leader who moves without permission. The individual whose
                presence is felt before they speak.
              </p>
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                No fragrance house was built for this person. Until now.
              </p>

              <Link href="/the-house" className="link-gold w-fit">
                <span>The House</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>

          {/* Right — dark architecture image */}
          <div className="relative min-h-[380px] lg:min-h-0 overflow-hidden bg-[#060608]">
            <Image
              src="/images/dark-architecture.jpg"
              alt="The vision behind Maison Vereen"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ opacity: 0.6 }}
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/40" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-[#060608]/20" />
            <div className="absolute inset-0 bg-[#120E08]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
