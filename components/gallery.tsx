"use client";

import { useState } from "react";
import { photos } from "@/constants";
import { Album, MobileAlbum } from "./album";
import { useMediaQuery } from "react-responsive";
import Navigation from "./navigation";
import { Camera } from "lucide-react";
import Title from "./title";

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
        <Title
          heading="GALLERY"
          title="BASIL'S PHOTO ALBUM"
          subtitle="Precious memories with friends..."
          className="mb-16"
        />
        {isMobile ? <MobileAlbum page={safePage} /> : <Album page={page} />}
        <Navigation
          totalPages={totalPages}
          page={safePage}
          setPage={setPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
        <div
          className={`flex items-center justify-center text-center gap-2 mt-8 mx-1 md:mx-auto rpg-border pixel-corners p-6 w-fit ${
            isMobile ? "text-sm flex-col" : "flex-row"
          }`}
        >
          <Camera className="inline-block" />
          <span>&quot;Let&#39;s make some more memories together.&quot;</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
