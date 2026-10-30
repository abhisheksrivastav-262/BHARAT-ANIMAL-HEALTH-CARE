import type { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Truck,
  Building,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Commercial Quote | Dealership & Bulk Supply",
  description:
    "Request factory-direct bulk pricing and territorial dealership terms for Bharat Animal Health Care products. Direct supply across India.",
};

export default function QuotePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-bold text-amber-700 uppercase tracking-widest flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span>Direct Factory Commercial Desk</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Commercial Pricing & Dealership Application
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Bharat Animal Health Care manufactures high-demand veterinary feed supplements and supplies progressive dairy farms, feed mills, and authorized territorial dealers with prompt dispatches from Navsari, Gujarat.
        </p>
      </div>

      {/* Grid: Benefits + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-8">
          <QuoteForm />
        </div>

        {/* Right Column: Dealer Perks */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Authorized Partnership
            </span>
            <h3 className="text-xl font-bold text-white">
              Why Partner with BAHC?
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Quality Standards:</strong> Every batch is ISO 9001:2015 tested with guaranteed nutrient bio-potency.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Territorial Protection:</strong> Dedicated taluka and district exclusivity for authorized stockists.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>High Consumer Retention:</strong> Farmers experience visible milk yield and lactation improvements within 7 days.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Marketing & Promotional Collateral:</strong> High-definition banners, product brochures, and veterinary literature supplied.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Fast Nationwide Road Transport Logistics</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Dispatches coordinated directly from Navsari, Gujarat to key hubs nationwide.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 space-y-2 text-xs">
            <span className="font-bold text-emerald-950 uppercase tracking-wide block">
              Immediate Telephonic Inquiry?
            </span>
            <p className="text-emerald-800">
              Speak directly with our commercial coordinator:
            </p>
            <a
              href={`tel:${companyData.contact.mobilePhone}`}
              className="text-sm font-black text-emerald-950 block hover:underline"
            >
              {companyData.contact.mobilePhoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
