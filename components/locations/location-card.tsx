"use client";

import type { Location } from "@/constants";
import Image from "next/image";

interface LocationProps {
  location: Location;
}

const MobileLocationCard = ({ location }: LocationProps) => {
  return (
    <div className="relative emotions-bg flex flex-col items-center justify-center p-4 md:p-8 rpg-border pixel-corners shadow-xl w-full max-w-sm min-h-96">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200 opacity-70 rotate-[-8deg] rounded-sm z-10 md:w-32 md:h-6 md:top-8"></div>

      <div className="relative w-full h-40 md:h-56 mb-4 rpg-border pixel-corners overflow-hidden shadow-xl">
        <Image
          src={location.imgSrc}
          alt={location.name}
          fill
          className="object-cover pixel-corners"
          style={{ borderRadius: "12px" }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>

      <h1 className="pixel-text text-xl md:text-2xl font-bold text-(--omori-purple) mb-2 text-center drop-shadow">
        {location.emoji} {location.name}
      </h1>

      <p className="text-sm md:text-base text-gray-800 px-2 md:px-6 max-w-xs md:max-w-md text-center leading-relaxed opacity-95 mb-2">
        {location.description}
      </p>

      <div className="absolute bottom-2 right-2 text-2xl md:text-3xl opacity-70 pointer-events-none select-none">
        {location.emoji}
      </div>
    </div>
  );
};

const LocationCard = ({ location }: LocationProps) => {
  return (
    <section className="min-h-screen min-w-full flex items-center justify-center">
      <div className="relative emotions-bg flex flex-col items-center justify-center p-8 md:p-16 lg:p-36 rpg-border pixel-corners shadow-xl">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200 opacity-70 rotate-[-8deg] rounded-sm z-10"></div>
        <div className="relative w-full max-w-xl h-64 mb-8 rpg-border pixel-corners overflow-hidden shadow-xl">
          <Image
            src={location.imgSrc}
            alt={location.name}
            fill
            className="object-cover pixel-corners"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <h1 className="pixel-text text-3xl font-bold text-(--omori-purple) mb-4 text-center drop-shadow">
          {location.name}
        </h1>

        <p className="text-lg text-gray-800 px-6 max-w-3xl text-center leading-relaxed opacity-95 mb-8">
          {location.description}
        </p>

        {/* Doodle/sticker */}
        <div className="absolute bottom-8 right-8 text-4xl opacity-70 pointer-events-none select-none">
          {location.emoji}
        </div>
      </div>
    </section>
  );
};

export { MobileLocationCard, LocationCard };
