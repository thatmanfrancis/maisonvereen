"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// Page 14 — CONTACT

const contactPaths = [
  {
    title: "General Inquiries",
    body: "For questions about the house, the philosophy, or how to join the Registry.",
    email: "hello@maisonvereen.com",
  },
  {
    title: "Ownership Inquiries",
    body: "For questions about the Ownership Application, allocation status, or the Edition I experience.",
    email: "ownership@maisonvereen.com",
  },
  {
    title: "Press & Media",
    body: "For editorial coverage, brand collaborations, and media relationships. Please include your publication and the nature of your inquiry.",
    email: "press@maisonvereen.com",
  },
  {
    title: "Partnerships",
    body: "For business development, distribution discussions, and institutional partnerships. Please describe the nature of the potential relationship.",
    email: "partnerships@maisonvereen.com",
  },
  {
    title: "Private Appointments",
    body: "For individuals who wish to experience the fragrance before applying. Available by arrangement in Lagos.",
    email: "appointments@maisonvereen.com",
  },
  {
    title: "Collector Inquiries",
    body: "For verified owners with questions about authentication, provenance, or secondary ownership transfer.",
    email: "collectors@maisonvereen.com",
  },
];

export default function ContactPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header onOpenApply={() => setIsApplyOpen(true)} />
      <main className="bg-charcoal">

        {/* ── HERO — split layout ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              <div className="flex items-center px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Contact</span>
                  <h1 className="font-serif font-light text-[#E8E2D9] leading-[1.06]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
                    Every conversation with the house{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>matters.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen does not use automated responses. Every inquiry is read by a person and responded to by a person. We may not respond immediately — but we will respond thoughtfully.
                  </p>
                </div>
              </div>
              {/* Bottle — atmospheric, warm amber glow */}
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div className="absolute inset-0" style={{ backgroundImage: "url(/images/hero-bottle.png)", backgroundSize: "cover", backgroundPosition: "center 20%", opacity: 0.49, filter: "brightness(0.57) saturate(0.37)" }} />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/52" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/28 to-[#060608]/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 44% 52% at 54% 22%, rgba(180,130,40,0.09) 0%, transparent 65%)" }} />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>Maison Vereen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT PATHWAYS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 md:py-28 space-y-10">
            <span className="section-tag">Contact Pathways</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {contactPaths.map((path, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-8 py-10 space-y-5 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "20px" }}>
                    {path.title}
                  </h3>
                  <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                    {path.body}
                  </p>
                  <a
                    href={`mailto:${path.email}`}
                    className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 font-light"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    {path.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
