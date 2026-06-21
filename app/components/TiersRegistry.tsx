"use client";

import React from "react";

interface TiersRegistryProps {
  onOpenApply: () => void;
}

export default function TiersRegistry({ onOpenApply }: TiersRegistryProps) {
  const tiers = [
    {
      title: "Registry Archive",
      number: "Tier 03",
      eligibility: "Applicants & Visionaries",
      description:
        "The entry register for approved applicants awaiting bottle allocations. Grants access to private digital archive chronicles, brand monographs, and collection previews before general release.",
    },
    {
      title: "Founding Registry",
      number: "Tier 02",
      eligibility: "Owners of Edition I",
      description:
        "Reserved exclusively for the 250 founding owners. Entails a permanent, immutable record on the registry, laser-engraved 18-micron Gold Ownership Card, and lifetime priority allocation for all future chapters.",
    },
    {
      title: "Covenant Circle",
      number: "Tier 01",
      eligibility: "Patrons of the House",
      description:
        "The highest assembly of the House, composed of selected collectors holding multiple authenticated allocations or historical releases. Entitles members to private annual salon dinners and co-curation panels.",
    },
  ];

  return (
    <section
      id="registry"
      className="relative py-24 md:py-32 bg-cream text-charcoal overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-6 text-center md:text-left mx-auto md:mx-0">
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-dark font-medium block">
            Maison Vereen Registry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-light leading-snug tracking-wide">
            Not a loyalty program. <br />
            <span className="italic text-gold-dark font-light">A founding circle.</span>
          </h2>
          <p className="text-xs md:text-sm text-charcoal/80 font-light leading-relaxed tracking-wider max-w-xl">
            The Maison Vereen Registry is not a newsletter. It is the permanent documentation of individuals who chose to be part of the founding of this house. Three tiers. Immutable records. Privileges that compound as the house grows.
          </p>
        </div>

        {/* Tiers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="border border-gold-dark/20 p-8 flex flex-col justify-between space-y-8 bg-beige/40 hover:bg-beige/90 hover:border-gold-dark/40 transition-all duration-500 group relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold-dark/20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-dark/20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold-dark/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-dark/20" />

              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-gold-dark/10 pb-4">
                  <span className="text-xs font-mono text-gold-dark font-semibold">
                    {tier.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                    {tier.eligibility}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl text-charcoal font-light tracking-wide">
                  {tier.title}
                </h3>
                
                <p className="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed tracking-wide">
                  {tier.description}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenApply}
                  className="w-full py-3 border border-gold-dark/30 hover:border-gold-dark text-gold-dark text-xs tracking-widest uppercase font-semibold hover:bg-gold-dark hover:text-cream transition-all duration-500 ease-out"
                >
                  Request Registration
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
