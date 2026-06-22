"use client";

import React from "react";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section
      id="founder-story"
      className="relative py-24 md:py-32 bg-charcoal border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-medium block">
                The Covenant of the House
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#EDEDED] font-light leading-snug tracking-wide">
                She didn&apos;t find the house she was looking for.{" "}
                <span className="block italic text-gold font-light mt-2">
                  So she built it.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-xs md:text-sm text-zinc-400 font-light leading-relaxed tracking-wider max-w-xl mx-auto lg:mx-0">
              <p>
                Some things are built because someone saw a gap in the market.
                Maison Vereen was built because someone saw a gap in the world.
                A world that had no house — no serious, permanent, beautifully
                made house — built to celebrate people who create, build, and
                lead without permission.
              </p>
              <p>
                She has spent years studying what it means to carry an aura.
                What it means to leave a room different from how you found it.
                And she decided the fragrance for that person should exist. That
                it should be African. That it should be numbered, permanent, and
                impossible to replicate.
              </p>
              <p>
                She is the founder of Maison Vereen. Her name is the
                house&apos;s covenant.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-900 max-w-xs mx-auto lg:mx-0">
              <span className="font-serif text-xs tracking-widest text-[#EDEDED] uppercase">
                The Founder of Maison Vereen
              </span>
            </div>
          </div>

          {/* Image Column - Low Light Profile */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-4/5 border border-gold/10 p-2 bg-charcoal-light">
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image
                  src="/images/founder.png"
                  alt="Founder of Maison Vereen portrait profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center opacity-70 hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Low-light vignette shadow gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/45" />
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30" />

              <div className="absolute bottom-6 right-6 text-xs uppercase tracking-widest text-zinc-400 font-mono">
                Lagos Studio Series / 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
