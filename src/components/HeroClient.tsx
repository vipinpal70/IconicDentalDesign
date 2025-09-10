"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  slidesCount: number;
  trackId: string;
};

const HeroClient = React.forwardRef<HTMLDivElement, Props>(({ slidesCount, trackId }, ref) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackElement = ref as React.RefObject<HTMLDivElement>;

  const applyTransform = useCallback((index: number) => {
    if (!trackElement.current) return;
    const width = trackElement.current.offsetWidth;
    trackElement.current.style.transform = `translateX(-${index * width}px)`;
  }, [trackElement]);

  const goTo = useCallback((index: number) => {
    const normalized = (index + slidesCount) % slidesCount;
    setCurrent(normalized);
    applyTransform(normalized);
  }, [applyTransform, slidesCount]);

  // Navigation callbacks
  useCallback(() => goTo(current + 1), [current, goTo]);
  useCallback(() => goTo(current - 1), [current, goTo]);

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

  // Dots overlay
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center">
      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
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
  );
});

HeroClient.displayName = 'HeroClient';

export default HeroClient;
