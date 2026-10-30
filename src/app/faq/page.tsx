"use client";

import { useState } from "react";
import Link from "next/link";
import { faqData } from "@/data/faq";
import { companyData } from "@/data/company";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  Search,
} from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = ["all", "General", "Dairy & Cattle", "Poultry & Aqua", "Dealership & Orders"];

  const filteredFAQs = faqData.filter((item, index) => {
    const matchesCat = category === "all" || item.category === category;
    const matchesSearch =
      search === "" ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>Knowledge & Veterinary Guidance</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Find answers regarding dosage administration, product shelf life, mineral chelation, and distributor partnerships.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. dosage, Dudhdhara, dealership, certification)..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                category === cat
                  ? "bg-[#0d472a] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat === "all" ? "All Topics" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFAQs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-emerald-800" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  <p>{faq.answer}</p>
                  <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Category: {faq.category}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Prompt */}
      <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 text-center space-y-3">
        <h3 className="text-lg font-bold text-emerald-950">
          Have a Question Not Listed Here?
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
          Contact our technical team or speak directly with our product formulation desk in Navsari.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${companyData.contact.mobilePhone}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0d472a] hover:bg-emerald-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {companyData.contact.mobilePhoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
