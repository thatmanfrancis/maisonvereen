"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Page 11 — QUESTIONS & ANSWERS (exact from document)

const faqs = [
  {
    q: "Why should I reserve early?",
    a: "Because Edition I is a finite event. When 250 owners have been confirmed, the allocation is closed — permanently. There is no second production run. There is no 'coming back to it later.' If your name is not in the founding record, it will not be there. Early reservation is not urgency created by marketing. It is urgency created by mathematics.",
  },
  {
    q: "Why is the fragrance priced at ₦400,000?",
    a: "Because ₦400,000 is not the price of a fragrance. It is the price of a numbered ownership position in the founding chapter of a luxury house. The fragrance is extraordinary — built by a master perfumer with African raw materials at a concentration that produces a quality of scent that most of the luxury market does not reach. But the price also reflects: the bottle as a crafted object, the authentication architecture, the collector position, the Gold Card system, the private portal, and the permanent documentation of your ownership in the house's founding record.",
  },
  {
    q: "Why only 250 bottles?",
    a: "Because the founding chapter of a house should be owned by a defined number of people — enough to matter culturally, few enough to remain genuinely rare. 250 is not a marketing number. It is an architectural decision about what kind of object Edition I should be. A numbered, permanent, irreproducible founding artifact.",
  },
  {
    q: "Will more fragrances be released?",
    a: "Yes. Maison Vereen is a fragrance house, not a single edition. Edition II is already in development. Each future edition will be its own numbered, limited chapter — drawing from a different African region, carrying a different story, with a different bottle architecture. Edition I owners receive priority access to all future editions before any public announcement.",
  },
  {
    q: "How does the Registry work?",
    a: "The Registry is the permanent membership record of Maison Vereen. Joining the Registry places your name in the house's founding documentation, grants access to the private portal and journal content, and ensures you receive all future announcements — including edition openings — before the public. Registry membership is free. Ownership positions require allocation through the application process.",
  },
  {
    q: "Who is Maison Vereen for?",
    a: "The honest answer: you will know. The house was built for people who build things, lead without permission, and carry a presence that rooms feel before they enter. If that language resonates immediately, Maison Vereen was built for you. If you are still deciding whether you qualify, it probably was not.",
  },
  {
    q: "What if I miss Collection One?",
    a: "Edition I will not be reproduced. If the 250 allocation positions are filled before your application is processed, your name will be placed on the Edition II priority register — automatically, without reapplication. You will receive first access to Edition II before any public announcement. Missing Edition I is not the end. But it is, permanently, a missed beginning.",
  },
  {
    q: "How are members prioritized?",
    a: "Registry tier, then application date. Founding Fifty members receive first access to all allocations. Collector Circle members receive access before House Circle members. Within each tier, allocation is processed in order of confirmed commitment payments. The queue is real. Movement within it is not possible.",
  },
];

export default function FAQPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-24">
                <div className="max-w-[540px] space-y-6">
                  <span className="section-tag">Questions &amp; Answers</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
                    Every hesitation deserves{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>a direct answer.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    We answer objections with confidence, not defensiveness. If your question is not here, write to us.
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

        {/* ── FAQ ACCORDION ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-12 md:py-20">
            <div className="max-w-[880px] space-y-0 border-t border-white/6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/6">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-start justify-between py-7 text-left gap-6 group"
                  >
                    <span
                      className="font-serif font-light leading-[1.4] text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-gold/50 transition-transform duration-300 mt-1 ${openIndex === i ? "rotate-45" : ""}`}
                      style={{ fontSize: "22px", lineHeight: 1 }}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="pb-7 max-w-[720px]">
                      <p className="text-[#6A6258] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0D0D0D] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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
              <button
                onClick={() => setIsApplyOpen(true)}
                className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Begin Your Application</span>
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
