"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const COUNTRY_OPTIONS = [
  "Select your country",
  "South Africa",
  "Nigeria",
  "Ghana",
  "Kenya",
  "United States",
  "United Kingdom",
  "France",
  "Germany",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "Other",
];

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Priority Access",
    body: "Be the first to know when applications open.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 8l9-5 9 5v8l-9 5-9-5V8z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <path
          d="M12 3v18M3 8l9 5 9-5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Founder Updates",
    body: "Receive exclusive updates from the House.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Behind the Scenes",
    body: "Access rare stories, inspirations and creations.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="0.9" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Member Privileges",
    body: "Special access for those who share our vision.",
  },
];

export default function WaitlistPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: COUNTRY_OPTIONS[0],
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full bg-transparent border border-white/[0.1] px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country:
            form.country === COUNTRY_OPTIONS[0] ? "" : form.country,
        }),
      });
      if (res.ok || res.status === 409) {
        setJoined(true);
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">

              {/* Left */}
              <div className="flex flex-col justify-center px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-6 md:space-y-8">
                <span className="section-tag">Official Waiting List</span>
                <h1
                  className="font-serif font-light text-[#E8E2D9] leading-[1.02] uppercase"
                  style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
                >
                  Be among the few.
                  <br />
                  Be part of the first.
                </h1>
                <div
                  className="space-y-2 text-[#7A7268] font-light leading-[1.85]"
                  style={{ fontSize: "15px" }}
                >
                  <p>Edition I is limited to 250 bottles.</p>
                  <p>
                    Join the official waiting list for priority access when
                    applications open.
                  </p>
                </div>
                <button
                  onClick={() => {
                    document
                      .getElementById("waitlist-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="self-start border border-gold/60 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                >
                  <span className="uppercase font-medium">
                    Join the Waiting List
                  </span>
                </button>
              </div>

              {/* Right — hero image */}
              <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-0 overflow-hidden bg-[#060606]">
                <Image
                  src="/images/maison-vereen-access.png"
                  alt="Maison Vereen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060606]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUR BENEFITS ── */}
        <section className="bg-[#080808] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-x sm:divide-y-0 md:divide-y-0 divide-white/5">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group px-6 py-8 md:px-7 md:py-10 space-y-4 hover:bg-white/2 transition-colors duration-400"
                >
                  <div className="text-gold/35 group-hover:text-gold/60 transition-colors duration-400">
                    {b.icon}
                  </div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <h3
                    className="uppercase tracking-[0.22em] text-[#8A8178] font-medium"
                    style={{ fontSize: "10px" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-[#4A4440] font-light leading-[1.7]"
                    style={{ fontSize: "13px" }}
                  >
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE + FORM ── */}
        <section id="waitlist-form" className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

              {/* Left — image: hidden on mobile, visible lg+ */}
              <div className="hidden lg:block relative overflow-hidden bg-[#040404]">
                <Image
                  src="/images/house-section-image.png"
                  alt="Maison Vereen"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#040404]/60 via-transparent to-transparent" />
              </div>

              {/* Right — Waitlist form */}
              <div className="flex flex-col justify-center px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 bg-charcoal lg:bg-charcoal lg:border-l lg:border-white/5">
                {!joined ? (
                  <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[440px]">
                    <div className="space-y-2 mb-8">
                      <span
                        className="block uppercase tracking-[0.28em] text-[#5A5449] font-medium"
                        style={{ fontSize: "10px" }}
                      >
                        Join the Official Waiting List
                      </span>
                      <p
                        className="text-[#4A4440] font-light leading-[1.7]"
                        style={{ fontSize: "13px" }}
                      >
                        Enter your details to join the Maison Vereen community.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        className="block uppercase tracking-[0.22em] text-[#5A5449] font-medium"
                        style={{ fontSize: "10px" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        className="block uppercase tracking-[0.22em] text-[#5A5449] font-medium"
                        style={{ fontSize: "10px" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label
                        className="block uppercase tracking-[0.22em] text-[#5A5449] font-medium"
                        style={{ fontSize: "10px" }}
                      >
                        Country
                      </label>
                      <div className="relative">
                        <select
                          value={form.country}
                          onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                          }
                          className={`${inputClass} appearance-none cursor-pointer pr-8`}
                        >
                          {COUNTRY_OPTIONS.map((c) => (
                            <option
                              key={c}
                              value={c}
                              disabled={c === COUNTRY_OPTIONS[0]}
                              className="bg-charcoal text-[#E8E2D9]"
                            >
                              {c}
                            </option>
                          ))}
                        </select>
                        {/* Chevron */}
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                          >
                            <path
                              d="M1 1l4 4 4-4"
                              stroke="#5A5449"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={form.consent}
                        onClick={() =>
                          setForm({ ...form, consent: !form.consent })
                        }
                        className={`shrink-0 w-3.5 h-3.5 border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                          form.consent
                            ? "border-gold bg-gold/15"
                            : "border-white/15 group-hover:border-white/25"
                        }`}
                      >
                        {form.consent && (
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M1.5 5l2.5 2.5 4.5-4.5"
                              stroke="#C9A84C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        className="text-[#5A5449] font-light leading-[1.75]"
                        style={{ fontSize: "12px" }}
                      >
                        I agree to receive updates and understand that this is
                        not an application.
                      </span>
                    </label>

                    {/* Error */}
                    {error && (
                      <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting || !form.consent}
                      className="w-full py-4 bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.3em",
                      }}
                    >
                      <span className="uppercase font-semibold">
                        {submitting ? "Joining..." : "Join the Waiting List"}
                      </span>
                    </button>

                    <p
                      className="text-[#3A3530] font-light text-center"
                      style={{ fontSize: "12px" }}
                    >
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  /* Success */
                  <div className="w-full max-w-[440px] space-y-6">
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12l4 4 10-10"
                          stroke="#C9A84C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <span className="section-tag">You&apos;re on the list.</span>
                      <h3
                        className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                        style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}
                      >
                        Thank you, {form.name.split(" ")[0]}.
                      </h3>
                      <p
                        className="text-[#7A7268] font-light leading-[1.7]"
                        style={{ fontSize: "15px" }}
                      >
                        You will receive priority notification when applications
                        for Edition I open.
                      </p>
                    </div>
                    <p
                      className="text-[#3A3530] font-light"
                      style={{ fontSize: "12px" }}
                    >
                      Confirmation sent to{" "}
                      <span className="text-[#4A4440]">{form.email}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
