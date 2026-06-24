"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const steps = [
  {
    num: "1",
    title: "You apply — free, no commitment.",
    body: "The application takes about five minutes. There is no payment at this stage. Every question is there because it helps us understand who you are.",
  },
  {
    num: "2",
    title: "A person reviews your application within 24–48 hours.",
    body: "A member of our founding team reads every application personally. We review for character and alignment — not income, job title, or following size.",
  },
  {
    num: "3",
    title: "You receive a personal response either way.",
    body: "If successful: a personal invitation with your offered position, circle, and payment details. If not: a personal note and automatic first-priority registration for Edition II.",
  },
  {
    num: "4",
    title: "You have a defined window to confirm.",
    body: "Founders Circle: 48 hours. All other tiers: 72 hours. If the window passes without payment, the position is offered to the next applicant. These windows cannot be extended.",
  },
  {
    num: "5",
    title: "Your edition is prepared and shipped.",
    body: "Once confirmed, you receive everything in the ownership package. Your founding archive entry is created the moment payment clears.",
  },
];

const verifications = [
  {
    num: "I",
    title: "Edition I is a completed, physical product.",
    body: "The 250 bottles have been produced. The fragrance is finished, bottled, authenticated, and ready to ship to confirmed owners. You are not pre-ordering a concept.",
  },
  {
    num: "II",
    title: "No payment is requested at this stage.",
    body: "Applying costs nothing. You will not be asked for any payment before receiving a formal invitation from hello@maisonvereen.com.",
  },
  {
    num: "III",
    title: "We are a registered business based in Lagos, Nigeria.",
    body: "We will provide documentation, arrange a video conversation, or — for Lagos-based applicants — an in-person appointment where you can see and smell the fragrance before deciding.",
  },
  {
    num: "IV",
    title: "Every application gets a personal response within 48 hours.",
    body: "Whether successful or not. We do not leave applications without an answer.",
  },
  {
    num: "V",
    title: "Your information is held privately.",
    body: "We do not share, sell, or use your data for any purpose beyond managing your relationship with the house.",
  },
];

export default function AccessPage() {
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

  const inputClass =
    "w-full bg-transparent border border-white/[0.1] px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300";

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

  return (
    <>
      <Header onOpenApply={() => {}} />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex flex-col justify-center px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-6 md:space-y-7">
                <span className="section-tag">Application</span>
                <h1
                  className="font-serif font-light text-[#E8E2D9] leading-[1.02] uppercase"
                  style={{ fontSize: "clamp(2rem, 6vw, 4.2rem)" }}
                >
                  Access is earned.
                  <br />
                  Not given.
                </h1>
                <div className="space-y-3 text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                  <p>Maison Vereen is a house of rare creation. Edition I is limited to 250 bottles worldwide. Access is by application only.</p>
                  <p>We select not for quantity, but for alignment.</p>
                </div>
              </div>
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-0 overflow-hidden bg-[#050505]">
                <Image
                  src="/images/application-hero.png"
                  alt="Maison Vereen Edition I"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FOR THE PERSON WHO BUILDS THINGS ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">For the Person Who Builds Things</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                You have already built something worth being proud of.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                This is not for someone who is still figuring out who they are. This is for someone who already knows — and is looking for things in the world that reflect that standard back at them.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                You lead. You create. You hold yourself to a level most people find uncomfortable. You have a reputation you take seriously and a name you are building carefully. You are not interested in things that are merely expensive. You are interested in things that are worth something.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                Maison Vereen was built for you.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                We create luxury fragrances. Our first edition — 250 numbered bottles, produced once and never again — is now in allocation. The people who own it will be the founding generation of the first serious African luxury house. That is what we are offering. Below, we will explain exactly what that means and why it is worth your attention.
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-10">
            <div className="space-y-4 max-w-[580px]">
              <span className="section-tag">How It Works</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                Simple. Personal. Nothing hidden.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {steps.map((step, i) => (
                <div key={i} className="bg-[#0D0D0D] px-6 sm:px-8 py-8 sm:py-10 space-y-4 relative group hover:bg-white/2 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-mono text-gold/50" style={{ fontSize: "11px" }}>{step.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "17px" }}>{step.title}</h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "14px" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE YOU APPLY ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-10">
            <div className="space-y-4 max-w-[580px]">
              <span className="section-tag">Before You Apply</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                You should be certain before you commit to anything.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                You are a careful person. You do not make decisions without enough information. Here is everything you need to verify before applying.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/3">
              {verifications.map((v, i) => (
                <div key={i} className="bg-[#0D0D0D] px-6 sm:px-8 py-8 sm:py-10 space-y-4 relative group hover:bg-white/2 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-serif text-gold/40" style={{ fontSize: "13px" }}>{v.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "16px" }}>{v.title}</h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "14px" }}>{v.body}</p>
                </div>
              ))}
            </div>
            {/* Security notice */}
            <div className="border border-white/6 bg-[#080808] px-6 sm:px-8 py-6">
              <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "14px" }}>
                <span className="text-[#8A8178] font-medium">Security notice:</span> All official Maison Vereen communications, including payment instructions, come only from{" "}
                <span className="text-gold/70 break-all">hello@maisonvereen.com</span>. We will never request payment through WhatsApp, social media, or any unverified channel. If you receive a payment request from any other source, do not act on it — contact us first.
              </p>
            </div>
            <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
              If you have questions before applying, write to us at{" "}
              <a href="mailto:hello@maisonvereen.com" className="text-gold/70 hover:text-gold transition-colors break-all">
                hello@maisonvereen.com
              </a>. A member of our team responds personally, usually within a few hours.
            </p>
          </div>
        </section>

        {/* ── IF THIS RESONATES ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20">
            <div className="max-w-[680px] space-y-5 md:space-y-6">
              <span className="section-tag">If This Resonates</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                If this resonates, you already know what to do.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                You have read this far. That is not an accident. The people this house was built for tend to recognise themselves in it quickly — not because the writing is persuasive, but because the idea of it is something they have felt for a long time without quite having a name for it.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                250 positions. One founding edition. No reprints.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Every day that passes is a day fewer positions remain. If this is the right moment for you, the form below takes five minutes. There is no payment at this stage and no obligation. You will receive a personal response within 24 to 48 hours.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                If you want to speak to us first, write to{" "}
                <a href="mailto:hello@maisonvereen.com" className="text-gold/70 hover:text-gold transition-colors break-all">
                  hello@maisonvereen.com
                </a>{" "}and you will hear from a person.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE APPLICATION FORM ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full max-w-[840px] space-y-8 md:space-y-10">
                <div className="space-y-3">
                  <span className="section-tag">The Application Form</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}>
                    Tell us about yourself.
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                    Five minutes. No commitment.
                  </p>
                  <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                    Every question below helps us understand who you are and whether this is the right moment for you to join Maison Vereen. Answer as naturally as you can. There are no wrong answers.
                  </p>
                </div>

                {/* FULL NAME */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    Full Name
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>As it should appear on your Gold Ownership Card</p>
                  <input type="text" required placeholder="Your full name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    Email Address
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>Your invitation will be sent here</p>
                  <input type="email" required placeholder="your@email.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    Phone Number <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span>
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>For personal invitation confirmation</p>
                  <input type="tel" placeholder="Country code + number" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                </div>

                {/* CITY & COUNTRY */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    City &amp; Country
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>Where you are based</p>
                  <input type="text" required placeholder="City, Country" value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
                </div>

                {/* WHAT YOU DO */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    What You Do
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>What you build, lead, or create — in your own words, not your job title</p>
                  <input type="text" required placeholder="In your own words" value={form.whatYouDo}
                    onChange={(e) => setForm({ ...form, whatYouDo: e.target.value })} className={inputClass} />
                </div>

                {/* HOW DID YOU FIND MAISON VEREEN */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    How Did You Find Maison Vereen?
                  </label>
                  <div className="relative">
                    <select required value={form.howHeard}
                      onChange={(e) => setForm({ ...form, howHeard: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer pr-8`}>
                      {HOW_HEARD_OPTIONS.map((o) => (
                        <option key={o} value={o} disabled={o === HOW_HEARD_OPTIONS[0]} className="bg-[#0D0D0D] text-[#E8E2D9]">{o}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#5A5449" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>

                {/* IF REFERRED */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    If Referred, May We Know By Whom? <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span>
                  </label>
                  <input type="text" placeholder="Their name, if you'd like to share it" value={form.referredBy}
                    onChange={(e) => setForm({ ...form, referredBy: e.target.value })} className={inputClass} />
                </div>

                {/* WHAT MADE YOU APPLY */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    What Made You Apply?
                  </label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>In your own words — there is no expected answer</p>
                  <textarea required rows={5} placeholder="Tell us what resonated…" value={form.whatMadeApply}
                    onChange={(e) => setForm({ ...form, whatMadeApply: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "130px" }} />
                </div>

                {/* OPTIONAL — A TIME YOU WERE EARLY TO SOMETHING */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    Optional — A Time You Were Early To Something
                  </label>
                  <p className="text-[#3A3530] font-light leading-[1.7]" style={{ fontSize: "12px" }}>
                    Describe a moment when you recognised the value of something — an idea, an opportunity, a business, a person — before most others did. Answer only if something comes to mind naturally.
                  </p>
                  <textarea rows={4} placeholder="If something comes to mind…" value={form.earlyThing}
                    onChange={(e) => setForm({ ...form, earlyThing: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "110px" }} />
                </div>

                {/* ANYTHING YOU'D LIKE TO ASK OR TELL US */}
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                    Anything You&apos;d Like To Ask Or Tell Us? <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span>
                  </label>
                  <textarea rows={3} placeholder="Questions, context, anything at all…" value={form.anythingElse}
                    onChange={(e) => setForm({ ...form, anythingElse: e.target.value })}
                    className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "90px" }} />
                </div>

                {/* CONSENT */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <button type="button" role="checkbox" aria-checked={form.consent}
                    onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`shrink-0 w-3.5 h-3.5 border mt-0.5 flex items-center justify-center transition-all duration-300 ${
                      form.consent ? "border-gold bg-gold/15" : "border-white/15 group-hover:border-white/25"
                    }`}>
                    {form.consent && (
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <span className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "13px" }}>
                    By submitting, you confirm your information is accurate. You are not committing to any payment. Submitting does not guarantee a position or an invitation. You will receive a personal response within 24 to 48 hours. Your information is held privately and never shared.
                  </span>
                </label>

                {submitError && (
                  <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">{submitError}</div>
                )}

                <button type="submit" disabled={submitting || !form.consent}
                  className="w-full py-4 bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}>
                  <span className="uppercase font-semibold">{submitting ? "Processing..." : "[ Submit My Application ]"}</span>
                </button>
              </form>
            ) : (
              <div className="w-full max-w-[600px] space-y-7">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="section-tag block">Application Received</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                  Welcome to Maison Vereen.
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Your application has been received. We will review it personally and respond within 48 hours. In the meantime, you have been added to the Maison Vereen Registry as a House Circle member. You now have access to the private Journal and will receive all future house announcements.
                </p>
                <p className="text-[#3A3530] font-light" style={{ fontSize: "13px" }}>
                  Confirmation sent to <span className="text-[#5A5449] break-all">{form.email}</span>.
                </p>
                <div className="border-t border-white/5 pt-6">
                  <div className="w-8 h-px bg-gold/30 mb-5" />
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                    If there is someone in your world who should know this house exists — someone who carries the kind of presence this house was built for — you may contact us to nominate them for private access. We will reach out to them personally, with your introduction.
                  </p>
                  <a href="mailto:hello@maisonvereen.com"
                    className="inline-block mt-5 border border-gold/50 hover:border-gold hover:bg-gold/10 px-6 sm:px-8 py-3 text-[#E8E2D9] transition-all duration-500 text-center w-full sm:w-auto"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    <span className="uppercase font-medium">Nominate Someone for Private Access</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── CLOSING STAMP ── */}
        <section className="border-b border-white/5 bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 text-center space-y-4">
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <p className="font-mono text-gold" style={{ fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "0.1em" }}>250</p>
            <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
              Positions in the world. Total. Forever.
            </p>
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <p className="text-[#4A4440] font-light leading-[1.85]" style={{ fontSize: "14px" }}>
              The founding chapter closes when the last position does.
            </p>
            <p className="text-[#4A4440] font-light" style={{ fontSize: "14px" }}>
              Edition I. 250 bottles. The first and only founding generation.
            </p>
            <p className="text-[#4A4440] font-light leading-[1.85]" style={{ fontSize: "14px" }}>
              Questions before applying?{" "}
              <a href="mailto:hello@maisonvereen.com" className="text-gold/60 hover:text-gold transition-colors break-all">
                Write to hello@maisonvereen.com
              </a>{" "}and you will hear from a person.
            </p>
            <div className="pt-4 border-t border-white/5">
              <p className="uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>
                Maison Vereen · Edition I · 250 Bottles · Lagos
              </p>
              <p className="tracking-widest text-[#3A3530] font-light mt-1" style={{ fontSize: "9px" }}>
                hello@maisonvereen.com · maisonvereen.com
              </p>
              <p className="uppercase tracking-[0.15em] text-[#3A3530] font-light mt-1" style={{ fontSize: "9px" }}>
                A House of Distinction. Africa&apos;s First.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
