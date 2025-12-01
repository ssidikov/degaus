"use client";

import { useEffect, useRef } from "react";

import { VIDEO_CONFIG } from "@/lib/videoConfig";

interface VideoCardProps {
  src: string;
  type?: string;
  className?: string;
  aspectRatio?: "portrait" | "square";
  poster?: string;
}

export default function VideoCard({
  src,
  type,
  className = "",
  aspectRatio = "portrait",
  poster,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heightClass =
    aspectRatio === "portrait"
      ? "h-[350px]"
      : aspectRatio === "square"
        ? "h-[300px]"
        : "h-full";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && VIDEO_CONFIG.autoplay) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.1, // Start loading when 10% visible (earlier than before)
        rootMargin: "200px", // Start loading 200px before video enters viewport
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-[20px] relative w-[195px] shrink-0 ${heightClass} ${className}`}
    >
      <video
        ref={videoRef}
        loop={VIDEO_CONFIG.loop}
        muted={VIDEO_CONFIG.muted}
        playsInline={VIDEO_CONFIG.playsInline}
        preload={poster ? "none" : VIDEO_CONFIG.preload}
        poster={poster}
        className="w-full h-full object-cover"
      >
        {/* Prefer WebM */}
        <source
          src={`/videos/carousel/previews/${src}.webm`}
          type="video/webm"
        />
        {/* Fallback to MP4 */}
        <source src={`/videos/carousel/previews/${src}.mp4`} type="video/mp4" />
      </video>
      {type && (
        <div className="absolute inline-flex w-auto h-[21px] text-nowrap top-3 left-2 p-1.5 bg-[#bb00ff4d] backdrop-blur-sm rounded-[5px] z-10">
          <span className="text-base tracking-[-0.32px] relative bottom-[5px] font-semibold text-[#FBB4FF] leading-none">
            {type}
          </span>
        </div>
      )}
    </div>
  );
}
