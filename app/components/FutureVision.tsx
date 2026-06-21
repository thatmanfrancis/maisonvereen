"use client";

import React from "react";
import { ShieldCheck, Layers, Eye } from "lucide-react";

interface FutureVisionProps {
  onOpenApply: () => void;
}

export default function FutureVision({ onOpenApply }: FutureVisionProps) {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Immutable Provenance",
      text: "Every bottle's numbered hallmark is registered on-chain and engraved into the hand-blown glass, creating an permanent audit trail of ownership.",
    },
    {
      icon: Layers,
      title: "Compounding Privilege",
      text: "Holding Edition I anchors your name in the founding registry, unlocking priority access to all future editions, spaces, and bespoke commissions.",
    },
    {
      icon: Eye,
      title: "The Lagos Archive",
      text: "Founding members receive lifetime access credentials to the physical Archive in Lagos, the future sanctuary and cultural laboratory of the House.",
    },
  ];

  return (
    <section
      id="future-vision"
      className="relative py-24 md:py-32 bg-charcoal border-t border-zinc-900 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* Split Grid: 250 Bottles & Institution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 250 Bottles */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-medium block">
              Permanent Allocation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-zinc-100 font-light leading-snug tracking-wide">
              Two hundred and fifty bottles. <br />
              <span className="italic text-gold font-light">
                One edition. No second chances.
              </span>
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-zinc-400 font-light leading-relaxed tracking-wider">
              <p>
                Edition I of Maison Vereen will exist exactly once. 250 numbered
                bottles — not per country, not per year. In the world. The
                production run is complete when it is complete. The edition
                retires when it is sold.
              </p>
              <p>
                Bottle 1 and Bottle 250 are equally permanent, equally rare,
                equally final. Owners of Edition I will hold the founding
                chapter of this house.
              </p>
            </div>
          </div>

          {/* Right Column: Future Institution */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-medium block">
              The Long Horizon
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-zinc-100 font-light leading-snug tracking-wide">
              We are not building a brand. <br />
              <span className="italic text-gold font-light">
                We are building an institution.
              </span>
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-zinc-400 font-light leading-relaxed tracking-wider">
              <p>
                Edition I is the beginning of a house that is designed to
                endure. Future editions. Future collections. Future
                collaborations. Future spaces. Each one building on the last.
              </p>
              <p>
                The house being built today will still be standing in fifty
                years. The only question is whether you were there when it
                started.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Circles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
          {highlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <div
                key={idx}
                className="space-y-4 p-4 hover:bg-charcoal-light/35 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center bg-gold/5">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-serif text-base text-zinc-200 font-light tracking-wide">
                  {hl.title}
                </h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed tracking-wide">
                  {hl.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
