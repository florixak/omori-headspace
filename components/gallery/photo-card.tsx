"use client";

import { Photo } from "@/constants";
import useHydrated from "@/hooks/use-hydrated";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface PhotoCardProps {
  photo: Photo;
  position?: string;
  index?: number;
}

const PhotoCard = ({ photo, position, index }: PhotoCardProps) => {
  const hydrated = useHydrated();
  const isMobile = useMediaQuery(
    { maxWidth: "1024px" },
    undefined,
    (matches) => matches
  );
  const even = index !== undefined && index % 2 === 0;

  const imageWidth = isMobile ? 200 : 160;
  const imageHeight = isMobile ? 220 : 180;

  if (!hydrated) {
    return null;
  }

  return (
    <div
      className={`relative flex ${
        isMobile ? "flex-col" : "flex-row"
      } items-center ${
        even && !isMobile ? "flex-row-reverse" : ""
      } w-lg gap-5 ${position}`}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
      />

      <div
        className={`max-w-xs text-sm ${isMobile ? "text-center" : "text-left"}`}
      >
        <span className="block font-bold text-sm mb-1">
          ({photo.day} - {photo.title})
        </span>
        {photo.caption}
      </div>
    </div>
  );
};

export default PhotoCard;
