"use client";

import { useEffect, useEffectEvent, useState } from "react";
import QuoteCard from "./quote-card";
import { quotes } from "@/constants";
import Navigation from "./navigation";
import Title from "./title";

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
        <Title
          heading="MEMORABLE QUOTES"
          title="WORDS TO REMEMBER"
          subtitle="Each quote holds its own unique significance within the story."
          className="mb-16"
        />
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
