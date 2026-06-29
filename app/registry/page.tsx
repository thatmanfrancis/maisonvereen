"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Page 7 — MEMBERSHIP & REGISTRY

const tiers = [
  {
    num: "01",
    name: "Founding Fifty",
    eligibility: "First Fifty Registry Members",
    status: "Open",
    body: "The first fifty individuals to join the Registry — and the ten Founder's Circle bottle owners within that group — hold the most foundational position in the house. This tier is permanently closed once the first fifty Registry positions are filled.",
    benefits: [
      "Permanent documentation as founding members",
      "First access to every future edition before any other announcement",
      "Invitations to private founder events and house gatherings",
      "Recognition in the house's founding archive",
      "Direct communication with the founder on significant announcements",
    ],
  },
  {
    num: "02",
    name: "Collector Circle",
    eligibility: "Edition I Bottle Owners",
    status: "Open",
    body: "Members who join the Registry in the first phase of the house's launch and hold at least one numbered bottle from any edition. This tier closes at the end of Edition I's allocation period.",
    benefits: [
      "Priority access to future editions before general announcement",
      "Invitations to Collector events and private experiences",
      "The Collector's annual communication from the founder",
      "Recognition in the house's collector documentation",
    ],
  },
  {
    num: "03",
    name: "House Circle",
    eligibility: "All Registry Members",
    status: "Open",
    body: "Registry members who join after Edition I's founding period. Open continuously as the house grows.",
    benefits: [
      "Advance notice of all future releases",
      "Access to exclusive house content and The HouseBook",
      "Invitations to public house events",
      "Priority allocation requests for future limited editions",
    ],
  },
];

export default function RegistryPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Membership &amp; Registry</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}>
                    The Maison Vereen Registry is{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>the founding record of the house.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    It is not a loyalty programme. It is not a mailing list. It is not a membership with points or perks. The Registry is the documentation of individuals who chose to be part of the founding of Maison Vereen. It is a living record — permanent, growing, and meaningful in direct proportion to what the house becomes.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Registry members are not customers. They are the founding audience. The people whose early belief made the house possible. Their participation is recorded. Their access is prioritized. Their experience of the house, as it grows, is fundamentally different from those who arrive later.
                  </p>
                </div>
              </div>
              {/* Bottle — partial reveal, cap top-right of frame */}
              <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 12%", opacity: 0.5, filter: "brightness(0.58) saturate(0.38)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/25 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 52% at 52% 24%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>Maison Vereen Registry</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THREE TIERS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">The Three Tiers</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                Not a loyalty program.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>A founding circle.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {tiers.map((tier, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-8 py-10 space-y-7 hover:bg-white/2 transition-colors duration-500 relative flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-gold/50" style={{ fontSize: "10px" }}>{tier.num}</span>
                      <span className="uppercase tracking-[0.2em] text-[#4A4438]" style={{ fontSize: "9px" }}>{tier.status}</span>
                    </div>
                    <h3 className="font-serif font-light text-[#E8E2D9] group-hover:text-gold transition-colors duration-300" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)" }}>
                      {tier.name}
                    </h3>
                    <span className="block uppercase tracking-[0.2em] text-[#5A5449]" style={{ fontSize: "10px" }}>{tier.eligibility}</span>
                  </div>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>{tier.body}</p>
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="shrink-0 w-3 h-px bg-gold/30 mt-[11px]" />
                        <span className="text-[#5A5449] font-light leading-[1.6]" style={{ fontSize: "16px" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <Link
                href="/access"
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500 inline-block"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-medium">Join the Registry</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
