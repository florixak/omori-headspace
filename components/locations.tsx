"use client";

import { locations } from "@/constants";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { MobileLocationCard, LocationCard } from "./location-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Locations = () => {
  const [hydrated, setHydrated] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }) || false;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleHydrated = useEffectEvent(() => {
    setHydrated(true);
  });

  useEffect(() => {
    handleHydrated();
  }, []);

  useGSAP(() => {
    if (!scrollRef.current || !hydrated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile) {
      if (prefersReducedMotion) return;
      const cards = scrollRef.current.children as HTMLCollectionOf<HTMLElement>;
      Array.from(cards).forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
            ease: "power2.out",
          }
        );
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "center center+=35",
        end: () => `+=${scrollRef.current!.offsetWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(scrollRef.current, {
      xPercent: -100 * (locations.length - 2),
      ease: "none",
    });
  }, [isMobile, hydrated]);

  if (!hydrated) {
    return null;
  }

  return (
    <section
      id="locations"
      className={`relative min-h-screen bg-linear-to-b from-white via-gray-600 to-black flex items-center justify-center py-12 ${
        isMobile ? "px-6" : ""
      }`}
    >
      <div className="absolute top-20 right-10 text-6xl opacity-30 float">
        🌸
      </div>
      <div className="max-w-screen mx-auto">
        <div className="text-center">
          <div className="battle-box inline-block mb-6">
            <span className="text-sm opacity-70"> /| LOCATIONS |\ </span>
          </div>

          <h2 className="text-(--omori-black) mb-4 pixel-text">
            THE LOCATIONS
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-(--omori-black)">
            Each location holds its own unique atmosphere and significance
            within the story.
          </p>
          <div
            className={`mt-12 flex justify-center ${
              isMobile ? "mb-4" : "mb-0"
            }`}
          >
            {isMobile ? (
              <MobileLocationCard location={locations[0]} />
            ) : (
              <LocationCard location={locations[0]} />
            )}
          </div>
          <div className={"min-w-screen"}>
            <div
              ref={scrollRef}
              className={`${
                isMobile
                  ? "flex flex-col items-center gap-4 w-full"
                  : "flex items-center justify-start h-full"
              }`}
            >
              {locations.slice(1).map((location) => {
                return isMobile ? (
                  <MobileLocationCard key={location.name} location={location} />
                ) : (
                  <LocationCard key={location.name} location={location} />
                );
              })}
            </div>
          </div>
          <div>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-(--omori-white)">
              There are many more locations to explore, each with its own story
              to tell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
