"use client";

import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  allowFullScreen?: boolean;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title = 'YouTube video player',
  className = '',
  width = '100%',
  height = '100%',
  allowFullScreen = true,
}) => {
  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url: string): string => {
    // If it's already just an ID, return it
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return url;
    }
    
    // Extract from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return match && match[2].length === 11 ? match[2] : url;
  };

  const embedId = extractVideoId(videoId);
  const embedUrl = `https://www.youtube.com/embed/${embedId}`;

  return (
    <div className={`youtube-video-container ${className}`}>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
};

export default YouTubeVideo;
