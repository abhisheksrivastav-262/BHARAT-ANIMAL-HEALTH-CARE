import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  UserCheck,
  Eye,
  Target,
  Sparkles,
  ArrowRight,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Company Profile & Nutritional Philosophy",
  description:
    "Learn about Bharat Animal Health Care (BAHC), established in 2013 by Chouhan Jitubhai Chimanbhai in Navsari, Gujarat. ISO 9001:2015 certified manufacturer of veterinary feed supplements.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Page Header with real brand banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-[#0b192c] to-[#0d472a] rounded-3xl overflow-hidden text-white shadow-xl">
          {/* Background brand banner */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/assets/brand/bahc-brand-banner.jpg"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="relative z-10 p-8 sm:p-14 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-400 text-slate-950">
              <Calendar className="w-3.5 h-3.5" />
              <span>Established in 2013 • Over a Decade of Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              About Bharat Animal Health Care
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We are a dedicated team committed to supporting farmers and livestock owners by providing high-quality cattle feed supplements, glycin-chelated calcium suspensions, and scientifically balanced animal nutrition solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              Executive Profile & Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Founded on Trust, Guided by Scientific Animal Welfare
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bharat Animal Health Care (BAHC) was established in 2013 under the leadership of <strong>Chouhan Jitubhai Chimanbhai</strong> in Naranpore, Navsari, Gujarat. What began as a focused initiative to address severe mineral and calcium deficiencies in regional dairy herds has today expanded into an ISO 9001:2015 certified concern serving thousands of livestock farmers across multiple states.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              At BAHC, we believe that the key to thriving livestock is exceptional nutrition. With years of deep field experience in veterinary dietetics, our formulation experts understand the distinct metabolic needs of animals at every physiological stage—from rapid-growth calves and lactating cows to commercial poultry flocks and aquaculture ponds.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-2">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                Key Enterprise Identifiers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                <div>
                  <span className="text-slate-500">Proprietor / Signatory:</span>
                  <div className="font-bold">{companyData.proprietor}</div>
                </div>
                <div>
                  <span className="text-slate-500">Nature of Concern:</span>
                  <div className="font-bold">{companyData.natureOfConcern}</div>
                </div>
                <div>
                  <span className="text-slate-500">DGFT IEC Code:</span>
                  <div className="font-bold">{companyData.iecCode}</div>
                </div>
                <div>
                  <span className="text-slate-500">ISO 9001:2015 Cert:</span>
                  <div className="font-bold">#{companyData.isoCertificate.number}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-gradient-to-b from-slate-50 to-slate-100">
                <Image
                  src="/assets/products/bahc-plant-address-label.jpg"
                  alt="Bharat Animal Health Care Navsari Gujarat Manufacturing Label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
              {/* Make In India / ISO badge */}
              <div className="relative w-full h-24 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <Image
                  src="/assets/brand/make-in-india-iso-badge.jpg"
                  alt="Make In India ISO 9001:2015 Badge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Eye className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {companyData.vision}
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-800">
                Promoting sustainable, resilient animal farming communities across India.
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Target className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {companyData.mission}
              </p>
              <div className="pt-2 text-xs font-semibold text-amber-800">
                Uncompromising ingredient purity, least-cost rations, and verified results.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
            Why Farmers Trust BAHC
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Our Four Pillars of Veterinary Nutrition
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Scientifically Formulated
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Developed by animal nutrition specialists to meet the exact metabolic and lactational requirements of indigenous and crossbred cattle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Optimal Nutritional Balance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Precise ratios of microcrystalline oyster calcium, phosphorus, zinc glycinate, Biotin, Shatavari, and Jiwanti for 90%+ bio-absorption.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              ISO 9001:2015 Plant
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hygienic manufacturing equipment in Navsari with least-cost ration balancing software, strict batch retention, and aflatoxin screening.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Farmer Partnership
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We work hand-in-hand with regional dairy cooperatives, livestock owners, and stockists to ensure reliable product supply and farmer guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities & Address Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Factory & Registered Location
              </span>
              <h3 className="text-2xl font-bold text-white">
                Located in the Heart of Gujarat Dairy Country
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our production facilities are situated in Navsari district, Gujarat—one of India's most vibrant dairy farming regions. This direct proximity allows us to test and validate every batch alongside actual progressive dairy herds.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Factory Unit:</strong>
                    <span className="text-slate-300">
                      233-A, Gamtal, Naranpore, Taluka Chikhli, Dist. Navsari, Gujarat - 396040, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Registered Office:</strong>
                    <span className="text-slate-300">
                      0, Nishal Falia, Naranpor, Khergam, Navsari, Gujarat - 396040, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center items-center md:items-end">
              <Link
                href="/products"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-sm"
              >
                Explore Product Portfolio
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm"
              >
                Contact Navsari Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
