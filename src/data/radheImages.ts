import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM_1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM_1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import travellerFleetImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM_1_.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM_1_.jpeg";
import travellerSideImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM.jpeg";
import bannerImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM.jpeg";
import tourMomentImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM_1_.jpeg";

export interface RadheImageItem {
  id: string;
  src: string;
  title: string;
  category: "Sedan" | "SUV" | "Tempo Traveller" | "Fleet Showcase" | "Journey Moments";
  badge: string;
  passengers?: string;
  luggage?: string;
  ac?: boolean;
  ideal?: string;
  description: string;
  tag: string;
}

export const RADHE_FLEET_IMAGES: RadheImageItem[] = [
  {
    id: "innova-crysta",
    src: innovaImg,
    title: "Toyota Innova Crysta",
    category: "SUV",
    badge: "Premium SUV",
    passengers: "6–7",
    luggage: "4 Bags",
    ac: true,
    ideal: "VIP Darshan, Family Outstation, Indore Airport Transfer",
    description: "Ultra-comfortable luxury SUV with plush seating and dual air conditioning, perfect for smooth long-distance travel.",
    tag: "SUVs & MUVs",
  },
  {
    id: "dzire-sedan",
    src: dzireImg,
    title: "Maruti Suzuki Dzire",
    category: "Sedan",
    badge: "Most Popular Sedan",
    passengers: "4",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Mahakaleshwar Local Darshan & Small Families",
    description: "Clean, fuel-efficient, and air-conditioned sedan for punctual city darshan and swift outstation journeys.",
    tag: "Sedans",
  },
  {
    id: "indigo-sedan",
    src: indigoImg,
    title: "Tata Indigo Comfort Sedan",
    category: "Sedan",
    badge: "Budget Friendly",
    passengers: "4",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Railway Station Transfers & Local Sightseeing",
    description: "Reliable and spacious sedan offering great economy and comfort for pilgrimage travel in and around Ujjain.",
    tag: "Sedans",
  },
  {
    id: "tavera-muv",
    src: tavernaImg,
    title: "Chevrolet Tavera",
    category: "SUV",
    badge: "Spacious MUV",
    passengers: "7–8",
    luggage: "3–4 Bags",
    ac: true,
    ideal: "Joint Families, Omkareshwar & Maheshwar Yatra",
    description: "Sturdy multi-utility vehicle designed for comfortable group pilgrimages with ample legroom and luggage space.",
    tag: "SUVs & MUVs",
  },
  {
    id: "traveller-12",
    src: travellerFront1Img,
    title: "Force Traveller (12 Seater Luxury)",
    category: "Tempo Traveller",
    badge: "Pilgrimage Group Pick",
    passengers: "12",
    luggage: "Large Cargo Area",
    ac: true,
    ideal: "Family Sanghas & Temple Darshan Yatras",
    description: "Equipped with push-back seats, powerful AC, and ample luggage space for comfortable group spiritual tours.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-17",
    src: travellerFront2Img,
    title: "Force Traveller (17 Seater Deluxe)",
    category: "Tempo Traveller",
    badge: "High-Capacity Deluxe",
    passengers: "17",
    luggage: "Full Group Luggage",
    ac: true,
    ideal: "Large Pilgrimage Groups & Corporate Trips",
    description: "Spacious interior with high roof, wide aisle, surround cooling, and seasoned local chauffeur.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-side",
    src: travellerSideImg,
    title: "Force Traveller Highway Edition",
    category: "Tempo Traveller",
    badge: "Outstation Special",
    passengers: "14–17",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Ujjain to Bhopal, Pachmarhi, Indore, Mandu",
    description: "Long-wheelbase cruiser fitted with roof luggage rack and tinted glass for serene highway journeys.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-7",
    src: traveller7Img,
    title: "Force Traveller Super Deluxe",
    category: "Tempo Traveller",
    badge: "VIP Group Travel",
    passengers: "12–20",
    luggage: "Dedicated Storage",
    ac: true,
    ideal: "Multi-Day Tour Packages & Bhasma Aarti Groups",
    description: "Premium upholstery, sanitized interiors, and certified professional drivers for sacred temple tours.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-fleet-lineup",
    src: travellerFleetImg,
    title: "Shree Radhe Radhe Fleet Lineup",
    category: "Fleet Showcase",
    badge: "Own Fleet in Ujjain",
    passengers: "Multi-Vehicle",
    luggage: "Any Requirement",
    ac: true,
    ideal: "Wedding Convoys, Large Sanghas & Event Transportation",
    description: "Uniform, verified, and well-maintained commercial vehicles ready on demand for group bookings.",
    tag: "Fleet Highlights",
  },
  {
    id: "official-fleet-banner",
    src: bannerImg,
    title: "Shree Radhe Radhe Travels Fleet",
    category: "Fleet Showcase",
    badge: "Official Fleet",
    passengers: "All Sizes",
    luggage: "Full Support",
    ac: true,
    ideal: "Complete Ujjain Mahakaleshwar Travel Services",
    description: "Trusted local travel company with registered commercial fleet and 24/7 Mahakaleshwar darshan support.",
    tag: "Fleet Highlights",
  },
  {
    id: "journey-moment-darshan",
    src: tourMomentImg,
    title: "Live Pilgrimage Tour Moment",
    category: "Journey Moments",
    badge: "On-Ground Experience",
    passengers: "All Sizes",
    luggage: "Handled with Care",
    ac: true,
    ideal: "Memorable & Hassle-Free Holy Pilgrimage",
    description: "Dedicated to punctuality and devotee comfort from doorstep pickup to sacred sanctum visits.",
    tag: "Journey Moments",
  },
];

export const RADHE_JOURNEY_MOMENTS = [
  {
    src: travellerFleetImg,
    title: "Fleet Ready for Mahakal Darshan",
    subtitle: "Ujjain Local & Mahakal Lok Tours",
    badge: "Pilgrimage Ready",
  },
  {
    src: bannerImg,
    title: "Shree Radhe Radhe Travels Highway Tour",
    subtitle: "Connecting Ujjain, Omkareshwar & MP",
    badge: "Outstation Specialist",
  },
  {
    src: travellerFront1Img,
    title: "Force Traveller Group Departure",
    subtitle: "Comfortable Yatra for 12–17 Pilgrims",
    badge: "Group Comfort",
  },
  {
    src: innovaImg,
    title: "Toyota Innova Crysta VIP Service",
    subtitle: "Clean, Sanitized & Premium Experience",
    badge: "Luxury SUV",
  },
  {
    src: dzireImg,
    title: "Maruti Dzire Station & Temple Pickups",
    subtitle: "24/7 Bhasma Aarti Timely Drops",
    badge: "City Darshan",
  },
  {
    src: tourMomentImg,
    title: "Devotee Journey with Shree Radhe Radhe",
    subtitle: "Courteous Chauffeurs with Temple Expertise",
    badge: "Sacred Moments",
  },
];
