"use client";

import Image from "next/image";
import Link from "next/link";

export default function FounderStory() {
  return (
    <section
      id="founder-story"
      className="bg-charcoal border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
          {/* Left — image: side profile, low light, looking away — from document design note */}
          <div className="relative min-h-[440px] lg:min-h-0 overflow-hidden bg-[#060608] order-2 lg:order-1">
            <Image
              src="/images/founder.png"
              alt="Founder of Maison Vereen — side profile"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{
                opacity: 0.72,
                filter: "brightness(0.65) saturate(0.5)",
              }}
            />
            {/* Single light source from document: "A single light source. Deep shadows." */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 45% 55% at 60% 35%, rgba(180,130,40,0.09) 0%, transparent 65%)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/30 to-[#060608]/25" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060608]/50 via-transparent to-transparent" />

            {/* Bottle visible in background — slightly out of focus, from doc */}
            <div className="absolute bottom-8 right-8 space-y-1.5 z-10 text-right">
              <div className="w-5 h-px bg-gold/25 ml-auto" />
              <span
                className="block uppercase tracking-widest text-[#3A3028] font-light"
                style={{ fontSize: "9px" }}
              >
                The Founder of Maison Vereen
              </span>
            </div>
          </div>

          {/* Right — text: exact copy from document Page 1 and Page 4 */}
          <div className="flex items-center px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D] order-1 lg:order-2">
            <div className="space-y-9 max-w-[480px]">
              <span className="section-tag">The Covenant of the House</span>

              {/* Exact headline from document Page 1 */}
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                She didn&apos;t find the house she was looking for.{" "}
                <em
                  className="block not-italic mt-2"
                  style={{ color: "#C9A84C" }}
                >
                  So she built it.
                </em>
              </h2>

              {/* Exact copy from document Page 1 Founder Story */}
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                Some things are built because someone saw a gap in the market.
                Maison Vereen was built because someone saw a gap in the world.
                A world that had no house — no serious, permanent, beautifully
                made house — built to celebrate people who create things. People
                who build things. People who lead without being asked to.
              </p>
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                She has spent years studying what it means to carry an aura.
                What it means to leave a room different from how you found it.
                And she decided the fragrance for that person should exist. That
                it should be African. That it should be numbered and permanent
                and impossible to replicate. That its founding owners should
                feel what early ownership of something serious has always felt
                like.
              </p>
              <p
                className="text-[#7A7068] font-light leading-[1.85]"
                style={{ fontSize: "17px" }}
              >
                She is the founder of Maison Vereen. Her name is the
                house&apos;s covenant.
              </p>

              <Link href="/the-founder" className="link-gold w-fit">
                <span>The Founder</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
