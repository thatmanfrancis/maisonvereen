"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import Image from "next/image";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const HOW_HEARD_OPTIONS = [
  "How did you find Maison Vereen?",
  "Personal referral",
  "Instagram",
  "LinkedIn",
  "WhatsApp",
  "Press",
  "Event",
  "Online search",
  "Other",
];

export default function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    whatYouDo: "",
    howHeard: HOW_HEARD_OPTIONS[0],
    referredBy: "",
    whatMadeApply: "",
    earlyThing: "",
    anythingElse: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          country: form.country,
          whatYouDo: form.whatYouDo,
          howHeard: form.howHeard === HOW_HEARD_OPTIONS[0] ? "Not specified" : form.howHeard,
          referredBy: form.referredBy || null,
          whatMadeApply: form.whatMadeApply,
          earlyThing: form.earlyThing || null,
          anythingElse: form.anythingElse || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/[0.08] py-3.5 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <div
      className="fixed inset-0 z-60 bg-black/92 backdrop-blur-sm overflow-y-auto flex items-start justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-[1000px] min-h-screen md:min-h-0 md:my-10 bg-charcoal border-0 md:border border-white/[0.07] shadow-2xl grid grid-cols-1 md:grid-cols-[1fr_420px]">
        <button onClick={onClose} className="absolute top-5 right-5 z-10 text-[#5A5449] hover:text-[#E8E2D9] transition-colors duration-300 p-1" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {/* LEFT — FORM */}
        <div className="px-6 sm:px-10 md:px-14 py-12 md:py-14 space-y-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <span className="section-tag">Application</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                  Access is earned.
                  <br />
                  <em className="text-gold not-italic">Not given.</em>
                </h2>
                <p className="text-[#4A4440] font-light leading-[1.7]" style={{ fontSize: "13px" }}>
                  Five minutes. No commitment. No payment at this stage.
                </p>
              </div>

              <div className="border-t border-white/6 pt-7 space-y-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">Full Name</label>
                  <p className="text-xs text-[#2A2520]" style={{ fontSize: "11px" }}>As it should appear on your Gold Ownership Card</p>
                  <input type="text" required placeholder="Your full name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">Email Address</label>
                  <p className="text-xs text-[#2A2520]" style={{ fontSize: "11px" }}>Your invitation will be sent here</p>
                  <input type="email" required placeholder="your@email.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">Phone Number — <span className="normal-case tracking-normal">Optional</span></label>
                  <input type="tel" placeholder="Country code + number" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                </div>
                {/* City & Country */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">City &amp; Country</label>
                  <input type="text" required placeholder="City, Country" value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
                </div>
                {/* What You Do */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">What You Do</label>
                  <p className="text-xs text-[#2A2520]" style={{ fontSize: "11px" }}>What you build, lead, or create — in your own words, not your job title</p>
                  <input type="text" required placeholder="In your own words" value={form.whatYouDo}
                    onChange={(e) => setForm({ ...form, whatYouDo: e.target.value })} className={inputClass} />
                </div>
                {/* How heard */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">How Did You Find Maison Vereen?</label>
                  <select required value={form.howHeard} onChange={(e) => setForm({ ...form, howHeard: e.target.value })}
                    className={`${inputClass} cursor-pointer appearance-none bg-transparent`}>
                    {HOW_HEARD_OPTIONS.map((o) => (
                      <option key={o} value={o} className="bg-charcoal text-[#E8E2D9]">{o}</option>
                    ))}
                  </select>
                </div>
                {/* Referred By */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">If Referred, May We Know By Whom? — <span className="normal-case tracking-normal">Optional</span></label>
                  <input type="text" placeholder="Their name, if you'd like to share it" value={form.referredBy}
                    onChange={(e) => setForm({ ...form, referredBy: e.target.value })} className={inputClass} />
                </div>
                {/* What Made You Apply */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">What Made You Apply?</label>
                  <p className="text-xs text-[#2A2520]" style={{ fontSize: "11px" }}>In your own words — there is no expected answer</p>
                  <textarea required rows={4} placeholder="Tell us what resonated…" value={form.whatMadeApply}
                    onChange={(e) => setForm({ ...form, whatMadeApply: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.7]`} />
                </div>
                {/* Early to something */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">Optional — A Time You Were Early To Something</label>
                  <p className="text-xs text-[#2A2520] leading-relaxed" style={{ fontSize: "11px" }}>Describe a moment when you recognised the value of something before most others did.</p>
                  <textarea rows={3} placeholder="If something comes to mind…" value={form.earlyThing}
                    onChange={(e) => setForm({ ...form, earlyThing: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.7]`} />
                </div>
                {/* Anything else */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.25em] text-[#3A3530] font-medium block">Anything You&apos;d Like To Ask Or Tell Us? — <span className="normal-case tracking-normal">Optional</span></label>
                  <textarea rows={3} placeholder="Questions, context, anything at all…" value={form.anythingElse}
                    onChange={(e) => setForm({ ...form, anythingElse: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.7]`} />
                </div>
                {/* Consent */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <button type="button" role="checkbox" aria-checked={form.consent}
                    onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`shrink-0 w-4 h-4 border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                      form.consent ? "border-gold bg-gold/10" : "border-white/12 group-hover:border-white/25"
                    }`}>
                    {form.consent && <Check className="w-2.5 h-2.5 text-gold" />}
                  </button>
                  <span className="text-xs text-[#5A5449] font-light leading-[1.7] tracking-wide">
                    By submitting, I confirm my information is accurate. I am not committing to any payment. Submitting does not guarantee a position or an invitation. I will receive a personal response within 24 to 48 hours. My information is held privately and never shared.
                  </span>
                </label>
              </div>

              {submitError && (
                <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">{submitError}</div>
              )}

              <button type="submit" disabled={submitting || !form.consent}
                className="w-full py-4 border border-gold/50 hover:border-gold text-[#E8E2D9] hover:bg-gold/10 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}>
                <span className="uppercase font-medium">{submitting ? "Processing..." : "[ Submit My Application ]"}</span>
              </button>
            </form>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center bg-gold/6">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <div className="space-y-3">
                <span className="section-tag block mx-auto">Application Received</span>
                <h3 className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  Welcome to Maison Vereen.
                </h3>
                <p className="text-[#7A7268] font-light leading-[1.7] max-w-[360px] mx-auto" style={{ fontSize: "15px" }}>
                  Your application has been received. We will review it personally and respond within 48 hours.
                </p>
                <p className="text-[#3A3530] font-light" style={{ fontSize: "13px" }}>
                  Confirmation sent to <span className="text-[#5A5449]">{form.email}</span>.
                </p>
              </div>
              <button onClick={onClose}
                className="border border-white/8 hover:border-white/20 px-8 py-3 text-[#5A5449] hover:text-[#E8E2D9] transition-all duration-300"
                style={{ fontSize: "11px", letterSpacing: "0.24em" }}>
                <span className="uppercase font-medium">Return to House</span>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT — dark panel */}
        <div className="hidden md:block relative bg-[#060606] overflow-hidden border-l border-white/4">
          <Image src="/images/hero-bottle.png" alt="Maison Vereen Edition I" fill sizes="420px"
            className="object-cover object-center"
            style={{ opacity: 0.15, filter: "blur(10px) brightness(0.3) saturate(0.15)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(160,110,30,0.12) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 bg-linear-to-t from-[#060606]/95 via-[#060606]/50 to-[#060606]/10" />
          <div className="absolute bottom-10 left-8 space-y-2">
            <div className="w-5 h-px bg-gold/30" />
            <span className="block font-serif font-light text-[#5A5048] tracking-[0.3em] uppercase" style={{ fontSize: "9px" }}>Edition I</span>
            <span className="block text-[#3A3028] font-mono tracking-widest uppercase" style={{ fontSize: "8px" }}>250 Bottles · The Founding Expression</span>
          </div>
        </div>
      </div>
    </div>
  );
}
