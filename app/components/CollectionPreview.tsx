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
          {/* ── LEFT — BOTTLE IMAGE full bleed, very dark atmospheric ── */}
          <div className="relative min-h-[500px] lg:min-h-[680px] overflow-hidden bg-[#060608]">
            <Image
              src="/images/fragrance-dark.jpg"
              alt="Maison Vereen Edition I — The Founding Expression"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ opacity: 0.75 }}
            />
            {/* Vignette — darkest at edges, shows product centre */}
            <div className="absolute inset-0 bg-linear-to-r from-[#060608]/60 via-transparent to-[#060608]/30" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/80 via-transparent to-[#060608]/40" />
            {/* Warm amber tint to match template */}
            <div className="absolute inset-0 bg-[#1A1000]/30 mix-blend-multiply" />

            {/* Bottom label */}
            <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
              <div className="w-5 h-px bg-gold/60" />
              <span
                className="block uppercase tracking-[0.25em] text-[#6A5E50]"
                style={{ fontSize: "16px" }}
              >
                No. 001 — 250
              </span>
              <span
                className="block font-serif font-light text-[#9A8E7A]"
                style={{ fontSize: "16px" }}
              >
                Edition I
              </span>
            </div>
          </div>

          {/* ── RIGHT — TEXT ── */}
          <div className="flex items-center px-10 md:px-16 lg:px-20 py-20 md:py-28 bg-charcoal">
            <div className="max-w-[400px] space-y-9">
              <span className="section-tag">Edition I</span>

              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                The Founding
                <br />
                Expression
              </h2>

              <div
                className="space-y-2.5 text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "16px" }}
              >
                <p>The first expression of Maison Vereen.</p>
                <p>A rare composition. A limited release.</p>
                <p>Only 250 bottles will ever be created.</p>
              </div>

              <div className="space-y-4 pt-1">
                <Link href="/edition-i" className="link-gold block w-fit">
                  <span>Explore Edition I</span>
                  <span className="text-gold">→</span>
                </Link>
                <button
                  onClick={onOpenApply}
                  className="block text-[#4A4438] hover:text-[#7A7068] transition-colors duration-300 border-b border-[#2A2820] hover:border-[#4A4438] pb-[2px] w-fit"
                  style={{ fontSize: "16px", letterSpacing: "0.24em" }}
                >
                  <span className="uppercase font-medium">Why Only 250</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
