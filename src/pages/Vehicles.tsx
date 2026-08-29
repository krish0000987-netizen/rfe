import { useState } from "react";
import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM__1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM__1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM__1_.jpeg";
import travellerSideImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM.jpeg";

interface VehiclesProps {
  onNavigate: (page: string) => void;
}

const filters = ["All", "Small Family", "Family", "Group", "Pilgrimage", "Outstation"];

const fleet = [
  // =============================================================
  // Small Cars – 4+1 (5 Seater)
  // =============================================================
  {
    category: "Sedan • 4+1",
    name: "Maruti Suzuki Dzire – 4+1 Seater",
    image: dzireImg,
    passengers: "4+1 (5)",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Couples, Small Families, City Darshan",
    tags: ["Small Family", "Outstation", "Pilgrimage"],
    desc: "Most popular 4+1 sedan for Mahakaleshwar local darshan and railway station transfers. Fuel-efficient, AC and clean.",
  },
  {
    category: "Sedan • 4+1",
    name: "Tata Indigo eCS – 4+1 Seater",
    image: indigoImg,
    passengers: "4+1 (5)",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Budget Small Family Travel",
    tags: ["Small Family", "Outstation"],
    desc: "Budget-friendly 4+1 sedan offering good boot space and comfort for economical city and outstation trips.",
  },
  // =============================================================
  // 6+1, 7+1, 9+1, 12+1 – Ertiga, Innova, Tavera, Toofan
  // =============================================================
  {
    category: "MUV • 6+1",
    name: "Maruti Ertiga – 6+1 Seater",
    image: tavernaImg,
    passengers: "6+1 (7)",
    luggage: "3 Bags",
    ac: true,
    ideal: "Family with Kids, Ujjain Darshan",
    tags: ["Family", "Pilgrimage", "Outstation"],
    desc: "Compact 6+1 MUV – perfect upgrade from sedan when you are 6–7 members. Comfortable captain seats and AC.",
  },
  {
    category: "SUV • 7+1",
    name: "Toyota Innova Crysta – 7+1 Seater",
    image: innovaImg,
    passengers: "7+1 (8)",
    luggage: "4 Bags",
    ac: true,
    ideal: "Premium Family, VIP Darshan",
    tags: ["Family", "Outstation", "Pilgrimage"],
    desc: "Premium 7+1 SUV with plush captain seats, dual AC and superior comfort for families and VIP travel.",
  },
  {
    category: "MUV • 9+1",
    name: "Chevrolet Tavera – 9+1 Seater",
    image: tavernaImg,
    passengers: "9+1 (10)",
    luggage: "Roof + Rear",
    ac: true,
    ideal: "Joint Family, Omkareshwar Yatra",
    tags: ["Family", "Group", "Pilgrimage"],
    desc: "Sturdy 9+1 MUV with ample legroom for 10 members. Ideal for joint family pilgrimages.",
  },
  {
    category: "MUV • 12+1",
    name: "Force Toofan / Cruiser – 12+1 Seater",
    image: travellerFront1Img,
    passengers: "12+1 (13)",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Large Family – Budget Traveller",
    tags: ["Group", "Pilgrimage"],
    desc: "Economical 12+1 Toofan/Cruiser – best budget alternative to 12-seater Tempo Traveller for large families.",
  },
  // =============================================================
  // 2nd Number – Tempo Traveller 12,14,17,20,26 Seater
  // =============================================================
  {
    category: "Tempo Traveller • 12 Seater",
    name: "Force Traveller – 12 Seater",
    image: travellerFront1Img,
    passengers: "12",
    luggage: "Large Luggage Compartment",
    ac: true,
    ideal: "Small Group Pilgrimage",
    tags: ["Group", "Pilgrimage"],
    desc: "2x2 push-back seats, powerful AC – ideal for 12 members darshan yatra in Ujjain.",
  },
  {
    category: "Tempo Traveller • 14 Seater",
    name: "Force Traveller – 14 Seater",
    image: travellerSideImg,
    passengers: "14",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Medium Group, Outstation",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "14-seater with high roof and tinted glass – perfect for Ujjain to Indore / Omkareshwar tours.",
  },
  {
    category: "Tempo Traveller • 17 Seater",
    name: "Force Traveller – 17 Seater",
    image: travellerFront2Img,
    passengers: "17",
    luggage: "Large Luggage Compartment",
    ac: true,
    ideal: "Large Pilgrimage Group",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "Spacious 17-seater deluxe with wide aisle and surround cooling for corporate and pilgrimage travel.",
  },
  {
    category: "Tempo Traveller • 20 Seater",
    name: "Force Traveller – 20 Seater",
    image: traveller7Img,
    passengers: "20",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Large Sangha, Multi-day Yatra",
    tags: ["Group", "Pilgrimage"],
    desc: "20-seater super deluxe with premium upholstery and dedicated luggage storage for extended tours.",
  },
  {
    category: "Tempo Traveller • 26 Seater",
    name: "Force Traveller – 26 Seater",
    image: travellerFront2Img,
    passengers: "26",
    luggage: "Heavy Luggage Compartment",
    ac: true,
    ideal: "Big Group, School & Events",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "Largest tempo traveller – 26 push-back seats with mini-bus comfort for big group pilgrimages.",
  },
  // =============================================================
  // 3rd Number – Bus 30,35,40,45,50,55 Seater
  // =============================================================
  {
    category: "Mini Bus • 30 Seater",
    name: "Mini Bus – 30 Seater",
    image: traveller7Img,
    passengers: "30",
    luggage: "Large Boot + Overhead",
    ac: true,
    ideal: "School Groups, Sangha",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "Compact 30-seater AC mini bus with 2x2 recliner seats for Ujjain local darshan and short outstation.",
  },
  {
    category: "Mini Bus • 35 Seater",
    name: "Mini Bus – 35 Seater",
    image: travellerFront1Img,
    passengers: "35",
    luggage: "Rear + Overhead Rack",
    ac: true,
    ideal: "Corporate & Pilgrimage Groups",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "35-seater AC coach with push-back seats and ample legroom for comfortable group travel.",
  },
  {
    category: "Coach Bus • 40 Seater",
    name: "Coach Bus – 40 Seater",
    image: traveller7Img,
    passengers: "40",
    luggage: "Underbelly Storage",
    ac: true,
    ideal: "Weddings & Big Yatra",
    tags: ["Group", "Pilgrimage"],
    desc: "40-seater luxury coach with powerful AC for long-distance Madhya Pradesh tours.",
  },
  {
    category: "Luxury Bus • 45 Seater",
    name: "Luxury Bus – 45 Seater",
    image: travellerFront2Img,
    passengers: "45",
    luggage: "Heavy Duty Storage",
    ac: true,
    ideal: "Large Convoys & Events",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "45-seater luxury bus – perfect for Omkareshwar, Maheshwar and interstate yatra.",
  },
  {
    category: "Coach Bus • 50 Seater",
    name: "Coach Bus – 50 Seater",
    image: travellerSideImg,
    passengers: "50",
    luggage: "Extra Large Compartment",
    ac: true,
    ideal: "Mega Groups & Tour Operators",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "50-seater AC coach with 3x2 comfortable seating and entertainment system for mega groups.",
  },
  {
    category: "Luxury Coach • 55 Seater",
    name: "Luxury Coach – 55 Seater",
    image: traveller7Img,
    passengers: "55",
    luggage: "Double Deck Storage",
    ac: true,
    ideal: "Biggest Groups & Charter",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "Flagship 55-seater luxury coach for large sanghas, weddings and complete charter bookings.",
  },
];

export default function Vehicles({ onNavigate }: VehiclesProps) {
  const [active, setActive] = useState("All");
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const filtered = active === "All" ? fleet : fleet.filter((v) => v.tags.includes(active));

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=1920&h=800&fit=crop&auto=format"
          alt="Vehicle fleet road journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16">
          <div>
            <div className="section-label mb-3">Our Fleet</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Choose the Right Vehicle<br />for Your Journey
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-white border-b border-[#E0D4C0] sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all ${
                active === f
                  ? "bg-[#6B1E2E] text-white"
                  : "bg-[#FAF6F0] text-[#7A6A5A] hover:bg-[#EDE3D6] border border-[#E0D4C0]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl overflow-hidden card-hover border border-[#E0D4C0]">
                <div className="img-hover-zoom h-56">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#C9973A] font-body font-semibold uppercase tracking-wider">{v.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A1214] mb-3">{v.name}</h3>
                  <p className="text-sm text-[#7A6A5A] font-body leading-relaxed mb-4">{v.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: "Passengers", value: v.passengers },
                      { label: "Luggage", value: v.luggage },
                      { label: "AC", value: v.ac ? "Yes" : "No" },
                      { label: "Ideal For", value: v.ideal },
                    ].map((d) => (
                      <div key={d.label} className="bg-[#FAF6F0] rounded-lg p-2.5">
                        <div className="text-[10px] text-[#B8A898] font-body font-semibold uppercase tracking-wider">{d.label}</div>
                        <div className="text-xs font-body font-semibold text-[#1A1214] mt-0.5">{d.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => nav("contact")} className="flex-1 btn-primary justify-center text-sm py-2.5">
                      Enquire Now
                    </button>
                    <a href="tel:9039223022" className="flex-1 flex items-center justify-center gap-1.5 text-sm font-body font-semibold text-[#6B1E2E] border border-[#6B1E2E] rounded-md py-2.5 hover:bg-[#6B1E2E] hover:text-white transition-colors">
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#6B1E2E] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Vehicle Not Listed?
          </h2>
          <p className="text-white/70 font-body text-sm mb-6">
            Contact us directly — we can arrange vehicles for all group sizes and requirements.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">Get a Custom Quote →</button>
            <a href="tel:9039223022" className="btn-outline">📞 9039223022</a>
          </div>
        </div>
      </section>
    </div>
  );
}
