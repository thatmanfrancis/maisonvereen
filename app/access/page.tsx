"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Link from "next/link";

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
      </svg>
    ),
    title: "Priority Access",
    body: "Founding applicants receive priority consideration for Edition I allocation before public access.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
        <path d="M12 3v18M3 8l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
    title: "Founder Updates",
    body: "Private communications directly from the house — before anything is published.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.9" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
    title: "Behind the Scenes",
    body: "Exclusive access to the creation process and the story behind Edition I.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="0.9" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
    title: "Member Privileges",
    body: "Permanent registry status with compounding privileges as the house grows.",
  },
];

const faqs = [
  { q: "Who can apply for access?", a: "Any individual who resonates with the values of Maison Vereen may apply. We do not have a demographic profile — we have a character profile." },
  { q: "How will Edition I be allocated?", a: "Edition I is limited to 250 bottles. Applications are reviewed by the house. Not every application is accepted. This is not a purchase — it is an introduction." },
  { q: "How will I know if I am allocated?", a: "All applicants will receive a direct communication from Maison Vereen within 5 business days of application submission." },
  { q: "Is a waiting list available?", a: "Yes. You may join the waiting list for priority notification. Joining does not guarantee allocation." },
];

export default function AccessPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-[#0A0A0A]">

        {/* ── HERO — full bleed dark, text left + wax seal right ── */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#060606] pt-[72px] border-b border-white/[0.05]">
          {/* Full background — dark envelope/luxury photo */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/images/wax-seal.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.30,
                filter: "brightness(0.45) saturate(0.5)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/97 via-[#060606]/80 to-[#060606]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/90 via-transparent to-[#060606]/50" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 w-full">
            <div className="max-w-[620px] space-y-8">
              <span className="section-tag">Access</span>
              {/* Design image 5 exact headline */}
              <h1
                className="font-serif font-light text-[#E8E2D9] leading-[1.0]"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
              >
                Access is not purchased.
                <br />
                <em className="not-italic" style={{ color: "#C9A84C" }}>It is earned.</em>
              </h1>
              <div className="space-y-3 text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "13px" }}>
                <p>Maison Vereen is a house of rare creation.</p>
                <p>Edition I is limited to 250 bottles worldwide. Access is by application only.</p>
                <p>We select not for quantity, but for alignment.</p>
              </div>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "10px", letterSpacing: "0.26em" }}
              >
                <span className="uppercase font-medium">Apply for Access</span>
              </button>
              <p className="text-[#3A3530] font-light" style={{ fontSize: "10px" }}>
                By submitting, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="bg-[#0D0D0D] border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.05]">
              {benefits.map((b, i) => (
                <div key={i} className="group px-7 py-10 space-y-4 hover:bg-white/[0.015] transition-colors duration-400">
                  <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-400">{b.icon}</div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <h3 className="uppercase tracking-[0.2em] text-[#8A8178] font-medium" style={{ fontSize: "9px" }}>{b.title}</h3>
                  <p className="text-[#4A4440] font-light leading-[1.7]" style={{ fontSize: "11px" }}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ + WAITLIST ── */}
        <section className="border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Left — FAQ */}
              <div className="space-y-8">
                <span className="section-tag">Frequently Asked</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
                  Common Questions
                </h2>
                <div className="space-y-0 border-t border-white/[0.06]">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-white/[0.06]">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                      >
                        <span
                          className="font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                          style={{ fontSize: "13px" }}
                        >
                          {faq.q}
                        </span>
                        <span className={`flex-shrink-0 text-gold/50 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`} style={{ fontSize: "18px", lineHeight: 1 }}>
                          +
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="pb-5">
                          <p className="text-[#6A6258] font-light leading-[1.75]" style={{ fontSize: "12px" }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Join the waitlist */}
              <div className="space-y-7 border border-white/[0.06] p-8 md:p-10 self-start">
                <span className="section-tag">Join the Waitlist</span>
                <h3 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
                  Stay connected for exclusive updates, stories, and news from the House.
                </h3>
                {!joined ? (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!email) return;
                      try {
                        const res = await fetch("/api/waitlist", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email }),
                        });
                        if (res.ok || res.status === 409) setJoined(true);
                      } catch {
                        // fail silently — UI still shows joined on 409 (already exists)
                        setJoined(true);
                      }
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-transparent border-b border-white/[0.1] py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="w-full border border-gold/50 hover:border-gold hover:bg-gold/10 py-3 text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "10px", letterSpacing: "0.26em" }}
                    >
                      <span className="uppercase font-medium">→</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-4 space-y-2">
                    <p className="text-gold" style={{ fontSize: "12px" }}>You&apos;re on the list.</p>
                    <p className="text-[#5A5449] font-light" style={{ fontSize: "11px" }}>
                      We&apos;ll be in touch when access opens.
                    </p>
                  </div>
                )}
                <p className="text-[#3A3530] font-light" style={{ fontSize: "10px" }}>
                  By joining, you agree to our Privacy Policy.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/[0.05]">
                  <span className="text-[#3A3530] uppercase tracking-widest" style={{ fontSize: "8px" }}>Follow</span>
                  {[
                    { label: "IG", href: "https://instagram.com" },
                    { label: "FB", href: "https://facebook.com" },
                    { label: "YT", href: "https://youtube.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5A5449] hover:text-gold transition-colors duration-300 font-mono"
                      style={{ fontSize: "9px" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
