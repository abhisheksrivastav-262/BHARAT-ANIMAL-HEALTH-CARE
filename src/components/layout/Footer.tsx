"use client";

import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800">
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-[#0d472a] via-[#166534] to-[#0b192c] h-1.5 w-full"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-emerald-400/40 bg-white shrink-0">
                <Image
                  src="/assets/brand/bahc-logo-emblem.jpg"
                  alt="BAHC Official Emblem"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  BHARAT ANIMAL HEALTH CARE
                </h3>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Since 2013 • Caring For Animals
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Leading manufacturer and supplier of scientifically formulated cattle feed supplements,
              glycin-chelated calcium suspensions, poultry nutritional powders, and aquaculture water conditioners.
            </p>

            <div className="pt-2 space-y-2 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ISO 9001:2015 Certified (QRO #{companyData.isoCertificate.number})</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Award className="w-4 h-4 shrink-0" />
                <span>Govt. of India DGFT IEC: {companyData.iecCode}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-slate-300">
                Proprietor: {companyData.proprietor}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Explore & Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>About Our Company</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>All Products & Formulations</span>
                </Link>
              </li>
              <li>
                <Link href="/divisions" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Business Divisions</span>
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Demonstration & Plant Videos</span>
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>PDF Catalogs & Certifications</span>
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ISO & DGFT Verification</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Product & Packaging Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-amber-400 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Dealership / Bulk Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Divisions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Livestock Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/products?category=cattle-dairy" className="hover:text-emerald-400 transition-colors block">
                  <span className="font-semibold text-white">Cattle & Dairy Health</span>
                  <p className="text-[11px] text-slate-400">Dudhdhara Suspensions, Forte Minerals, Bharat Gold Feed</p>
                </Link>
              </li>
              <li>
                <Link href="/products?category=poultry" className="hover:text-emerald-400 transition-colors block">
                  <span className="font-semibold text-white">Poultry Nutrition</span>
                  <p className="text-[11px] text-slate-400">Stress Nil 4-in-1, LivoCarePlus Liver Tonic, Premixes</p>
                </Link>
              </li>
              <li>
                <Link href="/products?category=aquaculture" className="hover:text-emerald-400 transition-colors block">
                  <span className="font-semibold text-white">Aquaculture & Fisheries</span>
                  <p className="text-[11px] text-slate-400">OxyFish Feed Supplement, F-SafeTox, Fish Fresh</p>
                </Link>
              </li>
              <li>
                <Link href="/products?category=small-ruminants" className="hover:text-emerald-400 transition-colors block">
                  <span className="font-semibold text-white">Goat & Sheep Health</span>
                  <p className="text-[11px] text-slate-400">Bakriyo Golee Nutritional Tablets & Boluses</p>
                </Link>
              </li>
              <li>
                <Link href="/products?category=breeding-specialty" className="hover:text-emerald-400 transition-colors block">
                  <span className="font-semibold text-white">Breeding & Specialty Animal Care</span>
                  <p className="text-[11px] text-slate-400">B-Fertivet Bull Power, Pashu Heat, PlantoMin Vitality</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Information */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Verified Contacts
            </h4>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Plant & Factory Unit:</strong>
                <span className="text-slate-400 leading-relaxed">
                  233-A, Gamtal, Naranpore, Taluka Chikhli, Dist. Navsari, Gujarat - 396040, India
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Registered Office:</strong>
                <span className="text-slate-400 leading-relaxed">
                  0, Nishal Falia, Naranpor, Khergam, Navsari, Gujarat - 396040, India
                </span>
              </div>
            </div>

            <div className="pt-2 space-y-2 border-t border-slate-800 text-xs">
              <a
                href={`tel:${companyData.contact.mobilePhone}`}
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mobile: {companyData.contact.mobilePhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {companyData.contact.whatsappPhoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyData.contact.emailPrimary}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyData.contact.emailPrimary}</span>
              </a>

              <a
                href={`mailto:${companyData.contact.emailHelpline}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{companyData.contact.emailHelpline}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Statutory Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-500 bg-slate-900/60 p-4 rounded-lg">
          <p className="font-semibold text-slate-400 mb-1">
            STATUTORY VETERINARY FEED SUPPLEMENT COMPLIANCE NOTICE:
          </p>
          <p className="leading-relaxed">
            All formulations listed under Bharat Animal Health Care (BAHC) are animal and poultry feed supplements and nutritional additives. They are not intended for human consumption or medicinal/curative therapeutic drug use. Use solely as directed on individual packaging labels under veterinary or livestock professional guidance.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {companyData.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/certifications" className="hover:text-emerald-400 transition-colors">
              Certifications & Audits
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
