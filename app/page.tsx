"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

import HeroSection from "./components/HeroSection";
import WhyExists from "./components/WhyExists";
import FounderStory from "./components/FounderStory";
import Philosophy from "./components/Philosophy";

import HouseOf250 from "./components/home/HouseOf250";
import TheTransition from "./components/home/TheTransition";
import TheSignatureCollection from "./components/home/TheSignatureCollection";
import DualPathway from "./components/home/DualPathway";
import Journal from "./components/Journal";

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <>
      <Header  />

      <main className="flex-1 bg-charcoal">
        
        {/* 1 — Hero
            First impression. The visitor feels something before they understand it. */}
        <HeroSection onOpenApply={openApply} />

        {/* 2 — Why Maison Vereen Exists
            Earn the visitor's attention. */}
        <WhyExists />

        {/* 3 — Founder Story
            The human behind the house. Trust is built here. */}
        <FounderStory />

        {/* 4 — The House Philosophy
            What the house stands for. */}
        <Philosophy />

        {/* 5 — World One: The House of 250
            Prestige collection. Exclusivity and CTA to Apply. */}
        <HouseOf250 />

        {/* 6 — The Transition 
            Divider marking the passage between worlds. */}
        <TheTransition />

        {/* 7 — World Two: The Signature Collection 
            Accessible luxury. Purchase/Browse CTAs. */}
        <TheSignatureCollection />

        {/* 8 — Journal Preview
            Intellectual depth. */}
        <Journal />

        {/* 9 — The Dual Pathway 
            The final choice. */}
        <DualPathway />

        {/* PAGE 1 → PAGE 2 transition line (blueprint: "Before you apply, you should understand what you are applying to.") */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#3A3530]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Before you apply, you should understand what you are applying to.
            </p>
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
