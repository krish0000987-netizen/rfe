import React from "react";
import { DESTINATION_SECTIONS, DestinationSectionData, DestinationHighlight } from "@/data/destinationsData";

interface DestinationSectionsProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (item: { src: string; title: string; desc?: string; badge?: string }) => void;
}

export default function DestinationSections({ onNavigate, onOpenLightbox }: DestinationSectionsProps) {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const scrollToDestination = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`dest-section-${id}`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const displayedDestinations = activeTab === "all"
    ? DESTINATION_SECTIONS
    : DESTINATION_SECTIONS.filter((dest) => dest.id === activeTab);

  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* DESTINATION SECTIONS HEADER & QUICK JUMPER BAR */}
      {/* ============================================================ */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-[#1A1214] via-[#24151C] to-[#1A1214] text-white border-t border-[#3A2830]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C9973A]/15 border border-[#C9973A]/40 text-[#C9973A] px-4 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-widest mb-4 animate-fade-slide">
            <span>✨</span> Popular Pilgrimage & Heritage Tours
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sacred Destinations & <span className="text-[#C9973A]">Tour Circuits</span>
          </h2>
          <p className="text-white/75 font-body max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Discover dedicated travel arrangements, authentic routes, and direct cabs from Ujjain for Mahakaleshwar, Omkareshwar, Ujjain City, Mandav & Kubreshwar Dham Sehore.
          </p>
          <div className="gold-divider mx-auto mt-6 mb-10" />

          {/* Destination Quick-Jumper Pill Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            <button
              onClick={() => {
                setActiveTab("all");
                const el = document.getElementById("destination-cards-container");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-body font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-[#C9973A] text-[#1A1214] shadow-lg shadow-[#C9973A]/25 scale-105 font-bold"
                  : "bg-[#2A1822] text-white/80 hover:bg-[#3E2432] border border-[#4A2D3C]"
              }`}
            >
              🌟 All 5 Destinations
            </button>
            {DESTINATION_SECTIONS.map((dest) => (
              <button
                key={dest.id}
                onClick={() => scrollToDestination(dest.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-body font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === dest.id
                    ? "bg-[#C9973A] text-[#1A1214] shadow-lg shadow-[#C9973A]/25 scale-105 font-bold"
                    : "bg-[#2A1822] text-white/80 hover:bg-[#3E2432] border border-[#4A2D3C]"
                }`}
              >
                {dest.id === "ujjain-local" && "🕉️ "}
                {dest.id === "mahakaleshwar-jyotirlinga" && "🔱 "}
                {dest.id === "omkareshwar-jyotirlinga" && "🌊 "}
                {dest.id === "mandav" && "🏰 "}
                {dest.id === "kubreshwar-dham" && "🚩 "}
                {dest.title.replace("Shree ", "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEPARATE DEDICATED SECTIONS FOR EACH DESTINATION */}
      {/* ============================================================ */}
      <div id="destination-cards-container" className="space-y-16 py-10 bg-[#FAF6F0]">
        {displayedDestinations.map((dest: DestinationSectionData, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={dest.id}
              id={`dest-section-${dest.id}`}
              className="max-w-7xl mx-auto px-4 scroll-mt-24"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E0D4C0] transition-all duration-300 hover:shadow-2xl">
                {/* SECTION TOP HEADER STRIP */}
                <div className={`${dest.themeColor.bg} text-white p-6 sm:p-8 md:p-10 relative overflow-hidden`}>
                  {/* Subtle Background Pattern */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3.5 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider bg-[#C9973A] text-[#1A1214] shadow">
                          {dest.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-body font-semibold bg-white/10 text-white/90 border border-white/15">
                          📍 {dest.distanceFromUjjain}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-body font-semibold bg-white/10 text-white/90 border border-white/15">
                          ⏱️ {dest.travelTime}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                        {dest.title}
                      </h3>
                      <p className="text-[#E0D4C0] font-body text-sm sm:text-base font-medium">
                        {dest.subtitle}
                      </p>
                      <p className="text-white/70 font-body text-xs sm:text-sm mt-2 italic">
                        "{dest.tagline}"
                      </p>
                    </div>

                    {/* Quick Action in Header */}
                    <div className="flex flex-row md:flex-col gap-2.5 shrink-0">
                      <a
                        href={`https://wa.me/919039223022?text=${encodeURIComponent(dest.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-body font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                      >
                        <span>💬</span>
                        <span>WhatsApp Enquiry</span>
                      </a>
                      <button
                        onClick={() => {
                          onNavigate("contact");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs sm:text-sm font-body font-semibold py-2.5 px-5 rounded-xl transition-all"
                      >
                        Book Taxi Package →
                      </button>
                    </div>
                  </div>
                </div>

                {/* SECTION MAIN CONTENT GRID */}
                <div className="p-6 sm:p-8 md:p-10 space-y-10">
                  {/* OVERVIEW & HERO IMAGE ROW */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Hero Showcase Image with Zoom */}
                    <div className="lg:col-span-7">
                      <div
                        className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-[#E0D4C0] group cursor-pointer"
                        onClick={() => onOpenLightbox({ src: dest.heroImage, title: dest.title, desc: dest.overview, badge: dest.badge })}
                      >
                        <img
                          src={dest.heroImage}
                          alt={dest.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214]/80 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div>
                            <span className="bg-[#6B1E2E] text-white text-[11px] font-body font-semibold px-3 py-1 rounded-full shadow">
                              {dest.badge} Showcase
                            </span>
                            <p className="text-white font-display font-bold text-base sm:text-lg mt-1">
                              {dest.title}
                            </p>
                          </div>
                          <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 backdrop-blur-sm">
                            <span>🔍</span>
                            <span>Enlarge Photo</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overview & Sacred Significance */}
                    <div className="lg:col-span-5 space-y-5">
                      <div>
                        <span className="text-xs font-body font-bold text-[#6B1E2E] uppercase tracking-wider block mb-1">
                          Destination Overview
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-[#1A1214] mb-3">
                          Why Devotees & Travelers Visit
                        </h4>
                        <p className="text-sm text-[#5A4A3A] font-body leading-relaxed">
                          {dest.overview}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF6F0] border-l-4 border-[#C9973A] border-y border-r border-[#E0D4C0]">
                        <span className="text-xs font-body font-bold text-[#6B1E2E] uppercase tracking-wider block mb-1">
                          🕉️ Sacred & Heritage Significance
                        </span>
                        <p className="text-xs sm:text-sm text-[#4A3A2A] font-body leading-relaxed">
                          {dest.significance}
                        </p>
                      </div>

                      {/* Travel Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E0D4C0]">
                          <span className="text-[10px] uppercase font-bold text-[#7A6A5A] block">Best Season</span>
                          <span className="text-xs sm:text-sm font-body font-semibold text-[#1A1214]">{dest.bestTime}</span>
                        </div>
                        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E0D4C0]">
                          <span className="text-[10px] uppercase font-bold text-[#7A6A5A] block">Ideal Duration</span>
                          <span className="text-xs sm:text-sm font-body font-semibold text-[#1A1214]">{dest.idealDuration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HIGHLIGHT PHOTO CARDS GRID */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className="text-xs font-body font-bold text-[#C9973A] uppercase tracking-wider">
                          Key Attractions & Sacred Sites
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-[#1A1214]">
                          Must-Visit Highlights in {dest.title.replace("Shree ", "")}
                        </h4>
                      </div>
                      <span className="text-xs text-[#7A6A5A] font-body hidden sm:block">
                        Click any photo to enlarge 🔍
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {dest.highlights.map((highlight: DestinationHighlight, hIdx: number) => (
                        <div
                          key={hIdx}
                          className="group rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#E0D4C0] card-hover flex flex-col cursor-pointer"
                          onClick={() => onOpenLightbox({ src: highlight.img, title: highlight.title, desc: highlight.desc, badge: highlight.tag })}
                        >
                          <div className="relative h-44 overflow-hidden bg-black/10">
                            <img
                              src={highlight.img}
                              alt={highlight.title}
                              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2.5 left-2.5 bg-[#1A1214]/80 backdrop-blur-sm text-[#C9973A] text-[10px] font-body font-bold px-2.5 py-0.5 rounded-full border border-[#C9973A]/40">
                              {highlight.tag}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              🔍 View
                            </div>
                          </div>

                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <h5 className="font-display text-sm font-bold text-[#6B1E2E] group-hover:text-[#C9973A] transition-colors mb-1.5">
                                {highlight.title}
                              </h5>
                              <p className="text-xs text-[#6A5A4A] font-body leading-relaxed line-clamp-3">
                                {highlight.desc}
                              </p>
                            </div>
                            <div className="pt-3 mt-2 border-t border-[#E0D4C0]/60 flex items-center justify-between text-[11px] font-body font-semibold text-[#6B1E2E]">
                              <span>View Site Details</span>
                              <span>→</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ITINERARY TIMELINE & VEHICLE RECOMMENDATIONS */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                    {/* Suggested Itinerary */}
                    <div className="lg:col-span-6 bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#E0D4C0]">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E0D4C0]">
                        <div>
                          <span className="text-xs font-body font-bold text-[#6B1E2E] uppercase tracking-wider">
                            Suggested Travel Flow
                          </span>
                          <h5 className="font-display text-lg font-bold text-[#1A1214]">
                            Recommended Day Schedule
                          </h5>
                        </div>
                        <span className="text-xs bg-white text-[#7A6A5A] px-2.5 py-1 rounded-full border border-[#E0D4C0] font-semibold">
                          {dest.idealDuration}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {dest.itinerary.map((step: string, sIdx: number) => {
                          const [time, ...rest] = step.split(" – ");
                          const desc = rest.join(" – ");

                          return (
                            <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm font-body">
                              <div className="w-6 h-6 rounded-full bg-[#6B1E2E] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                                {sIdx + 1}
                              </div>
                              <div className="flex-1">
                                <span className="font-bold text-[#1A1214]">{time}</span>
                                {desc && <span className="text-[#5A4A3A]"> – {desc}</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <p className="text-[11px] text-[#8A7A6A] font-body italic mt-4 pt-3 border-t border-[#E0D4C0]">
                        * All itineraries are fully customizable according to your train/flight arrival and family pace.
                      </p>
                    </div>

                    {/* Recommended Vehicles */}
                    <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#E0D4C0] flex flex-col justify-between">
                      <div>
                        <div className="mb-4 pb-3 border-b border-[#E0D4C0]">
                          <span className="text-xs font-body font-bold text-[#C9973A] uppercase tracking-wider">
                            Fleet Options for This Route
                          </span>
                          <h5 className="font-display text-lg font-bold text-[#1A1214]">
                            Recommended Vehicles & Cabs
                          </h5>
                        </div>

                        <div className="space-y-3">
                          {dest.vehicleOptions.map((veh, vIdx) => (
                            <div
                              key={vIdx}
                              className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E0D4C0] hover:border-[#C9973A] transition-colors"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-display text-sm font-bold text-[#6B1E2E]">
                                  {veh.type}
                                </span>
                                <span className="text-[11px] bg-white text-[#C9973A] font-bold px-2 py-0.5 rounded border border-[#E0D4C0]">
                                  {veh.seats}
                                </span>
                              </div>
                              <div className="text-xs text-[#5A4A3A] font-body">
                                <span className="font-semibold text-[#1A1214]">Best for:</span> {veh.ideal}
                              </div>
                              <div className="text-[11px] text-[#7A6A5A] font-body mt-0.5">
                                <span className="text-[#C9973A]">✓</span> {veh.features}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Call & WhatsApp Booking Strip */}
                      <div className="mt-6 pt-4 border-t border-[#E0D4C0] flex flex-wrap gap-3">
                        <a
                          href={`https://wa.me/919039223022?text=${encodeURIComponent(dest.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#6B1E2E] hover:bg-[#8B2840] text-white text-xs font-body font-bold py-3 px-4 rounded-xl text-center shadow transition-colors"
                        >
                          Book {dest.title.replace("Shree ", "")} Cab →
                        </a>
                        <a
                          href="tel:9039223022"
                          className="flex items-center justify-center px-4 py-3 border border-[#6B1E2E] text-[#6B1E2E] hover:bg-[#6B1E2E] hover:text-white rounded-xl text-xs font-bold transition-colors"
                          title="Call 9039223022"
                        >
                          📞 Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
