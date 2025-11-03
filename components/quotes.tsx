"use client";

import { useEffect, useEffectEvent, useState } from "react";
import QuoteCard from "./quote-card";
import { quotes } from "@/constants";
import useSpaceStore from "@/store/space-store";
import { ArrowRightIcon } from "lucide-react";

const Quotes = () => {
  const { space } = useSpaceStore();
  const [currentQuote, setCurrentQuote] = useState(0);
  const isHeadspace = space === "headspace";

  const handleNextQuote = () => {
    setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
  };

  const handlePreviousQuote = () => {
    setCurrentQuote(
      (prevQuote) => (prevQuote - 1 + quotes.length) % quotes.length
    );
  };

  const handleQuoteChange = useEffectEvent(() => {
    setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleQuoteChange();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="quotes"
      className="min-h-screen flex items-center justify-center px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-16">
          <div className="battle-box inline-block mb-6">
            <span className="text-sm opacity-70"> /| MEMORABLE QUOTES |\ </span>
          </div>

          <h2 className="text-(--omori-black) mb-4 pixel-text">
            WORDS TO REMEMBER
          </h2>

          <p className="max-w-2xl mx-auto text-lg">
            Each quote holds its own unique significance within the story.
          </p>
        </div>
        <QuoteCard currentQuote={currentQuote} />
        <div className="flex items-center justify-between gap-4 mt-6">
          <button
            onClick={handlePreviousQuote}
            className={`group cursor-pointer relative px-8 py-4 ${
              isHeadspace
                ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
                : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
            } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
          >
            <ArrowRightIcon className="rotate-180" />
            PREVIOUS
          </button>
          <button
            onClick={handleNextQuote}
            className={`group cursor-pointer relative px-8 py-4 ${
              isHeadspace
                ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
                : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
            } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
          >
            NEXT
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
