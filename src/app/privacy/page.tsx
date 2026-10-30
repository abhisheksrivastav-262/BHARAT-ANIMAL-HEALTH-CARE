import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Bharat Animal Health Care",
  description:
    "Privacy Policy for Bharat Animal Health Care (BAHC). We protect and respect the confidential information of our farmers, distributors, and partners.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
          Legal & Compliance
        </span>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Effective Date: October 2025 • Bharat Animal Health Care (BAHC)
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
          <p>
            Bharat Animal Health Care (&quot;BAHC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the privacy of our website visitors, farmers, livestock owners, dealers, and business associates. This Privacy Policy outlines the types of information we collect through our website (<strong>www.bahc.in</strong>) and how we safeguard and utilize that data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            When you interact with our website to submit a product inquiry, request a dealership quote, or contact our customer desk, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal Identifiers: Full Name, Business Name, Designation.</li>
            <li>Contact Information: Mobile/WhatsApp Phone Number, Email Address.</li>
            <li>Geographical Location: Village, Taluka, District, and State for dealership territorial routing.</li>
            <li>Inquiry Details: Specific products of interest, livestock herd size, and estimated order volumes.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Purpose of Data Processing</h2>
          <p>
            Your information is processed strictly for legitimate business and transactional purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responding to technical feed queries and providing veterinary nutritional dosage guidance.</li>
            <li>Processing wholesale quotations, sample requests, and distribution agreements.</li>
            <li>Communicating product availability and dispatch logistics from our Navsari plant.</li>
            <li>Fulfilling statutory and commercial record-keeping obligations under Indian law.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Confidentiality & Non-Disclosure</h2>
          <p>
            We do not sell, rent, lease, or trade your personal or commercial contact information to third-party marketing agencies. Data is accessible solely to authorized commercial personnel and logistics carriers strictly on a need-to-know basis for order fulfillment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Security of Information</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect your submitted data against unauthorized access, loss, or alteration. All electronic communications sent through our portals are encrypted in transit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Contacting Our Data Privacy Officer</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to update or remove your contact information from our dealer communication ledger, please contact:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <strong>Bharat Animal Health Care</strong><br />
            Attn: Compliance & Grievance Desk<br />
            233-A, Gamtal, Naranpore, Taluka Chikhli, Navsari, Gujarat - 396040, India<br />
            Email: <a href={`mailto:${companyData.contact.emailPrimary}`} className="text-emerald-800 font-bold">{companyData.contact.emailPrimary}</a><br />
            Mobile: {companyData.contact.mobilePhoneDisplay}
          </div>
        </section>
      </div>
    </div>
  );
}
