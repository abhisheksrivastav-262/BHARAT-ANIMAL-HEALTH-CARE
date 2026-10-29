"use client";

import { useState } from "react";
import { videosData } from "@/data/videos";
import VideoCard from "@/components/ui/VideoCard";
import { Video, ShieldCheck, Film } from "lucide-react";

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Dairy & Products",
    "Manufacturing & Plant",
    "Field & Farmers",
    "Quality Assurance",
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
          <Film className="w-4 h-4 text-emerald-700" />
          <span>Real Footage & Demonstrations</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Video Gallery: Livestock Health, Plant & Demonstration
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Watch original demonstration videos from our manufacturing facility in Navsari, Gujarat, farmer field trials, ration preparation demonstrations, and veterinary quality assurance procedures.
        </p>
      </div>

      {/* Category Filter Pills */}
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
            {cat === "all" ? "All Videos (8)" : cat}
          </button>
        ))}
      </div>

      {/* Notice on Real Footage */}
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
        <span>
          <strong>Authentic Media Verification:</strong> All video files presented here are genuine business captures of Bharat Animal Health Care products, operations, and dairy cattle in Gujarat.
        </span>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
