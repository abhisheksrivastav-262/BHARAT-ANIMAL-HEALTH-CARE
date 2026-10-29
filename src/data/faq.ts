export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Dairy & Cattle" | "Poultry & Aqua" | "Dealership & Orders";
}

export const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What is Bharat Animal Health Care (BAHC) and when was it established?",
    answer:
      "Bharat Animal Health Care (BAHC) was founded in 2013 in Navsari, Gujarat, by Chouhan Jitubhai Chimanbhai. Over the past 13+ years, BAHC has evolved into an ISO 9001:2015 certified manufacturer and distributor of high-potency cattle feed supplements, liquid calcium suspensions, chelated mineral mixtures, poultry vitamins, and aquaculture nutrition.",
  },
  {
    category: "General",
    question: "Are BAHC products certified for quality and export?",
    answer:
      "Yes. BAHC holds an independent ISO 9001:2015 Quality Management System Certification (Certificate No. 305025100165Q) issued by QRO. We are also formally registered with the Government of India, Ministry of Commerce and Industry (Directorate General of Foreign Trade) under Import-Exporter Code (IEC) AKEPC0113C, making our products eligible for international distribution.",
  },
  {
    category: "Dairy & Cattle",
    question: "Why is Dudhdhara Gold formulated with Glycine-Chelated Calcium and Minerals?",
    answer:
      "Standard inorganic calcium salts (such as calcium carbonate) often suffer from low intestinal absorption (as low as 20–30%) and can cause digestive irritation. Dudhdhara Gold uses microcrystalline oyster shell calcium combined with glycine chelation, allowing the minerals to be absorbed via active amino acid transport pathways with over 90% bioavailability. Furthermore, it is enriched with natural galactagogues (Shatavari & Jiwanti) to stimulate hormonal lactation pathways naturally.",
  },
  {
    category: "Dairy & Cattle",
    question: "How quickly can farmers expect to see improvements in milk yield and fat percentage?",
    answer:
      "When administered at recommended doses (50ml to 100ml daily for cows and buffaloes), farmers typically observe noticeable improvements in milk volume and energy levels within 3 to 7 days. Sustained usage over 21 days leads to measurable increases in milk fat density and SNF (Solid-Not-Fat) levels, as well as a reduction in postpartum drop-offs.",
  },
  {
    category: "Dairy & Cattle",
    question: "Can Dudhdhara Forte Mineral Mixture be fed all year round?",
    answer:
      "Yes. Indian fodder and crop residues are inherently deficient in essential trace minerals like zinc, copper, cobalt, and selenium throughout most of the year. Feeding 30g to 50g of Dudhdhara Forte daily ensures continuous reproductive readiness, regular estrus cycles, and prevents repeat breeding syndrome.",
  },
  {
    category: "Poultry & Aqua",
    question: "What makes Stress Nil 4-in-1 unique for poultry farms?",
    answer:
      "Stress Nil 4-in-1 combines high concentrations of dextrose (50%), sodium chloride (20%), and potassium chloride (15%) with a full spectrum of vitamins (A, D3, E, C, B-Complex) and essential amino acids. It dissolves instantly in drinking water without clogging nipple drinkers, provides immediate cellular rehydration during heat waves, and carries a zero withdrawal period.",
  },
  {
    category: "Poultry & Aqua",
    question: "How does F-SafeTox work in fish ponds and aquaculture ecosystems?",
    answer:
      "F-SafeTox utilizes Mannan Oligosaccharides (MOS), activated HSCAS adsorbents, and beneficial Bacillus subtilis spores to bind dissolved heavy metals, endotoxins, and mycotoxins present in pond mud and water. It neutralizes noxious ammonia and nitrite gases, preventing fish mortality and promoting clean pond bottoms.",
  },
  {
    category: "Dealership & Orders",
    question: "How can I become an authorized distributor or stockist for BAHC?",
    answer:
      "We partner with reputable veterinary pharmacies, dairy cooperatives, feed dealers, and agricultural retailers across India. You can submit a dealership inquiry directly through our website's Contact / Request a Quote page or call our dedicated Helpline at +91 93222 17177 or message +91 94845 55525. Our commercial team will evaluate your district and territory exclusivity.",
  },
  {
    category: "Dealership & Orders",
    question: "What are the minimum order quantities (MOQ) and shipping logistics?",
    answer:
      "For retail packs, standard master carton quantities apply (e.g., 20 x 1L or 4 x 5L cans). For commercial compound feeds like Bharat Gold and Bharat Mix Forte, shipments are dispatched in 40 kg HDPE bags via road transport across Gujarat, Maharashtra, Rajasthan, and nationwide.",
  },
];
