"use client";

// Section 6 of Page 1 — "The First 250 Bottles"
// Blueprint Screen 07: "250 fills the screen. The number is the hero."

interface FirstTwoFiftyProps {
  onOpenApply: () => void;
}

export default function FirstTwoFifty({ onOpenApply }: FirstTwoFiftyProps) {
  return (
    <section id="first-250" className="bg-[#060606] border-y border-white/5 overflow-hidden relative">
      {/* Ambient glow behind the number */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 600,
          background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-20 md:py-28 lg:py-36">
        <div className="max-w-[760px] mx-auto space-y-0">

          {/* The number — the hero of this section per blueprint */}
          <div className="text-center pb-8 md:pb-12">
            <span
              className="section-tag block mb-6"
            >
              The First 250 Bottles
            </span>
            <p
              className="font-serif font-light text-gold leading-none select-none"
              style={{ fontSize: "clamp(7rem, 22vw, 16rem)", letterSpacing: "-0.02em", opacity: 0.9 }}
            >
              250
            </p>
            <p
              className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-[#5A5449] font-medium mt-4"
              style={{ fontSize: "10px" }}
            >
              Not per country. Not per year. In the world. Forever.
            </p>
          </div>

          {/* Gold rule */}
          <div className="w-8 h-px bg-gold/40 mx-auto mb-12" />

          {/* Copy — centred, compressed */}
          <div className="text-center space-y-6 max-w-[580px] mx-auto">
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Two hundred and fifty bottles.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                One edition. No second chances.
              </em>
            </h2>
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
              Edition I of Maison Vereen will exist exactly once. 250 numbered
              bottles — not per country, not per year. In the world. The
              production run is complete when it is complete. The edition retires
              when it is sold.
            </p>
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
              Bottle 1 and Bottle 250 are equally permanent, equally rare,
              equally final. Owners of Edition I will hold the founding chapter
              of this house.
            </p>

            {/* Three factual statements — separated by gold rules */}
            <div className="space-y-0 border-t border-white/6 pt-8">
              {[
                "Bottle 1 exists. Bottle 250 exists. Every number between them exists exactly once.",
                "When Edition I closes, it is retired. No restock. No re-release.",
                "The owners of Edition I will hold the founding chapter of this house permanently.",
              ].map((stmt, i) => (
                <div key={i} className={`py-5 ${i < 2 ? "border-b border-white/6" : ""}`}>
                  <p className="text-[#6A6258] font-light leading-[1.75]" style={{ fontSize: "15px" }}>
                    {stmt}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-8 h-px bg-gold/40 mx-auto" />

            <button
              onClick={onOpenApply}
              className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Apply for Ownership</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
