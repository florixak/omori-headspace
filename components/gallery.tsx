"use client";

import { useState, useRef } from "react";
import PhotoCard from "./photo-card";
import { ArrowRightIcon } from "lucide-react";
import useSpaceStore from "@/store/space-store";
import { Photo, photos } from "@/constants";

const PHOTOS_PER_PAGE = 6;

const Gallery = () => {
  const [page, setPage] = useState(0);
  const albumRef = useRef<HTMLDivElement>(null);
  const { space } = useSpaceStore();
  const isHeadspace = space === "headspace";

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIdx = page * PHOTOS_PER_PAGE;
  const spreadPhotos: Photo[] = photos.slice(
    startIdx,
    startIdx + PHOTOS_PER_PAGE
  );

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center py-12 bg-(--omori-white)"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="pixel-text text-2xl mb-2">Basil&#39;s Photo Album</h2>
          <p className="text-lg text-gray-600">
            Precious memories with friends...
          </p>
        </div>
        <div
          ref={albumRef}
          className="overflow-hidden relative w-6xl h-[540px] md:h-[700px] emotions-bg rpg-border pixel-corners shadow-xl flex flex-row p-6"
        >
          <div className="relative w-1/2 h-full border-r-2 border-gray-300">
            {spreadPhotos.slice(0, 3).map((photo, index) => {
              const positions = [
                "absolute top-8 left-4",
                "absolute top-11 left-0",
                "absolute -bottom-10 left-8",
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
                "absolute top-8 left-4",
                "absolute top-11 left-0",
                "absolute -bottom-10 left-8",
              ];
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
        <div className="flex items-center justify-between gap-4 mt-6">
          <button
            onClick={handlePreviousPage}
            aria-label="Previous Quote"
            className={`group cursor-pointer relative px-4 sm:px-8 py-4 w-auto sm:w-36 ${
              isHeadspace
                ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
                : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
            } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
          >
            <ArrowRightIcon className="rotate-180" />
            <span className="hidden sm:block">PREV</span>
          </button>
          <div className="gap-2 flex">
            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                aria-label={`Select Page ${index + 1}`}
                aria-current={index === page ? "true" : "false"}
                onClick={() => setPage(index)}
                className={`w-3 h-3 border-2 border-(--omori-black) transition-all duration-300 ${
                  index === page
                    ? `${
                        isHeadspace
                          ? "bg-(--omori-purple)"
                          : "bg-(--kel-orange)"
                      } scale-125`
                    : "bg-(--omori-white) hover:bg-(--omori-gray)"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            aria-label="Next Quote"
            className={`group cursor-pointer relative px-4 sm:px-8 py-4 w-auto sm:w-36 ${
              isHeadspace
                ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
                : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
            } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
          >
            <span className="hidden sm:block">NEXT</span>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
