"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import useSpaceStore from "@/store/space-store";
import { photos } from "@/constants";
import { Album, MobileAlbum } from "./album";
import { useMediaQuery } from "react-responsive";

export const PHOTOS_PER_PAGE = 6;

const Gallery = () => {
  const [page, setPage] = useState(0);
  const { space } = useSpaceStore();
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const isHeadspace = space === "headspace";

  const totalPages = isMobile
    ? photos.length
    : Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center py-12 bg-(--omori-white)"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-16">
          <div className="battle-box inline-block mb-6">
            <span className="text-sm opacity-70"> /| GALLERY |\ </span>
          </div>

          <h2 className="text-(--omori-black) mb-4 pixel-text">
            BASIL&#39;S PHOTO ALBUM
          </h2>

          <p className="max-w-2xl mx-auto text-lg">
            Precious memories with friends...
          </p>
        </div>
        {isMobile ? <MobileAlbum page={page} /> : <Album page={page} />}
        <div
          className={`flex items-center justify-between gap-4 mt-6 ${
            isMobile ? "mx-2" : ""
          }`}
        >
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
          <div className="gap-2 flex items-center justify-center flex-wrap">
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
