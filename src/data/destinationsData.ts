import {
  innovaImg,
  tavernaImg,
  traveller7Img,
  dzireImg,
  travellerFront1Img,
  travellerFront2Img,
  travellerFleetImg,
  indigoImg,
  travellerSideImg,
  bannerImg,
  tourMomentImg,
} from "@/data/radheImages";

export interface DestinationHighlight {
  title: string;
  desc: string;
  img: string;
  tag: string;
}

export interface DestinationVehicleOption {
  type: string;
  seats: string;
  ideal: string;
  features: string;
}

export interface DestinationSectionData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  distanceFromUjjain: string;
  travelTime: string;
  bestTime: string;
  idealDuration: string;
  heroImage: string;
  overview: string;
  significance: string;
  themeColor: {
    bg: string;
    border: string;
    badgeBg: string;
    accent: string;
  };
  highlights: DestinationHighlight[];
  itinerary: string[];
  vehicleOptions: DestinationVehicleOption[];
  whatsappMessage: string;
}

export const DESTINATION_SECTIONS: DestinationSectionData[] = [
  // =========================================================================
  // 1. UJJAIN LOCAL DARSHAN
  // =========================================================================
  {
    id: "ujjain-local",
    badge: "Holy City Circuit",
    title: "Ujjain Local Darshan",
    subtitle: "Sacred Ghats, Ancient Ashrams & Shaktipeeths",
    tagline: "Experience the eternal aura of Avantika with hassle-free doorstep cab pickup",
    distanceFromUjjain: "Local City Tour (0-15 km radius)",
    travelTime: "Full Day / Half Day",
    bestTime: "Year-Round (October to March ideal)",
    idealDuration: "6 to 10 Hours",
    heroImage: dzireImg,
    overview: "Ujjain, the historic Avantika, is one of the seven sacred Moksha-giving cities of Sanatan Dharma. Beyond the world-famous Mahakaleshwar temple, the city is dotted with spiritually charged spots — from the sacred Ram Ghat on Shipra River to the legendary Sandipani Ashram where Lord Krishna studied, and the ferocious guardian shrine of Kaal Bhairav.",
    significance: "Crucial pilgrimage for devotees seeking total spiritual purification, Astrological remedies at Mangalnath, and Shakti blessings at Maa Harsiddhi Temple.",
    themeColor: {
      bg: "bg-[#2A161E]",
      border: "border-[#5A2535]",
      badgeBg: "bg-[#C9973A] text-[#1A1214]",
      accent: "#C9973A",
    },
    highlights: [
      {
        title: "Ram Ghat & Shipra Maha Aarti",
        desc: "The sacred bathing ghat on River Shipra hosting mesmerizing evening Deepdan and Maha Aarti with floating oil lamps.",
        img: tourMomentImg,
        tag: "Holy Ghat",
      },
      {
        title: "Maa Harsiddhi Shaktipeeth",
        desc: "One of the 51 holy Shaktipeeths where Devi Sati's elbow fell; famed for its towering 13th-century Deepstambhs lit at dusk.",
        img: indigoImg,
        tag: "Shaktipeeth",
      },
      {
        title: "Kaal Bhairav Mandir",
        desc: "Ancient guardian temple of Ujjain where traditional offerings are made and the deity is revered as the celestial Kotwal of the city.",
        img: tavernaImg,
        tag: "Guardian Deity",
      },
      {
        title: "Sandipani Ashram & Gomti Kund",
        desc: "The venerated hermitage where Lord Krishna, Balarama, and Sudama learned 64 arts in 64 days under Guru Sandipani.",
        img: dzireImg,
        tag: "Krishna Heritage",
      },
    ],
    itinerary: [
      "08:00 AM – Hotel pickup & Kaal Bhairav Darshan",
      "10:00 AM – Sandipani Ashram, Gomti Kund & Mangalnath Mandir",
      "01:00 PM – Pure vegetarian lunch break at traditional Malwi bhojanalaya",
      "02:30 PM – Vedh Shala, Chintaman Ganesh & Bhartrihari Caves",
      "05:30 PM – Maa Harsiddhi Temple Deepstambh lighting darshan",
      "06:45 PM – Ram Ghat holy Shipra evening Maha Aarti & drop to hotel",
    ],
    vehicleOptions: [
      { type: "Dzire / Etios (4+1)", seats: "4 Passengers", ideal: "Couples & Small Families", features: "AC, Clean, Compact city navigation" },
      { type: "Ertiga / Innova (6+1 / 7+1)", seats: "6-7 Passengers", ideal: "Family with seniors & kids", features: "Captain seats, Chilled Dual AC, Big Boot" },
      { type: "Tempo Traveller (12/17/20/26)", seats: "12 to 26 Seats", ideal: "Pilgrimage groups & Sanghas", features: "Push-back 2x2 seats, Dedicated luggage rack" },
    ],
    whatsappMessage: "Hello, I want to enquire about Ujjain Local Darshan cab booking.",
  },

  // =========================================================================
  // 2. MAHAKALESHWAR JYOTIRLINGA
  // =========================================================================
  {
    id: "mahakaleshwar-jyotirlinga",
    badge: "1 of 12 Sacred Jyotirlingas",
    title: "Shree Mahakaleshwar Jyotirlinga",
    subtitle: "Dakshinmukhi Swayambhu Jyotirlinga & Shri Mahakal Lok",
    tagline: "Complete travel support for early morning Bhasma Aarti (2:30 AM), VIP Darshan & Mahakal Lok walkway",
    distanceFromUjjain: "Heart of Ujjain City",
    travelTime: "24/7 Cab Service available",
    bestTime: "Throughout the year (Shravan & Shivratri special)",
    idealDuration: "4 to 6 Hours (Darshan + Mahakal Lok)",
    heroImage: travellerFleetImg,
    overview: "Shree Mahakaleshwar is the only south-facing (Dakshinmukhi) Jyotirlinga among the 12 sacred Jyotirlingas of Lord Shiva. The temple is famed for its iconic Bhasma Aarti performed every dawn with sacred ash, chanting of Vedic mantras, and profound spiritual energy. The newly expanded 900-meter Shri Mahakal Lok corridor adds world-class grand walkways and sculptures depicting Shiva Purana stories.",
    significance: "Lord Mahakal is the master of time, death and eternity. Seeking His blessings liberates souls from fear of untimely death (Akaal Mrityu).",
    themeColor: {
      bg: "bg-[#1F1015]",
      border: "border-[#6B1E2E]",
      badgeBg: "bg-[#6B1E2E] text-white border border-[#C9973A]",
      accent: "#E5A93C",
    },
    highlights: [
      {
        title: "Dakshinmukhi Sanctum & Swarna Kalash",
        desc: "The sacred subterranean sanctum with self-manifested (Swayambhu) Jyotirlinga topped by a gleaming golden temple spire.",
        img: travellerFleetImg,
        tag: "Holy Sanctum",
      },
      {
        title: "World Famous Bhasma Aarti (04:00 AM)",
        desc: "Exclusive 2:30 AM doorstep hotel pickup ensuring comfortable, on-time entry for Bhasma Aarti devotees and VIP line arrangements.",
        img: innovaImg,
        tag: "Sacred Ritual",
      },
      {
        title: "Shri Mahakal Lok Corridor",
        desc: "A breathtaking spiritual corridor featuring 108 grand stone pillars, massive Shiva-Parvati murals, Rudra Sagar lake and musical fountains.",
        img: travellerFront2Img,
        tag: "Grand Corridor",
      },
      {
        title: "24/7 Station & Temple Pickups",
        desc: "Round the clock verified drivers dedicated for Bhasma Aarti, VIP entry gates, and hassle-free returns.",
        img: travellerSideImg,
        tag: "Dedicated Fleet",
      },
    ],
    itinerary: [
      "02:30 AM – Doorstep cab pickup from hotel/station for Bhasma Aarti entry",
      "04:00 AM to 06:00 AM – Witness Divine Bhasma Aarti inside temple sanctum",
      "06:30 AM – Jalabhisheka & Morning Darshan queue assistance",
      "08:00 AM – Explore Shri Mahakal Lok corridor sculptures & Rudra Sagar lake",
      "09:30 AM – Breakfast at nearby historic eateries (Poha-Jalebi & Malwi chai)",
      "10:30 AM – Relaxed transfer back to your hotel or onward excursion",
    ],
    vehicleOptions: [
      { type: "Swift Dzire / Indigo (4+1)", seats: "4 Passengers", ideal: "Early 2:30 AM Bhasma Aarti Pickups", features: "Punctual driver, 24/7 availability" },
      { type: "Innova Crysta Luxury (7+1)", seats: "7 Passengers", ideal: "VIP Family Darshan & Seniors", features: "Ultra-cushioned seats, easy entry for elders" },
      { type: "Force Traveller (12/17/20)", seats: "12-20 Seats", ideal: "Devotee groups & Bhajan Mandalis", features: "AC group coach, smooth overnight pickup" },
    ],
    whatsappMessage: "Hello, I want to book a vehicle for Mahakaleshwar Bhasma Aarti & Darshan.",
  },

  // =========================================================================
  // 3. OMKARESHWAR JYOTIRLINGA
  // =========================================================================
  {
    id: "omkareshwar-jyotirlinga",
    badge: "Holy Island Jyotirlinga",
    title: "Omkareshwar & Mamleshwar Jyotirlinga",
    subtitle: "Sacred Narmada Island Shaped in the Holy Symbol of 'OM' (ॐ)",
    tagline: "Comfortable same-day round trip from Ujjain with Narmada boat ride & Mamleshwar darshan",
    distanceFromUjjain: "~130 km via Indore highway",
    travelTime: "3.5 to 4 Hours one-way",
    bestTime: "September to March (Pleasant weather & brimming Narmada)",
    idealDuration: "Full Day (Early morning departure to evening return)",
    heroImage: bannerImg,
    overview: "Nestled on the holy island of Mandhata in the Narmada River, Omkareshwar is naturally contoured in the shape of the sacred Hindu symbol 'OM' (ॐ). Together with the Mamleshwar Jyotirlinga on the south bank, visiting both sanctums completes the sacred Omkareshwar pilgrimage. Pilgrims enjoy holy dip in Narmada, boat crossings, the iconic suspension bridges, and the newly inaugurated Statue of Oneness (Adi Shankaracharya).",
    significance: "Completing both Mahakaleshwar and Omkareshwar Jyotirlingas in one unified journey is regarded as one of the most meritorious yatras in Hindu faith.",
    themeColor: {
      bg: "bg-[#142328]",
      border: "border-[#1E4550]",
      badgeBg: "bg-[#258B9E] text-white",
      accent: "#48CAE4",
    },
    highlights: [
      {
        title: "Omkareshwar Mandhata Temple",
        desc: "The five-storeyed nagara style temple shrine perched on the Om-shaped island overlooking the turquoise waters of Narmada.",
        img: bannerImg,
        tag: "Island Sanctum",
      },
      {
        title: "Mamleshwar (Amareshwar) Temple",
        desc: "Ancient stone temple on the south bank of River Narmada; darshan here is mandatory to complete the Omkareshwar Jyotirlinga blessing.",
        img: traveller7Img,
        tag: "South Bank Jyotirlinga",
      },
      {
        title: "Sacred Narmada Sangam & Boating",
        desc: "Serene boat ride across River Narmada, reaching the holy Sangam of Narmada and Kaveri rivers with picturesque valley vistas.",
        img: tourMomentImg,
        tag: "Holy Sangam",
      },
      {
        title: "Statue of Oneness & Hanging Bridges",
        desc: "The colossal 108-foot bronze statue of Jagadguru Adi Shankaracharya atop Mandhata hill and pedestrian suspension bridges.",
        img: travellerSideImg,
        tag: "Modern Monument",
      },
    ],
    itinerary: [
      "06:00 AM – Departure from Ujjain in comfortable AC vehicle via Indore route",
      "09:30 AM – Arrival at Omkareshwar, holy Narmada Snan & boat crossing to island",
      "10:30 AM – Shree Omkareshwar Jyotirlinga Darshan & Puja at Garbhagriha",
      "01:00 PM – Crossing suspension bridge to south bank for Mamleshwar Temple Darshan",
      "02:30 PM – Traditional vegetarian Malwi lunch on the riverside ghats",
      "03:30 PM – Visit to Adi Shankaracharya Cave & 108ft Statue of Oneness",
      "05:00 PM – Scenic return highway drive back to Ujjain (Arrival by 08:30 PM)",
    ],
    vehicleOptions: [
      { type: "Maruti Dzire / Etios", seats: "4 Seats", ideal: "Couples & Small Families", features: "Smooth highway ride, Chilled AC, Toll handling" },
      { type: "Toyota Innova Crysta", seats: "7 Seats", ideal: "VIP Family Pilgrimage", features: "Captain luxury seats, ample luggage, highest comfort" },
      { type: "Force Traveller (14/17/26)", seats: "14-26 Seats", ideal: "Yatra Sanghas & Joint Families", features: "High-roof luxury traveller, experienced highway chauffeur" },
    ],
    whatsappMessage: "Hello, I want to book a taxi from Ujjain to Omkareshwar Jyotirlinga.",
  },

  // =========================================================================
  // 4. MANDAV (MANDU) – CITY OF JOY
  // =========================================================================
  {
    id: "mandav",
    badge: "Heritage City of Joy",
    title: "Mandav (Mandu) Heritage Tour",
    subtitle: "Magnificent Afghan Fortresses, Floating Palaces & Legendary Romance",
    tagline: "Explore Jahaz Mahal, Rani Roopmati Pavilion & Hindola Mahal with seasoned tour chauffeurs",
    distanceFromUjjain: "~145 km via Dhar highway",
    travelTime: "3.5 to 4 Hours one-way",
    bestTime: "July to March (Spectacular in Monsoon & Winter greenery)",
    idealDuration: "1 to 2 Days",
    heroImage: travellerFront1Img,
    overview: "Perched gracefully atop the Vindhya range, Mandu (Mandav) is celebrated as India's 'City of Joy'. Famed for the legendary romance of poet-king Baz Bahadur and Rani Roopmati, this medieval fortress city boasts breathtaking Afghan architecture, floating palaces nestled between serene lakes, massive stone gateways, and panoramic viewpoints over the Narmada plateau.",
    significance: "A premier UNESCO-level heritage wonder in Madhya Pradesh, Mandu comes alive with emerald green hills, waterfalls, and romantic monuments during monsoon and winter.",
    themeColor: {
      bg: "bg-[#1E1C12]",
      border: "border-[#4A4220]",
      badgeBg: "bg-[#D4A338] text-[#1A1214]",
      accent: "#F3C969",
    },
    highlights: [
      {
        title: "Jahaz Mahal (Ship Palace)",
        desc: "The 15th-century architectural marvel designed like a giant floating ship situated between Kapur Talao and Munja Talao lakes.",
        img: travellerFront1Img,
        tag: "Floating Palace",
      },
      {
        title: "Rani Roopmati Pavilion",
        desc: "Perched high on a cliff edge, built so the singer queen Roopmati could gaze upon her beloved sacred Narmada River every morning.",
        img: tavernaImg,
        tag: "Cliff Viewpoint",
      },
      {
        title: "Hindola Mahal (Swinging Palace)",
        desc: "Famous for its dramatically slanting 77-degree side walls giving an illusion of a swinging structure, constructed with massive Afghan stonework.",
        img: travellerSideImg,
        tag: "Architectural Marvel",
      },
      {
        title: "Hoshang Shah's Marble Tomb",
        desc: "India's first completely white marble mausoleum which served as the prime architectural inspiration for the Taj Mahal in Agra.",
        img: travellerFleetImg,
        tag: "Marble Heritage",
      },
    ],
    itinerary: [
      "06:30 AM – Pickup from Ujjain hotel and scenic morning drive through Malwa plateau",
      "10:00 AM – Arrival at Mandu, explore royal Jahaz Mahal & Taveli Mahal museum",
      "12:00 PM – Visit Hindola Mahal, Champa Baoli and ancient Hoshang Shah Tomb",
      "01:30 PM – Relish authentic Mandu special lunch & famous Baobab fruit juice",
      "02:30 PM – Baz Bahadur Palace & panoramic Rani Roopmati Pavilion cliff walk",
      "05:00 PM – Sunset photo session at Echo Point & Nilkanth Mahadev temple",
      "06:00 PM – Relaxed return drive to Ujjain (Arrival by 09:30 PM)",
    ],
    vehicleOptions: [
      { type: "Sedan (Dzire / Etios)", seats: "4 Passengers", ideal: "Couple Getaways & Heritage lovers", features: "Clean, fuel-efficient, flexible sightseeing stops" },
      { type: "SUV (Ertiga / Innova)", seats: "6-7 Passengers", ideal: "Family vacations & photography tours", features: "Spacious legroom for hilly ghat routes" },
      { type: "Tempo Traveller (12/17 Seater)", seats: "12-17 Seats", ideal: "College, corporate & big group tours", features: "Push-back recliner seats & overhead luggage" },
    ],
    whatsappMessage: "Hello, I want to book a tour package from Ujjain to Mandav (Mandu).",
  },

  // =========================================================================
  // 5. KUBRESHWAR DHAM (SEHORE)
  // =========================================================================
  {
    id: "kubreshwar-dham",
    badge: "Miraculous Shiva Pilgrimage",
    title: "Shree Kubreshwar Dham (Sehore)",
    subtitle: "Pujya Pandit Pradeep Mishra Ji's Sacred Shiva Dham & Rudraksh Yatra",
    tagline: "Dedicated one-day direct cab service from Ujjain / Indore for holy darshan, parikrama & blessings",
    distanceFromUjjain: "~140 km via Bhopal-Indore Highway",
    travelTime: "3.5 Hours one-way",
    bestTime: "Round the year (Special during Shiv Mahapuran Katha & Shivratri)",
    idealDuration: "Full Day / 1 Day Yatra",
    heroImage: tourMomentImg,
    overview: "Shree Kubreshwar Dham situated in Chitavalya Hema village near Sehore has emerged as one of India's most vibrant and revered Shiva pilgrimage destinations. Led by the spiritual guidance of International Katha Vachak Pujya Pandit Pradeep Ji Mishra, millions of Shiva devotees travel here to seek divine blessings, offer Belpatra to the holy Shivling, participate in mass Shiv Mahapuran recitations, and receive sacred consecrated Rudraksh.",
    significance: "Devotees firmly believe that offering one pot of water (Ek Lota Jal) and praying with pure heart at Kubreshwar Dham resolves health, financial and family distress.",
    themeColor: {
      bg: "bg-[#251318]",
      border: "border-[#5E222D]",
      badgeBg: "bg-[#E63946] text-white",
      accent: "#FFA07A",
    },
    highlights: [
      {
        title: "Pavitra Kubreshwar Mahadev Shivling",
        desc: "The sacred central Shivling consecrated with continuous Vedic mantras, Belpatra archana, and divine abhishek by devotees.",
        img: tourMomentImg,
        tag: "Main Sanctum",
      },
      {
        title: "Abhimantrit Rudraksh Prasad",
        desc: "Sacred sanctified Rudraksh distribution and parikrama grounds revered for miraculous healing and peace blessings.",
        img: travellerFleetImg,
        tag: "Divine Prasad",
      },
      {
        title: "Shiv Mahapuran Katha Grounds",
        desc: "Vast spiritual pandals and ashram grounds hosting lakhs of devotees during spiritual discourse and satsang programs.",
        img: traveller7Img,
        tag: "Satsang Grounds",
      },
      {
        title: "Direct Door-to-Door Devotee Transport",
        desc: "Zero-stress direct transfers right up to the temple gate with guaranteed parking waiting and timely return to Ujjain/Indore.",
        img: bannerImg,
        tag: "Devotee Transport",
      },
    ],
    itinerary: [
      "05:30 AM – Early morning pickup from Ujjain hotel / railway station in clean AC car",
      "09:00 AM – Arrival at Shree Kubreshwar Dham Sehore with driver assisting for nearest drop point",
      "09:30 AM – Snan / Shuddhi & Pavitra Ek Lota Jal abhishek on Shivling",
      "11:00 AM – Parikrama of Kubreshwar Dham & participation in morning Aarti and Bhajan",
      "01:00 PM – Mahaprasad / lunch at Dham premises",
      "02:30 PM – Rudraksh blessing queue & Darshan of sacred Banyan tree",
      "04:30 PM – Board your waiting vehicle for relaxing highway return to Ujjain",
      "08:00 PM – Safe arrival and drop back to Ujjain accommodation",
    ],
    vehicleOptions: [
      { type: "Maruti Dzire (4+1)", seats: "4 Passengers", ideal: "Small Devotee Families", features: "Clean, budget-friendly, AC, comfortable highway speed" },
      { type: "Toyota Innova Crysta / Ertiga", seats: "6-7 Passengers", ideal: "Family with Senior Devotees", features: "Comfortable suspension for elders, high road clearance" },
      { type: "Tempo Traveller (12/17/20/26)", seats: "12-26 Seats", ideal: "Bhajan Mandalis & Village Sanghas", features: "Large group yatra coach, microphone system for bhajans" },
    ],
    whatsappMessage: "Hello, I want to book a taxi from Ujjain to Kubreshwar Dham Sehore.",
  },
];
