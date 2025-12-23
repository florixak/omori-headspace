"use client";

import { locations } from "@/constants";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { MobileLocationCard, LocationCard } from "./location-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import Title from "../title";
import useSpaceStore from "@/store/space-store";

gsap.registerPlugin(ScrollTrigger);

const Locations = () => {
  const { space } = useSpaceStore();
  const [hydrated, setHydrated] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }) || false;
  const scrollRef = useRef<HTMLDivElement>(null);

  const locs =
    space === "headspace" ? locations.whitespace : locations.realWorld;

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
          { opacity: 0, scale: 0.8, rotate: -10 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
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
        end: () => `+=${scrollRef.current?.offsetWidth ?? 0}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(scrollRef.current, {
      xPercent: -100 * (locs.length - 1),
      ease: "none",
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [isMobile, hydrated, locs]);

  if (!hydrated) {
    return null;
  }

  return (
    <section
      id="locations"
      key={space}
      className={`relative min-h-screen bg-linear-to-b from-white via-gray-600 to-black flex items-center justify-center py-12 ${
        isMobile ? "px-6" : ""
      }`}
    >
      <div className="absolute top-20 right-6 md:right-12 text-6xl opacity-30 float">
        🌸
      </div>
      <div className="max-w-screen mx-auto">
        <Title
          heading="LOCATIONS"
          title="THE LOCATIONS"
          subtitle="Each location holds its own unique atmosphere and significance within the story."
        />
        <div className="min-w-screen">
          <div
            ref={scrollRef}
            className={`${
              isMobile
                ? "flex flex-col items-center gap-4 w-full"
                : "flex items-center justify-start h-full w-full"
            }`}
          >
            {isMobile ? (
              <MobileLocationCard location={locs[0]} space={space} />
            ) : (
              <LocationCard location={locs[0]} space={space} />
            )}
            {locs.slice(1).map((location) => {
              return isMobile ? (
                <MobileLocationCard
                  key={location.name}
                  location={location}
                  space={space}
                />
              ) : (
                <LocationCard
                  key={location.name}
                  location={location}
                  space={space}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`flex items-center justify-center text-center gap-2 mt-8 mx-1 md:mx-auto rpg-border pixel-corners p-6 w-fit bg-(--omori-white) ${
            isMobile ? "text-sm flex-col" : "flex-row"
          }`}
        >
          <span>
            There are many more locations to explore, each with its own story to
            tell.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Locations;
