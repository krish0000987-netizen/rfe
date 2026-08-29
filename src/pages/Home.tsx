import { useState, useEffect, useRef } from "react";
import {
  RADHE_FLEET_IMAGES,
  RADHE_JOURNEY_MOMENTS,
  RADHE_PHOTO_GALLERY,
  RadheImageItem,
  travellerFleetImg,
  bannerImg,
  travellerFront1Img,
  tourMomentImg,
  innovaImg,
  dzireImg,
  tavernaImg,
  indigoImg,
  traveller7Img,
  travellerFront2Img,
  travellerSideImg,
} from "@/data/radheImages";
import DestinationSections from "@/components/DestinationSections";

const heroSlides = [
  {
    url: travellerFleetImg,
    alt: "Shree Radhe Radhe Travels Fleet at Ujjain",
    caption: "Mahakaleshwar Jyotirlinga Tours",
  },
  {
    url: bannerImg,
    alt: "Shree Radhe Radhe Travels Highway Tour",
    caption: "Omkareshwar Jyotirlinga Yatra",
  },
  {
    url: travellerFront1Img,
    alt: "Force Traveller Ready for Ujjain Darshan",
    caption: "Ujjain Local Ram Ghat Aarti",
  },
  {
    url: travellerSideImg,
    alt: "Comfortable Highway Edition for Mandav Tour",
    caption: "Mandav (Mandu) Heritage Tour",
  },
  {
    url: tourMomentImg,
    alt: "Kubreshwar Dham Sehore Devotee Tour",
    caption: "Kubreshwar Dham (Sehore)",
  },
  {
    url: innovaImg,
    alt: "Toyota Innova Crysta VIP Service",
    caption: "VIP Mahakal & Outstation Travel",
  },
];

const services = [
  { icon: "🕌", title: "Ujjain Darshan", desc: "Comfortable vehicles for Mahakaleshwar and all major Ujjain temples" },
  { icon: "🚗", title: "Outstation Travel", desc: "Reliable point-to-point travel across Madhya Pradesh and nearby states" },
  { icon: "✈️", title: "Airport Transfers", desc: "Timely pickup and drop to airports from Ujjain" },
  { icon: "🚉", title: "Railway Transfers", desc: "Convenient station pickups and drops" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Travel", desc: "Spacious, comfortable vehicles designed for family journeys" },
  { icon: "🎯", title: "Custom Tours", desc: "Tailor-made travel itineraries for your unique requirements" },
];

const steps = [
  { num: "01", title: "Choose Vehicle", desc: "Select the right vehicle for your group size and travel need" },
  { num: "02", title: "Share Details", desc: "Tell us your pickup, destination, date and passengers" },
  { num: "03", title: "Get Your Quote", desc: "Receive a clear, transparent quote for your journey" },
  { num: "04", title: "Confirm Booking", desc: "Confirm and relax — we handle the rest" },
  { num: "05", title: "Enjoy Journey", desc: "Travel comfortably with our professional service" },
];

const filterCategories = [
  "All Fleet",
  "Tempo Travellers",
  "Buses",
  "Sedans",
  "SUVs & MUVs",
  "Fleet Highlights",
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [slide, setSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Real Fleet Filter State
  const [activeFleetTab, setActiveFleetTab] = useState("All Fleet");
  const [lightboxItem, setLightboxItem] = useState<null | { src: string; title: string; desc?: string; badge?: string }>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % heroSlides.length);
        setFade(true);
      }, 400);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goSlide = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setFade(false);
    setTimeout(() => { setSlide(i); setFade(true); startTimer(); }, 400);
  };

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredFleet = activeFleetTab === "All Fleet"
    ? RADHE_FLEET_IMAGES
    : RADHE_FLEET_IMAGES.filter((item) => item.tag === activeFleetTab);

  return (
    <div className="pb-16 md:pb-0">
      {/* ============================================================ */}
      {/* HERO SECTION (UNCHANGED) */}
      {/* ============================================================ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-500 bg-[#1A1214]"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <img
            src={heroSlides[slide].url}
            alt={heroSlides[slide].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-[#C9973A]" : "w-3 bg-white/50"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="absolute top-1/3 right-8 z-10 hidden lg:block">
          <div className="text-xs text-[#C9973A] font-body font-semibold tracking-widest uppercase rotate-90 origin-right translate-x-full">
            {heroSlides[slide].caption}
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 w-full pt-20">
            <div className="max-w-2xl">
              <div className="section-label mb-4 animate-fade-slide">Ujjain · Mahakaleshwar · Madhya Pradesh</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-slide" style={{ animationDelay: "0.1s" }}>
                Your Trusted Travel<br />Partner in <span className="text-[#C9973A]">Ujjain</span>
              </h1>
              <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-xl animate-fade-slide" style={{ animationDelay: "0.2s" }}>
                Premium Cars, Comfortable Journeys & Reliable Travel Services Around Mahakaleshwar and Beyond.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-slide" style={{ animationDelay: "0.3s" }}>
                <button onClick={() => nav("contact")} className="btn-primary text-sm">
                  Book Your Vehicle →
                </button>
                <a href="tel:9039223022" className="btn-outline text-sm">
                  📞 Call Now
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-10 flex flex-wrap gap-5 animate-fade-slide" style={{ animationDelay: "0.4s" }}>
                {["All Vehicle Categories", "Professional Service", "Comfortable Travel", "Ujjain-Based"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/80 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9973A]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING PANEL */}
      <section className="bg-white shadow-lg relative z-20 -mt-0.5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 items-end">
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Pickup</label>
              <input type="text" placeholder="Ujjain" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Destination</label>
              <input type="text" placeholder="Where to?" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Date</label>
              <input type="date" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Vehicle</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>4+1 Sedan – Dzire / Indigo (5 Seater)</option>
                <option>6+1 Ertiga / 7+1 Innova Crysta</option>
                <option>9+1 Tavera / 12+1 Toofan</option>
                <option>Tempo Traveller – 12 / 14 / 17 / 20 / 26 Seater</option>
                <option>Mini Bus / Coach – 30 / 35 / 40 / 45 / 50 / 55 Seater</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Passengers</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>1–4</option>
                <option>5–7</option>
                <option>8–12</option>
                <option>13–17</option>
                <option>18+</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Trip Type</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>Local Darshan</option>
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Outstation Tour</option>
              </select>
            </div>
            <button
              onClick={() => nav("contact")}
              className="btn-primary justify-center w-full"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Why Choose Us</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Travel With <span className="text-[#6B1E2E]">Confidence</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚗", title: "Own & Verified Fleet", desc: "Clean 4+1 sedans, 6+1/7+1/9+1/12+1 MUVs, 12-26 seater Tempo Travellers & 30-55 seater Buses ready 24/7." },
              { icon: "🛡️", title: "Reliable & Punctual", desc: "Dependable, on-time service for Mahakal Bhasma Aarti, railway station, and airport pickups." },
              { icon: "🤝", title: "Experienced Drivers", desc: "Courteous, verified drivers with extensive route knowledge of Ujjain and Madhya Pradesh." },
              { icon: "📍", title: "Local Pilgrimage Expertise", desc: "Deep knowledge of Mahakaleshwar Jyotirlinga, Omkareshwar, and sacred sites." },
              { icon: "📋", title: "Transparent Pricing", desc: "Clear upfront quotes with no hidden surcharges for local darshan or outstation trips." },
              { icon: "💬", title: "Instant WhatsApp Booking", desc: "Direct communication with quick confirmations and customized itinerary planning." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-7 card-hover border border-[#E0D4C0]">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#6B1E2E] mb-2">{f.title}</h3>
                <p className="text-sm text-[#7A6A5A] font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEPARATE SECTION 1: OUR REAL VEHICLE FLEET SHOWCASE */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#1A1214] text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Authentic Fleet & Real Photos</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Our Real <span className="text-[#C9973A]">Vehicle Fleet</span>
            </h2>
            <p className="text-white/75 font-body max-w-2xl mx-auto text-base">
              Explore authentic photos of our well-maintained vehicles in Ujjain. From luxury sedans to high-capacity tempo travellers, travel in utmost comfort.
            </p>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFleetTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-body font-semibold tracking-wider transition-all duration-200 ${
                  activeFleetTab === tab
                    ? "bg-[#C9973A] text-[#1A1214] shadow-lg shadow-[#C9973A]/20 scale-105"
                    : "bg-[#261820] text-white/80 hover:bg-[#3A2830] border border-[#3A2830]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Real Vehicle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredFleet.map((vehicle: RadheImageItem) => (
              <div
                key={vehicle.id}
                className="bg-[#261820] rounded-2xl overflow-hidden card-hover border border-[#3A2830] flex flex-col group"
              >
                {/* Image Container with Zoom & Click to Lightbox */}
                <div
                  className="relative h-60 overflow-hidden bg-[#1A1214] cursor-pointer"
                  onClick={() => setLightboxItem({ src: vehicle.src, title: vehicle.title, desc: vehicle.description, badge: vehicle.badge })}
                >
                  <img
                    src={vehicle.src}
                    alt={vehicle.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#6B1E2E]/90 backdrop-blur-sm text-white text-[11px] font-body font-semibold px-3 py-1 rounded-full border border-[#C9973A]/30">
                    {vehicle.badge}
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 backdrop-blur-sm transition-colors">
                    <span>🔍</span>
                    <span>View Photo</span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#C9973A] font-body font-semibold uppercase tracking-wider">
                        {vehicle.category}
                      </span>
                      {vehicle.ac && (
                        <span className="text-[11px] bg-[#3A2830] text-[#C9973A] px-2 py-0.5 rounded font-body font-medium">
                          ❄️ Chilled AC
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#C9973A] transition-colors">
                      {vehicle.title}
                    </h3>
                    <p className="text-xs text-[#B8A898] font-body leading-relaxed mb-4">
                      {vehicle.description}
                    </p>

                    {/* Specs Grid */}
                    {vehicle.passengers && (
                      <div className="grid grid-cols-2 gap-2 bg-[#1A1214]/60 p-3 rounded-xl border border-[#3A2830] mb-4 text-xs font-body">
                        <div>
                          <span className="text-[#7A6A5A] block text-[10px] uppercase">Seating</span>
                          <span className="text-white font-semibold">{vehicle.passengers} Seater</span>
                        </div>
                        <div>
                          <span className="text-[#7A6A5A] block text-[10px] uppercase">Luggage</span>
                          <span className="text-white font-semibold">{vehicle.luggage}</span>
                        </div>
                        {vehicle.ideal && (
                          <div className="col-span-2 pt-1 border-t border-[#3A2830]/50 mt-1">
                            <span className="text-[#7A6A5A] block text-[10px] uppercase">Ideal For</span>
                            <span className="text-[#C9973A] text-[11px]">{vehicle.ideal}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => nav("contact")}
                      className="flex-1 bg-[#6B1E2E] hover:bg-[#8B2840] text-white text-xs font-body font-semibold py-2.5 px-4 rounded-lg transition-colors text-center"
                    >
                      Book This Vehicle →
                    </button>
                    <a
                      href="tel:9039223022"
                      className="flex items-center justify-center px-3 py-2.5 border border-[#C9973A]/60 hover:bg-[#C9973A] text-[#C9973A] hover:text-[#1A1214] rounded-lg text-xs font-semibold transition-colors"
                      title="Call to Enquire"
                    >
                      📞
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => nav("vehicles")} className="btn-gold">
              Explore Complete Fleet & Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEPARATE DESTINATION SHOWCASE SECTIONS: UJJAIN, MAHAKAL, OMKARESHWAR, MANDAV, KUBRESHWAR DHAM */}
      {/* ============================================================ */}
      <DestinationSections
        onNavigate={nav}
        onOpenLightbox={(item) => setLightboxItem(item)}
      />

      {/* ============================================================ */}
      {/* SEPARATE SECTION 2: CAPTURED TRAVEL MOMENTS & ON-ROAD HIGHLIGHTS */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#E0D4C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="section-label mb-2">On The Ground · In Action</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214]">
                Captured <span className="text-[#6B1E2E]">Journey Moments</span>
              </h2>
              <div className="gold-divider mt-3" />
            </div>
            <p className="text-sm text-[#7A6A5A] font-body max-w-md mt-4 md:mt-0">
              Live glimpses of our vehicles, devotees on pilgrimage, and memorable highway tours across Madhya Pradesh.
            </p>
          </div>

          {/* Dynamic Photo Mosaic / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RADHE_JOURNEY_MOMENTS.map((moment, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#E0D4C0] card-hover cursor-pointer h-72"
                onClick={() => setLightboxItem({ src: moment.src, title: moment.title, desc: moment.subtitle, badge: moment.badge })}
              >
                <img
                  src={moment.src}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214] via-[#1A1214]/40 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9973A] text-[#1A1214] font-body font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow">
                    {moment.badge}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-[#C9973A] transition-colors">
                    {moment.title}
                  </h4>
                  <p className="text-xs text-white/80 font-body">
                    {moment.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-[#C9973A] font-body font-medium">
                    <span>Click to enlarge photo</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Guarantee Banner */}
          <div className="mt-12 bg-[#FAF6F0] rounded-2xl p-8 border border-[#E0D4C0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">✨</div>
              <div className="font-display font-bold text-base text-[#6B1E2E]">100% Verified Fleet</div>
              <div className="text-xs text-[#7A6A5A] font-body mt-1">Real vehicles shown are what you get</div>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <div className="font-display font-bold text-base text-[#6B1E2E]">24/7 Aarti Pickup</div>
              <div className="text-xs text-[#7A6A5A] font-body mt-1">Early morning Mahakal Darshan ready</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🛡️</div>
              <div className="font-display font-bold text-base text-[#6B1E2E]">Verified Drivers</div>
              <div className="text-xs text-[#7A6A5A] font-body mt-1">Polite, experienced & local experts</div>
            </div>
            <div>
              <div className="text-2xl mb-2">💬</div>
              <div className="font-display font-bold text-base text-[#6B1E2E]">Instant Support</div>
              <div className="text-xs text-[#7A6A5A] font-body mt-1">Direct assistance at 9039223022</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEPARATE SECTION 3: RADHE PHOTO GALLERY — ALL 11 REAL PHOTOS */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#1A1214]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Our Real Photos · Authentic Vehicles</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Radhe <span className="text-[#C9973A]">Photo Gallery</span>
            </h2>
            <p className="text-white/70 font-body max-w-2xl mx-auto text-base">
              Genuine, unedited photographs of our vehicles taken in Ujjain — what you see is exactly what you get.
            </p>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          {/* Masonry-style photo grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {RADHE_PHOTO_GALLERY.map((photo, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-[#3A2830] cursor-pointer mb-5"
                onClick={() => setLightboxItem({ src: photo.src, title: photo.title, badge: photo.label })}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214]/90 via-[#1A1214]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C9973A] text-[#1A1214] font-body font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow">
                    {photo.label}
                  </span>
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-display text-base font-bold text-white mb-1">{photo.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-[#C9973A] font-body font-medium">
                    <span>🔍 Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => nav("contact")} className="btn-gold">
              Book Your Vehicle Today →
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What We Offer</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Popular <span className="text-[#6B1E2E]">Services</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-[#E0D4C0] card-hover bg-white flex gap-4">
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#6B1E2E] mb-1">{s.title}</h3>
                  <p className="text-xs text-[#7A6A5A] font-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => nav("services")} className="btn-primary">
              All Services →
            </button>
          </div>
        </div>
      </section>

      {/* HOW BOOKING WORKS */}
      <section className="py-20 bg-[#6B1E2E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Easy Process</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How Booking Works
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-[#C9973A] flex items-center justify-center mx-auto mb-4 font-display font-bold text-[#C9973A] text-lg">
                  {s.num}
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/70 font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What Travellers Say</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Customer <span className="text-[#6B1E2E]">Testimonials</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Comfortable and timely service for our Ujjain darshan trip. The driver was very courteous and knowledgeable about all the temple locations.",
                name: "Rajesh Sharma",
                from: "Indore",
              },
              {
                text: "Excellent Force tempo traveller for our family group of 14. Spotlessly clean vehicle and great AC during our Mahakaleshwar pilgrimage.",
                name: "Vikas Patel",
                from: "Ahmedabad",
              },
              {
                text: "Booked Innova Crysta for an outstation trip to Omkareshwar and Maheshwar. Smooth driving and flexible timing. Highly recommended!",
                name: "Sanjay Agrawal",
                from: "Bhopal",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-[#E0D4C0] card-hover">
                <div className="text-[#C9973A] text-2xl mb-3">“</div>
                <p className="text-sm text-[#7A6A5A] font-body leading-relaxed italic mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE3D6] flex items-center justify-center text-lg">👤</div>
                  <div>
                    <div className="text-sm font-display font-semibold text-[#1A1214]">{t.name}</div>
                    <div className="text-xs text-[#7A6A5A] font-body">From {t.from}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#1A1214] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={bannerImg} alt="Shree Radhe Radhe Travels Fleet" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="section-label mb-4" style={{ color: "#C9973A" }}>Ready to Travel?</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Planning Your Ujjain Journey?
          </h2>
          <p className="text-white/70 font-body mb-8">
            Contact Shree Radhe Radhe Travels today for a comfortable, reliable and memorable travel experience from Ujjain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">
              Book Your Vehicle →
            </button>
            <a href="tel:9039223022" className="btn-outline">
              📞 Call 9039223022
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE FULLSCREEN LIGHTBOX MODAL */}
      {/* ============================================================ */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all"
            onClick={() => setLightboxItem(null)}
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex items-center justify-center mb-4">
              <img
                src={lightboxItem.src}
                alt={lightboxItem.title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            <div className="text-center max-w-xl">
              {lightboxItem.badge && (
                <span className="inline-block bg-[#C9973A] text-[#1A1214] font-body text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-2">
                  {lightboxItem.badge}
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {lightboxItem.title}
              </h3>
              {lightboxItem.desc && (
                <p className="text-sm text-white/70 font-body mb-4">
                  {lightboxItem.desc}
                </p>
              )}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setLightboxItem(null);
                    nav("contact");
                  }}
                  className="btn-gold text-xs py-2 px-5"
                >
                  Book This Vehicle →
                </button>
                <a
                  href="tel:9039223022"
                  className="btn-outline text-xs py-2 px-5"
                >
                  📞 Call 9039223022
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
