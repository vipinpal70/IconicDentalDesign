import Image from "next/image";
import HeroClient from "@/components/HeroClient";

const slides = [
  // "https://res.cloudinary.com/dbwuxxypx/image/upload/cosmetic_dentistry_fllln8.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/e_improve/v1757482297/cosmetic_dentistry_fllln8.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/removable_pro_fnbdhl.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/implants_qgxncd.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/Appliances_Splints_soghyb.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/models_odtwua.png",
  "https://res.cloudinary.com/dbwuxxypx/image/upload/fixed_misflq.png",
];

export default function Hero() {
  const trackId = "hero-track";
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <div
            id={trackId}
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: "translateX(0%)" }}
          >
            {slides.map((src, idx) => (
              <div className="relative min-w-full h-full bg-white" key={idx}>
                <Image
                  src={src}
                  alt={`Hero slide ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover md:object-contain"
                />
              </div>
            ))}
          </div>
          <HeroClient slidesCount={slides.length} trackId={trackId} />
        </div>
      </div>
    </section>
  );
}
