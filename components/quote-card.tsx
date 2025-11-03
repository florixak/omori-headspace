"use client";

import { type Quote, quotes } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { QuoteIcon } from "lucide-react";
import { useRef } from "react";

interface QuoteCardProps {
  currentQuote: number;
}

const QuoteCard = ({ currentQuote }: QuoteCardProps) => {
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!quoteRef.current) return;

    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      },
    });
  }, [currentQuote]);

  const quote: Quote = quotes[currentQuote] || {
    text: "",
    author: "",
    context: "",
  };

  return (
    <div className="relative max-w-6xl w-full min-h-[300px] mx-auto p-6 bg-(--omori-white) flex flex-col items-center justify-center text-center battle-box gap-6">
      <QuoteIcon className="w-8 h-8 mb-4 text-(--omori-black) opacity-50" />
      <p
        ref={quoteRef}
        className="italic text-(--omori-black) text-2xl md:text-3xl mb-6 leading-relaxed max-w-2xl"
      >
        &#34;{quote.text || "No quote available"}&#34;
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-8 bg-(--omori-black) opacity-30" />
        <p className="text-sm opacity-70 uppercase tracking-wider">
          {quote.author || "Unknown Author"}
        </p>
        <div className="h-px w-8 bg-(--omori-black) opacity-30" />
      </div>
      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-(--omori-purple) opacity-50" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-(--omori-purple) opacity-50" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-(--omori-purple) opacity-50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-(--omori-purple) opacity-50" />
    </div>
  );
};

export default QuoteCard;
