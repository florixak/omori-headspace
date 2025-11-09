"use client";

import { useEffect, useEffectEvent, useState } from "react";
import QuoteCard from "./quote-card";
import { quotes } from "@/constants";
import Navigation from "./navigation";

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

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
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
        <Navigation
          totalPages={quotes.length}
          page={currentQuote}
          setPage={setCurrentQuote}
          handleNextPage={handleNextQuote}
          handlePreviousPage={handlePreviousQuote}
        />
      </div>
    </section>
  );
};

export default Quotes;
