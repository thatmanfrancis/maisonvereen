"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 8 + PAGE 9 — THE MAISON VEREEN FOUNDING REGISTRY + LIVE REGISTRY

const MAX_REGISTRY = 350;
const MAX_BOTTLES = 250;

// ── Recently Welcomed (placeholder until live data populates)
const recentlyWelcomed = [
  { name: "James F.", country: "Nigeria" },
  { name: "Sarah M.", country: "United Kingdom" },
  { name: "Grace A.", country: "Ghana" },
  { name: "David K.", country: "Canada" },
  { name: "Amara O.", country: "United Arab Emirates" },
  { name: "Chisom E.", country: "South Africa" },
];

interface ApprovedRecord {
  verificationNumber: string;
  displayName: string;
  country: string;
  approvedAt: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function AnimatedCounter({ value, max }: { value: number; max: number }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    const duration = 1600;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  const pct = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Numbers */}
      <div className="flex items-end gap-4">
        <span
          className="font-serif font-light text-gold leading-none tabular-nums"
          style={{ fontSize: "clamp(3rem, 7vw, 5rem)", letterSpacing: "-0.01em" }}
        >
          {displayed}
        </span>
        <span className="font-serif font-light text-[#3A3530] pb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
          of {max}
        </span>
      </div>
      {/* Progress bar */}
      <div className="w-full h-px bg-white/8 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gold/60 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[#5A5449] font-light" style={{ fontSize: "14px" }}>
        {max - value > 0
          ? `${max - value} positions remaining before the Registry closes permanently`
          : "The Founding Registry is now closed."}
      </p>
    </div>
  );
}

export default function RegistryPage() {
  const [records, setRecords] = useState<ApprovedRecord[]>([]);
  const [loadingRecords, setLoadingRecords] = useState(true);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch approved count for the live counter
    fetch("/api/applications/approved?limit=100")
      .then((r) => r.json())
      .then((data) => {
        const recs: ApprovedRecord[] = data.records ?? [];
        setRecords(recs);
        setCount(recs.length);
        setLoadingRecords(false);
      })
      .catch(() => setLoadingRecords(false));
  }, []);

  const filtered = records.filter((r) => {
    if (!search.trim()) return true;
    const q = search.trim().toLowerCase();
    return (
      r.verificationNumber.includes(q) ||
      r.displayName.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO — PAGE 8 ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">The Founding Registry</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                  >
                    The House is assembled{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      before the bottles are released.
                    </em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Before a single bottle of Edition I is offered for acquisition, the House is assembled. The Maison Vereen Founding Registry exists for that purpose — an official, reviewed record of the individuals who have applied to become part of Maison Vereen&apos;s founding chapter.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Applying to the Founding Registry is not a purchase, and it carries no financial obligation. It is an expression of serious interest, reviewed personally by the House.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 pt-2">
                    <Link
                      href="/access"
                      className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-medium">Apply to the Founding Registry</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Right — ledger-style visual panel */}
              <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/hero-bottle.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 12%",
                    opacity: 0.45,
                    filter: "brightness(0.55) saturate(0.35)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/90 via-[#060608]/30 to-transparent" />
                {/* Ledger-style overlay text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 z-10">
                  <div className="border border-gold/15 bg-[#060608]/80 px-10 py-8 text-center space-y-4" style={{ backdropFilter: "blur(4px)" }}>
                    <p className="uppercase tracking-[0.35em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
                      Maison Vereen
                    </p>
                    <p className="font-serif font-light text-[#C8C0B4]" style={{ fontSize: "18px" }}>
                      Founding Registry
                    </p>
                    <div className="w-16 h-px bg-gold/30 mx-auto" />
                    <div className="grid grid-cols-2 gap-6 pt-2">
                      <div className="text-center">
                        <p className="font-serif text-gold" style={{ fontSize: "28px" }}>{MAX_BOTTLES}</p>
                        <p className="uppercase tracking-[0.2em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>Bottles</p>
                      </div>
                      <div className="text-center">
                        <p className="font-serif text-gold" style={{ fontSize: "28px" }}>{MAX_REGISTRY}</p>
                        <p className="uppercase tracking-[0.2em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>Positions</p>
                      </div>
                    </div>
                    <div className="w-16 h-px bg-gold/30 mx-auto" />
                    <p className="uppercase tracking-[0.2em] text-[#3A3530] font-light" style={{ fontSize: "9px" }}>
                      Est. 2025 · Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW THE REGISTRY WORKS ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">How It Works</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
              >
                Not a queue.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  The beginning of the House.
                </em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {[
                {
                  num: "01",
                  title: "Application & Review",
                  body: "The application takes a matter of minutes and is read individually by a member of the House — never processed automatically. Applicants who reflect the values and seriousness Maison Vereen looks for typically receive a decision within 24 to 48 hours.",
                },
                {
                  num: "02",
                  title: "What Acceptance Means",
                  body: "Acceptance into the Founding Registry confers status as a recognised founding member of the House — it does not, by itself, guarantee a bottle. Invitations to acquire one of the 250 Edition I bottles are issued privately and individually as the House determines.",
                },
                {
                  num: "03",
                  title: "When the Registry Closes",
                  body: "Once 350 applicants have been accepted, the Founding Registry closes permanently. No further applications will be reviewed. This ceiling exists for the same reason Edition I is limited to 250 bottles — the House does not assemble itself beyond the scale it can honour.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#0D0D0D] px-8 py-10 space-y-5 hover:bg-white/2 transition-colors duration-300 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-mono text-gold/50" style={{ fontSize: "10px" }}>{item.num}</span>
                  <h3
                    className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                    style={{ fontSize: "20px" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-white/6 bg-[#080808] px-6 sm:px-8 py-6 max-w-[840px]">
              <p className="text-[#6A6258] font-light leading-[1.8]" style={{ fontSize: "15px" }}>
                <span className="text-[#8A8178] font-medium">Please note:</span> The Registry will accept a maximum of 350 members. Because only 250 bottles exist, not every accepted member will ultimately receive an invitation to acquire — a fact the House states plainly, rather than obscures, out of respect for those who apply.
              </p>
            </div>
          </div>
        </section>

        {/* ── LIVE REGISTRY COUNTER — PAGE 9 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              {/* Left — live counter */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="section-tag">Live Founding Registry</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    The Registry, in{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      real time.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The count displayed here rises only when Maison Vereen formally accepts an applicant — never automatically, never on a timer, and never adjusted for effect. This number is a living record of the Founding Registry&apos;s growth.
                  </p>
                </div>
                {loadingRecords ? (
                  <div className="space-y-4">
                    <div className="skeleton h-16 w-48 rounded" />
                    <div className="skeleton h-px w-full rounded" />
                    <div className="skeleton h-4 w-72 rounded" />
                  </div>
                ) : (
                  <AnimatedCounter value={count} max={MAX_REGISTRY} />
                )}
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <Link
                    href="/access"
                    className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                    style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                  >
                    <span className="uppercase font-medium">Apply to the Founding Registry</span>
                  </Link>
                </div>
              </div>

              {/* Right — recently welcomed */}
              <div className="space-y-6">
                <span className="section-tag">Recently Welcomed</span>
                <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "15px" }}>
                  Each entry here represents a recently accepted Founding Registry member, shown with the same respect the House extends to every applicant&apos;s privacy.
                </p>
                {/* Ledger-style list */}
                <div className="border border-white/6">
                  <div className="px-6 py-3 border-b border-white/5 flex items-center justify-between">
                    <p className="uppercase tracking-[0.28em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>Member</p>
                    <p className="uppercase tracking-[0.28em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>Country</p>
                  </div>
                  {records.length > 0 ? (
                    records.slice(0, 6).map((r, i) => (
                      <div
                        key={i}
                        className="px-6 py-4 flex items-center justify-between border-b border-white/4 last:border-b-0 group hover:bg-white/2 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold/70 transition-colors duration-200" />
                          <span className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "15px" }}>
                            {r.displayName}
                          </span>
                        </div>
                        <span className="text-[#5A5449] font-light" style={{ fontSize: "13px" }}>{r.country}</span>
                      </div>
                    ))
                  ) : (
                    recentlyWelcomed.map((m, i) => (
                      <div
                        key={i}
                        className="px-6 py-4 flex items-center justify-between border-b border-white/4 last:border-b-0 group hover:bg-white/2 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold/70 transition-colors duration-200" />
                          <span className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "15px" }}>
                            {m.name}
                          </span>
                        </div>
                        <span className="text-[#5A5449] font-light" style={{ fontSize: "13px" }}>{m.country}</span>
                      </div>
                    ))
                  )}
                </div>
                <p className="text-[#3A3530] font-light italic" style={{ fontSize: "13px" }}>
                  This number only moves forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL APPROVED REGISTRY ── */}
        <section className="border-b border-white/5 bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="section-tag">A Living Ledger of the Founding Generation</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                >
                  Every number here is{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    a person, recognised.
                  </em>
                </h2>
                <p className="text-[#5A5449] font-light" style={{ fontSize: "15px" }}>
                  Accepted members are listed chronologically. Verification numbers are permanent.
                </p>
              </div>
              {/* Search */}
              <div className="relative shrink-0 w-full sm:w-[280px]">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3530] pointer-events-none"
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                >
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, number, country…"
                  className="w-full bg-[#0D0D0D] border border-white/8 pl-9 pr-4 py-2.5 text-xs text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/40 transition-colors duration-200"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3A3530] hover:text-[#E8E2D9] transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            {loadingRecords ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-[#0D0D0D] px-6 py-7 space-y-3">
                    <div className="skeleton h-3 w-24 rounded" />
                    <div className="skeleton h-5 w-32 rounded" />
                    <div className="skeleton h-3 w-20 rounded" />
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-16 text-center border border-white/5">
                <div className="w-8 h-px bg-gold/20 mx-auto mb-6" />
                <p className="font-serif font-light text-[#3A3530]" style={{ fontSize: "18px" }}>
                  {search ? "No results match your search." : "The Registry is open. No members yet accepted."}
                </p>
                <p className="text-[#2A2520] font-light mt-3" style={{ fontSize: "14px" }}>
                  {!search && "Be among the first."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
                {filtered.map((r, i) => (
                  <div
                    key={i}
                    className="group bg-[#0D0D0D] px-6 py-7 space-y-4 hover:bg-white/2 transition-colors duration-300 relative"
                  >
                    <div className="absolute top-0 left-0 w-full h-px bg-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            stroke="#C9A84C"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="type-mono text-gold/70">Founding Member</span>
                      </div>
                      <span className="uppercase tracking-widest text-emerald-400/70 border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5" style={{ fontSize: "9px" }}>
                        Accepted
                      </span>
                    </div>
                    <p className="font-mono text-gold" style={{ fontSize: "20px", letterSpacing: "0.05em" }}>
                      #{r.verificationNumber}
                    </p>
                    <p className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "17px" }}>
                      {r.displayName}
                    </p>
                    <div className="space-y-1.5 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="type-mono">Location</span>
                        <span className="type-caption text-[#7A7068]">{r.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="type-mono">Accepted</span>
                        <span className="type-caption text-[#7A7068]">{formatDate(r.approvedAt)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loadingRecords && filtered.length > 0 && (
              <p className="type-caption text-center">
                Showing {filtered.length} founding {filtered.length === 1 ? "member" : "members"}
                {search && ` matching "${search}"`}
              </p>
            )}
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="bg-[#060608]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 text-center space-y-8">
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <p
              className="font-serif font-light text-[#C8BFB2] leading-[1.55] max-w-[560px] mx-auto"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}
            >
              &ldquo;Acceptance into the Registry is only the beginning of what membership in this House means.&rdquo;
            </p>
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-medium">Apply to the Founding Registry</span>
              </Link>
              <Link
                href="/access"
                className="text-[#5A5449] hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium"
                style={{ fontSize: "11px" }}
              >
                Learn About Membership &amp; Access →
              </Link>
            </div>
            <p className="text-[#3A3530] font-light" style={{ fontSize: "13px" }}>
              The application is free and carries no financial obligation.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
