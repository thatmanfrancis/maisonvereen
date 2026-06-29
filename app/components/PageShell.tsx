"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ApplicationForm from "./ApplicationForm";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header  />
      <main className="flex-1 bg-charcoal">{children}</main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
