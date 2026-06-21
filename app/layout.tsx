import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Vereen | A New Chapter in African Luxury",
  description:
    "Maison Vereen is a fragrance house born from culture, crafted with intention, and created to endure. Edition I — 250 bottles. The Founding Expression.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-[#E8E2D9] antialiased">
        {children}
      </body>
    </html>
  );
}
