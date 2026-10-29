"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoItem } from "@/data/videos";
import { Play, ShieldCheck } from "lucide-react";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
      {/* Video / Player Area */}
      <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
        {isPlaying ? (
          <video
            src={video.videoUrl}
            controls
            autoPlay
            playsInline
            poster={video.posterUrl}
            className="w-full h-full object-contain bg-black"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Poster fills the card fully */}
            <Image
              src={video.posterUrl}
              alt={video.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-500 transition-all border-2 border-white/80">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[11px] font-bold rounded backdrop-blur-sm">
              {video.duration}
            </div>

            {/* Category Badge */}
            <div className="absolute top-2 left-2 px-2.5 py-1 bg-emerald-800 text-white text-[10px] font-semibold rounded-full shadow-sm">
              {video.category}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 line-clamp-2">
          {video.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-2">
          {video.description}
        </p>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Original Business Video</span>
          </span>

          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg transition-colors"
            >
              <Play className="w-3 h-3 fill-emerald-800" />
              <span>Play</span>
            </button>
          ) : (
            <span className="text-amber-700 font-bold">▶ Playing</span>
          )}
        </div>
      </div>
    </div>
  );
}
