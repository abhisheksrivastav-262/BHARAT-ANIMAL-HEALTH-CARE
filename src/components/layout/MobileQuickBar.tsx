"use client";

import Link from "next/link";
import { companyData } from "@/data/company";
import { Phone, MessageCircle, Calculator, FileText } from "lucide-react";

export default function MobileQuickBar() {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappPhone.replace(
    "+",
    ""
  )}?text=Hello%20BAHC,%20I%20would%20like%20to%20enquire%20about%20your%20veterinary%20feed%20products`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call mobile */}
        <a
          href={`tel:${companyData.contact.mobilePhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-center active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-800 mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Call Now</span>
          <span className="text-[9px] text-slate-500 scale-90">Mobile</span>
        </a>

        {/* WhatsApp Inquiry */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white transition-colors text-center shadow-xs active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-none">WhatsApp</span>
          <span className="text-[9px] text-emerald-100 scale-90">Instant Chat</span>
        </a>

        {/* Request a Quote */}
        <Link
          href="/quote"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#0d472a] hover:bg-emerald-950 text-white transition-colors text-center active:scale-95 shadow-xs"
        >
          <Calculator className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Get Quote</span>
          <span className="text-[9px] text-emerald-200 scale-90">Dealer Price</span>
        </Link>
      </div>
    </div>
  );
}
