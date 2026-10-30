import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import { divisionsData } from "@/data/divisions";
import { videosData } from "@/data/videos";
import { downloadsData } from "@/data/downloads";
import ProductCard from "@/components/ui/ProductCard";
import VideoCard from "@/components/ui/VideoCard";
import DownloadCard from "@/components/ui/DownloadCard";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Package,
  Layers,
  Phone,
  MessageCircle,
  FileText,
  Video,
  Sparkles,
  TrendingUp,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.isFeatured).slice(0, 6);
  const featuredVideos = videosData.slice(0, 4);
  const featuredDocs = downloadsData.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b192c] via-[#072a18] to-[#0b192c] text-white pt-16 pb-24 lg:pt-20 lg:pb-32">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>ISO 9001:2015 Certified • DGFT IEC: {companyData.iecCode}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
                Precision Animal Nutrition <br className="hidden sm:inline" />
                <span className="text-amber-400">& High-Yield Solutions</span> <br className="hidden sm:inline" />
                Since 2013.
              </h1>

              {/* Factual Introduction */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Committed to supporting dairy farmers, poultry producers, and livestock breeders across India. We manufacture scientifically formulated, nutrient-rich cattle feed supplements, glycin-chelated calcium suspensions, and high-potency mineral mixtures at our modern plant in Navsari, Gujarat.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Glycin Chelated Oyster Calcium</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>21% Protein High-Energy Cattle Feed</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Enriched with Shatavari & Jiwanti</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Zero-Toxin Safety Assured</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/20"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/downloads"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Download PDF Catalog</span>
                </Link>

                <a
                  href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md h-96 sm:h-[440px] rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-4 flex flex-col justify-between">
                <div className="relative w-full flex-grow rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/assets/products/dudhdhara-gold-20l.jpg"
                    alt="Bharat Animal Health Care Flagship Dudhdhara Suspension"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain object-center p-2 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-3 pb-1 border-t border-slate-800 text-left">
                  <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider block">
                    Flagship Lactation Formulation
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Dudhdhara Suspension Gold 20L
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Glycin Chelated Oyster Calcium enriched with Biotin, Shatavari & Jiwanti
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg border border-amber-300">
                  ISO 9001:2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & CREDIBILITY BAR */}
      <section className="-mt-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
          {companyData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-emerald-600 pl-4">
              <span className="text-2xl sm:text-3xl font-black text-[#0d472a]">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5 leading-snug">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE DIVISIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
              Comprehensive Sector Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Our 5 Specialized Livestock Divisions
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Targeted nutritional science across dairy cows, buffaloes, commercial poultry, aquaculture ponds, and small ruminants.
            </p>
          </div>
          <Link
            href="/divisions"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span>View All Divisions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisionsData.map((division) => (
            <div
              key={division.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:border-emerald-300"
            >
              <div className="relative h-56 w-full bg-gradient-to-b from-slate-50 to-slate-100/80 overflow-hidden border-b border-slate-100">
                <Image
                  src={division.heroImage}
                  alt={division.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
                  {division.productCountText}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {division.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                  {division.shortDescription}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 mb-5">
                  {division.coreSolutions.slice(0, 2).map((sol, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sol}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/products?category=${division.id}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Explore {division.name.split(" ")[0]} Range</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              Certified Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Featured Flagship Formulations
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Original photographs, exact analytical compositions, and clinical indications for our best-selling livestock supplements.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span>View Complete Product Catalog ({productsData.length} items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. MANUFACTURING STANDARDS & SCIENTIFIC NUTRITION */}
      <section className="bg-gradient-to-r from-emerald-900 to-[#072a18] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Manufacturing Integrity & Plant Technology
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-snug">
                Least-Cost Ration Formulation & Precision Analytical Procedures
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Operating from our modern facility in Navsari, Gujarat, Bharat Animal Health Care combines high-shear wet granulation, microcrystalline calcium processing, and organic glycine chelation to ensure maximum enteric absorption.
              </p>

              {/* Exact PPT Feed Matrix */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm space-y-3">
                <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
                  Verified Cattle Feed Analytical Profile
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-black/30 p-2.5 rounded-lg">
                    <span className="text-lg font-black text-emerald-400">21%</span>
                    <span className="block text-[11px] text-slate-300">Crude Protein</span>
                  </div>
                  <div className="bg-black/30 p-2.5 rounded-lg">
                    <span className="text-lg font-black text-amber-400">6.68%</span>
                    <span className="block text-[11px] text-slate-300">Healthy Fat</span>
                  </div>
                  <div className="bg-black/30 p-2.5 rounded-lg">
                    <span className="text-lg font-black text-slate-200">8%</span>
                    <span className="block text-[11px] text-slate-300">Moisture Max</span>
                  </div>
                  <div className="bg-black/30 p-2.5 rounded-lg">
                    <span className="text-lg font-black text-emerald-300">Star+++</span>
                    <span className="block text-[11px] text-slate-300">Minerals Q.S.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>Verify ISO 9001:2015 Audit</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-700 transition-colors border border-emerald-600"
                >
                  <span>Learn About Our Plant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-emerald-950/80 flex items-center justify-center p-4">
                <Image
                  src="/assets/products/bharat-mix-forte-40kg.jpg"
                  alt="Bharat Mix Forte 40Kg Heavy Duty Bag - Navsari Gujarat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ORIGINAL VIDEO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
              Live Field & Factory Footage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Watch BAHC in Action
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Original video captures demonstrating product packaging, livestock response, and manufacturing plant operations.
            </p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span>View All Videos ({videosData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* 7. VERIFIED PDF DOWNLOADS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Official Business Documents
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Verified PDF Catalogs & Certificates
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Download original corporate presentations, government import-export certificates, and technical product brochures.
              </p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-950"
            >
              <span>All Downloads</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDocs.map((doc) => (
              <DownloadCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEALERSHIP & FARMER CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b192c] to-[#0d472a] text-white p-8 sm:p-14 shadow-2xl border border-slate-700">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-400 text-slate-950">
              Direct Manufacturer Partnership
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Grow Your Regional Feed Business with Bharat Animal Health Care
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We provide exclusive territorial dealerships, prompt dispatch from our Navsari plant, and promotional support for distributors, veterinarians, and dairy farm cooperatives across India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/quote"
                className="px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg text-sm"
              >
                Apply for Dealership
              </Link>

              <a
                href={`tel:${companyData.contact.mobilePhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-600 text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {companyData.contact.mobilePhoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
              >
                Visit Factory Location in Navsari
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
