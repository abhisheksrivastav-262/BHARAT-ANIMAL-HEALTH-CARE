import type { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bharat Animal Health Care",
  description:
    "Terms and conditions of use for Bharat Animal Health Care (BAHC) website and statutory veterinary feed supplement disclaimers.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
          Legal Agreement
        </span>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
          Terms & Conditions of Use
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Last Updated: October 2025 • Bharat Animal Health Care (BAHC)
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website (<strong>www.bahc.in</strong>), downloading catalogs, or submitting inquiries, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please refrain from using our web portal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Statutory Veterinary Feed Supplement Disclaimer</h2>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-medium">
            IMPORTANT STATUTORY COMPLIANCE NOTICE: All products manufactured and displayed by Bharat Animal Health Care (BAHC)—including Dudhdhara Suspensions, Dudhdhara Forte, Bharat Gold Cattle Feed, Stress Nil 4-in-1, and Bakriyo Golee—are animal and poultry feed supplements and nutritional feed premixes. They are strictly NOT for human consumption and NOT intended for medical or therapeutic drug use.
          </div>
          <p>
            Feeding recommendations, inclusion ratios, and dosages provided on this website and in our brochures are formulated based on standard livestock husbandry practices and ICAR nutritional guidelines. Actual results in lactation yield, body weight gain, or fertility may vary based on basal diet, genetics, environmental conditions, and farm management.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Intellectual Property Rights</h2>
          <p>
            All content on this website, including but not limited to brand emblems, trademarks (&quot;BAHC&quot;, &quot;Dudhdhara&quot;, &quot;Bharat Gold&quot;, &quot;Stress Nil&quot;), photographic pack shots, video recordings, product formulations, and catalog layouts, are the exclusive intellectual property of <strong>Bharat Animal Health Care</strong> and protected under Indian and international copyright laws. Unauthorized reproduction or commercial imitation is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Commercial Quotations & Dealership Terms</h2>
          <p>
            Product representations and quotations generated through our website are subject to commercial contract execution, minimum order quantities (MOQs), and territorial availability. BAHC reserves the right to accept or decline dealership applications based on credit assessment and territory alignment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms and any commercial disputes arising out of the use of this website or supply of BAHC goods shall be governed by and construed in accordance with the laws of the Republic of India. The courts of competent jurisdiction in <strong>Navsari, Gujarat, India</strong> shall have exclusive jurisdiction over any legal proceedings.
          </p>
        </section>
      </div>
    </div>
  );
}
