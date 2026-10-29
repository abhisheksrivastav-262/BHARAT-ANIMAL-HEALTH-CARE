"use client";

import { useState } from "react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { CheckCircle2, MessageCircle, Mail, AlertCircle, Calculator } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "Dairy Farmer",
    selectedProduct: productsData[0].name,
    estimatedQuantity: "50 Litres / 10 Bags",
    destinationState: "Gujarat",
    destinationDistrict: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please fill in your name and contact phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const quoteMessage = encodeURIComponent(
    `*BAHC BULK QUOTATION REQUEST:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Business:* ${formData.businessType}\n*Product Interested:* ${formData.selectedProduct}\n*Quantity:* ${formData.estimatedQuantity}\n*Destination:* ${formData.destinationDistrict ? formData.destinationDistrict + ", " : ""}${formData.destinationState}\n*Additional Notes:* ${formData.notes || "None"}`
  );

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappPhone.replace(
    "+",
    ""
  )}?text=${quoteMessage}`;

  const emailUrl = `mailto:${companyData.contact.emailPrimary}?subject=${encodeURIComponent(
    `[Bulk Quote Request] ${formData.selectedProduct} - ${formData.name}`
  )}&body=${quoteMessage}`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Request Dealership or Commercial Quote
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Factory-direct pricing for commercial dairy farms, distributors & agricultural retailers.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-10 space-y-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 p-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Quote Generated for {formData.name}
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Your quotation details for <strong className="text-slate-900">{formData.selectedProduct}</strong> ({formData.estimatedQuantity}) have been assembled. Please route via your preferred channel:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-colors shadow-md text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Forward to Sales Desk on WhatsApp (+91 94845 55525)</span>
            </a>

            <a
              href={emailUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm text-sm"
            >
              <Mail className="w-4 h-4 text-emerald-800" />
              <span>Email Commercial Office ({companyData.contact.emailPrimary})</span>
            </a>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
            >
              Modify quote parameters
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Full Name / Business Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Navsari Dairy Cooperative"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9484555525"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Your Sector / Role
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900 bg-white"
              >
                <option value="Dairy Farmer / Herd Owner">Dairy Farmer / Herd Owner</option>
                <option value="Feed Dealer / Distributor">Feed Dealer / Distributor</option>
                <option value="Poultry Farm Owner">Poultry Farm Owner</option>
                <option value="Aqua / Fish Culturist">Aqua / Fish Culturist</option>
                <option value="Veterinary Doctor / Consultant">Veterinary Doctor / Consultant</option>
                <option value="Export / Institutional Buyer">Export / Institutional Buyer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Primary Product of Interest
              </label>
              <select
                value={formData.selectedProduct}
                onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900 bg-white"
              >
                {productsData.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Estimated Volume Required
              </label>
              <input
                type="text"
                value={formData.estimatedQuantity}
                onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                placeholder="e.g. 50 Litres / 500 Kg"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Delivery State
              </label>
              <input
                type="text"
                value={formData.destinationState}
                onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                placeholder="e.g. Gujarat / Maharashtra"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                District / Town
              </label>
              <input
                type="text"
                value={formData.destinationDistrict}
                onChange={(e) => setFormData({ ...formData, destinationDistrict: e.target.value })}
                placeholder="e.g. Navsari, Surat, Valsad"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Specific Requirements / Delivery Deadlines (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Looking for exclusive dealership in our taluka..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0d472a] via-[#14532d] to-[#072a18] hover:from-[#09331e] hover:to-[#0f4425] shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Generate Official Commercial Quote</span>
          </button>
        </form>
      )}
    </div>
  );
}
