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
  const quoteContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!quoteRef.current || !quoteContainerRef.current || prefersReducedMotion)
      return;

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

    gsap.fromTo(
      quoteContainerRef.current,
      { scale: 0.95 },
      {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [currentQuote]);

  const quote: Quote = quotes[currentQuote] || {
    text: "",
    author: "",
    context: "",
  };

  return (
    <div ref={quoteContainerRef} className="w-full h-[250px] md:h-[300px]">
      <div className="relative flex flex-col items-center justify-center text-center battle-box gap-6 bg-(--omori-white) h-full">
        <QuoteIcon className="absolute top-8 transform -translate-x-1/2 left-1/2 size-4 sm:size-6 md:size-8 mb-4 text-(--omori-black) opacity-50" />
        <p
          ref={quoteRef}
          className="italic text-(--omori-black) text-base sm:text-lg md:text-2xl leading-relaxed max-w-2xl"
        >
          &#34;{quote.text || "No quote available"}&#34;
        </p>
        <div className="absolute bottom-8 flex items-center justify-center gap-2">
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
    </div>
  );
};

export default QuoteCard;
