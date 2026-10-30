"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Menu,
  X,
  Award,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Divisions", href: "/divisions" },
    { label: "Videos", href: "/videos" },
    { label: "Downloads", href: "/downloads" },
    { label: "Certifications", href: "/certifications" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white/95 backdrop-blur-md">
      {/* Top Utility Bar */}
      <div className="bg-[#0b192c] text-slate-200 text-xs py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-amber-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">ISO 9001:2015 Certified</span>
              <span className="sm:hidden text-[11px]">ISO Certified</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>DGFT IEC: {companyData.iecCode}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Navsari, Gujarat, India</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${companyData.contact.mobilePhone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
              title="Call mobile"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold hidden sm:inline">{companyData.contact.mobilePhoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}?text=Hello%20BAHC,%20I%20would%20like%20to%20enquire%20about%20your%20animal%20feed%20products`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-[#25D366] text-white px-2 py-0.5 rounded text-[11px] font-medium hover:bg-emerald-600 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-[72px] gap-2">
          {/* Brand Logo & Name — flex-1 so it can shrink, shrink-0 on icon */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-1 min-w-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-emerald-700/30 shadow-md group-hover:scale-105 transition-transform bg-white shrink-0">
              <Image
                src="/assets/brand/bahc-logo-emblem.jpg"
                alt="Bharat Animal Health Care Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-1 min-w-0">
                <span className="text-sm sm:text-[15px] lg:text-lg font-black tracking-tight text-[#0d472a] leading-none shrink-0">
                  BHARAT
                </span>
                <span className="text-[11px] sm:text-sm lg:text-base font-extrabold tracking-tight text-[#0b192c] leading-none truncate">
                  ANIMAL HEALTH CARE
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-semibold tracking-wide text-amber-700 uppercase mt-0.5 truncate">
                Since 2013 • Caring For Animals
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-md text-[13px] font-semibold transition-all whitespace-nowrap ${
                    active
                      ? "text-[#0d472a] bg-emerald-50 border-b-2 border-[#0d472a]"
                      : "text-slate-700 hover:text-[#0d472a] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/quote"
              className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#0d472a] to-[#15803d] hover:from-[#0a3821] hover:to-[#166534] shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              Get Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold ${
                    active
                      ? "bg-emerald-50 text-[#0d472a] font-bold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#0d472a]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#0d472a] hover:bg-emerald-900 shadow-sm"
              >
                Request a Quote / Dealership
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${companyData.contact.mobilePhone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call mobile</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}?text=Hello%20BAHC,%20I%20would%20like%20to%20enquire%20about%20your%20products`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] text-white rounded-lg text-xs font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
