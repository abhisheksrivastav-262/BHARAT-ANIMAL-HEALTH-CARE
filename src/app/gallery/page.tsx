"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Grid3x3, LayoutGrid } from "lucide-react";

const TOTAL_GALLERY = 80;

const galleryItems = Array.from({ length: TOTAL_GALLERY }, (_, i) => {
  const n = i + 1;
  const padded = n < 10 ? `0${n}` : `${n}`;
  return {
    id: n,
    url: `/assets/gallery/gallery-${padded}.jpg`,
    title: `BAHC Packaging & Formulation Asset #${n}`,
  };
});

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<"grid" | "masonry">("grid");

  const openLightbox = (idx: number) => setSelectedIndex(idx);
  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : TOTAL_GALLERY - 1));
  const nextImage = () => setSelectedIndex((i) => (i !== null ? (i < TOTAL_GALLERY - 1 ? i + 1 : 0) : 0));

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 md:pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
            <Images className="w-4 h-4 text-emerald-700" />
            <span>Real Business Media — {TOTAL_GALLERY} Assets</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Product Packaging & Label Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse the authentic photographic record of Bharat Animal Health Care product labels, bottle artworks, 40 Kg cattle feed bags, and veterinary formulations.
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1 self-start sm:self-end">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              view === "grid" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setView("masonry")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              view === "masonry" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Masonry</span>
          </button>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
        <span>
          <strong>100% Original Asset Guarantee:</strong> Every image is sourced directly from BAHC design files and product print runs. No synthetic or AI-generated images.
        </span>
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-sm hover:shadow-md hover:border-emerald-400 transition-all"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
              </div>
              <div className="absolute bottom-1 right-1.5 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                #{item.id}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Masonry View */}
      {view === "masonry" && (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 sm:gap-4 space-y-0">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative break-inside-avoid mb-3 sm:mb-4 rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-sm hover:shadow-md hover:border-emerald-400 transition-all"
            >
              <div className="relative w-full">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-slate-800/80 rounded-full z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-sm z-10">
            {selectedIndex + 1} / {TOTAL_GALLERY}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-6 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full z-10 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] h-[80vh] mx-12 sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.url}
              alt={selectedItem.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-6 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full z-10 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm z-10">
            BAHC Product Asset #{selectedIndex + 1}
          </div>
        </div>
      )}
    </div>
  );
}
