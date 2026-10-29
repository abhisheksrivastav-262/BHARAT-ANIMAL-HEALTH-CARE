import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import { CheckCircle2, MessageCircle, ArrowRight, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappPhone.replace(
    "+",
    ""
  )}?text=Hello%20BAHC,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Product Image Section */}
      <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-50 via-white to-slate-100/70 p-3 flex items-center justify-center overflow-hidden border-b border-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center p-3 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
        />

        {/* Division Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-800 text-white shadow-sm">
            {product.divisionBadge}
          </span>
        </div>

        {/* Pack Indicator */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-slate-800 text-xs">
          <span className="flex items-center gap-1 font-semibold bg-white/90 border border-slate-200/80 px-2 py-0.5 rounded-md shadow-2xs backdrop-blur-xs">
            <Package className="w-3.5 h-3.5 text-amber-600" />
            <span>{product.availablePacks[0]}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-1">
          {product.categoryName}
        </span>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-600 font-medium mb-3 line-clamp-2 leading-relaxed">
          {product.subtitle}
        </p>

        {/* Key Highlights Bullet points */}
        <div className="space-y-1.5 mb-5 flex-grow">
          {product.keyHighlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        {/* Available Pack Sizes */}
        <div className="pt-3 border-t border-slate-100 mb-4">
          <div className="text-[11px] font-semibold text-slate-500 mb-1.5">Pack Sizes:</div>
          <div className="flex flex-wrap gap-1">
            {product.availablePacks.slice(0, 3).map((pack, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200"
              >
                {pack}
              </span>
            ))}
            {product.availablePacks.length > 3 && (
              <span className="text-[11px] px-1.5 py-0.5 text-slate-500 font-medium">
                +{product.availablePacks.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-center"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
