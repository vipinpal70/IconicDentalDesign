"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  slidesCount: number;
  trackId: string;
};

export default function HeroClient({ slidesCount, trackId }: Props) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const applyTransform = useCallback((index: number) => {
    if (!trackRef.current) return;
    const width = trackRef.current.offsetWidth;
    trackRef.current.style.transform = `translateX(-${index * width}px)`;
  }, []);

  const goTo = useCallback((index: number) => {
    const normalized = (index + slidesCount) % slidesCount;
    setCurrent(normalized);
    applyTransform(normalized);
  }, [applyTransform, slidesCount]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    // ensure initial transform is applied
    applyTransform(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const n = (c + 1) % slidesCount;
        applyTransform(n);
        return n;
      });
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [applyTransform, slidesCount, trackId]);

  return (
    <>
      {/* Controls */}
      {/* <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronRight className="h-5 w-5" />
      </button> */}

      {/* Dots overlay */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm pointer-events-auto">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === i ? "bg-teal-700 w-5" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
