"use client";

interface FirstTwoFiftyProps {
  onOpenApply: () => void;
}

// Section 5 of Page 1 — "The First 250 Bottles"
export default function FirstTwoFifty({ onOpenApply }: FirstTwoFiftyProps) {
  return (
    <section id="first-250" className="bg-[#060606] border-y border-white/5 overflow-hidden relative">
      {/* Subtle radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32">
        <div className="max-w-[720px] mx-auto text-center space-y-10">
          {/* Thin gold rule */}
          <div className="w-8 h-px bg-gold/40 mx-auto" />

          <span className="section-tag block">The First 250 Bottles</span>

          {/* Exact headline from document Page 1 */}
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Two hundred and fifty bottles.{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              One edition. No second chances.
            </em>
          </h2>

          {/* Exact body copy from document Page 1 */}
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "17px" }}
          >
            Edition I of Maison Vereen will exist exactly once. 250 numbered
            bottles — not per country, not per year. In the world. The
            production run is complete when it is complete. The edition retires
            when it is sold.
          </p>
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "17px" }}
          >
            Bottle 1 and Bottle 250 are equally permanent, equally rare,
            equally final. Owners of Edition I will hold the founding chapter
            of this house.
          </p>

          {/* Thin gold rule */}
          <div className="w-8 h-px bg-gold/40 mx-auto" />

          {/* Single CTA — doc rule: one CTA per section, composed, never urgent */}
          <button
            onClick={onOpenApply}
            className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            <span className="uppercase font-medium">Apply for Ownership</span>
          </button>
        </div>
      </div>
    </section>
  );
}
