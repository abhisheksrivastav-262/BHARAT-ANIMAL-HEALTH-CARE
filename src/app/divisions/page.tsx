import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { divisionsData } from "@/data/divisions";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Layers, CheckCircle2, ArrowRight, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Business Divisions | Livestock Healthcare Sectors",
  description:
    "Explore BAHC's specialized divisions: Cattle & Dairy Health, Poultry Nutrition, Aquaculture & Fisheries, Goat & Sheep Care, and Breeding & Specialty formulations.",
};

export default function DivisionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-emerald-700" />
          <span>Operational Business Divisions</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Targeted Nutritional Solutions Across 5 Agricultural Sectors
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From high-producing dairy bovines and commercial poultry flocks to coastal aquaculture ponds and arid sheep grazing belts, BAHC develops tailored feed supplements that match species-specific digestive physiology.
        </p>
      </div>

      {/* Divisions In-Depth Sections */}
      <div className="space-y-16">
        {divisionsData.map((div, idx) => {
          const divProducts = productsData.filter((p) => p.category === div.id);
          const isEven = idx % 2 === 0;

          return (
            <div
              key={div.id}
              id={div.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-10 space-y-8"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-8"}`}>
                  <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center p-3">
                    <Image
                      src={div.heroImage}
                      alt={div.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain p-2"
                    />
                    <div className="absolute top-3 left-3 bg-[#0d472a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {div.productCountText}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? "" : "lg:col-start-1"}`}>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Sector #{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {div.name}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {div.fullDescription}
                  </p>

                  {/* Scientific Focus Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5 uppercase tracking-wide">
                      <FlaskConical className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Formulation Rationale:</span>
                    </span>
                    <p className="text-slate-600 leading-relaxed">{div.scientificFocus}</p>
                  </div>

                  {/* Core Solutions Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Core Solutions & Products:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                      {div.coreSolutions.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/products?category=${div.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0d472a] hover:bg-emerald-900 transition-colors shadow-sm"
                    >
                      <span>Browse Products in {div.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sample Products from this Division */}
              {divProducts.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Featured Formulations in this Division
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {divProducts.slice(0, 3).map((prod) => (
                      <ProductCard key={prod.id} product={prod} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
