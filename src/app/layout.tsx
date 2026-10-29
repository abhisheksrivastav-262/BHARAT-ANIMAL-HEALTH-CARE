import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileQuickBar from "@/components/layout/MobileQuickBar";
import { companyData } from "@/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${companyData.name} | Since 2013... Caring For Animals`,
    template: `%s | ${companyData.name}`,
  },
  description:
    "Bharat Animal Health Care (BAHC) - ISO 9001:2015 certified manufacturer of high-potency cattle feed supplements, Dudhdhara liquid calcium suspensions, chelated mineral mixtures, poultry nutritional supplements, and aquaculture solutions in Navsari, Gujarat, India.",
  keywords: [
    "Bharat Animal Health Care",
    "BAHC",
    "Dudhdhara Calcium Suspension",
    "Dudhdhara Forte Mineral Mixture",
    "Bharat Gold Cattle Feed",
    "Stress Nil 4-in-1 Poultry Supplement",
    "LivoCarePlus",
    "OxyFish Aqua Feed",
    "Bakriyo Golee",
    "B-Fertivet Bull Power",
    "Cattle feed manufacturer Gujarat",
    "ISO 9001:2015 animal health",
    "Navsari Gujarat veterinary feed",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.proprietor,
  publisher: companyData.name,
  metadataBase: new URL(companyData.contact.website),
  openGraph: {
    title: `${companyData.name} — Precision Animal Nutrition Since 2013`,
    description:
      "ISO 9001:2015 Certified manufacturer of high-potency cattle feed supplements, Dudhdhara calcium suspensions, and mineral mixtures in Navsari, Gujarat.",
    url: companyData.contact.website,
    siteName: companyData.name,
    images: [
      {
        url: "/assets/brand/bahc-brand-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Bharat Animal Health Care Navsari Gujarat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-emerald-800 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileQuickBar />
      </body>
    </html>
  );
}
