import { useState } from "react";
import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM_1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM_1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import travellerFront3Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM_1_.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM_1_.jpeg";
import travellerSideImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM.jpeg";
import bannerImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM.jpeg";
import tourMomentImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.18_PM_1_.jpeg";

const categories = ["All", "Our Vehicles", "Ujjain", "Destinations"];

const photos = [
  // Real vehicles & Fleet
  { src: innovaImg, alt: "Toyota Innova Crysta — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront1Img, alt: "Force Traveller Tempo (12 Seater) — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: traveller7Img, alt: "Force Traveller Luxury — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: dzireImg, alt: "Maruti Suzuki Dzire — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront2Img, alt: "Force Traveller (17 Seater) — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront3Img, alt: "Force Traveller Fleet Lineup — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: tavernaImg, alt: "Chevrolet Tavera — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: indigoImg, alt: "Tata Indigo — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerSideImg, alt: "Force Traveller Side View — Highway Edition", cat: "Our Vehicles" },
  { src: bannerImg, alt: "Shree Radhe Radhe Travels Official Fleet", cat: "Our Vehicles" },
  { src: tourMomentImg, alt: "Pilgrimage Yatra Tour Moment — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  // Ujjain & Pilgrimage
  { src: travellerFront3Img, alt: "Mahakaleshwar Jyotirlinga Darshan Tour Fleet", cat: "Ujjain" },
  { src: tourMomentImg, alt: "Shipra River & Ram Ghat Darshan Journey", cat: "Ujjain" },
  { src: dzireImg, alt: "Ujjain Local City & Temple Darshan", cat: "Ujjain" },
  { src: indigoImg, alt: "Harsiddhi Mata & Kaal Bhairav Pilgrimage", cat: "Ujjain" },
  // Destinations & Outstation
  { src: bannerImg, alt: "Omkareshwar Jyotirlinga Highway Yatra", cat: "Destinations" },
  { src: travellerSideImg, alt: "Mandav (Mandu) Heritage Fortress Tour", cat: "Destinations" },
  { src: traveller7Img, alt: "Kubreshwar Dham Sehore Devotee Yatra", cat: "Destinations" },
  { src: innovaImg, alt: "Indore & Bhopal Outstation VIP Travel", cat: "Destinations" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={bannerImg}
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16">
          <div>
            <div className="section-label mb-3">Visual Journey</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Gallery
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-white border-b border-[#E0D4C0] sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all ${
                active === c
                  ? "bg-[#6B1E2E] text-white"
                  : "bg-[#FAF6F0] text-[#7A6A5A] hover:bg-[#EDE3D6] border border-[#E0D4C0]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-12 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="break-inside-avoid img-hover-zoom rounded-xl overflow-hidden cursor-pointer border border-[#E0D4C0]"
                onClick={() => setLightbox(p)}
              >
                <img
                  src={p.src as unknown as string}
                  alt={p.alt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-light hover:text-[#C9973A] transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox.src as unknown as string}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-body text-center px-4">
            {lightbox.alt}
          </p>
        </div>
      )}
    </div>
  );
}
