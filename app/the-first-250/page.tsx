"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MAX_MEMBERS = 350;

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "THE HOUSE", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

interface ApprovedRecord {
  verificationNumber: string;
  displayName: string;
  country: string;
  approvedAt: string;
}

function ArrowIcon() {
  return (
    <svg
      width="28"
      height="10"
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M0 5h26M21 1l5 4-5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldMarkIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M18 4l11 4v9c0 7.5-5 13-11 15-6-2-11-7.5-11-15V8l11-4z"
        strokeLinejoin="round"
      />
      <text
        x="18"
        y="21"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="10"
        fontFamily="Georgia, serif"
      >
        M
      </text>
    </svg>
  );
}

function SealMark() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-gold"
      aria-hidden
    >
      <circle cx="60" cy="60" r="54" />
      <circle cx="60" cy="60" r="46" />
      <circle
        cx="60"
        cy="60"
        r="50"
        strokeDasharray="2.4 3.6"
        opacity="0.55"
      />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="42"
        fontWeight="500"
      >
        M
      </text>
    </svg>
  );
}

function formatMemberNo(verificationNumber: string) {
  const n = Number(verificationNumber);
  if (!Number.isFinite(n) || n <= 0) return "—";
  return String(n).padStart(3, "0");
}

export default function LiveFoundingRegistryPage() {
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [recent, setRecent] = useState<ApprovedRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/applications/approved?limit=350")
      .then((r) => r.json())
      .then((data: { records?: ApprovedRecord[]; total?: number }) => {
        if (cancelled) return;
        const records = data.records ?? [];
        const total =
          typeof data.total === "number" ? data.total : records.length;
        setAcceptedCount(total);
        // Show the full founding record in order — never drop earlier members
        setRecent(records);
        setLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const progress = Math.min(
    100,
    Math.max(0, (acceptedCount / MAX_MEMBERS) * 100)
  );

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative bg-[#060506] pt-36 md:pt-40 pb-16 md:pb-24 border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="space-y-6 md:space-y-7 max-w-xl">
                {/* <div className="flex items-center gap-3">
                  <span className="font-serif text-lg md:text-xl text-gold">
                    09
                  </span>
                  <div className="w-6 h-px bg-gold" />
                </div> */}

                <div className="space-y-2">
                  <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                    Live Founding Registry
                  </span>
                  {/* <div className="w-10 h-px bg-gold" /> */}
                </div>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
                >
                  <span
                    className={`transition-opacity duration-700 ${
                      loaded ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {acceptedCount}
                  </span>{" "}
                  of {MAX_MEMBERS}. The House Is Being Assembled Now.
                </h1>

                <div className="w-10 h-px" />

                <p className="text-body-muted font-light leading-[1.85] max-w-md">
                  The live Founding Registry count reflects every applicant the
                  House has personally reviewed and accepted — never an
                  estimate, never inflated.
                </p>
              </div>

              <div className="relative w-full aspect-4/3 overflow-hidden bg-[#0A0A0C]">
                <Image
                  src="/temple.webp"
                  alt="Maison Vereen Founding Registry ledger"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── A Living Record ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto text-center space-y-8">
            <div className="flex flex-col items-center gap-3">
              {/* <div className="w-10 h-px bg-gold" /> */}
              <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                A Living Record
              </span>
              {/* <div className="w-10 h-px bg-gold" /> */}
            </div>

            <p className=" text-body-muted text-base font-light leading-[1.85]">
              This page exists as a living record of the Founding Registry&apos;s
              growth. The count displayed here rises only when Maison Vereen
              formally accepts an applicant — never automatically, never on a
              timer, and never adjusted for effect.
            </p>
            <p className="text-body-muted font-light leading-[1.85] ">
              As the count approaches three hundred and fifty, this page becomes
              the clearest, most honest signal of how close the Founding
              Registry is to closing.
            </p>
          </div>
        </section>

        {/* ── Accepted Members counter ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="border border-gold/40 bg-[#080808]/80 px-8 sm:px-12 md:px-16 py-14 md:py-20 text-center space-y-6">
              <span
                className={`font-serif text-gold font-light leading-none block transition-opacity duration-700 ${
                  loaded ? "opacity-100" : "opacity-40"
                }`}
                style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)" }}
              >
                {acceptedCount}
              </span>

              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-gold font-medium">
                Accepted Members
              </p>

              <p className="text-base md:text-lg  text-body-muted">
                out of {MAX_MEMBERS}
              </p>

              <div className="pt-4 max-w-2xl mx-auto space-y-3">
                <div className="w-full h-1 rounded-2xl bg-white/15 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gold transition-all duration-1000 ease-out"
                    style={{ width: loaded ? `${progress}%` : "0%" }}
                  />
                </div>
                <div className="flex justify-between font-sans text-sm text-[#EDE8DE]/80">
                  <span>{acceptedCount}</span>
                  <span>{MAX_MEMBERS}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recently Welcomed ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-4xl mx-auto space-y-10">
            <h2 className="text-center font-serif text-xs sm:text-sm uppercase tracking-[0.32em] text-gold font-light">
              Founding Members
            </h2>

            <div className="border border-[#EDE8DE]/12 bg-[#0C0B0A] overflow-x-auto">
              <table className="w-full text-left ">
                <thead>
                  <tr className="border-b border-[#EDE8DE]/10">
                    <th className="px-5 sm:px-8 pt-6 pb-4 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE]/55 font-medium">
                      Member
                    </th>
                    <th className="px-4 pt-6 pb-4 text-center font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE]/55 font-medium">
                      Country
                    </th>
                    <th className="px-5 sm:px-8 pt-6 pb-4 text-right font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE]/55 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && recent.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-5 sm:px-8 py-10 text-center font-serif text-base md:text-lg font-light text-[#EDE8DE]/70"
                      >
                        The first acceptances will appear here.
                      </td>
                    </tr>
                  ) : (
                    recent.map((row, i) => (
                      <tr
                        key={`${row.verificationNumber}-${row.displayName}`}
                        className={
                          i < recent.length - 1
                            ? "border-b border-[#EDE8DE]/10"
                            : undefined
                        }
                      >
                        <td className="px-5 sm:px-8 py-5 sm:py-6 text-[14px] text-[#F2EDE4] font-light">
                          <span className="text-gold mr-3 tracking-wider">
                            {formatMemberNo(row.verificationNumber)}
                          </span>
                          {row.displayName}
                        </td>
                        <td className="px-4 py-5 sm:py-6 text-center text-[14px] font-light text-body-muted">
                          {row.country}
                        </td>
                        <td className="px-5 sm:px-8 py-5 sm:py-6 text-right text-[14px] font-light text-gold">
                          Accepted
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-[13px] sm:text-sm font-normal leading-relaxed text-body-muted text-center max-w-2xl mx-auto">
              Accepted members are shown by first name, last initial, and country
              only, in the order they were welcomed. The House will never display
              a member&apos;s full identity without explicit permission.
            </p>
          </div>
        </section>

        {/* ── Why 350? ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
              <div className="flex items-center justify-center gap-6 md:gap-8 lg:pr-12 lg:border-r lg:border-gold/30">
                {/* <SealMark /> */}
                <div className="text-center space-y-2">
                  <span
                    className="font-serif text-gold font-light leading-none block"
                    style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}
                  >
                    {MAX_MEMBERS}
                  </span>
                  <div className="w-10 h-1  mx-auto" />
                  <span className="font-sans text-xs uppercase tracking-[0.28em] text-body-muted font-medium block max-w-full">
                    Maximum Founding Members
                  </span>
                </div>
              </div>

              <div className="space-y-5 lg:pl-12 xl:pl-16">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium block">
                  Why 350?
                </span>
                <p className=" font-light leading-[1.85] text-body-muted text-[14px] max-w-xl">
                  The Registry accepts a maximum of three hundred and fifty
                  members because the House honours scale as much as exclusivity.
                  Only two hundred and fifty bottles exist in Edition I. The
                  Registry is intentionally larger to ensure the House can select
                  with care, never compromise on standards, and protect the
                  integrity of the founding chapter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── This number only moves forward ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 overflow-hidden border-b border-white/5">
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block">
           
          </div>

          <div className="relative w-[90%] md:w-full max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center text-gold">
              <ShieldMarkIcon />
            </div>
            <h2
              className="font-serif font-ligh leading-snug"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              This number only moves forward.
            </h2>
            <p className="font-sans text-[13px] text-gold uppercase tracking-[0.32em] font-medium">
              Never Estimated. Never Inflated. Never Rushed.
            </p>
          </div>
        </section>

        {/* ── Transition + CTAs ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 overflow-hidden">
          <div className="absolute left-[4%] top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 opacity-40 pointer-events-none">
           
          </div>
          <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 opacity-40 pointer-events-none">
            <div className="w-px h-16 bg-gold/50" />
           
          </div>

          <div className="relative w-[90%] md:w-full max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-5">
              <h2
                className="font-serif font-light text-[#F2EDE4] leading-snug"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                Acceptance into the Registry is only the beginning
              </h2>
              {/* <div className="w-10 h-px bg-gold mx-auto" /> */}
              <p className="text-[15px] text-body-muted font-light tracking-wider">
                Membership in this House means much more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              >
                Apply to the Founding Registry
                <ArrowIcon />
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
              >
                Learn About Membership &amp; Access
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
