"use client";

import { useState } from "react";
import { downloadsData } from "@/data/downloads";
import DownloadCard from "@/components/ui/DownloadCard";
import { FileText, ShieldCheck, Download, ExternalLink } from "lucide-react";

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Certificates",
    "Brochures & Catalogs",
    "Corporate Presentations",
    "Technical Sheets",
  ];

  const filteredDocs =
    selectedCategory === "all"
      ? downloadsData
      : downloadsData.filter((d) => d.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
          <Download className="w-4 h-4 text-emerald-700" />
          <span>Official Corporate Resources</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          PDF Catalogs, Certifications & Corporate Downloads
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Access high-resolution product catalogs, nutritional specification sheets, and official government certifications for Bharat Animal Health Care. All files are original, verified corporate assets available for immediate viewing and downloading.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? "bg-[#0d472a] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {cat === "all" ? `All Documents (${downloadsData.length})` : cat}
          </button>
        ))}
      </div>

      {/* Verification Notice */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold">Government & Audit Verification:</strong>
          <span>
            You can independently authenticate our Importer-Exporter Code (AKEPC0113C) on the official Directorate General of Foreign Trade portal at{" "}
            <a
              href="https://dgft.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-amber-950 inline-flex items-center gap-0.5"
            >
              dgft.gov.in <ExternalLink className="w-3 h-3 inline" />
            </a>
            , and our ISO 9001:2015 Certificate (#305025100165Q) through QRO certification records.
          </span>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <DownloadCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}
