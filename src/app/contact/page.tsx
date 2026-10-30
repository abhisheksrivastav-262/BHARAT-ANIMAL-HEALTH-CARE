import type { Metadata } from "next";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ui/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Factory Location | Navsari, Gujarat",
  description:
    "Contact Bharat Animal Health Care (BAHC) in Navsari, Gujarat. Call or WhatsApp: +91 94845 55525, Email: info@bahc.in.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Customer Desk & Factory Communications</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Connect with Bharat Animal Health Care
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Whether you are a dairy farmer looking for feeding guidance or an agricultural distributor seeking territory dealerships, our technical and commercial teams are here to assist.
        </p>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card: Plant Address */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-[#0d472a]">
              <Building className="w-5 h-5 text-emerald-700" />
              <h3 className="text-base font-bold text-slate-900">
                Factory & Operational Facility
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
              <strong>Bharat Animal Health Care</strong><br />
              233-A, Gamtal, Naranpore,<br />
              Taluka Chikhli, Dist. Navsari,<br />
              Gujarat - 396040, India
            </p>
          </div>

          {/* Card: Registered Office */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-amber-700">
              <MapPin className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-900">
                Registered Commercial Office
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
              0, Nishal Falia, Naranpor, Khergam,<br />
              Navsari, Gujarat - 396040, India
            </p>
          </div>

          {/* Card: Direct Telephony & WhatsApp */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              Phone & Email Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${companyData.contact.mobilePhone}`}
                className="flex items-center gap-3 text-slate-800 hover:text-emerald-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Mobile:</span>
                  <span className="font-bold">{companyData.contact.mobilePhoneDisplay}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${companyData.contact.whatsappPhone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-800 hover:text-emerald-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Direct WhatsApp & Sales Desk:</span>
                  <span className="font-bold">{companyData.contact.whatsappPhoneDisplay}</span>
                </div>
              </a>

              <a
                href={`mailto:${companyData.contact.emailPrimary}`}
                className="flex items-center gap-3 text-slate-800 hover:text-emerald-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Primary Email:</span>
                  <span className="font-bold">{companyData.contact.emailPrimary}</span>
                </div>
              </a>

              <a
                href={`mailto:${companyData.contact.emailHelpline}`}
                className="flex items-center gap-3 text-slate-800 hover:text-emerald-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Technical Support Email:</span>
                  <span className="font-bold">{companyData.contact.emailHelpline}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-2 sm:p-4 space-y-3">
        <div className="px-4 pt-2">
          <h3 className="text-base font-bold text-slate-900">
            Regional Location: Navsari & Chikhli, Gujarat, India
          </h3>
          <p className="text-xs text-slate-500">
            Conveniently situated along the Western transport corridor linking Gujarat, Maharashtra, and Central India.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
          <iframe
            title="Bharat Animal Health Care Navsari Gujarat Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Naranpor,+Chikhli,+Navsari,+Gujarat+396040&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
