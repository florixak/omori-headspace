"use client";

import useSpaceStore from "@/store/space-store";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";

interface NavigationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Navigation = ({
  totalPages,
  page,
  setPage,
  handleNextPage,
  handlePreviousPage,
}: NavigationProps) => {
  const { space } = useSpaceStore();
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const isHeadspace = space === "headspace";
  return (
    <div
      className={`flex items-center justify-between gap-4 mt-6 ${
        isMobile ? "mx-2" : ""
      }`}
    >
      <button
        onClick={handlePreviousPage}
        aria-label="Previous"
        className={`group cursor-pointer relative px-4 sm:px-8 py-4 w-auto sm:w-36 ${
          isHeadspace
            ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
            : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
        } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
      >
        <ArrowLeftIcon />
        <span className="hidden sm:block">PREV</span>
      </button>
      <div className="gap-2 flex items-center justify-center flex-wrap">
        {Array.from({
          length: totalPages,
        }).map((_, index) => (
          <button
            key={index}
            aria-label={`Select Page ${index + 1}`}
            aria-current={index === page ? "page" : undefined}
            onClick={() => setPage(index)}
            className={`w-3 h-3 border-2 border-(--omori-black) transition-all duration-300 ${
              index === page
                ? `${
                    isHeadspace ? "bg-(--omori-purple)" : "bg-(--kel-orange)"
                  } scale-125`
                : "bg-(--omori-white) hover:bg-(--omori-gray)"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNextPage}
        aria-label="Next"
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
  );
};

export default Navigation;
