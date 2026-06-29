"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Page 14 — CONTACT
// Six routed inquiry categories per document spec

const categories = [
  {
    id: "general",
    label: "General Inquiries",
    description: "For questions about the house, the philosophy, or how to join the Registry.",
    email: "hello@maisonvereen.com",
    placeholder: "Your question or message…",
  },
  {
    id: "ownership",
    label: "Ownership Inquiries",
    description: "For questions about the Ownership Application, allocation status, or the Edition I experience.",
    email: "ownership@maisonvereen.com",
    placeholder: "Your inquiry about ownership or allocation…",
  },
  {
    id: "press",
    label: "Press & Media",
    description: "For editorial coverage, brand collaborations, and media relationships. Please include your publication and the nature of your inquiry.",
    email: "press@maisonvereen.com",
    placeholder: "Your publication and the nature of your inquiry…",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    description: "For business development, distribution discussions, and institutional partnerships. Please describe the nature of the potential relationship.",
    email: "partnerships@maisonvereen.com",
    placeholder: "Describe the nature of the potential relationship…",
  },
  {
    id: "appointments",
    label: "Private Appointments",
    description: "For individuals who wish to experience the fragrance before applying. Available by arrangement in Lagos.",
    email: "appointments@maisonvereen.com",
    placeholder: "Your preferred date and any relevant details…",
  },
  {
    id: "collectors",
    label: "Collector Inquiries",
    description: "For verified owners with questions about authentication, provenance, or secondary ownership transfer.",
    email: "collectors@maisonvereen.com",
    placeholder: "Your bottle number and the nature of your inquiry…",
  },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link with the routed recipient
    const subject = encodeURIComponent(`${selectedCategory.label} — Maison Vereen`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${selectedCategory.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Header  />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-16 md:py-24">
                <div className="max-w-[520px] space-y-7">
                  <span className="section-tag">Contact</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.2rem, 4.8vw, 4rem)" }}
                  >
                    Every conversation with the house{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>matters.</em>
                  </h1>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen does not use automated responses. Every inquiry is read by a person and responded to by a person. We may not respond immediately — but we will respond thoughtfully.
                  </p>
                  <p className="text-[#5A5449] font-light" style={{ fontSize: "14px" }}>
                    For direct correspondence:{" "}
                    <a href="mailto:hello@maisonvereen.com" className="text-gold/70 hover:text-gold transition-colors">
                      hello@maisonvereen.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Right — dark atmospheric panel */}
              <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/hero-bottle.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 20%",
                    opacity: 0.35,
                    filter: "brightness(0.5) saturate(0.3)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-charcoal/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/85 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/25" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>Maison Vereen · Lagos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY SELECTOR + FORM ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

              {/* Left — category selector */}
              <div className="border-b lg:border-b-0 lg:border-r border-white/5 bg-charcoal">
                <div className="px-6 sm:px-8 py-8 space-y-1">
                  <p className="uppercase tracking-[0.3em] text-[#3A3530] font-medium mb-5" style={{ fontSize: "10px" }}>
                    Select Category
                  </p>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat); setSent(false); }}
                      className={`w-full text-left px-4 py-3.5 transition-all duration-200 border-l-2 group ${
                        selectedCategory.id === cat.id
                          ? "border-gold bg-gold/5 text-[#E8E2D9]"
                          : "border-transparent text-[#5A5449] hover:text-[#C8C0B4] hover:border-white/15"
                      }`}
                    >
                      <span className="font-light" style={{ fontSize: "13px" }}>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div className="px-6 sm:px-8 md:px-14 py-12 md:py-16">
                <div className="max-w-[560px] space-y-8">
                  {/* Category info */}
                  <div className="space-y-3 pb-8 border-b border-white/5">
                    <h2
                      className="font-serif font-light text-[#E8E2D9]"
                      style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                    >
                      {selectedCategory.label}
                    </h2>
                    <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "15px" }}>
                      {selectedCategory.description}
                    </p>
                    <p className="text-[#3A3530] font-light" style={{ fontSize: "12px" }}>
                      Routed to:{" "}
                      <span className="text-gold/60">{selectedCategory.email}</span>
                    </p>
                  </div>

                  {!sent ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-transparent border border-white/10 px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-transparent border border-white/10 px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block uppercase tracking-[0.25em] text-[#5A5449] font-medium" style={{ fontSize: "10px" }}>
                          Your Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder={selectedCategory.placeholder}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-transparent border border-white/10 px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none leading-[1.75]"
                          style={{ minHeight: "120px" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 font-semibold uppercase"
                        style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                      >
                        Send Message
                      </button>

                      <p className="text-[#3A3530] font-light text-center" style={{ fontSize: "12px" }}>
                        This will open your email client with the message pre-filled.
                      </p>
                    </form>
                  ) : (
                    <div className="space-y-5 py-8">
                      <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l4 4 10-10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="font-serif font-light text-[#E8E2D9]" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
                        Your message is ready to send.
                      </h3>
                      <p className="text-[#7A7068] font-light leading-[1.8]" style={{ fontSize: "15px" }}>
                        Your email client should have opened with the message pre-filled. If it did not, write directly to{" "}
                        <a href={`mailto:${selectedCategory.email}`} className="text-gold/70 hover:text-gold transition-colors break-all">
                          {selectedCategory.email}
                        </a>.
                      </p>
                      <button
                        onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                        className="text-[#5A5449] hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium"
                        style={{ fontSize: "11px" }}
                      >
                        ← Send another message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT PATHWAYS QUICK REFERENCE ── */}
        <section className="bg-charcoal border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 md:py-18 space-y-8">
            <span className="section-tag">All Contact Pathways</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="group bg-charcoal px-6 py-8 space-y-3 hover:bg-white/2 transition-colors duration-300 relative cursor-pointer"
                  onClick={() => { setSelectedCategory(cat); setSent(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "18px" }}>
                    {cat.label}
                  </h3>
                  <p className="text-[#4A4440] font-light leading-[1.7]" style={{ fontSize: "13px" }}>
                    {cat.description}
                  </p>
                  <a
                    href={`mailto:${cat.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-gold/50 hover:text-gold transition-colors duration-300 font-light break-all"
                    style={{ fontSize: "12px" }}
                  >
                    {cat.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
