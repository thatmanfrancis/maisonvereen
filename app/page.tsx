"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

import HeroSection from "./components/HeroSection";
import WhyExists from "./components/WhyExists";
import FounderStory from "./components/FounderStory";
import Philosophy from "./components/Philosophy";
import CollectionPreview from "./components/CollectionPreview";
import FirstTwoFifty from "./components/FirstTwoFifty";
import MembershipCircles from "./components/MembershipCircles";
import FutureVision from "./components/FutureVision";
import Journal from "./components/Journal";
import AccessSection from "./components/AccessSection";

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <>
      <Header onOpenApply={openApply} />

      <main className="flex-1 bg-charcoal">

        {/* 1 — Hero
            First impression. The visitor feels something before they understand it.
            Headline lands the entire brand premise in one sentence. */}
        <HeroSection onOpenApply={openApply} />

        {/* 2 — Why Maison Vereen Exists
            Before showing the product, earn the visitor's attention.
            Explain the gap, the person it was built for, the founding reason. */}
        <WhyExists />

        {/* 3 — Founder Story
            The human behind the house. Trust is built here.
            She becomes the emotional anchor before the philosophy is laid out. */}
        <FounderStory />

        {/* 4 — The House Philosophy
            Now that you know why and who — here is what the house stands for.
            Four pillars, the governing beliefs, the closing quote. */}
        <Philosophy />

        {/* 5 — Collection One Preview
            The first physical expression of everything above.
            Product is introduced only after the house has been fully established. */}
        <CollectionPreview onOpenApply={openApply} />

        {/* 6 — The First 250 Bottles
            Scarcity and permanence. The urgency is architectural, not marketing.
            Sets up why joining now is different from joining later. */}
        <FirstTwoFifty onOpenApply={openApply} />

        {/* 7 — Membership Circles
            The structure of belonging. How the founding generation is organised.
            Now the visitor understands what they'd be joining. */}
        <MembershipCircles onOpenApply={openApply} />

        {/* 8 — Future Vision
            Where the house is going. Founding ownership compounds in significance.
            This section answers "what does owning this become worth over time?" */}
        <FutureVision onOpenApply={openApply} />

        {/* 9 — Journal Preview
            Intellectual depth. The house has a point of view, not just a product.
            Softens the visitor before the final hard ask. */}
        <Journal />

        {/* 10 — Application CTA
            The visitor has now been fully earned. They understand the house,
            trust the founder, know the scarcity, and see the future.
            This is the natural conclusion of the journey. */}
        <AccessSection onOpenApply={openApply} />

      </main>

      <Footer />
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
