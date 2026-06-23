"use client";

import Image from "next/image";
import Link from "next/link";

interface CollectionPreviewProps {
  onOpenApply: () => void;
}

export default function CollectionPreview({
  onOpenApply,
}: CollectionPreviewProps) {
  return (
    <section id="edition-i" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — bottle image: SILHOUETTE ONLY — anticipation, not unveiling */}
          <div className="relative min-h-[500px] lg:min-h-[660px] overflow-hidden bg-[#060608]">
            {/* Bottle barely visible — heavy blur, very low opacity = pure suggestion */}
            <Image
              src="/images/hero-bottle.png"
              alt="Maison Vereen Edition I — The Founding Expression"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{
                opacity: 0.18,
                filter: "blur(2px) brightness(0.7) saturate(0.3)",
              }}
            />
            {/* Deep atmospheric layering */}
            <div className="absolute inset-0 bg-linear-to-t from-[#060608] via-[#060608]/60 to-[#060608]/20" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060608]/80 via-transparent to-[#060608]/40" />
            {/* Warm glow at centre — suggests the presence of the bottle */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 40% 60% at 55% 45%, rgba(180,130,40,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
              <div className="w-5 h-px bg-gold/40" />
              <span
                className="block font-mono text-[#4A4438] uppercase tracking-widest"
                style={{ fontSize: "13px" }}
              >
                No. 001 — 250 · Edition I
              </span>
              <span
                className="block text-[#3A3028] font-light"
                style={{ fontSize: "13px" }}
              >
                Coming.
              </span>
            </div>
          </div>

          {/* Right — exact document copy */}
          <div className="flex items-center px-10 md:px-16 lg:px-20 py-20 md:py-28 bg-charcoal">
            <div className="max-w-[420px] space-y-9">
              <span className="section-tag">Collection One</span>

              {/* Exact headline from document */}
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Collection One.
                <span
                  className="block font-serif font-light text-[#C8BFB2] mt-2"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}
                >
                  250 numbered bottles.
                </span>
                <span
                  className="block font-serif font-light mt-1"
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                    color: "#C9A84C",
                  }}
                >
                  The first chapter begins.
                </span>
              </h2>

              {/* Exact body copy from document */}
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                Edition I of Maison Vereen is not a product launch. It is the
                opening of a house.
              </p>
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                250 bottles will exist — in the world, total, forever. Each one
                individually numbered. Each one authenticated. Each one owned by
                someone who understood what it meant to be first.
              </p>

              <div className="space-y-4 pt-1">
                <Link href="/edition-i" className="link-gold block w-fit">
                  <span>Discover Collection One</span>
                  <span className="text-gold">→</span>
                </Link>
                <button
                  onClick={onOpenApply}
                  className="block text-[#4A4438] hover:text-[#7A7068] transition-colors duration-300 border-b border-[#2A2820] hover:border-[#4A4438] pb-[2px] w-fit"
                  style={{ fontSize: "9px", letterSpacing: "0.22em" }}
                >
                  <span className="uppercase font-medium">
                    Apply for Ownership
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
