// Use Vite imports so images are bundled + hashed and always load (even with Figma base URL / preview iframe)
// No need for /public/radhe alone – imports guarantee correct URLs in dev, preview and build.
import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM__1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM__1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import travellerFleetImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM_1_.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM__1_.jpeg";
import travellerSideImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM.jpeg";
import bannerImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM.jpeg";
import tourMomentImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM_1_.jpeg";

// Bus / Coach external images (Unsplash – used where real bus photo not available)
const bus30Img = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop&auto=format";
const bus40Img = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&auto=format";
const bus50Img = "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&h=600&fit=crop&auto=format";

export interface RadheImageItem {
  id: string;
  src: string;
  title: string;
  category: "Sedan" | "SUV" | "Tempo Traveller" | "Bus" | "Fleet Showcase" | "Journey Moments";
  badge: string;
  passengers?: string;
  luggage?: string;
  ac?: boolean;
  ideal?: string;
  description: string;
  tag: string;
}

export const RADHE_FLEET_IMAGES: RadheImageItem[] = [
  // =============================================================
  // 2nd Number – TEMPO TRAVELLER (12, 14, 17, 20, 26 Seater)
  // =============================================================
  {
    id: "traveller-12",
    src: travellerFront1Img,
    title: "Force Traveller 12 Seater",
    category: "Tempo Traveller",
    badge: "12 Seater",
    passengers: "12",
    luggage: "Large Cargo Area",
    ac: true,
    ideal: "Small Group Pilgrimage & Family Sangha",
    description: "2x2 push-back seats, powerful AC and ample luggage space – ideal for 12 members darshan yatra.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-14",
    src: travellerSideImg,
    title: "Force Traveller 14 Seater",
    category: "Tempo Traveller",
    badge: "14 Seater",
    passengers: "14",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Medium Groups & Outstation",
    description: "Extra legroom with high roof and tinted glass – perfect for Ujjain to Omkareshwar / Indore tours.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-17",
    src: travellerFront2Img,
    title: "Force Traveller 17 Seater",
    category: "Tempo Traveller",
    badge: "17 Seater",
    passengers: "17",
    luggage: "Full Group Luggage",
    ac: true,
    ideal: "Large Pilgrimage Groups & Corporate",
    description: "Spacious 17-seater deluxe with wide aisle and surround cooling for comfortable long journeys.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-20",
    src: traveller7Img,
    title: "Force Traveller 20 Seater",
    category: "Tempo Traveller",
    badge: "20 Seater",
    passengers: "20",
    luggage: "Dedicated Storage + Roof",
    ac: true,
    ideal: "Large Sangha & Multi-day Yatra",
    description: "20-seater super deluxe with premium upholstery and certified professional driver for extended tours.",
    tag: "Tempo Travellers",
  },
  {
    id: "traveller-26",
    src: travellerFleetImg,
    title: "Force Traveller 26 Seater",
    category: "Tempo Traveller",
    badge: "26 Seater",
    passengers: "26",
    luggage: "Heavy Luggage Compartment",
    ac: true,
    ideal: "Big Groups, Schools & Events",
    description: "Largest tempo traveller – mini-bus comfort with 26 push-back seats for big group pilgrimages.",
    tag: "Tempo Travellers",
  },
  // =============================================================
  // 3rd Number – BUS (30, 35, 40, 45, 50, 55 Seater)
  // =============================================================
  {
    id: "bus-30",
    src: bus30Img,
    title: "Mini Bus 30 Seater",
    category: "Bus",
    badge: "30 Seater",
    passengers: "30",
    luggage: "Large Boot + Overhead",
    ac: true,
    ideal: "School Groups & Small Sanghas",
    description: "Compact luxury bus with 30 recliner seats, ideal for Ujjain local darshan and short outstation.",
    tag: "Buses",
  },
  {
    id: "bus-35",
    src: bus40Img,
    title: "Mini Bus 35 Seater",
    category: "Bus",
    badge: "35 Seater",
    passengers: "35",
    luggage: "Rear + Overhead Rack",
    ac: true,
    ideal: "Corporate & Pilgrimage Groups",
    description: "35-seater AC coach with push-back seats and ample legroom for comfortable group travel.",
    tag: "Buses",
  },
  {
    id: "bus-40",
    src: bus50Img,
    title: "Coach Bus 40 Seater",
    category: "Bus",
    badge: "40 Seater",
    passengers: "40",
    luggage: "Underbelly Storage",
    ac: true,
    ideal: "Weddings & Big Yatra Groups",
    description: "40-seater full-size coach with powerful AC and suspension for long-distance MP tours.",
    tag: "Buses",
  },
  {
    id: "bus-45",
    src: bus40Img,
    title: "Luxury Bus 45 Seater",
    category: "Bus",
    badge: "45 Seater",
    passengers: "45",
    luggage: "Heavy Duty Storage",
    ac: true,
    ideal: "Large Convoys & Events",
    description: "45-seater luxury bus – perfect for Omkareshwar, Maheshwar, Indore and interstate yatra.",
    tag: "Buses",
  },
  {
    id: "bus-50",
    src: bus50Img,
    title: "Coach Bus 50 Seater",
    category: "Bus",
    badge: "50 Seater",
    passengers: "50",
    luggage: "Extra Large Compartment",
    ac: true,
    ideal: "Mega Groups & Tour Operators",
    description: "50-seater AC coach with 3x2 comfortable seating and entertainment system.",
    tag: "Buses",
  },
  {
    id: "bus-55",
    src: bus30Img,
    title: "Luxury Coach 55 Seater",
    category: "Bus",
    badge: "55 Seater",
    passengers: "55",
    luggage: "Double Deck Storage",
    ac: true,
    ideal: "Biggest Groups & Charter",
    description: "Flagship 55-seater luxury coach for large sanghas, weddings and complete charter bookings.",
    tag: "Buses",
  },
  // =============================================================
  // 4th Number – SMALL VEHICLES (4+1, 6+1, 9+1, 12+1)
  // Dzire, Ertiga, Innova Crysta, Tavera, Toofan/Cruiser
  // =============================================================
  {
    id: "dzire-sedan",
    src: dzireImg,
    title: "Maruti Suzuki Dzire – 4+1 Seater",
    category: "Sedan",
    badge: "4+1 Seater • Sedan",
    passengers: "4+1 (5)",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Couples & Small Families – City Darshan",
    description: "Most popular 4+1 sedan for Mahakaleshwar local darshan, railway/airport transfers. Clean & AC.",
    tag: "Sedans",
  },
  {
    id: "indigo-sedan",
    src: indigoImg,
    title: "Tata Indigo – 4+1 Seater",
    category: "Sedan",
    badge: "4+1 Seater • Sedan",
    passengers: "4+1 (5)",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Budget City Travel",
    description: "Reliable 4+1 sedan with good boot space for economical pilgrimage travel in Ujjain.",
    tag: "Sedans",
  },
  {
    id: "ertiga-muv",
    src: tavernaImg,
    title: "Maruti Ertiga – 6+1 Seater",
    category: "SUV",
    badge: "6+1 Seater • MUV",
    passengers: "6+1 (7)",
    luggage: "3 Bags",
    ac: true,
    ideal: "Family with Kids – Ujjain Darshan",
    description: "Compact MUV with 6+1 seating, perfect upgrade from sedan for 6-7 members family yatra.",
    tag: "SUVs & MUVs",
  },
  {
    id: "innova-crysta",
    src: innovaImg,
    title: "Toyota Innova Crysta – 7+1 Seater",
    category: "SUV",
    badge: "7+1 Seater • Premium SUV",
    passengers: "7+1 (8)",
    luggage: "4 Bags",
    ac: true,
    ideal: "Premium Family & VIP Darshan",
    description: "Luxury 7+1 SUV with captain seats and dual AC – top choice for comfortable outstation.",
    tag: "SUVs & MUVs",
  },
  {
    id: "tavera-muv",
    src: tavernaImg,
    title: "Chevrolet Tavera – 9+1 Seater",
    category: "SUV",
    badge: "9+1 Seater • MUV",
    passengers: "9+1 (10)",
    luggage: "Roof + Rear",
    ac: true,
    ideal: "Joint Family & Omkareshwar Yatra",
    description: "Sturdy 9+1 MUV with ample legroom for 10 members group pilgrimages.",
    tag: "SUVs & MUVs",
  },
  {
    id: "toofan-cruiser",
    src: travellerSideImg,
    title: "Force Toofan / Cruiser – 12+1 Seater",
    category: "SUV",
    badge: "12+1 Seater • MUV",
    passengers: "12+1 (13)",
    luggage: "Roof Carrier",
    ac: true,
    ideal: "Large Family Group – Budget Traveller Alternative",
    description: "Powerful Toofan/Cruiser 12+1 seater – economical alternative to 12-seater traveller for big families.",
    tag: "SUVs & MUVs",
  },
  // Fleet Highlights & Journey
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

export const RADHE_PHOTO_GALLERY = [
  {
    src: travellerFront1Img,
    title: "Force Traveller – Front View",
    label: "Tempo Traveller",
  },
  {
    src: travellerFront2Img,
    title: "Force Traveller – Ready for Yatra",
    label: "Group Travel",
  },
  {
    src: travellerFleetImg,
    title: "Our Fleet Lineup",
    label: "Fleet Showcase",
  },
  {
    src: indigoImg,
    title: "Tata Indigo Sedan",
    label: "Sedan",
  },
  {
    src: innovaImg,
    title: "Toyota Innova Crysta",
    label: "Luxury SUV",
  },
  {
    src: tavernaImg,
    title: "Chevrolet Tavera MUV",
    label: "Spacious MUV",
  },
  {
    src: travellerSideImg,
    title: "Traveller – Side View",
    label: "Highway Edition",
  },
  {
    src: traveller7Img,
    title: "Super Deluxe Traveller",
    label: "VIP Group",
  },
  {
    src: dzireImg,
    title: "Maruti Suzuki Dzire",
    label: "City Darshan",
  },
  {
    src: bannerImg,
    title: "Radhe Travels Fleet Banner",
    label: "Official Fleet",
  },
  {
    src: tourMomentImg,
    title: "Live Pilgrimage Moment",
    label: "Journey Moments",
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
