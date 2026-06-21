"use client";

import React from "react";

interface RegistryCTAProps {
  onOpenApply: () => void;
}

export default function RegistryCTA({ onOpenApply }: RegistryCTAProps) {
  return (
    <section
      id="apply"
      className="relative py-24 md:py-32 bg-cream text-charcoal overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Frame container */}
        <div className="relative border border-gold-dark/20 p-8 md:p-16 space-y-8 bg-beige/35">
          {/* Corner borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-dark/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-dark/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-dark/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-dark/40" />

          {/* Subtitle tag */}
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-dark font-medium block">
            Exclusive Ingress
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-light leading-tight tracking-wide">
            The Ownership Application <br />
            <span className="italic text-gold-dark font-light">is open.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest">
            250 Positions • Individually Numbered • Reviewed Allocations
          </p>

          {/* Copy */}
          <p className="text-xs md:text-sm text-charcoal/80 font-light leading-relaxed tracking-wider max-w-xl mx-auto">
            If you are reading this, you have found Maison Vereen before most people will. The Ownership Application for Edition I is currently open to a limited number of individuals. Applications are reviewed. Not every application is accepted. This is not a purchase form. It is an introduction.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={onOpenApply}
              className="px-10 py-4 bg-charcoal text-cream hover:bg-gold-dark hover:text-cream text-xs font-semibold tracking-widest uppercase transition-all duration-500 ease-out shadow-lg"
            >
              Begin Your Application
            </button>
            <span className="block text-xs text-zinc-500 font-light tracking-wide mt-3">
              Application does not guarantee allocation. All positions are subject to review.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
