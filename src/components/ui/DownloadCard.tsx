import { DownloadDoc } from "@/data/downloads";
import { FileText, Download, ExternalLink, ShieldCheck, FileCheck } from "lucide-react";

interface DownloadCardProps {
  doc: DownloadDoc;
}

export default function DownloadCard({ doc }: DownloadCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-emerald-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
          <FileText className="w-6 h-6 text-emerald-700" />
        </div>
        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
          {doc.category}
        </span>
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
        {doc.title}
      </h3>

      <p className="text-xs text-slate-600 leading-relaxed mb-5 flex-grow">
        {doc.description}
      </p>

      {/* Meta Specs */}
      <div className="flex items-center gap-3 text-xs text-slate-500 mb-5 pt-3 border-t border-slate-100">
        <span className="font-semibold text-slate-700">{doc.pageCount}</span>
        <span>•</span>
        <span>{doc.fileSize}</span>
        <span>•</span>
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified PDF</span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <a
          href={doc.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
          <span>View Online</span>
        </a>

        <a
          href={doc.filePath}
          download={doc.fileName}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0d472a] hover:bg-emerald-900 transition-colors shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
}
