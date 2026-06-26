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

const ownershipItems = [
  {
    title: "Your individually numbered bottle",
    body: "Hand-blown glass with African mineral inclusions specific to this edition. The edition and bottle numbers are engraved, not printed. No two bottles are identical. The base carries the Edition I hallmark.",
  },
  {
    title: "The Gold Ownership Card",
    body: "18-micron gold-plated metal, laser-engraved with your name and bottle number. Activates your private ownership portal. This is your permanent credential within the house.",
  },
  {
    title: "Private Ownership Portal",
    body: "Activated by your Gold Card. Contains your authentication record, edition provenance, the founder's personal letter, and your ongoing priority access to future editions.",
  },
  {
    title: "Certificate of Authentication",
    body: "Security-printed, UV-reactive, holographic. Permanently tied to your specific bottle number. Cannot be reproduced or transferred independently of the bottle.",
  },
  {
    title: "Founder's personal letter",
    body: "Written for Edition I, signed, and addressed to you as an owner. Sealed within your delivery. Part of the edition's permanent record.",
  },
  {
    title: "Permanent founding archive entry",
    body: "Your name and bottle number entered into the Maison Vereen founding record. Irreversible.",
  },
  {
    title: "Priority access to all future editions",
    body: "Before any public or private announcement. As the house grows, you remain ahead of the public on every release.",
  },
];

const circles = [
  {
    name: "Founders Circle",
    positions: "50 positions",
    closing: "Closes permanently when filled",
    body: "The most foundational position in the house. Fifty people globally. Permanently documented as the first generation.",
    privileges: [
      "First access to every future edition before any other tier",
      "Invitations to all private house events and founder gatherings",
      "Recognition in the founding archive",
      "Direct personal communication from the founder at every significant house moment",
    ],
    note: "When the fiftieth position is confirmed, this circle closes. It will not reopen.",
  },
  {
    name: "Collector's Circle",
    positions: "100 positions",
    closing: "Closes at end of Edition I allocation",
    body: "Members who hold at least one numbered bottle from any edition and join during Edition I's allocation period.",
    privileges: [
      "Priority access to all future editions before public announcement",
      "Invitations to private collector events",
      "Annual personal communication from the founder",
    ],
    note: null,
  },
  {
    name: "House Membership",
    positions: "100 positions",
    closing: "Open through Edition I allocation period",
    body: "The founding membership tier. Open continuously as the house grows.",
    privileges: [
      "Advance notice of all future releases before public announcement",
      "Access to the private Journal",
      "Invitations to all house events",
      "Priority allocation for future limited editions",
    ],
    note: null,
  },
];

const steps = [
  { num: "1", title: "You apply — free, no commitment.", body: "The application takes about five minutes. There is no payment at this stage. Every question is there because it helps us understand who you are." },
  { num: "2", title: "A person reviews your application within 24–48 hours.", body: "A member of our founding team reads every application personally. We review for character and alignment — not income, job title, or following size." },
  { num: "3", title: "You receive a personal response either way.", body: "If successful: a personal invitation with your offered position, circle, and payment details. If not: a personal note and automatic first-priority registration for Edition II." },
  { num: "4", title: "You have a defined window to confirm.", body: "Founders Circle: 48 hours. All other tiers: 72 hours. If the window passes without payment, the position is offered to the next applicant. These windows cannot be extended." },
  { num: "5", title: "Your edition is prepared and shipped.", body: "Once confirmed, you receive everything in the ownership package. Your founding archive entry is created the moment payment clears." },
];

const verifications = [
  { num: "I", title: "Edition I is a completed, physical product.", body: "The 250 bottles have been produced. The fragrance is finished, bottled, authenticated, and ready to ship to confirmed owners. You are not pre-ordering a concept." },
  { num: "II", title: "No payment is requested at this stage.", body: "Applying costs nothing. You will not be asked for any payment before receiving a formal invitation from hello@maisonvereen.com." },
  { num: "III", title: "We are a registered business based in Lagos, Nigeria.", body: "We will provide documentation, arrange a video conversation, or — for Lagos-based applicants — an in-person appointment where you can see and smell the fragrance before deciding." },
  { num: "IV", title: "Every application gets a personal response within 48 hours.", body: "Whether successful or not. We do not leave applications without an answer." },
  { num: "V", title: "Your information is held privately.", body: "We do not share, sell, or use your data for any purpose beyond managing your relationship with the house." },
];

const faqs = [
  { q: "What am I actually applying for?", a: "A founding ownership position in Maison Vereen Edition I. If successful, you own one of 250 numbered bottles in the world — with a complete authentication and ownership package, membership in one of three founding circles, and permanent first-access priority to all future Maison Vereen editions." },
  { q: "Why an application instead of a direct purchase?", a: "Who forms the founding generation of a house matters. We want the 250 people who carry Edition I to be people who understand what they are holding. The application is the first conversation. And the fact that you are reading this carefully already suggests you may be the right kind of person." },
  { q: "How are applications evaluated?", a: "By a person, not an algorithm. We review for character, seriousness, and alignment with what the house stands for. Not income, job title, or following size. It is a human judgment, made personally and carefully." },
  { q: "What does it cost?", a: "Applying costs nothing. Pricing for each circle is communicated in your personal invitation email after your application is reviewed. Nothing is requested before the formal, verified invitation." },
  { q: "What if I'm not offered a position?", a: "You receive a personal response within 48 hours. Your name is automatically placed on the Edition II priority register. When Edition II opens, you receive access before any public announcement." },
  { q: "Will Edition I ever be re-released?", a: "No. Once 250 positions are confirmed, Edition I is retired permanently. No restock. No re-release. The rarity is structural, not manufactured." },
  { q: "Can I experience the fragrance before applying?", a: "Yes. For serious applicants, we can arrange a private appointment in Lagos to experience the fragrance before making any decision. Write to hello@maisonvereen.com." },
  { q: "How do I know this is legitimate?", a: "Write to us directly at hello@maisonvereen.com. We respond personally, usually within a few hours. We can provide documentation, arrange a verification call, or set up an in-person appointment." },
];

export default function AccessPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", whatYouDo: "",
    howHeard: HOW_HEARD_OPTIONS[0], referredBy: "", whatMadeApply: "",
    earlyThing: "", anythingElse: "", consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const inputClass = "w-full bg-transparent border border-white/[0.1] px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300";

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
          name: form.name, email: form.email, phone: form.phone || null,
          country: form.country, whatYouDo: form.whatYouDo,
          howHeard: form.howHeard === HOW_HEARD_OPTIONS[0] ? "Not specified" : form.howHeard,
          referredBy: form.referredBy || null, whatMadeApply: form.whatMadeApply,
          earlyThing: form.earlyThing || null, anythingElse: form.anythingElse || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setSubmitError(data.error ?? "Something went wrong."); return; }
      setSubmitted(true);
    } catch { setSubmitError("Network error. Please check your connection and try again."); }
    finally { setSubmitting(false); }
  };

  return (
    <>
      <Header onOpenApply={() => {}} />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex flex-col justify-center px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-6 md:space-y-7">
                <span className="section-tag">Application</span>
                <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.02] uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.2rem)" }}>
                  Access is earned.<br />Not given.
                </h1>
                <div className="space-y-3 text-[#7A7268] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                  <p>Maison Vereen is a house of rare creation. Edition I is limited to 250 bottles worldwide. Access is by application only.</p>
                  <p>We select not for quantity, but for alignment.</p>
                </div>
              </div>
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-0 overflow-hidden bg-[#050505]">
                <Image src="/images/application-hero.png" alt="Maison Vereen Edition I" fill priority
                  sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" style={{ opacity: 0.9 }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FOR THE PERSON WHO BUILDS THINGS ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">For the Person Who Builds Things</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                You have already built something worth being proud of.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                This is not for someone who is still figuring out who they are. This is for someone who already knows — and is looking for things in the world that reflect that standard back at them.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                You lead. You create. You hold yourself to a level most people find uncomfortable. You have a reputation you take seriously and a name you are building carefully. You are not interested in things that are merely expensive. You are interested in things that are worth something.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Maison Vereen was built for you.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                We create luxury fragrances. Our first edition — 250 numbered bottles, produced once and never again — is now in allocation. The people who own it will be the founding generation of the first serious African luxury house. That is what we are offering. Below, we will explain exactly what that means and why it is worth your attention.
              </p>
            </div>
          </div>
        </section>

        {/* ── IDENTITY & DISTINCTION ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-5">
                <span className="section-tag">Identity &amp; Distinction</span>
                <p className="font-serif font-light text-[#C8BFB2] leading-[1.3] italic" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  The objects you choose say something about how you see yourself.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  You have built enough to know that quality is not a luxury. It is a standard. You do not buy things to impress people. You choose things that align with who you are becoming — objects that reflect your values, your taste, and your sense of what is worth owning.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Most luxury fragrance in the world is built for aspiration — for who you want to become. We made a different decision. Maison Vereen was built to recognize who you already are.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Our fragrances are not designed to give you an identity. They are designed to amplify the one you already carry. The founding edition — Edition I — was built around a single question: what does the presence of someone who has actually built something smell like?
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Not their ambition. Not their aspiration. Their presence. The quality that exists before achievement — that makes a room feel different when they walk in.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  That question led us to African raw materials that produce a depth unavailable in the standard global fragrance supply chain. To a master perfumer. To a bottle designed as a sculpture before a vessel. To an authentication system built with the same seriousness as the fragrance itself.
                </p>
              </div>
              <div className="space-y-5">
                <span className="section-tag">Opportunity &amp; Timing</span>
                <p className="font-serif font-light text-[#C8BFB2] leading-[1.3] italic" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  The people who recognise something early earn something permanent.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  You have been early to things before. You know what that feels like — the clarity of seeing something others have not noticed yet, the quiet confidence of knowing before the world catches up.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  That is the position this creates.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  We are building Africa's first internationally serious luxury house — the kind of institution that, if built correctly, earns a place in the history of how this continent is represented in global culture. We are at the very beginning of that story. Edition I is the opening chapter.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  When the 250 founding positions are filled, Edition I closes permanently. It is never reproduced, never restocked, never reformulated. The numbered bottle you own will be one of 250 that exist in the world — authenticated, documented, and permanent — for the rest of its existence.
                </p>
                <div className="border border-white/6 px-6 py-5 space-y-2">
                  <p className="font-mono text-gold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "0.1em" }}>250</p>
                  <p className="text-[#7A7068] font-light" style={{ fontSize: "14px" }}>Bottles worldwide. Not per country. Not per year. Total, globally, forever.</p>
                </div>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  The question is not whether this will matter. It is whether you will have been part of it when it did.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY & BELONGING + LEGACY & PERMANENCE ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-5">
                <span className="section-tag">Community &amp; Belonging</span>
                <p className="font-serif font-light text-[#C8BFB2] leading-[1.3] italic" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  You are more careful about what you join than most people are.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  You have earned the right to be selective. The communities you belong to, the rooms you enter, the networks you maintain — you have made those choices deliberately. You do not join things for the sake of joining.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  The 250 founding owners of Maison Vereen will be a specific kind of person. People who build things. People who lead. People who value quality as a personal standard rather than a social signal. People who understand what it means to be early to something serious.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  That is the community you would be entering.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Not a fan base. Not a customer list. A founding generation. The people who are there when an institution begins. Documented. Numbered. Permanent.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  We are not looking for the largest possible audience. We are looking for the right 250 people. If you are one of them, you already sense it.
                </p>
              </div>
              <div className="space-y-5">
                <span className="section-tag">Legacy &amp; Permanence</span>
                <p className="font-serif font-light text-[#C8BFB2] leading-[1.3] italic" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  What will your name be attached to twenty years from now?
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  You think about legacy. Not in an abstract way — in the real, practical way of someone who is actively building something and making choices about what they want to be associated with.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  The objects you own, the communities you belong to, the things you chose early — these become part of your story. They reflect your judgment. Your taste. Your ability to see value before others do.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Founding ownership of Maison Vereen Edition I is a permanent entry in the house's founding record. Your name and bottle number are documented. That documentation does not expire, does not change, and cannot be revisited.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Twenty years from now, the founding owners of Maison Vereen Edition I will be the people who were there at the beginning of Africa's first serious luxury house — before it became what it is being built to become. That is worth something. Whether you measure it financially, reputationally, or simply as the satisfaction of having made a decision that turns out to have been correct.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── YOUR COMPLETE OWNERSHIP PACKAGE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 space-y-10">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">Your Complete Ownership Package</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                Everything that comes with founding ownership.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Every founding position includes the following. All of it. No additional tiers within the ownership package.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
              {ownershipItems.map((item, i) => (
                <div key={i} className="bg-[#0D0D0D] px-6 sm:px-8 py-8 flex items-start gap-5 hover:bg-white/2 transition-colors duration-300">
                  <div className="shrink-0 w-4 h-px bg-gold/40 mt-[11px]" />
                  <div className="space-y-1.5">
                    <p className="text-[#C8C0B4] font-light" style={{ fontSize: "15px" }}>{item.title}</p>
                    <p className="text-[#5A5449] font-light leading-[1.7]" style={{ fontSize: "14px" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEMBERSHIP CIRCLES ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 space-y-10">
            <div className="space-y-4 max-w-[680px]">
              <span className="section-tag">Membership Circles</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                Three tiers. One founding generation.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                The 250 founding positions are distributed across three circles. You do not select your circle on this form — it is offered to you based on availability when your application is reviewed. Each circle includes the complete ownership package above, plus the additional privileges listed.
              </p>
              <p className="text-[#5A5449] font-light" style={{ fontSize: "14px" }}>
                Pricing for each circle is communicated in your personal invitation email after your application is reviewed. Nothing is charged at the application stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {circles.map((c, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-6 sm:px-8 py-10 space-y-6 hover:bg-white/2 transition-colors duration-300 relative flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="space-y-2">
                    <h3 className="font-serif font-light text-[#E8E2D9] group-hover:text-gold transition-colors duration-300" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>{c.name}</h3>
                    <p className="text-gold/60 font-medium uppercase tracking-[0.2em]" style={{ fontSize: "10px" }}>{c.positions}</p>
                    <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>{c.closing}</p>
                  </div>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "14px" }}>{c.body}</p>
                  <ul className="space-y-2.5 flex-1">
                    {c.privileges.map((p, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="shrink-0 w-3 h-px bg-gold/30 mt-[9px]" />
                        <span className="text-[#5A5449] font-light leading-[1.6]" style={{ fontSize: "13px" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {c.note && <p className="text-[#3A3530] font-light italic border-t border-white/5 pt-4" style={{ fontSize: "12px" }}>{c.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 space-y-10">
            <div className="space-y-4 max-w-[580px]">
              <span className="section-tag">How It Works</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                Simple. Personal. Nothing hidden.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {steps.map((step, i) => (
                <div key={i} className="bg-[#0D0D0D] px-6 sm:px-8 py-8 space-y-4 relative group hover:bg-white/2 transition-colors duration-300">
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
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 space-y-10">
            <div className="space-y-4 max-w-[580px]">
              <span className="section-tag">Before You Apply</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                You should be certain before you commit to anything.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                You are a careful person. You do not make decisions without enough information. Here is everything you need to verify before applying.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03]">
              {verifications.map((v, i) => (
                <div key={i} className="bg-[#0D0D0D] px-6 sm:px-8 py-8 space-y-4 relative group hover:bg-white/2 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-serif text-gold/40" style={{ fontSize: "13px" }}>{v.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "16px" }}>{v.title}</h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "14px" }}>{v.body}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/6 bg-[#080808] px-6 sm:px-8 py-6">
              <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "14px" }}>
                <span className="text-[#8A8178] font-medium">Security notice:</span> All official Maison Vereen communications, including payment instructions, come only from{" "}
                <span className="text-gold/70 break-all">hello@maisonvereen.com</span>. We will never request payment through WhatsApp, social media, or any unverified channel. If you receive a payment request from any other source, do not act on it — contact us first.
              </p>
            </div>
            <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
              If you have questions before applying, write to us at{" "}
              <a href="mailto:hello@maisonvereen.com" className="text-gold/70 hover:text-gold transition-colors break-all">hello@maisonvereen.com</a>.
              {" "}A member of our team responds personally, usually within a few hours.
            </p>
          </div>
        </section>

        {/* ── QUESTIONS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 space-y-8">
            <div className="space-y-3">
              <span className="section-tag">Questions</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                The questions most people ask first.
              </h2>
            </div>
            <div className="max-w-[880px] border-t border-white/6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/6">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between py-6 text-left gap-6 group">
                    <span className="font-serif font-light leading-[1.4] text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)" }}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 text-gold/50 transition-transform duration-300 mt-1 ${openFaq === i ? "rotate-45" : ""}`} style={{ fontSize: "20px", lineHeight: 1 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-6 max-w-[720px]">
                      <p className="text-[#6A6258] font-light leading-[1.85]" style={{ fontSize: "16px" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IF THIS RESONATES ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20">
            <div className="max-w-[680px] space-y-5">
              <span className="section-tag">If This Resonates</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
                If this resonates, you already know what to do.
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                You have read this far. That is not an accident. The people this house was built for tend to recognise themselves in it quickly — not because the writing is persuasive, but because the idea of it is something they have felt for a long time without quite having a name for it.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>250 positions. One founding edition. No reprints.</p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Every day that passes is a day fewer positions remain. If this is the right moment for you, the form below takes five minutes. There is no payment at this stage and no obligation. You will receive a personal response within 24 to 48 hours.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                If you want to speak to us first, write to{" "}
                <a href="mailto:hello@maisonvereen.com" className="text-gold/70 hover:text-gold transition-colors break-all">hello@maisonvereen.com</a>{" "}and you will hear from a person.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE APPLICATION FORM ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full max-w-[840px] space-y-8">
                <div className="space-y-3">
                  <span className="section-tag">The Application Form</span>
                  <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>Tell us about yourself.</h2>
                  <p className="text-[#7A7068] font-light" style={{ fontSize: "15px" }}>Five minutes. No commitment.</p>
                  <p className="text-[#5A5449] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                    Every question below helps us understand who you are and whether this is the right moment for you to join Maison Vereen. Answer as naturally as you can. There are no wrong answers.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Full Name</label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>As it should appear on your Gold Ownership Card</p>
                  <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Email Address</label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>Your invitation will be sent here</p>
                  <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Phone Number <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span></label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>For personal invitation confirmation</p>
                  <input type="tel" placeholder="Country code + number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>City &amp; Country</label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>Where you are based</p>
                  <input type="text" required placeholder="City, Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>What You Do</label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>What you build, lead, or create — in your own words, not your job title</p>
                  <input type="text" required placeholder="In your own words" value={form.whatYouDo} onChange={(e) => setForm({ ...form, whatYouDo: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>How Did You Find Maison Vereen?</label>
                  <div className="relative">
                    <select required value={form.howHeard} onChange={(e) => setForm({ ...form, howHeard: e.target.value })} className={`${inputClass} appearance-none cursor-pointer pr-8`}>
                      {HOW_HEARD_OPTIONS.map((o) => (<option key={o} value={o} disabled={o === HOW_HEARD_OPTIONS[0]} className="bg-charcoal text-[#E8E2D9]">{o}</option>))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#5A5449" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>If Referred, May We Know By Whom? <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span></label>
                  <input type="text" placeholder="Their name, if you'd like to share it" value={form.referredBy} onChange={(e) => setForm({ ...form, referredBy: e.target.value })} className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>What Made You Apply?</label>
                  <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>In your own words — there is no expected answer</p>
                  <textarea required rows={5} placeholder="Tell us what resonated…" value={form.whatMadeApply} onChange={(e) => setForm({ ...form, whatMadeApply: e.target.value })} className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "130px" }} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Optional — A Time You Were Early To Something</label>
                  <p className="text-[#3A3530] font-light leading-[1.7]" style={{ fontSize: "12px" }}>Describe a moment when you recognised the value of something — an idea, an opportunity, a business, a person — before most others did. Answer only if something comes to mind naturally.</p>
                  <textarea rows={4} placeholder="If something comes to mind…" value={form.earlyThing} onChange={(e) => setForm({ ...form, earlyThing: e.target.value })} className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "110px" }} />
                </div>

                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Anything You&apos;d Like To Ask Or Tell Us? <span className="text-[#3A3530] normal-case tracking-normal">— Optional</span></label>
                  <textarea rows={3} placeholder="Questions, context, anything at all…" value={form.anythingElse} onChange={(e) => setForm({ ...form, anythingElse: e.target.value })} className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "90px" }} />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <button type="button" role="checkbox" aria-checked={form.consent} onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`shrink-0 w-3.5 h-3.5 border mt-0.5 flex items-center justify-center transition-all duration-300 ${form.consent ? "border-gold bg-gold/15" : "border-white/15 group-hover:border-white/25"}`}>
                    {form.consent && (<svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                  </button>
                  <span className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "13px" }}>
                    By submitting, you confirm your information is accurate. You are not committing to any payment. Submitting does not guarantee a position or an invitation. You will receive a personal response within 24 to 48 hours. Your information is held privately and never shared.
                  </span>
                </label>

                {submitError && (<div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">{submitError}</div>)}

                <button type="submit" disabled={submitting || !form.consent}
                  className="w-full py-4 bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}>
                  <span className="uppercase font-semibold">{submitting ? "Processing..." : "[ Submit My Application ]"}</span>
                </button>
              </form>
            ) : (
              <div className="w-full max-w-[600px] space-y-7">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="section-tag block">Application Received</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>Welcome to Maison Vereen.</h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                  Your application has been received. We will review it personally and respond within 48 hours. In the meantime, you have been added to the Maison Vereen Registry as a House Circle member. You now have access to the private Journal and will receive all future house announcements.
                </p>
                <p className="text-[#3A3530] font-light" style={{ fontSize: "13px" }}>
                  Confirmation sent to <span className="text-[#5A5449] break-all">{form.email}</span>.
                </p>
                <div className="border-t border-white/5 pt-6">
                  <div className="w-8 h-px bg-gold/30 mb-5" />
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "15px" }}>
                    If there is someone in your world who should know this house exists — someone who carries the kind of presence this house was built for — you may contact us to nominate them for private access.
                  </p>
                  <a href="mailto:hello@maisonvereen.com" className="inline-block mt-5 border border-gold/50 hover:border-gold hover:bg-gold/10 px-6 sm:px-8 py-3 text-[#E8E2D9] transition-all duration-500 text-center w-full sm:w-auto" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    <span className="uppercase font-medium">Nominate Someone for Private Access</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── CLOSING STAMP ── */}
        <section className="bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-6 sm:px-8 md:px-14 py-12 text-center space-y-4">
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <p className="font-mono text-gold" style={{ fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "0.1em" }}>250</p>
            <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>Positions in the world. Total. Forever.</p>
            <div className="w-8 h-px bg-gold/30 mx-auto" />
            <p className="text-[#4A4440] font-light" style={{ fontSize: "14px" }}>The founding chapter closes when the last position does.</p>
            <p className="text-[#4A4440] font-light" style={{ fontSize: "14px" }}>Edition I. 250 bottles. The first and only founding generation. Every day that passes, fewer positions remain.</p>
            <p className="text-[#4A4440] font-light leading-[1.85]" style={{ fontSize: "14px" }}>
              Questions before applying?{" "}
              <a href="mailto:hello@maisonvereen.com" className="text-gold/60 hover:text-gold transition-colors break-all">Write to hello@maisonvereen.com</a>{" "}and you will hear from a person.
            </p>
            <div className="pt-4 border-t border-white/5">
              <p className="uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>Maison Vereen · Edition I · 250 Bottles · Lagos</p>
              <p className="text-[#3A3530] font-light mt-1" style={{ fontSize: "9px" }}>hello@maisonvereen.com · maisonvereen.com</p>
              <p className="uppercase tracking-[0.15em] text-[#3A3530] font-light mt-1" style={{ fontSize: "9px" }}>A House of Distinction. Africa&apos;s First.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
