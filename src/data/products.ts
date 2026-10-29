export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "cattle-dairy" | "poultry" | "aquaculture" | "small-ruminants" | "breeding-specialty";
  categoryName: string;
  image: string;
  galleryImages: string[];
  keyHighlights: string[];
  description: string;
  composition: {
    item: string;
    value: string;
  }[];
  indications: string[];
  dosageAndUsage: string;
  availablePacks: string[];
  isFeatured?: boolean;
  divisionBadge: string;
}

export const productsData: Product[] = [
  {
    id: "dudhdhara-gold-suspension",
    slug: "dudhdhara-gold-suspension",
    name: "Dudhdhara Suspension Gold",
    subtitle: "Glycin Chelated Oyster Calcium Suspension with Biotin, Shatavari & Jiwanti",
    category: "cattle-dairy",
    categoryName: "Cattle & Dairy Health",
    image: "/assets/products/dudhdhara-gold-suspension.jpg",
    galleryImages: [
      "/assets/products/dudhdhara-gold-20l.jpg",
      "/assets/products/dudhdhara-glycin-chelated.jpg",
      "/assets/products/dudhdhara-composition-label.jpg",
      "/assets/products/dudhdhara-promo-offer.jpg",
    ],
    keyHighlights: [
      "Glycin Chelated Oyster Calcium for 95%+ superior bioavailability",
      "Enriched with Biotin, Shatavari, Jiwanti, Vitamin D3 & Vitamin B12",
      "Maximizes daily milk yield and improves fat & SNF levels",
      "Prevents milk fever, hypocalcemia, and post-calving weakness",
    ],
    description:
      "Dudhdhara Gold is BAHC's premier liquid calcium suspension formulated specifically for high-yielding dairy cattle and buffaloes. Blended with pure oyster shell calcium, glycine-chelated trace minerals, and standardized Ayurvedic galactagogues (Shatavari & Jiwanti), it supports rapid calcium absorption, strengthens skeletal health, and significantly stimulates natural lactation without hormonal residues.",
    composition: [
      { item: "Calcium (Microcrystalline Oyster Calcium)", value: "3700 mg" },
      { item: "Phosphorus", value: "1850 mg" },
      { item: "Vitamin D3", value: "8000 I.U." },
      { item: "Vitamin B12", value: "100 mcg" },
      { item: "Biotin (Vitamin H)", value: "20 mg" },
      { item: "Shatavari Extract", value: "1000 mg" },
      { item: "Jiwanti Extract", value: "500 mg" },
      { item: "Glycine Chelate Zinc", value: "100 mg" },
      { item: "Carbohydrates & Energy base", value: "q.s." },
    ],
    indications: [
      "Drop in daily milk yield and low lactation persistency",
      "Hypocalcemia and milk fever prevention during pre- & post-calving",
      "Improving milk fat content and SNF percentage",
      "Weak bones, rickets, and general debility in dairy cattle",
    ],
    dosageAndUsage:
      "Cows & Buffaloes: 50 ml to 100 ml daily orally. Calves, Sheep & Goats: 10 ml to 20 ml daily. During peak lactation or recovery from milk fever, administer 100 ml twice daily.",
    availablePacks: ["1 Litre", "2 Litres", "5 Litres", "10 Litres", "20 Litres", "40 Litres Drum", "5L & 10L Steel Pack"],
    isFeatured: true,
    divisionBadge: "Dairy Bestseller",
  },
  {
    id: "dudhdhara-forte-mineral-mixture",
    slug: "dudhdhara-forte-mineral-mixture",
    name: "Dudhdhara Forte Mineral Mixture",
    subtitle: "Fortified with Glycine Chelate, Essential Vitamins & Trace Minerals",
    category: "cattle-dairy",
    categoryName: "Cattle & Dairy Health",
    image: "/assets/products/dudhdhara-forte-1kg.jpg",
    galleryImages: [
      "/assets/products/dudhdhara-glycine-chelate-pack.jpg",
      "/assets/products/dudhdhara-mineral-mixture-vitamins.jpg",
      "/assets/products/dudhdhara-calcium-regular.jpg",
    ],
    keyHighlights: [
      "Chelated trace mineral formula meeting ICAR nutritional standards",
      "Overcomes anestrus, repeat breeding, and poor conception rates",
      "Enhances rumen microbial digestion and dry matter intake",
      "Zero-toxin analytical purity with balanced Ca:P ratio",
    ],
    description:
      "Dudhdhara Forte is a high-potency, vitamin-fortified chelated mineral mixture engineered to balance nutritional deficits in dry fodder and green grass. By supplying minerals in chelated organic form, it prevents micro-nutrient leaching, enhances ovarian function, shortens the inter-calving period, and sustains long-term herd productivity.",
    composition: [
      { item: "Calcium", value: "25.5%" },
      { item: "Phosphorus", value: "12.8%" },
      { item: "Magnesium", value: "6.0%" },
      { item: "Chelated Zinc (Glycinate)", value: "9600 mg/kg" },
      { item: "Chelated Copper (Glycinate)", value: "1500 mg/kg" },
      { item: "Cobalt", value: "150 mg/kg" },
      { item: "Iodine", value: "325 mg/kg" },
      { item: "Selenium", value: "10 mg/kg" },
      { item: "Vitamin A", value: "700,000 I.U./kg" },
      { item: "Vitamin D3", value: "70,000 I.U./kg" },
      { item: "Vitamin E", value: "250 mg/kg" },
    ],
    indications: [
      "Nutritional infertility, delayed puberty, and repeat breeding",
      "Subclinical mineral deficiencies in dairy cows and buffaloes",
      "Rough coat, pica (licking walls or dirt), and poor hoof health",
      "Maintenance of optimal milk production across seasons",
    ],
    dosageAndUsage:
      "Milking Cows & Buffaloes: 30g to 50g daily mixed in cattle feed or ration. Dry Cattle & Heifers: 20g to 30g daily. Feed mixing: 1 kg to 2 kg per 100 kg of complete concentrate feed.",
    availablePacks: ["1 kg Pack", "5 kg Bucket", "10 kg Bucket", "20 kg Drum", "25 kg Bag"],
    isFeatured: true,
    divisionBadge: "Mineral Fortification",
  },
  {
    id: "bharat-gold-mix-forte",
    slug: "bharat-gold-mix-forte",
    name: "Bharat Gold Cattle Feed & Bharat Mix Forte",
    subtitle: "Complete Balanced Cattle Feed & Nutritional Mash (40 Kg Heavy Duty Bag)",
    category: "cattle-dairy",
    categoryName: "Cattle & Dairy Health",
    image: "/assets/products/bharat-mix-forte-40kg.jpg",
    galleryImages: [
      "/assets/products/bharat-mix-forte-front.jpg",
      "/assets/products/bharat-gold-feed-combo.jpg",
      "/assets/products/bharat-mix-forte-detail.jpg",
    ],
    keyHighlights: [
      "21% Crude Protein & 6.68% Healthy Fat formulation",
      "Controlled moisture (8%) and low toxin (1.4%) profile",
      "Fortified with Star+++ mineral complex and bypass fat",
      "Significantly increases milk yield and lactation persistency",
    ],
    description:
      "Bharat Gold Cattle Feed and Bharat Mix Forte are scientifically formulated commercial cattle feeds manufactured at BAHC's modern facility in Navsari, Gujarat. Designed by animal nutrition experts to meet the intensive metabolic demands of high-producing dairy livestock, it combines grain grains, oil cakes, essential amino acids, and balanced buffers to keep rumen pH stable and milk production high.",
    composition: [
      { item: "Crude Protein (Min.)", value: "21.0%" },
      { item: "Crude Fat (Min.)", value: "6.68%" },
      { item: "Crude Fiber (Max.)", value: "15.0%" },
      { item: "Moisture (Max.)", value: "8.0%" },
      { item: "Toxin (Aflatoxin Max)", value: "1.4% / safe threshold" },
      { item: "Sap", value: "0.68%" },
      { item: "Star+++ Essential Minerals", value: "q.s." },
    ],
    indications: [
      "Daily complete nutrition for milking and cross-bred cattle",
      "Maximizing peak lactation and sustaining mid-lactation yield",
      "Preventing body condition scoring (BCS) drop after calving",
    ],
    dosageAndUsage:
      "Administer 1.5 kg to 2 kg for body maintenance, plus 400g for every litre of milk produced daily. Soak in water or feed directly alongside clean fresh drinking water.",
    availablePacks: ["40 Kg Heavy Duty HDPE Woven Bag", "50 Kg Bulk Supply"],
    isFeatured: true,
    divisionBadge: "Flagship Cattle Feed",
  },
  {
    id: "stress-nil-4in1",
    slug: "stress-nil-4in1",
    name: "Stress Nil 4-in-1 Poultry Feed Supplement",
    subtitle: "Multivitamins, Amino Acids, Electrolytes & Trace Minerals Water-Soluble Formula",
    category: "poultry",
    categoryName: "Poultry Nutrition",
    image: "/assets/products/stress-nil-multivitamin-ad3e.jpg",
    galleryImages: [
      "/assets/products/livocare-plus-poultry-powder.jpg",
    ],
    keyHighlights: [
      "Complete 4-in-1 all-seasons anti-stress formulation",
      "Rapid electrolyte replenishment (Sodium Chloride 20%, Potassium Chloride 15%, Dextrose 50%)",
      "Combats heat stroke, vaccination stress, and transport exhaustion",
      "Zero withdrawal period with 100% water solubility",
    ],
    description:
      "Stress Nil 4-in-1 is an advanced water-soluble supplement engineered for commercial broilers, layers, and breeders. It combines vital vitamins (A, D3, E, C, B-Complex), amino acids (Glycine, L-Lysine, DL-Methionine), fast-acting dextrose, and balanced electrolytes to protect flocks from mortality during harsh summers, transportation, debeaking, and post-antibiotic stress.",
    composition: [
      { item: "Dextrose (Instant Energy)", value: "50%" },
      { item: "Sodium Chloride", value: "20%" },
      { item: "Potassium Chloride", value: "15%" },
      { item: "Vitamins A, D3, E, C", value: "Standardized active units" },
      { item: "Vitamins B1, B2, B6, B12, Folic Acid, Niacinamide", value: "Essential balance" },
      { item: "Amino Acids (Glycine, L-Lysine, DL-Methionine)", value: "Active fortifier" },
      { item: "Essential Trace Minerals (Cu, Co, Mn, Mg, Zn, Se, Cr, I, Fe)", value: "Bioavailable trace" },
      { item: "Excipient", value: "Q.S." },
    ],
    indications: [
      "Climatic stress (extreme heat waves, cold shock, or humidity)",
      "Transport stress, debeaking stress, and shifting shock",
      "Post-vaccination and post-antibiotic recovery",
      "Laying drops and sudden growth slumps in broilers",
    ],
    dosageAndUsage:
      "Oral route in drinking water: 1 sachet of 300 gm for 1500 litres of drinking water. In feed mixing: 1 sachet (300 gm) per 350 kg of poultry feed mash.",
    availablePacks: ["300 gm Sachet", "500 gm Pack", "1 kg Moisture-Proof Bag"],
    isFeatured: true,
    divisionBadge: "Poultry Essential",
  },
  {
    id: "livocare-plus",
    slug: "livocare-plus",
    name: "LivoCarePlus Poultry Liver Tonic",
    subtitle: "Premium Herbal & Biochemical Liver Protective Powder & Liquid",
    category: "poultry",
    categoryName: "Poultry Nutrition",
    image: "/assets/products/livocare-plus-poultry-powder.jpg",
    galleryImages: [
      "/assets/products/stress-nil-multivitamin-ad3e.jpg",
    ],
    keyHighlights: [
      "Regenerates damaged hepatic cells and protects against mycotoxins",
      "Improves FCR (Feed Conversion Ratio) and weight gain in broilers",
      "Enhances liver bile secretion for efficient lipid digestion",
      "Prevents fatty liver syndrome in commercial layer birds",
    ],
    description:
      "LivoCarePlus is a scientifically formulated liver tonic powder and oral liquid developed to maintain optimal hepatic function in poultry flocks. Formulated with proven herbal phytobiotics, choline chloride, and liver extracts, it neutralizes feed contaminants and promotes vigorous appetite and feed conversion.",
    composition: [
      { item: "Liver Extract Active Fractions", value: "Standardized extract" },
      { item: "Choline Chloride", value: "High potency" },
      { item: "B-Complex Vitamins (B1, B2, B6, B12)", value: "Fortified" },
      { item: "Herbal Hepatoprotective extracts", value: "Phyto-complex" },
      { item: "DL-Methionine", value: "Essential" },
    ],
    indications: [
      "Poor feed intake, sluggish growth, and uneven flock weight",
      "Fatty Liver Hemorrhagic Syndrome in caged layers",
      "Aflatoxicosis and chemical intoxication from damp feed",
      "Convalescence following disease outbreaks",
    ],
    dosageAndUsage:
      "Broilers: 10ml - 15ml per 100 birds daily in drinking water. Layers: 15ml - 20ml per 100 birds daily. Powder format: 1 kg per ton of poultry feed.",
    availablePacks: ["500 ml Bottle", "1 Litre Bottle", "5 Litres Can", "1 kg Powder Pack"],
    divisionBadge: "Hepatic Protection",
  },
  {
    id: "oxyfish-supplement",
    slug: "oxyfish-supplement",
    name: "OxyFish Feed Supplement",
    subtitle: "Complete Nutrition for Strong, Healthy Fish, Faster Growth & High Immunity",
    category: "aquaculture",
    categoryName: "Aquaculture & Fisheries",
    image: "/assets/products/oxyfish-fish-feed-supplement.jpg",
    galleryImages: [
      "/assets/products/fish-fresh-pond-freshener.jpg",
      "/assets/products/f-safetox-toxin-binder.jpg",
      "/assets/products/b-heal-aqua.jpg",
      "/assets/products/bahc-aquaculture-division.jpg",
    ],
    keyHighlights: [
      "Complete micronutrient profile designed for commercial aquaculture ponds",
      "Accelerates daily specific growth rate (SGR) in carps, tilapia, and pangasius",
      "Enhances disease resistance against aquatic bacterial & fungal pathotypes",
      "Fortified with immune-boosting glucans and essential aquatic vitamins",
    ],
    description:
      "OxyFish is BAHC's specialized aqua-feed supplement tailored for freshwater fish farming and pond aquaculture. It provides bioavailable amino acids, gut-protecting enzymes, and trace elements that ensure fish digest commercial pellets more efficiently, maintaining clear water quality and rapid commercial growth.",
    composition: [
      { item: "Crude Protein Equivalent Fractions", value: "32% bio-basis" },
      { item: "Phosphorus & Calcium Complex", value: "Balanced aquatic grade" },
      { item: "Vitamin C (Protected Polyphosphate)", value: "High stability" },
      { item: "Vitamin E & Selenium", value: "Immune antioxidant" },
      { item: "Aquatic Probiotics & Enzymes", value: "Bacillus subtilis base" },
    ],
    indications: [
      "Slow growth rate and feed refusal in nursery and grow-out ponds",
      "Poor survival rate of fish fry and fingerlings",
      "Stress during netting, handling, and seasonal water temperature shifts",
    ],
    dosageAndUsage:
      "Mix 5g to 10g per kg of dry fish feed using a natural binder (such as oil or egg white). Top-dress feed daily during intensive feeding cycles.",
    availablePacks: ["1 kg Moisture-Barrier Pack", "5 kg Bucket", "25 kg Bag"],
    isFeatured: true,
    divisionBadge: "Aqua Bestseller",
  },
  {
    id: "f-safetox-toxin-binder",
    slug: "f-safetox-toxin-binder",
    name: "F-SafeTox Liquid Toxin Binder",
    subtitle: "Advanced Formula to Bind & Neutralize Harmful Toxins for Aqua & Fishing Use",
    category: "aquaculture",
    categoryName: "Aquaculture & Fisheries",
    image: "/assets/products/f-safetox-toxin-binder.jpg",
    galleryImages: [
      "/assets/products/fish-fresh-pond-freshener.jpg",
      "/assets/products/oxyfish-fish-feed-supplement.jpg",
    ],
    keyHighlights: [
      "Neutralizes dangerous endotoxins, mycotoxins, and heavy metals in pond water",
      "Formulated with MOS (Mannan Oligosaccharides) and activated HSCAS adsorbents",
      "Contains live Bacillus subtilis to remediate toxic ammonia and nitrites",
      "Maintains pond bottom hygiene and optimizes dissolved oxygen efficiency",
    ],
    description:
      "F-SafeTox is a professional aquaculture toxin neutralizing liquid and water conditioner. It safeguards aquatic species from toxic pond water conditions caused by decomposing organic matter, unconsumed feed, and runoff pollutants.",
    composition: [
      { item: "Mannan Oligosaccharides (MOS)", value: "Active complex" },
      { item: "Liver Extract", value: "Standardized" },
      { item: "Bacillus Subtilis Spores", value: "Live probiotic culture" },
      { item: "HSCAS & Activated Charcoal Complex", value: "Adsorption grade" },
      { item: "Silicon Dioxide", value: "Dispersal carrier" },
    ],
    indications: [
      "Spikes in ammonia (NH3), nitrite (NO2), and hydrogen sulfide (H2S) in ponds",
      "Sluggish gill activity and fish gasping at the pond surface",
      "Bottom black soil toxicity in long-cycle ponds",
    ],
    dosageAndUsage:
      "Water application: 1 Litre per acre of water area with 1 meter water depth. In feed: 5 ml to 10 ml per kg of feed during toxic bloom episodes.",
    availablePacks: ["1 Litre Bottle", "5 Litres Can"],
    divisionBadge: "Water Treatment",
  },
  {
    id: "bakriyo-golee",
    slug: "bakriyo-golee",
    name: "Bakriyo Golee (बकरीयों गोली)",
    subtitle: "Balanced Nutritional Supplement Formulated Specially for Sheep & Goats",
    category: "small-ruminants",
    categoryName: "Goat & Sheep Nutrition",
    image: "/assets/products/bakriyo-golee-pack.jpg",
    galleryImages: [
      "/assets/products/bakriyo-golee-banner.jpg",
      "/assets/products/bakriyo-golee-nutrition.jpg",
    ],
    keyHighlights: [
      "Custom formulated for the unique digestive physiology of small ruminants",
      "Stimulates rapid daily weight gain in feeder goats and lambs",
      "Increases milk production in lactating does and ensures healthy twin kids",
      "Fortified with trace minerals that strengthen fleece and hoof structure",
    ],
    description:
      "Bakriyo Golee is an innovative, highly palatable nutritional tablet and supplement designed specifically for stall-fed and free-grazing goats and sheep. Engineered to deliver calibrated daily doses of calcium, phosphorus, zinc, cobalt, and digestion-boosting enzymes, it solves the rampant micronutrient deficiencies common in arid grazing lands.",
    composition: [
      { item: "Calcium & Phosphorus", value: "Optimized small ruminant ratio" },
      { item: "Chelated Trace Minerals (Zn, Cu, Co, Se)", value: "Organic forms" },
      { item: "Essential Amino Acids (L-Lysine, DL-Methionine)", value: "Muscle growth" },
      { item: "Digestive Yeast & Enzyme Culture", value: "Rumen friendly" },
      { item: "Standardized Phyto-extracts", value: "Appetite booster" },
    ],
    indications: [
      "Slow body weight gain and stunting in growing goat kids and sheep",
      "Low milk yield in lactating goats leading to weak, sickly kids",
      "Wool shedding, brittle hooves, and frequent worm load vulnerability",
    ],
    dosageAndUsage:
      "Adult Goats & Sheep: 1 to 2 tablets daily orally or crushed into daily ration. Kids & Lambs: 1/2 to 1 tablet daily. Can also be administered crushed with drinking water.",
    availablePacks: ["50 Tablets Jar", "100 Tablets Jar", "500 Tablets Commercial Farm Pack"],
    isFeatured: true,
    divisionBadge: "Small Ruminant Specialty",
  },
  {
    id: "b-fertivet-bull-power",
    slug: "b-fertivet-bull-power",
    name: "B-Fertivet Bull Power (डबल स्ट्रेंथ)",
    subtitle: "Double Strength Liquid Fertility & Stamina Supplement for Buffalo Bull (Pado) & Desi Bull",
    category: "breeding-specialty",
    categoryName: "Breeding & Specialty Health",
    image: "/assets/products/b-fertivet-bull-power.jpg",
    galleryImages: [
      "/assets/products/b-fertivet-double-power.jpg",
      "/assets/products/pashu-heat.jpg",
      "/assets/products/36-herbal-extracts-formula.jpg",
    ],
    keyHighlights: [
      "Double strength herbal and biochemical formulation for breeding bulls",
      "Significantly enhances sperm motility, viability, and seminal volume",
      "Boosts libido and mating stamina in sluggish or aging stud bulls",
      "Enriched with 36 potent botanical extracts including Ashwagandha & Shatavari",
    ],
    description:
      "B-Fertivet Bull Power is an intensive, high-potency veterinary reproductive tonic formulated specifically for breeding bulls (Pado / Sand Deshi). Built on extensive Ayurvedic research and modern veterinary endocrinology, it invigorates the reproductive organs, stimulates testosterone synthesis naturally, and elevates conception rates across commercial breeding units.",
    composition: [
      { item: "Ashwagandha (Withania somnifera)", value: "Standardized extract" },
      { item: "Shatavari (Asparagus racemosus)", value: "Standardized extract" },
      { item: "Mucuna pruriens (Kaunch Beej)", value: "Potency active" },
      { item: "Gokshura (Tribulus terrestris)", value: "Libido enhancer" },
      { item: "Biotin (Vitamin H) & Vitamin E", value: "High dose antioxidant" },
      { item: "Organic Zinc Chelate", value: "Spermatogenesis mineral" },
    ],
    indications: [
      "Low libido and lack of mounting interest in breeding bulls",
      "Poor semen quality, low sperm count, and reduced motility",
      "Breeding exhaustion during peak seasonal breeding cycles",
    ],
    dosageAndUsage:
      "Administer 50 ml to 100 ml orally daily for 15 to 20 consecutive days prior to and during the active breeding season. Repeat after a 10-day rest interval if required.",
    availablePacks: ["500 ml Bottle", "1 Litre Sealed Bottle"],
    isFeatured: true,
    divisionBadge: "Reproductive Vitality",
  },
  {
    id: "pashu-heat",
    slug: "pashu-heat",
    name: "Pashu Heat (पशु हीट)",
    subtitle: "Herbal Estrus Inducer & Ovulation Enhancer for Cows and Buffaloes",
    category: "breeding-specialty",
    categoryName: "Breeding & Specialty Health",
    image: "/assets/products/pashu-heat.jpg",
    galleryImages: [
      "/assets/products/b-fertivet-bull-power.jpg",
    ],
    keyHighlights: [
      "Natural herbal estrus inducer that triggers pronounced, visible heat signs",
      "Addresses silent heat, delayed puberty, and ovarian inactivity",
      "Enhances uterine health and favorable endometrial environment for conception",
      "Non-hormonal formulation safe for long-term herd management",
    ],
    description:
      "Pashu Heat is an Ayurvedic uterine stimulant and estrus synchronization tonic designed to overcome the widespread problem of silent heat and non-cycling cattle. It stimulates the hypothalamic-pituitary-ovarian axis, encouraging healthy follicle maturation and timely ovulation.",
    composition: [
      { item: "Herbal Phyto-Estrogens & Phytoactive herbs", value: "Synergistic complex" },
      { item: "Mucuna & Aloe Vera Active Fractions", value: "Standardized" },
      { item: "Organic Trace Mineral Cofactors", value: "q.s." },
    ],
    indications: [
      "Silent heat and non-cycling in dairy cows and heifers",
      "Sub-active ovaries and failure of ovulation",
      "Prolonged postpartum anestrus extending the intercalving period",
    ],
    dosageAndUsage:
      "Administer 3 tablets or 50 ml liquid daily for 3 to 5 consecutive days. In cycling cows, observe for heat signs 18 to 21 days following administration.",
    availablePacks: ["Blister Strip Pack", "500 ml Liquid Bottle"],
    divisionBadge: "Estrus Enhancement",
  },
  {
    id: "plantomin-vitality",
    slug: "plantomin-vitality",
    name: "BAHC PlantoMin Vitality",
    subtitle: "Herbal Multi-Mineral & Plant-Derived Metabolic Vitality Booster",
    category: "breeding-specialty",
    categoryName: "Breeding & Specialty Health",
    image: "/assets/products/plantomin-herbal-vitality.jpg",
    galleryImages: [
      "/assets/products/36-herbal-extracts-formula.jpg",
    ],
    keyHighlights: [
      "Plant-derived trace mineral complex with high cellular uptake",
      "Fortified with natural antioxidants to neutralize metabolic stress",
      "Certified under ISO 9001:2015 & Make in India standards",
      "Promotes glossy coat, hoof integrity, and robust general vigor",
    ],
    description:
      "PlantoMin combines botanical micronutrients with bio-available mineral salts to deliver full-spectrum rejuvenation for convalescent or underperforming farm animals. Safe, clean, and formulated with zero chemical synthetic binders.",
    composition: [
      { item: "Plant Mineral Complexes", value: "Standardized bio-ash" },
      { item: "Herbal Bioenhancers (Giloy, Tulsi, Jivanti)", value: "Immune adaptogens" },
      { item: "Trace Mineral Balancers", value: "q.s." },
    ],
    indications: [
      "General debility, slow post-illness recovery, and unthriftiness",
      "Seasonal coat discoloration and poor hoof hardness",
    ],
    dosageAndUsage:
      "Cattle & Buffaloes: 30g daily mixed in fodder. Calves: 15g daily.",
    availablePacks: ["1 kg Pack", "5 kg Bucket"],
    divisionBadge: "Metabolic Vitality",
  },
  {
    id: "b-dogy-pet-nutrition",
    slug: "b-dogy-pet-nutrition",
    name: "B-Dogy Pet Nutrition",
    subtitle: "Complete Nutritional & Skeletal Supplement for Dogs and Puppies",
    category: "breeding-specialty",
    categoryName: "Breeding & Specialty Health",
    image: "/assets/products/b-dogy-pet-nutrition.jpg",
    galleryImages: [],
    keyHighlights: [
      "Calibrated calcium, phosphorus, and vitamin formula for canine skeletal health",
      "Promotes strong teeth, lustrous coat, and energetic vitality in pets",
      "Highly palatable flavor readily accepted by puppies and adult dogs",
    ],
    description:
      "B-Dogy provides essential micronutrients, joint lubricants, and coat vitamins to keep guard dogs and domestic pets in peak physical condition throughout all stages of life.",
    composition: [
      { item: "Calcium & Phosphorus", value: "Balanced canine ratio" },
      { item: "Vitamins A, D3, E, B-Complex", value: "Daily requirement" },
      { item: "L-Lysine & Amino Acids", value: "Muscle growth" },
    ],
    indications: [
      "Puppy bone development and rickets prevention",
      "Lactating female dogs supporting large litters",
      "Shedding coats and dull fur in adult canines",
    ],
    dosageAndUsage:
      "Small breeds & puppies: 5ml daily. Medium to large breeds: 10ml to 15ml daily mixed with dog food.",
    availablePacks: ["200 ml Bottle", "500 ml Bottle"],
    divisionBadge: "Pet Nutrition",
  },
];
