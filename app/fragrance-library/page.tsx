"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Signature Collection Components
import SignatureHero from "../components/signature/SignatureHero";
import PhilosophyBand from "../components/signature/PhilosophyBand";
import FragranceGallery from "../components/signature/FragranceGallery";
import FeaturedSpread from "../components/signature/FeaturedSpread";
import Craftsmanship from "../components/signature/Craftsmanship";
import Experience from "../components/signature/Experience";
import ScentFamilies from "../components/signature/ScentFamilies";
import Testimonials from "../components/signature/Testimonials";
import BottomCTA from "../components/signature/BottomCTA";
import ApplicationForm from "../components/ApplicationForm";

export default function FragranceLibraryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header  />
      
      <main className="bg-charcoal flex-1">
        <SignatureHero />
        <PhilosophyBand />
        <FragranceGallery />
        <FeaturedSpread />
        <Craftsmanship />
        <Experience />
        <ScentFamilies />
        <Testimonials />
        <BottomCTA />
      </main>
      
      <Footer />
      
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
