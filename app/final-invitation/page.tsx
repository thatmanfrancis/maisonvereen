"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 16 — FINAL INVITATION
// The site's ultimate conversion page — maximum accumulated trust, elegant closure

export default function FinalInvitationPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO — Full-bleed obsidian, returns to Page 1 visual language ── */}
        <section className="relative min-h-screen flex items-center justify-center border-b border-white/5 bg-[#060506]">
          {/* Background — atmospheric bottle silhouette */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/hero-bottle.png)",
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
              opacity: 0.25,
              filter: "brightness(0.5) saturate(0.3)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/98 via-[#060506]/80 to-[#060506]/92" />
          {/* Warm radial glow — very subtle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 pt-[72px]">
            <div className="max-w-[720px] mx-auto text-center py-28 md:py-36 space-y-10 flex flex-col items-center">
              {/* Eyebrow */}
              <span className="section-tag">The Final Invitation</span>

              {/* Main headline */}
              <h1
                className="font-serif font-light text-[#EDE7DC] leading-[1.05]"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
              >
                The founding chapter closes{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  when the last position does.
                </em>
              </h1>

              {/* Supporting statement */}
              <p
                className="font-serif font-light text-[#8A8070] italic leading-[1.6]"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
              >
                Two hundred and fifty bottles. Three hundred and fifty founding positions.
                One founding chapter that will not return.
              </p>

              {/* Gold rule */}
              <div className="w-12 h-px bg-gold/30" />

              {/* Body */}
              <div className="space-y-6 max-w-[600px] text-left">
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  You have read this far. That means something. The people this House was built for tend to recognise themselves in its language quickly — not because the writing is persuasive, but because the idea behind it is something they have understood for a long time without quite having a name for it.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Edition I. Two hundred and fifty individually numbered bottles, made from African materials that carry the depth of the continent that produced them, built with a master perfumer to a standard with no lower tier. Authenticated, documented, and permanent in a way most things sold in the world of luxury no longer are.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  The Founding Registry is open. Applying takes a matter of minutes, carries no financial obligation, and is read by a person. The question, ultimately, is not whether Maison Vereen will matter. It is whether you will have been part of it when it does.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
                <Link
                  href="/access"
                  className="inline-block bg-gold/90 hover:bg-gold px-12 py-4 text-charcoal transition-all duration-500 w-full sm:w-auto text-center"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                >
                  <span className="uppercase font-semibold">Apply to the Founding Registry</span>
                </Link>
                <Link
                  href="/fragrance-library"
                  className="inline-block border border-white/15 hover:border-gold/50 px-10 py-4 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500 w-full sm:w-auto text-center"
                  style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                >
                  <span className="uppercase font-medium">Discover the Signature Collection</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING AFFIRMATIONS — below the primary CTA ── */}
        <section className="bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20">
            <div className="max-w-[680px] mx-auto space-y-8">
              <div className="w-8 h-px bg-gold/20 mx-auto" />
              <h2
                className="font-serif font-light text-center text-[#4A4440]"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
              >
                Before you apply, you should know:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "○",
                    text: "The application is free and carries no financial obligation.",
                  },
                  {
                    icon: "○",
                    text: "Applications are reviewed personally within 24 to 48 hours.",
                  },
                  {
                    icon: "○",
                    text: "Your information is held privately and never shared.",
                  },
                  {
                    icon: "○",
                    text: "Applying does not guarantee a position — but it begins the conversation.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold/30 shrink-0 mt-0.5" style={{ fontSize: "10px" }}>
                      {item.icon}
                    </span>
                    <p className="text-[#4A4440] font-light leading-[1.7]" style={{ fontSize: "14px" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <p className="text-[#3A3530] font-light" style={{ fontSize: "14px" }}>
                  Questions before applying?{" "}
                  <a
                    href="mailto:hello@maisonvereen.com"
                    className="text-gold/50 hover:text-gold transition-colors"
                  >
                    hello@maisonvereen.com
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-center space-y-2">
                <p className="uppercase tracking-[0.3em] text-[#2A2520] font-medium" style={{ fontSize: "9px" }}>
                  Maison Vereen · Edition I · 250 Bottles · Lagos
                </p>
                <p className="uppercase tracking-[0.2em] text-[#2A2520] font-light" style={{ fontSize: "9px" }}>
                  A House of Distinction. Africa&apos;s First.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
