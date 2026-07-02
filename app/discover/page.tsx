import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// STANDALONE — Shareable Discovery Page
// Not in main navigation. Designed for WhatsApp, email, QR code, LinkedIn, social.
// Same visual language as the rest of the site. No nav — logo only header.

export const metadata: Metadata = {
  title: "Maison Vereen — Africa's First Serious Luxury Fragrance House",
  description:
    "Two hundred and fifty bottles. One founding chapter. Africa's first serious luxury fragrance house. Founding Registry now open — by application only.",
  openGraph: {
    title: "Maison Vereen — Africa's First Serious Luxury Fragrance House",
    description:
      "Two hundred and fifty bottles. One founding chapter that will not return. Founding Registry now open.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Maison Vereen" }],
  },
  robots: { index: false, follow: false },
};

const ownershipItems = [
  "An individually numbered bottle — your number, permanently engraved",
  "A signed Certificate of Authenticity & Ownership",
  "The Founder's personal letter — written for Edition I, sealed",
  "Permanent entry in the Maison Vereen founding archive",
  "Priority access to all future editions before public announcement",
  "Recognition as a founding member for as long as the House exists",
];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#E8E2D9] flex flex-col">

      {/* ── LOGO-ONLY HEADER — same dimensions as main site Header ── */}
      <header className="w-full border-b border-white/5 bg-black/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 h-[100px] md:h-[125px] flex items-center justify-between">

          {/* Logo — exact same sizes as main Header component */}
          <Link href="/" className="group shrink-0" aria-label="Maison Vereen — Home">
            {/* Mobile size: h-28 = 112px, width 280 */}
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={280}
              height={96}
              className="h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 md:hidden"
              priority
            />
            {/* Desktop size: h-[110px], width 320 */}
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={320}
              height={110}
              className="h-[110px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              priority
            />
          </Link>

          {/* Right — edition tag, desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-4 h-px bg-gold/30" />
            <span className="uppercase tracking-[0.3em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>
              Edition I · 250 Bottles · The Founding Chapter
            </span>
          </div>

        </div>
      </header>

      <main className="flex-1">

        {/* ── HERO — full-bleed bottle image, headline overlaid ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#040404]">
          <Image
            src="/images/the bottle.png"
            alt="Maison Vereen Edition I"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.65 }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/98 via-[#060506]/55 to-[#060506]/20" />
          <div className="absolute inset-0 bg-linear-to-r from-[#060506]/70 via-transparent to-transparent" />
          {/* Warm amber glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 55% 35%, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
          />

          {/* Hero text — sits above gradient */}
          <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 sm:px-8 pb-16 md:pb-20 space-y-6">
            <span className="section-tag">Africa's First Serious Luxury Fragrance House</span>
            <h1
              className="font-serif font-light text-[#EDE7DC] leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Two Hundred and Fifty Bottles.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                One Founding Chapter.
              </em>
            </h1>
            <p
              className="font-serif font-light text-[#8A8070] italic max-w-[540px]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              This page exists because someone thought you should know first.
            </p>
          </div>
        </section>

        {/* ── WHAT MAISON VEREEN IS ── */}
        <section className="border-b border-white/5 bg-[#060506]">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-16 md:py-20 space-y-8">
            <span className="section-tag">Five minutes to understand this</span>
            <div className="space-y-6">
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                Maison Vereen is a luxury fragrance house founded in Lagos, built to the same uncompromising standard as the world&apos;s most respected maisons. Its founding chapter, Edition I, is limited to two hundred and fifty individually numbered bottles — a number that will never increase, and an edition that will never be reissued.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                Access to Edition I is not immediate. Interested individuals first apply to the Maison Vereen Founding Registry — the House&apos;s reviewed record of qualified applicants, capped at three hundred and fifty members. Acceptance into the Registry is the first recognition the House extends; private invitations to acquire one of the two hundred and fifty bottles follow afterward, issued individually as the House determines.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                What makes Edition I historic is simple: it is first. The first founding chapter of a House built to prove that African origin and global luxury standard were never opposing ideas. Joining the Founding Registry now means being recognised at the beginning of that history, rather than reading about it afterward.
              </p>
            </div>
          </div>
        </section>

        {/* ── 250 GRAVITY BLOCK ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-center md:text-left space-y-4">
                <p
                  className="font-mono text-gold leading-none tabular-nums"
                  style={{ fontSize: "clamp(5rem, 14vw, 8rem)", letterSpacing: "0.05em" }}
                >
                  250
                </p>
                <p className="uppercase tracking-[0.3em] text-[#4A4438] font-medium" style={{ fontSize: "9px" }}>
                  Bottles worldwide. Not per country.<br />Not per year. Total, globally, forever.
                </p>
              </div>
              <div className="space-y-5">
                <span className="section-tag">Why Now</span>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  The Founding Registry will close permanently once three hundred and fifty applicants have been accepted. There is no artificial countdown here — simply a real, finite number that will eventually be reached.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Applying takes a matter of minutes, carries no financial obligation, and is read personally by the House.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATE + WHAT OWNERSHIP INCLUDES ── */}
        <section className="border-b border-white/5 bg-[#060506]">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

              {/* Certificate image */}
              <div className="space-y-4">
                <span className="section-tag">Certificate of Authenticity &amp; Ownership</span>
                <div
                  className="relative w-full max-w-[320px] mx-auto md:mx-0"
                  style={{ aspectRatio: "3/4" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.15)",
                    }}
                  >
                    <Image
                      src="/images/certificate.png"
                      alt="Maison Vereen Edition I — Certificate of Authenticity & Ownership"
                      fill
                      sizes="(max-width: 768px) 85vw, 320px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="uppercase tracking-[0.25em] text-[#3A3530] font-light" style={{ fontSize: "9px" }}>
                  Each certificate is unique, signed, and permanent
                </p>
              </div>

              {/* What ownership includes */}
              <div className="space-y-7">
                <div className="space-y-4">
                  <span className="section-tag">What Ownership Includes</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}
                  >
                    Everything that comes{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      with founding ownership.
                    </em>
                  </h2>
                </div>
                <div className="space-y-4">
                  {ownershipItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-4 h-px bg-gold/35 mt-[11px]" />
                      <p className="text-[#6A6258] font-light leading-[1.7] group-hover:text-[#8A8178] transition-colors duration-200" style={{ fontSize: "15px" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — primary conversion block ── */}
        <section className="bg-[#080808]">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-16 md:py-20 space-y-8">

            {/* Gold rule */}
            <div className="w-8 h-px bg-gold/30" />

            <div className="space-y-4 max-w-[560px]">
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
              >
                The Founding Registry is open.
              </h2>
              <p className="text-[#5A5449] font-light leading-[1.8]" style={{ fontSize: "16px" }}>
                Applying takes a matter of minutes and carries no financial obligation. Applications are read personally by the House. You will receive a response within 24 to 48 hours.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[560px]">
              <Link
                href="/access"
                className="flex-1 flex items-center justify-center bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 py-4"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-semibold text-center">Apply to the Founding Registry</span>
              </Link>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center border border-white/10 hover:border-gold/40 py-4 text-[#5A5449] hover:text-[#C8C0B4] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}
              >
                <span className="uppercase font-medium">Explore the Full Website</span>
              </Link>
            </div>

            {/* Reassurances */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[560px]">
              {[
                "Free to apply. No commitment.",
                "Personal response within 48 hours.",
                "Your information held privately.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="shrink-0 w-2 h-px bg-gold/25 mt-[9px]" />
                  <p className="text-[#3A3530] font-light leading-[1.6]" style={{ fontSize: "12px" }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Email */}
            <p className="text-[#2A2520] font-light" style={{ fontSize: "13px" }}>
              Questions first?{" "}
              <a href="mailto:hello@maisonvereen.com" className="text-gold/40 hover:text-gold transition-colors">
                hello@maisonvereen.com
              </a>
            </p>
          </div>
        </section>

      </main>

      {/* ── FOOTER STRIP ── */}
      <footer className="border-t border-white/5 bg-[#040404]">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.25em] text-[#2A2520] font-medium" style={{ fontSize: "9px" }}>
              Maison Vereen · Edition I · Lagos
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@maisonvereen.com"
              className="text-[#2A2520] hover:text-gold/50 transition-colors font-light"
              style={{ fontSize: "11px" }}
            >
              hello@maisonvereen.com
            </a>
            <span className="text-[#1A1A18]">·</span>
            <span className="uppercase tracking-[0.15em] text-[#1A1A18] font-light" style={{ fontSize: "9px" }}>
              © 2025 Maison Vereen
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
