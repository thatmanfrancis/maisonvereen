"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

// Page 1 sections — in document order
import HeroSection from "./components/HeroSection";
import CollectionPreview from "./components/CollectionPreview";
import WhyExists from "./components/WhyExists";
import Philosophy from "./components/Philosophy";
import FirstTwoFifty from "./components/FirstTwoFifty";
import MembershipCircles from "./components/MembershipCircles";
import FounderStory from "./components/FounderStory";
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
        {/* 1 — Hero */}
        <HeroSection onOpenApply={openApply} />

        {/* 2 — Collection One Preview */}
        <CollectionPreview onOpenApply={openApply} />

        {/* 3 — Why Maison Vereen Exists */}
        <WhyExists />

        {/* 4 — The House Philosophy (headline + subheadline + copy + 4 pillars) */}
        <Philosophy />

        {/* 5 — The First 250 Bottles */}
        <FirstTwoFifty onOpenApply={openApply} />

        {/* 6 — Membership Circles */}
        <MembershipCircles onOpenApply={openApply} />

        {/* 7 — Founder Story */}
        <FounderStory />

        {/* 8 — Future Vision */}
        <FutureVision onOpenApply={openApply} />

        {/* Journal preview — editorial content */}
        <Journal />

        {/* 9 — Waiting List CTA (final section of Page 1) */}
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
