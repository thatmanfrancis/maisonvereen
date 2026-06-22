"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WhyExists() {
  return (
    <section id="the-house" className="bg-[#0A0A0A] border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

          {/* Left — exact document copy */}
          <div className="flex items-center px-8 md:px-14 lg:px-16 py-20 md:py-28">
            <div className="space-y-8 max-w-[480px]">
              <span className="section-tag">Why Maison Vereen Exists</span>

              {/* Exact headline from document */}
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
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
                Every luxury fragrance house in the world was built by someone, somewhere, for
                a vision they could not find elsewhere. Chanel saw a woman the fashion world
                hadn&apos;t dressed yet. Hermès saw an object the market hadn&apos;t built yet.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
                We saw an individual the fragrance world had never celebrated. The builder. The
                visionary. The founder. The creator. The leader who moves without permission.
                The individual whose presence is felt before they speak. No fragrance house was
                built for this person.
              </p>
              <p className="font-serif font-light italic" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "#C9A84C" }}>
                Until now.
              </p>

              <Link href="/the-house" className="link-gold w-fit">
                <span>The House</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>

          {/* Right — dark architecture image — fully dark silhouette treatment */}
          <div className="relative min-h-[380px] lg:min-h-0 overflow-hidden bg-[#060608]">
            <Image src="/images/dark-architecture.jpg" alt="The vision behind Maison Vereen"
              fill sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ opacity: 0.48, filter: "brightness(0.5) saturate(0.4)" }} />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0A0A0A]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/70 via-transparent to-[#060608]/25" />
            {/* Subtle warm edge glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 50% at 60% 50%, rgba(140,100,20,0.06) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
