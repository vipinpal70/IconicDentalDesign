"use client";

import { useState } from "react";

type YouTubePlayerProps = {
  videoId: string;
  title?: string;
  className?: string;
};

export default function YouTubePlayer({
  videoId,
  title = "YouTube video",
  className = "",
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const base = "relative aspect-[16/9] overflow-hidden bg-black";
  const containerClass = className ? `${base} ${className}` : base;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0`;

  return (
    <div className={containerClass}>
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          {/* Play button styled to match the mock (white square with black triangle) */}
          <span
            className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[4px] bg-white shadow-xl ring-1 ring-black/15 transition-transform duration-200 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="currentColor"
              className="text-black"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="sr-only">Play video</span>
        </button>
      )}
    </div>
  );
}
