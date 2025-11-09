"use client";

import { useRef } from "react";
import PhotoCard from "./photo-card";
import { Photo, photos } from "@/constants";
import { PHOTOS_PER_PAGE } from "./gallery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AlbumProps {
  page: number;
}

const MobileAlbum = ({ page }: AlbumProps) => {
  const albumRef = useRef<HTMLDivElement>(null);
  const photo = photos[page];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!albumRef.current || prefersReducedMotion) return;

    gsap.fromTo(
      albumRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [page]);

  if (!photo) {
    return null;
  }

  return (
    <div
      ref={albumRef}
      className="relative w-full max-w-sm mx-auto h-[450px] emotions-bg rpg-border pixel-corners shadow-xl flex flex-col items-center justify-center p-4"
    >
      <PhotoCard key={photo.src} photo={photo} />
    </div>
  );
};

const Album = ({ page }: AlbumProps) => {
  const albumRef = useRef<HTMLDivElement>(null);

  const startIdx = page * PHOTOS_PER_PAGE;
  const spreadPhotos: Photo[] = photos.slice(
    startIdx,
    startIdx + PHOTOS_PER_PAGE
  );

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!albumRef.current || prefersReducedMotion) return;

    gsap.fromTo(
      albumRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [page]);

  return (
    <div
      ref={albumRef}
      className="overflow-hidden relative w-6xl h-[540px] md:h-[700px] emotions-bg rpg-border pixel-corners shadow-xl flex flex-row p-6"
    >
      <div className="relative w-1/2 h-full border-r-2 border-gray-300">
        {spreadPhotos.slice(0, 3).map((photo, index) => {
          const positions = [
            "absolute top-8 left-2",
            "absolute top-11 left-0",
            "absolute -bottom-10 left-2",
          ];
          return (
            <PhotoCard
              key={photo.src}
              photo={photo}
              position={positions[index]}
              index={index + 1}
            />
          );
        })}
      </div>

      <div className="relative w-1/2 h-full ml-6">
        {spreadPhotos.slice(3, 6).map((photo, index) => {
          const positions = [
            "absolute top-8 left-2",
            "absolute top-11 left-0",
            "absolute -bottom-10 left-2",
          ];

          if (!photo) {
            return null;
          }

          return (
            <PhotoCard
              key={photo.src}
              photo={photo}
              position={positions[index]}
              index={index + 3}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Album, MobileAlbum };
