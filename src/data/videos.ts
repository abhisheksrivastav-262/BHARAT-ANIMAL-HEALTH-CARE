export interface VideoItem {
  id: string;
  title: string;
  category: "Dairy & Products" | "Manufacturing & Plant" | "Field & Farmers" | "Quality Assurance";
  videoUrl: string;
  posterUrl: string;
  duration: string;
  description: string;
  aspectRatio: "vertical" | "horizontal";
}

export const videosData: VideoItem[] = [
  {
    id: "vid-1",
    title: "Bharat Animal Health Care — Enterprise Overview",
    category: "Dairy & Products",
    videoUrl: "/assets/videos/bahc-overview-intro.mp4",
    posterUrl: "/assets/videos/bahc-overview-intro.jpg",
    duration: "0:05",
    description:
      "Original brand showcase highlighting BAHC's commitment to animal welfare, scientific formulation, and sustainable dairy farming.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-2",
    title: "Dudhganga Calcium 5 Litres Suspension Overview",
    category: "Dairy & Products",
    videoUrl: "/assets/videos/dudhganga-calcium-5l.mp4",
    posterUrl: "/assets/videos/dudhganga-calcium-5l.jpg",
    duration: "0:15",
    description:
      "Detailed demonstration of the Dudhganga high-calcium 5-liter suspension pack designed for rapid lactation boost in milking cattle.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-3",
    title: "Dairy Herd Vitality & Animal Health in the Field",
    category: "Field & Farmers",
    videoUrl: "/assets/videos/livestock-dairy-health.mp4",
    posterUrl: "/assets/videos/livestock-dairy-health.jpg",
    duration: "0:12",
    description:
      "Real field footage showing dairy herd health, rumination vitality, and livestock response under BAHC nutritional feeding protocols.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-4",
    title: "Compound Cattle Feed Application & Nutrition Mixing",
    category: "Field & Farmers",
    videoUrl: "/assets/videos/cattle-feed-application.mp4",
    posterUrl: "/assets/videos/cattle-feed-application.jpg",
    duration: "0:16",
    description:
      "Step-by-step practical demonstration showing proper ration balancing and mineral mixture incorporation into daily fodder.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-5",
    title: "Modern Manufacturing Plant & Packaging Operations",
    category: "Manufacturing & Plant",
    videoUrl: "/assets/videos/production-plant-facility.mp4",
    posterUrl: "/assets/videos/production-plant-facility.jpg",
    duration: "0:10",
    description:
      "Inspection of the semi-automated mixing units, hygienic bottling lines, and clean packaging infrastructure in Navsari, Gujarat.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-6",
    title: "Farmer Demonstration & Livestock Management Insights",
    category: "Field & Farmers",
    videoUrl: "/assets/videos/farmer-demonstration.mp4",
    posterUrl: "/assets/videos/farmer-demonstration.jpg",
    duration: "0:16",
    description:
      "Direct engagement with regional dairy farmers sharing practical lactation results, milk density improvements, and animal contentment.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-7",
    title: "Field Nutrition Survey & Livestock Health Checkups",
    category: "Quality Assurance",
    videoUrl: "/assets/videos/animal-nutrition-fieldwork.mp4",
    posterUrl: "/assets/videos/animal-nutrition-fieldwork.jpg",
    duration: "0:34",
    description:
      "Comprehensive veterinary fieldwork tracking body condition scores (BCS), milk fat testing, and reproductive improvements.",
    aspectRatio: "vertical",
  },
  {
    id: "vid-8",
    title: "Quality Control, Batch Testing & Distribution Logistics",
    category: "Quality Assurance",
    videoUrl: "/assets/videos/manufacturing-quality-assurance.mp4",
    posterUrl: "/assets/videos/manufacturing-quality-assurance.jpg",
    duration: "0:34",
    description:
      "Behind-the-scenes look at rigorous batch release protocols, tamper-proof induction sealing, and dispatch logistics across India.",
    aspectRatio: "vertical",
  },
];
