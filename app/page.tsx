"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
import HeroSection from "./components/HeroSection";
import ThreePillars from "./components/ThreePillars";
import WhyExists from "./components/WhyExists";
import Philosophy from "./components/Philosophy";
import CollectionPreview from "./components/CollectionPreview";
import BottlesBanner from "./components/BottlesBanner";
import Journal from "./components/Journal";
import AccessSection from "./components/AccessSection";

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <>
      <Header onOpenApply={openApply} />

      <main className="flex-1 bg-charcoal">
        <HeroSection onOpenApply={openApply} />
        <ThreePillars />
        <WhyExists />
        <Philosophy />
        <CollectionPreview onOpenApply={openApply} />
        <BottlesBanner />
        <Journal />
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
