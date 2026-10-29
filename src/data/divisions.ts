export interface Division {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  productCountText: string;
  coreSolutions: string[];
  scientificFocus: string;
}

export const divisionsData: Division[] = [
  {
    id: "cattle-dairy",
    name: "Cattle & Dairy Health Division",
    shortDescription:
      "Advanced liquid calcium suspensions, chelated mineral mixtures, and complete compound cattle feed designed to maximize milk yield, optimize fertility, and prevent metabolic disorders.",
    fullDescription:
      "BAHC was founded on the conviction that dairy livestock thrive when fed scientifically balanced, bioavailable nutrition. Our flagship Dudhdhara range combines oyster shell calcium with glycine-chelated trace elements and standardized Ayurvedic galactagogues (Shatavari and Jiwanti) to deliver immediate lactation enhancement, higher fat/SNF yields, and robust reproductive vitality across indigenous and crossbred herds.",
    heroImage: "/assets/products/dudhdhara-gold-20l.jpg",
    productCountText: "6+ Specialized Formulations",
    coreSolutions: [
      "Oyster calcium suspensions with Biotin & Ayurvedic galactagogues",
      "ICAR-compliant chelated mineral mixtures (Dudhdhara Forte)",
      "High-energy balanced compound cattle feeds (Bharat Gold & Mix Forte)",
      "Instant hypocalcemia relief gels (Calciplus Gel)",
    ],
    scientificFocus:
      "Precision calcium-to-phosphorus ratios (2:1), organic mineral chelation for 90%+ enteric absorption, and zero-toxin aflatoxin screening under ISO 9001:2015 standards.",
  },
  {
    id: "poultry",
    name: "Poultry Nutrition & Health Division",
    shortDescription:
      "Water-soluble anti-stress electrolyte complexes, hepatoprotective liver tonics, and natural feed premixes formulated for high-density commercial broilers and layers.",
    fullDescription:
      "High environmental temperatures, vaccination schedules, and rapid growth cycles impose tremendous metabolic strain on modern poultry. BAHC's poultry range, headlined by Stress Nil 4-in-1 and LivoCarePlus, protects commercial flocks from heat stress mortality, improves feed conversion ratios (FCR), and safeguards liver health against mycotoxins.",
    heroImage: "/assets/products/stress-nil-multivitamin-ad3e.jpg",
    productCountText: "3+ Commercial Supplements",
    coreSolutions: [
      "Stress Nil 4-in-1 all-seasons water-soluble multivitamin & electrolyte powder",
      "Stress Nil liquid multivitamin AD3E + B12",
      "LivoCarePlus poultry liver tonic powder and oral liquid",
      "B-Murgi natural and biofriendly feed premix powders",
    ],
    scientificFocus:
      "Rapid systemic rehydration through calibrated potassium-to-sodium electrolyte balancing, cellular osmoprotection, and zero-residue, zero-withdrawal formulation.",
  },
  {
    id: "aquaculture",
    name: "Aquaculture & Fisheries Division",
    shortDescription:
      "Pond water conditioners, high-adsorption toxin neutralizers, and balanced fish feed supplements promoting rapid specific growth rates and clear pond ecosystems.",
    fullDescription:
      "Aquaculture productivity depends directly on pond bottom biology and water chemistry. BAHC's Aquaculture Division provides commercial shrimp and fish farmers with proactive water purifiers, ammonia binders, and micronutrient pellet supplements that enhance dissolved oxygen uptake and reduce seasonal disease susceptibility.",
    heroImage: "/assets/products/oxyfish-fish-feed-supplement.jpg",
    productCountText: "4+ Aqua Care Products",
    coreSolutions: [
      "OxyFish high-protein pellet supplement for fingerlings and grow-out ponds",
      "F-SafeTox liquid toxin binder with MOS and activated charcoal adsorbents",
      "Fish Fresh pond freshener and water stress reliever",
      "B-Heal Aqua water health restoration liquids",
    ],
    scientificFocus:
      "Bioremediation via spore-forming beneficial bacteria (Bacillus subtilis), humic toxin binding, and stabilized Vitamin C polyphosphates that do not leach into pond water.",
  },
  {
    id: "small-ruminants",
    name: "Goat & Sheep Nutrition Division",
    shortDescription:
      "Palatable nutritional boluses, tablets, and mineral balancers tailored specifically for the selective feeding habits and rumen physiology of goats and sheep.",
    fullDescription:
      "Goats and sheep in India frequently suffer from acute copper, zinc, and selenium deficiencies due to overgrazed pastures. BAHC's Bakriyo Golee delivers calibrated daily doses of trace minerals, proteins, and digestive yeast, accelerating kid growth and bolstering lactation for commercial goat meat and milk enterprises.",
    heroImage: "/assets/products/bakriyo-golee-pack.jpg",
    productCountText: "Specialized Ruminant Lines",
    coreSolutions: [
      "Bakriyo Golee balanced daily nutritional supplement tablets",
      "Specialty small ruminant mineral mixtures",
      "Lactation support powders for dairy does",
    ],
    scientificFocus:
      "Specific mineral safety margins formulated to prevent copper toxicity while supplying essential zinc for fleece quality and hoof hardness.",
  },
  {
    id: "breeding-specialty",
    name: "Breeding & Specialty Animal Care",
    shortDescription:
      "Potent herbal reproductive stimulants for studs and breeding bulls, estrus synchronizers for dairy cows, and companion animal vitality supplements.",
    fullDescription:
      "Reproductive performance is the backbone of commercial animal husbandry. BAHC’s Specialty Division produces targeted natural solutions like B-Fertivet Bull Power for buffalo and desi breeding bulls, Pashu Heat for overcoming silent estrus, and PlantoMin for whole-body revitalisation.",
    heroImage: "/assets/products/b-fertivet-bull-power.jpg",
    productCountText: "5+ Targeted Therapeutics",
    coreSolutions: [
      "B-Fertivet Bull Power double-strength fertility tonic for buffalo and desi bulls",
      "Pashu Heat herbal estrus inducer for cows and heifers",
      "PlantoMin plant-derived bio-mineral vitality booster",
      "B-Dogy complete skeletal and nutritional supplement for canines",
    ],
    scientificFocus:
      "Synergistic botanical extraction standardized for withanolides, saponins, and phyto-estrogens that support endocrine balance without exogenous synthetic hormones.",
  },
];
