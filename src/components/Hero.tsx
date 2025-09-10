"use client";

import Image from "next/image";
import { useRef } from "react";
import HeroClient from "@/components/HeroClient";

const slides = [
  "https://res.cloudinary.com/dbwuxxypx/image/upload/cosmetic_dentistry_fllln8.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/removable_pro_fnbdhl.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/implants_qgxncd.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/Appliances_Splints_soghyb.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/models_odtwua.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/fixed_misflq.png",
];

export default function Hero() {
  const trackId = "hero-track";
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 w-screen h-full left-1/2 right-1/2 -translate-x-1/2">
        <div className="relative w-full h-full">
          <div
            ref={trackRef}
            id={trackId}
            className="flex h-full w-full transition-transform duration-700 ease-out"
          >
            {slides.map((src, idx) => (
              <div className="relative min-w-full h-full" key={idx}>
                <Image
                  src={src}
                  alt={`Hero slide ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <HeroClient ref={trackRef} slidesCount={slides.length} trackId={trackId} />
        </div>
      </div>
    </section>
  );
}

