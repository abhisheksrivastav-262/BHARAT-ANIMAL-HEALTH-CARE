"use client";

import { useState } from "react";
import { companyData } from "@/data/company";
import { Send, CheckCircle2, MessageCircle, Mail, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    subject: "Product Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError("Please provide your full name and contact phone number.");
      return;
    }

    if (formData.phone.trim().length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*Inquiry from Website:*\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "N/A"}\n*State:* ${formData.state || "N/A"}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`
  );

  const whatsappLink = `https://wa.me/${companyData.contact.whatsappPhone.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  const mailtoLink = `mailto:${companyData.contact.emailPrimary}?subject=${encodeURIComponent(
    `[BAHC Website Inquiry] ${formData.subject} - ${formData.fullName}`
  )}&body=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Thank you, {formData.fullName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your inquiry has been compiled. To ensure the fastest response from our Navsari office, please choose how you would like to transmit your message:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-emerald-600 transition-colors shadow-sm text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp ({companyData.contact.whatsappPhoneDisplay})</span>
            </a>

            <a
              href={mailtoLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Send via Email ({companyData.contact.emailPrimary})</span>
            </a>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  state: "",
                  subject: "Product Inquiry",
                  message: "",
                });
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Send an Official Message
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Our technical nutritionists and sales officers respond within 24 business hours.
          </p>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Patel"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. farmer@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                State / District
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="e.g. Gujarat / Navsari"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Inquiry Type
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="Product Inquiry">Product Inquiry (Dudhdhara, Stress Nil, etc.)</option>
              <option value="Dealership & Stockist Application">Dealership & Stockist Application</option>
              <option value="Dairy Farm Bulk Order">Dairy Farm Bulk Order (Commercial Feed)</option>
              <option value="Veterinary Formulation Advice">Veterinary Formulation Advice</option>
              <option value="Export & Institutional Supply">Export & Institutional Supply (IEC AKEPC0113C)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Your Message or Requirements
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your herd size, livestock type, or specific requirements..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#0d472a] to-[#15803d] hover:from-[#09331e] hover:to-[#166534] shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Message</span>
          </button>
        </form>
      )}
    </div>
  );
}
