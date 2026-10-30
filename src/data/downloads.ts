export interface DownloadDoc {
  id: string;
  title: string;
  category: "Certificates" | "Brochures & Catalogs" | "Corporate Presentations" | "Technical Sheets";
  fileName: string;
  fileSize: string;
  pageCount: string;
  filePath: string;
  description: string;
  verifiedOfficial: boolean;
}

export const downloadsData: DownloadDoc[] = [
  {
    id: "doc-iso",
    title: "ISO 9001:2015 Quality Management System Certificate",
    category: "Certificates",
    fileName: "bahc-iso-9001-2015-certificate.pdf",
    fileSize: "680 KB",
    pageCount: "1 Page",
    filePath: "/assets/docs/bahc-iso-9001-2015-certificate.pdf",
    description:
      "Official certificate issued by QRO verifying compliance of Bharat Animal Health Care for trading, manufacturing, and distribution of animal feed supplements, Bharat Gold, and Dudhdhara mineral mixtures (Certificate No. 305025100165Q).",
    verifiedOfficial: true,
  },
  {
    id: "doc-iec",
    title: "Government of India DGFT Import-Export Code (IEC)",
    category: "Certificates",
    fileName: "bahc-dgft-iec-certificate.pdf",
    fileSize: "440 KB",
    pageCount: "1 Page",
    filePath: "/assets/docs/bahc-dgft-iec-certificate.pdf",
    description:
      "Official DGFT certificate issued by the Ministry of Commerce and Industry, Directorate General of Foreign Trade, Government of India, certifying Bharat Animal Health Care under IEC Code AKEPC0113C.",
    verifiedOfficial: true,
  },
  {
    id: "doc-brochure",
    title: "BAHC Product Portfolio & Formulation Brochure",
    category: "Brochures & Catalogs",
    fileName: "bahc-product-brochure.pdf",
    fileSize: "14.2 MB",
    pageCount: "8 Pages",
    filePath: "/assets/docs/bahc-product-brochure.pdf",
    description:
      "Comprehensive 8-page color brochure detailing Dudhdhara liquid calcium suspensions, mineral mixtures, Stress Nil, LivoCare, and pack configurations.",
    verifiedOfficial: true,
  },
  {
    id: "doc-company-profile",
    title: "BAHC Corporate Profile & Nutritional Philosophy",
    category: "Corporate Presentations",
    fileName: "bahc-company-profile.pdf",
    fileSize: "1.8 MB",
    pageCount: "7 Slides",
    filePath: "/assets/docs/bahc-company-profile.pdf",
    description:
      "Official corporate presentation illustrating BAHC's founding in 2013, company mission, scientific rationale, and farmer empowerment commitments.",
    verifiedOfficial: true,
  },
  {
    id: "doc-cattle-feed",
    title: "Cattle Feed Nutritional Specifications & Analytical Values",
    category: "Technical Sheets",
    fileName: "bahc-cattle-feed-presentation.pdf",
    fileSize: "1.9 MB",
    pageCount: "7 Slides",
    filePath: "/assets/docs/bahc-cattle-feed-presentation.pdf",
    description:
      "Technical breakdown of crude protein (21%), healthy fat (6.68%), controlled moisture (8%), and mineral fortification in Bharat Gold cattle feed.",
    verifiedOfficial: true,
  },
  {
    id: "doc-catalog-all",
    title: "BAHC Complete Master Product Catalog",
    category: "Brochures & Catalogs",
    fileName: "bahc-all-products-catalog.pdf",
    fileSize: "42.5 MB",
    pageCount: "100 Pages",
    filePath: "/assets/docs/bahc-all-products-catalog.pdf",
    description:
      "Full 100-page high-definition visual catalog containing all product labels, dosage instructions, and carton packaging layouts across all livestock sectors.",
    verifiedOfficial: true,
  },
  {
    id: "doc-stress-nil",
    title: "Stress Nil 4-in-1 Technical Formulation Sheet",
    category: "Technical Sheets",
    fileName: "stress-nil-technical-specifications.pdf",
    fileSize: "2.1 MB",
    pageCount: "2 Pages",
    filePath: "/assets/docs/stress-nil-technical-specifications.pdf",
    description:
      "Certified packaging label specifications containing complete composition, indication matrix, dilution rates, and contact details for Stress Nil.",
    verifiedOfficial: true,
  },
];
