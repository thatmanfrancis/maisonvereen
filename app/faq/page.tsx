"use client";

import { useState } from "react";
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Page 14 — FREQUENTLY ASKED QUESTIONS (aligned to content blueprint)

const faqGroups = [
  {
    group: "Edition I & The Founding Registry",
    items: [
      {
        q: "What is Edition I and why only 250 bottles?",
        a: "Edition I is the founding chapter of Maison Vereen — two hundred and fifty individually numbered bottles, each authenticated and documented, produced once and never repeated. Two hundred and fifty is not a marketing number. It is the number the House's master perfumer determined could be produced without compromising a single element of the formulation, the vessel, or the ceremony of ownership.",
      },
      {
        q: "How does bottle numbering work?",
        a: "Numbers are assigned in the order applicants are formally accepted into the Founding Registry — meaning a bottle's number reflects not when it was purchased, but when its owner was recognised by the House. Bottle 001 belongs to the first person the House accepted. Early conviction is rewarded with early numbering.",
      },
      {
        q: "What is the Founding Registry and how do applications work?",
        a: "The Maison Vereen Founding Registry is the House's official record of qualified applicants — the foundation from which Edition I's two hundred and fifty owners will ultimately be invited. Applying carries no financial obligation. Applications are read individually by a member of the House and typically receive a decision within 24 to 48 hours.",
      },
      {
        q: "What happens once the Registry reaches 350 accepted members?",
        a: "Once 350 applicants have been accepted, the Founding Registry closes permanently. No further applications will be reviewed. This ceiling exists for the same reason Edition I is limited to 250 bottles — the House does not assemble itself beyond the scale it can honour.",
      },
      {
        q: "Not every Registry member gets a bottle — why?",
        a: "The Registry accepts a maximum of 350 members. Because only 250 bottles exist, not every accepted member will ultimately receive an invitation to acquire — a fact the House states plainly, rather than obscures, out of respect for those who apply. Invitations to acquire are issued privately and individually as the House determines, in the order reflected by each member's assigned number.",
      },
      {
        q: "Will Edition I ever be reissued or restocked?",
        a: "No. Maison Vereen will not reissue, extend, or reproduce Edition I under any future circumstance, regardless of demand. This is not a marketing position. It is the same discipline that makes any founding edition, in any serious collectible category, worth holding in the first place.",
      },
    ],
  },
  {
    group: "Membership, Signature Collection & Practical Matters",
    items: [
      {
        q: "What does membership in Maison Vereen include?",
        a: "Founding Registry members are afforded a continuing place within the House: priority access to future editions before they are announced publicly, private experiences extended only to members, and a direct line of communication with the House that does not exist for the general public. Membership does not entitle anyone to a future bottle, and the House makes no promises it cannot keep.",
      },
      {
        q: "How does the Signature Collection differ from Edition I?",
        a: "Where Edition I is finite by design, the Signature Collection is the House's enduring body of work — fragrances intended to remain part of Maison Vereen's offering for years, refined and revisited as the House's craft evolves. Unlike Edition I, Signature Collection fragrances are not limited to a numbered run. Both are developed to the same uncompromising standard.",
      },
      {
        q: "How does concierge purchasing work for the Signature Collection?",
        a: "There is no 'Add to Cart' anywhere within Maison Vereen. Acquiring a Signature Collection fragrance is always a personal exchange — visitors are invited to speak with a concierge, request details, or continue the conversation by WhatsApp or email. This is by design, not by limitation.",
      },
      {
        q: "Is international shipping available?",
        a: "Yes. The House ships internationally. Specific shipping arrangements, timelines, and applicable logistics are confirmed during the acquisition conversation — either through the Founding Registry invitation process or through a Signature Collection concierge inquiry.",
      },
      {
        q: "How is authenticity verified?",
        a: "Every Edition I bottle is accompanied by a signed certificate of authenticity — security-printed, UV-reactive, and holographic — permanently tied to its specific bottle number. The certificate records the collector's name, edition number, bottle number, and date of acquisition. It cannot be reproduced or transferred independently of the bottle.",
      },
      {
        q: "Are future editions beyond Edition I planned?",
        a: "Yes. Maison Vereen is a fragrance house, not a single edition. Future editions are planned, each its own numbered, limited chapter — drawing from a different African region, carrying a different story. Edition I owners receive priority access to all future editions before any public announcement is made.",
      },
      {
        q: "What is the House's pricing philosophy?",
        a: "The price of Edition I reflects not merely the fragrance, but the numbered ownership position, the bottle as a crafted object, the authentication architecture, the certificate of authenticity, the founder's personal letter, and the permanent documentation of ownership in the House's founding record. Pricing for the Signature Collection is communicated through the concierge process.",
      },
      {
        q: "How do I know this is legitimate?",
        a: "Write to us directly at hello@maisonvereen.com. We respond personally, usually within a few hours. We can provide documentation, arrange a verification call, or — for Lagos-based applicants — an in-person appointment where you can see and smell the fragrance before deciding. All official communications, including payment instructions, come only from hello@maisonvereen.com.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      <Header  />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-24">
                <div className="max-w-[540px] space-y-6">
                  <span className="section-tag">Frequently Asked Questions</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                    Everything you would ask,{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>answered directly.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Clarity, in the House&apos;s own voice. No question here is too practical.
                  </p>
                </div>
              </div>
              {/* Bottle — cap/neck only, barely revealed */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 8%", opacity: 0.48, filter: "brightness(0.57) saturate(0.37)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/52" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/30 to-[#060608]/12" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 50% at 53% 18%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ GROUPED ACCORDION ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-12 md:py-20 space-y-14">
            {faqGroups.map((group, gi) => (
              <div key={gi} className="max-w-[880px] space-y-0">
                <div className="mb-6">
                  <span className="section-tag">{group.group}</span>
                </div>
                <div className="border-t border-white/6">
                  {group.items.map((faq, i) => {
                    const key = `${gi}-${i}`;
                    return (
                      <div key={i} className="border-b border-white/6">
                        <button
                          onClick={() => setOpenKey(openKey === key ? null : key)}
                          className="w-full flex items-start justify-between py-7 text-left gap-6 group"
                        >
                          <span
                            className="font-serif font-light leading-[1.4] text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                          >
                            {faq.q}
                          </span>
                          <span
                            className={`shrink-0 text-gold/50 transition-transform duration-300 mt-1 ${openKey === key ? "rotate-45" : ""}`}
                            style={{ fontSize: "22px", lineHeight: 1 }}
                          >
                            +
                          </span>
                        </button>
                        {openKey === key && (
                          <div className="pb-7 max-w-[720px]">
                            <p className="text-[#6A6258] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0D0D0D] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <p className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
                Still have questions?
              </p>
              <p className="text-[#5A5449] font-light" style={{ fontSize: "17px" }}>
                Every inquiry is read by a person and responded to thoughtfully.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="mailto:hello@maisonvereen.com"
                className="link-gold"
              >
                <span>Contact the House</span>
                <span className="text-gold">→</span>
              </a>
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Begin Your Application</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PAGE 14 → PAGE 15 transition */}
        <section className="bg-[#060608] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#3A3530]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Some questions are better asked directly. The House is always reachable.
            </p>
            <a href="/contact" className="inline-block mt-4 text-gold/40 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Speak with the House Directly →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
