import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Award,
  ExternalLink,
  CheckCircle2,
  Calendar,
  FileText,
  Building2,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Compliance | ISO 9001:2015 & DGFT IEC",
  description:
    "Official certification records for Bharat Animal Health Care: ISO 9001:2015 Quality Management System (Cert #305025100165Q) and Government of India DGFT IEC Code (AKEPC0113C).",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
          <Award className="w-4 h-4 text-emerald-700" />
          <span>Statutory Audits & Accreditations</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Verified Quality Management & Government Accreditations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          At Bharat Animal Health Care, every formulation is manufactured in strict conformity with national and international quality management standards. Review our verified certification documents and public registry details below.
        </p>
      </div>

      {/* Main Certification Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certificate 1: ISO 9001:2015 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0 border border-amber-200">
                <ShieldCheck className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                  Quality Management System
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  ISO 9001:2015 Certification
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 shrink-0">
              Active & Compliant
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Certificate Number:</span>
              <strong className="text-slate-900 font-mono">{companyData.isoCertificate.number}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Auditing Body:</span>
              <span className="font-semibold text-slate-900">{companyData.isoCertificate.body}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Date of Certification:</span>
              <span className="font-semibold text-slate-900">1st October 2025</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">1st Surveillance Audit Due:</span>
              <span className="font-semibold text-slate-900">30th September 2026</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Certificate Validity:</span>
              <span className="font-semibold text-slate-900">30th September 2028</span>
            </div>
          </div>

          {/* Scope of Activities */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
              Certified Scope of Activities:
            </span>
            <p className="text-xs text-slate-600 leading-relaxed bg-amber-50/50 p-3 rounded-lg border border-amber-100">
              Trading, manufacturing, and reselling of animal feed supplement and cattle feed, Bharat Gold cattle feed, animal feed, poultry feed, Dudhdhara calcium mineral vitamin, premium poultry feed, and Stressnil.
            </p>
          </div>

          {/* Action */}
          <div className="pt-2">
            <a
              href="/assets/docs/bahc-iso-9001-2015-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-white bg-[#0d472a] hover:bg-emerald-900 transition-colors text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Official ISO 9001:2015 Certificate PDF</span>
            </a>
          </div>
        </div>

        {/* Certificate 2: DGFT IEC Code */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0 border border-emerald-200">
                <Building2 className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Ministry of Commerce & Industry
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  DGFT Importer-Exporter Code (IEC)
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 shrink-0">
              Govt. Verified
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">IEC Code:</span>
              <strong className="text-slate-900 font-mono text-sm">{companyData.iecCode}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Permanent Account Number (PAN):</span>
              <span className="font-semibold text-slate-900 font-mono">{companyData.iecCode}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Issuing Authority:</span>
              <span className="font-semibold text-slate-900">Joint DGFT, Surat, Gujarat</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Date of Issue:</span>
              <span className="font-semibold text-slate-900">04/10/2025</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Signatory / Proprietor:</span>
              <span className="font-semibold text-slate-900">{companyData.proprietor}</span>
            </div>
          </div>

          {/* Registered Location */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
              Registered Establishment Address:
            </span>
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-100 p-3 rounded-lg">
              0, Nishal Falia, Naranpor, Khergam, Navsari, Navsari, Gujarat, 396040, India
            </p>
          </div>

          {/* Action */}
          <div className="pt-2">
            <a
              href="/assets/docs/bahc-dgft-iec-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors text-xs"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>View Official DGFT IEC Certificate PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Online Verification Walkthrough */}
      <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-800" />
          <span>How to Independently Verify BAHC Accreditations Online</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In alignment with our strict transparency policy, all clients and institutional buyers can independently verify our legal and quality credentials on official portals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">Verify IEC with Govt of India DGFT:</h4>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
              <li>Visit the official portal: <strong>dgft.gov.in</strong></li>
              <li>Navigate to <em>Services &gt; View Any IEC Details</em></li>
              <li>Enter IEC Number: <strong className="font-mono text-slate-900">AKEPC0113C</strong> and Firm Name: <strong>Bharat Animal Health Care</strong></li>
            </ol>
            <a
              href="https://dgft.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-800 font-bold hover:underline pt-1"
            >
              <span>Visit DGFT Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">Verify ISO 9001:2015 with QRO:</h4>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
              <li>Visit QRO Certification records portal</li>
              <li>Enter Certificate Number: <strong className="font-mono text-slate-900">305025100165Q</strong></li>
              <li>Check valid scope: Animal feed supplements, Dudhdhara, Bharat Gold, Stressnil</li>
            </ol>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-1 text-emerald-800 font-bold hover:underline pt-1"
            >
              <span>View Downloadable Certificate</span>
              <FileText className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
