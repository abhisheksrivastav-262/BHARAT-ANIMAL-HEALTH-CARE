export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  motto: string;
  establishedYear: number;
  proprietor: string;
  natureOfConcern: string;
  iecCode: string;
  isoCertificate: {
    standard: string;
    number: string;
    body: string;
    validThrough: string;
  };
  contact: {
    mobilePhone: string;
    mobilePhoneDisplay: string;
    whatsappPhone: string;
    whatsappPhoneDisplay: string;
    emailPrimary: string;
    emailHelpline: string;
    website: string;
    addresses: {
      title: string;
      line1: string;
      line2: string;
      city: string;
      district: string;
      state: string;
      pincode: string;
      country: string;
    }[];
  };
  vision: string;
  mission: string;
  guaranteePromise: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Bharat Animal Health Care",
  legalName: "Bharat Animal Health Care (BAHC)",
  tagline: "Since 2013... Caring For Animals",
  motto: "Care for Animal Health, Care for Human Health • Care • Cure • Commitment",
  establishedYear: 2013,
  proprietor: "Chouhan Jitubhai Chimanbhai",
  natureOfConcern: "Proprietorship",
  iecCode: "AKEPC0113C",
  isoCertificate: {
    standard: "ISO 9001:2015 Quality Management System",
    number: "305025100165Q",
    body: "QRO Certification",
    validThrough: "30th September 2028",
  },
  contact: {
    mobilePhone: "+919484555525",
    mobilePhoneDisplay: "+91 94845 55525",
    whatsappPhone: "+919484555525",
    whatsappPhoneDisplay: "+91 94845 55525",
    emailPrimary: "info@bahc.in",
    emailHelpline: "bahchelpline@gmail.com",
    website: "https://www.bahc.in",
    addresses: [
      {
        title: "Factory & Operational Unit",
        line1: "233-A, Gamtal, Naranpore",
        line2: "Taluka Chikhli",
        city: "Naranpor",
        district: "Navsari",
        state: "Gujarat",
        pincode: "396040",
        country: "India",
      },
      {
        title: "Registered Commercial Office",
        line1: "0, Nishal Falia, Naranpor",
        line2: "Khergam",
        city: "Navsari",
        district: "Navsari",
        state: "Gujarat",
        pincode: "396040",
        country: "India",
      },
    ],
  },
  vision:
    "To empower farmers and livestock owners by providing scientifically-formulated, high-potency cattle feed supplements and animal nutrition solutions that promote healthier livestock, higher yields, and sustainable agricultural prosperity.",
  mission:
    "To deliver uncompromising quality, affordable, and clinically-effective nutritional formulations that enhance animal health, boost lactation productivity, prevent metabolic deficiencies, and support farming communities across India and global markets.",
  guaranteePromise:
    "Manufactured using modern processing plant technology, precision analytical procedures, least-cost ration balancing, and strict adherence to ISO 9001:2015 quality protocols. Every batch undergoes rigorous quality assurance to ensure optimal bio-availability, purity, and peak animal vitality.",
  stats: [
    {
      label: "Years of Trust",
      value: "13+ Years",
      description: "Dedicated to livestock nutrition and animal well-being since 2013",
    },
    {
      label: "Quality Standard",
      value: "ISO 9001:2015",
      description: "Independently certified quality management and hygienic manufacturing",
    },
    {
      label: "Export Code",
      value: "DGFT IEC",
      description: "Government of India certified Import-Export concern (AKEPC0113C)",
    },
    {
      label: "Product Divisions",
      value: "5 Sectors",
      description: "Comprehensive coverage across Dairy, Poultry, Aqua, Ruminants & Specialty",
    },
  ],
};
