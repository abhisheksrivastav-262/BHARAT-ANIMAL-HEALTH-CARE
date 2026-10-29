import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsData, Product } from "@/data/products";
import { companyData } from "@/data/company";
import ProductCard from "@/components/ui/ProductCard";
import {
  ShieldCheck,
  CheckCircle2,
  Package,
  MessageCircle,
  Phone,
  ArrowRight,
  ChevronRight,
  FlaskConical,
  Activity,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} — Technical Specifications & Dosage`,
    description: `${product.subtitle}. ${product.description.slice(0, 150)}... Manufactured by Bharat Animal Health Care.`,
    openGraph: {
      title: `${product.name} | Bharat Animal Health Care`,
      description: product.subtitle,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello BAHC, I am interested in ${product.name} (${product.availablePacks[0] || "Standard Pack"}). Please share dealership pricing and availability.`
  );

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappPhone.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-emerald-800">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/products" className="hover:text-emerald-800">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold truncate">{product.name}</span>
      </nav>

      {/* Main Product Showcase Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Gallery & Main Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative w-full h-80 sm:h-[460px] rounded-3xl overflow-hidden border-2 border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 p-4 sm:p-6 shadow-md flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center p-3 drop-shadow-md"
            />
            <div className="absolute top-4 left-4 z-10 bg-emerald-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {product.divisionBadge}
            </div>
          </div>

          {/* Additional Gallery Images */}
          {product.galleryImages.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 block">
                Packaging & Label Views:
              </span>
              <div className="grid grid-cols-4 gap-3">
                {[product.image, ...product.galleryImages].slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white p-1 hover:border-emerald-600 transition-colors flex items-center justify-center shadow-2xs"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} packaging view ${i + 1}`}
                      fill
                      sizes="120px"
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Technical Highlights & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              {product.categoryName}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-1 leading-snug">
              {product.subtitle}
            </p>
          </div>

          {/* Key Highlights Checklist */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2.5">
            <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Core Benefits & Scientific Highlights</span>
            </h3>
            <div className="space-y-1.5">
              {product.keyHighlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Narrative Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Product Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Available Packaging Sizes */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Package className="w-4 h-4 text-emerald-700" />
              <span>Available Commercial Packaging</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {product.availablePacks.map((pack, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 shadow-2xs"
                >
                  {pack}
                </span>
              ))}
            </div>
          </div>

          {/* Commercial CTAs */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-colors shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0d472a] to-[#15803d] hover:from-[#09331e] hover:to-[#166534] transition-all shadow-md text-sm"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 pt-1">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Sales Desk: </span>
              <a href={`tel:${companyData.contact.helplinePhone}`} className="font-bold text-slate-800 hover:underline">
                {companyData.contact.helplinePhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Composition & Clinical Details Tabs/Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-200">
        {/* Composition Table */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 border-b border-slate-100 pb-3">
            <FlaskConical className="w-5 h-5 text-emerald-700" />
            <h2 className="text-lg font-bold text-slate-900">
              Guaranteed Analytical Composition
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Formulated strictly in compliance with veterinary nutritional guidelines.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="py-2.5 px-4 font-bold">Active Nutritional Component</th>
                  <th className="py-2.5 px-4 font-bold text-right">Calibrated Potency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.composition.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-2.5 px-4 text-slate-800 font-medium">{c.item}</td>
                    <td className="py-2.5 px-4 text-emerald-800 font-bold text-right">{c.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Indications & Feeding Instructions */}
        <div className="lg:col-span-5 space-y-6">
          {/* Indications */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-700 border-b border-slate-100 pb-3">
              <Activity className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-900">
                Clinical Indications & Uses
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {product.indications.map((ind, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dosage & Administration */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-900">
                Dosage & Administration Guidelines
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {product.dosageAndUsage}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 italic">
              Store in original packing in a cool and dry place away from direct sunlight.
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Carousel/Grid */}
      {relatedProducts.length > 0 && (
        <div className="pt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              Related Formulations in {product.categoryName}
            </h3>
            <Link
              href="/products"
              className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
