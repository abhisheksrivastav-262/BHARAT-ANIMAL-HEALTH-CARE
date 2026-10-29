import Link from "next/link";
import { companyData } from "@/data/company";
import { Home, Package, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or document you are looking for may have been relocated or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#0d472a] hover:bg-emerald-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Package className="w-4 h-4 text-emerald-700" />
            <span>Browse Product Catalog</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          <span>Need immediate assistance? Call Helpline: </span>
          <a
            href={`tel:${companyData.contact.helplinePhone}`}
            className="font-bold text-emerald-800 hover:underline block pt-0.5"
          >
            {companyData.contact.helplinePhoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
