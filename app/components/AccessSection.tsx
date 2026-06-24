"use client";

// Section 9 of Page 1 — "Waiting List CTA"
// Exact copy from document Page 1, final section
interface AccessSectionProps {
  onOpenApply: () => void;
}

export default function AccessSection({ onOpenApply }: AccessSectionProps) {
  return (
    <section
      id="apply"
      className="relative bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
    >
      {/* Radial amber glow — single light source, subtle */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 py-28 md:py-40">
        <div className="max-w-[680px] mx-auto text-center space-y-10">
          <div className="w-8 h-px bg-gold/40 mx-auto" />

          <span className="section-tag block">Ownership Application</span>

          {/* Exact headline from document Page 1 — Waiting List CTA */}
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
          >
            The Ownership Application is open.
          </h2>

          {/* Exact subheadline from document Page 1 */}
          <p
            className="font-serif font-light text-[#C8BFB2]"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}
          >
            250 positions. Individually numbered. Not available to everyone.
          </p>

          {/* Exact body copy from document Page 1 */}
          <p
            className="text-[#7A7068] font-light leading-[1.85] max-w-[520px] mx-auto"
            style={{ fontSize: "17px" }}
          >
            If you are reading this, you have found Maison Vereen before most
            people will. The Ownership Application for Edition I is currently
            open to a limited number of individuals. Applications are reviewed.
            Not every application is accepted. This is not a purchase form. It
            is an introduction.
          </p>

          <div className="w-8 h-px bg-gold/40 mx-auto" />

          {/* Single CTA — doc: "Begin Your Application" */}
          <div className="space-y-4">
            <button
              onClick={onOpenApply}
              className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-12 py-4 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Begin Your Application</span>
            </button>
            {/* Exact small-type disclaimer from document */}
            <p
              className="text-[#3A3530] font-light"
              style={{ fontSize: "14px", letterSpacing: "0.12em" }}
            >
              Application does not guarantee allocation. All positions are subject to review.
            </p>
            <p className="text-[#3A3530] font-light" style={{ fontSize: "14px" }}>
              Not ready to apply?{" "}
              <a href="/waitlist" className="text-gold/50 hover:text-gold transition-colors">
                Join the waiting list →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
