"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import Image from "next/image";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const HOW_HEARD_OPTIONS = [
  "How did you hear about us?",
  "Word of mouth",
  "Social media",
  "Press / Media",
  "A founding member",
  "Other",
];

export default function ApplicationForm({
  isOpen,
  onClose,
}: ApplicationFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    occupation: "",
    drives: "",
    legacy: "",
    howHeard: HOW_HEARD_OPTIONS[0],
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country: form.country,
          occupation: form.occupation,
          drives: form.drives,
          legacy: form.legacy,
          howHeard:
            form.howHeard === HOW_HEARD_OPTIONS[0]
              ? "Not specified"
              : form.howHeard,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        // Show the API error inline
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/[0.08] py-3.5 text-[16px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <div
      className="fixed inset-0 z-60 bg-black/92 backdrop-blur-sm overflow-y-auto flex items-start justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[1000px] min-h-screen md:min-h-0 md:my-10 bg-charcoal border border-white/[0.07] shadow-2xl grid grid-cols-1 md:grid-cols-[1fr_420px]">
        {/* ── CLOSE ── */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-[#5A5449] hover:text-[#E8E2D9] transition-colors duration-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── LEFT — FORM ── */}
        <div className="px-10 md:px-14 py-14 space-y-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Header */}
              <div className="space-y-2">
                <span className="section-tag">Application</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  Access is earned.
                  <br />
                  <em className="text-gold not-italic">Not given.</em>
                </h2>
              </div>

              {/* Standard label */}
              <div className="border-t border-white/6 pt-8 space-y-7">
                <span
                  className="uppercase tracking-[0.28em] text-[#3A3530] font-medium block"
                  style={{ fontSize: "16px" }}
                >
                  The Maison Vereen Standard
                </span>

                {/* Name */}
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />

                {/* Email */}
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />

                {/* Country */}
                <input
                  type="text"
                  required
                  placeholder="Country / City"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  className={inputClass}
                />

                {/* Occupation */}
                <input
                  type="text"
                  required
                  placeholder="Occupation"
                  value={form.occupation}
                  onChange={(e) =>
                    setForm({ ...form, occupation: e.target.value })
                  }
                  className={inputClass}
                />

                {/* Drives */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.28em] text-[#3A3530] font-medium block">
                    What drives you?
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what motivates and moves you."
                    value={form.drives}
                    onChange={(e) =>
                      setForm({ ...form, drives: e.target.value })
                    }
                    className={`${inputClass} resize-none leading-[1.7]`}
                  />
                </div>

                {/* Legacy */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.28em] text-[#3A3530] font-medium block">
                    What does legacy mean to you?
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the mark you intend to leave."
                    value={form.legacy}
                    onChange={(e) =>
                      setForm({ ...form, legacy: e.target.value })
                    }
                    className={`${inputClass} resize-none leading-[1.7]`}
                  />
                </div>

                {/* How heard */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.28em] text-[#3A3530] font-medium block">
                    How did you hear about Maison Vereen?
                  </label>
                  <select
                    required
                    value={form.howHeard}
                    onChange={(e) =>
                      setForm({ ...form, howHeard: e.target.value })
                    }
                    className={`${inputClass} cursor-pointer appearance-none bg-transparent`}
                  >
                    {HOW_HEARD_OPTIONS.map((o) => (
                      <option
                        key={o}
                        value={o}
                        className="bg-charcoal text-[#E8E2D9]"
                      >
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={form.consent}
                    onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`shrink-0 w-4 h-4 border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                      form.consent
                        ? "border-gold bg-gold/10"
                        : "border-white/12 group-hover:border-white/25"
                    }`}
                  >
                    {form.consent && (
                      <Check className="w-2.5 h-2.5 text-gold" />
                    )}
                  </button>
                  <span className="text-xs text-[#5A5449] font-light leading-[1.7] tracking-wide">
                    I understand that Maison Vereen is a house of rare creation.
                    I apply in alignment with its values, with respect and
                    integrity.
                  </span>
                </label>
              </div>

              {/* Submit error */}
              {submitError && (
                <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">
                  {submitError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || !form.consent}
                className="w-full py-4 border border-gold/50 hover:border-gold text-[#E8E2D9] hover:bg-gold/10 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ fontSize: "16px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">
                  {submitting ? "Processing..." : "Submit Application"}
                </span>
              </button>

              <p
                className="text-center text-[#3A3530] font-light"
                style={{ fontSize: "16px" }}
              >
                By submitting, you agree to our{" "}
                <a
                  href="#"
                  className="underline hover:text-[#5A5449] transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline hover:text-[#5A5449] transition-colors"
                >
                  Terms of Use
                </a>
                .
              </p>
            </form>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center bg-gold/6">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <div className="space-y-3">
                <span className="section-tag block mx-auto">
                  Application Received
                </span>
                <h3
                  className="font-serif font-light text-[#E8E2D9]"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  Thank you, {form.name.split(" ")[0]}.
                </h3>
                <p
                  className="text-[#7A7268] font-light leading-[1.7] max-w-[340px] mx-auto"
                  style={{ fontSize: "16px" }}
                >
                  Your application for Edition I is under review. You will hear
                  from us within 48 hours.
                </p>
                <p
                  className="text-[#3A3530] font-light"
                  style={{ fontSize: "16px" }}
                >
                  Confirmation sent to{" "}
                  <span className="text-[#5A5449]">{form.email}</span>.
                </p>
              </div>
              <button
                onClick={onClose}
                className="border border-white/8 hover:border-white/20 px-8 py-3 text-[#5A5449] hover:text-[#E8E2D9] transition-all duration-300"
                style={{ fontSize: "16px", letterSpacing: "0.24em" }}
              >
                <span className="uppercase font-medium">Return to House</span>
              </button>
            </div>
          )}
        </div>

        {/* ── RIGHT — dark panel, bottle silhouette barely visible ── */}
        <div className="hidden md:block relative bg-[#060606] overflow-hidden border-l border-white/[0.04]">
          {/* Bottle — silhouette only, very dark, heavy blur = anticipation */}
          <Image
            src="/images/hero-bottle.png"
            alt="Maison Vereen Edition I"
            fill
            sizes="420px"
            className="object-cover object-center"
            style={{ opacity: 0.15, filter: "blur(10px) brightness(0.3) saturate(0.15)" }}
          />
          {/* Single warm light source at top-centre — from document: "A single light source" */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(160,110,30,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/95 via-[#060606]/50 to-[#060606]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/30 via-transparent to-[#060606]/80" />
          {/* Label */}
          <div className="absolute bottom-10 left-8 space-y-2">
            <div className="w-5 h-px bg-[#C9A84C]/30" />
            <span className="block font-serif font-light text-[#5A5048] tracking-[0.3em] uppercase" style={{ fontSize: "9px" }}>
              Edition I
            </span>
            <span className="block text-[#3A3028] font-mono tracking-widest uppercase" style={{ fontSize: "8px" }}>
              250 Bottles · The Founding Expression
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
