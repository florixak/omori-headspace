"use client";

import { useState } from "react";
import { photos } from "@/constants";
import { Album, MobileAlbum } from "./album";
import { useMediaQuery } from "react-responsive";
import Navigation from "./navigation";

export const PHOTOS_PER_PAGE = 6;

const Gallery = () => {
  const [page, setPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "1024px" });

  const totalPages = isMobile
    ? photos.length
    : Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const safePage = Math.max(0, Math.min(page, totalPages - 1));

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
        {isMobile ? <MobileAlbum page={safePage} /> : <Album page={page} />}
        <Navigation
          totalPages={totalPages}
          page={safePage}
          setPage={setPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </section>
  );
};

export default Gallery;
