"use client";

import { emotions } from "@/constants";
import { DesktopEmotionCard, MobileEmotionCard } from "./emotion-card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import Title from "./title";

gsap.registerPlugin(ScrollTrigger);

const Emotions = () => {
  //TODO: Add Mewo with story bubble to info user about hovering / clicking
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ref = isMobile ? mobileRef : desktopRef;
    if (!ref.current || prefersReducedMotion) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

    const children = Array.from(ref.current?.children ?? []);
    if (!children.length) return;

    if (isMobile) {
      gsap.set(children, { opacity: 0, scale: 0 });
    }

    children.forEach((child, index) => {
      tl.from(
        child,
        {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "back.out(1.5)",
          clearProps: "opacity,scale",
        },
        index * 0.1
      );
    });
  }, [isMobile]);

  return (
    <section
      id="emotions"
      className="min-h-screen flex items-center justify-center overflow-hidden px-6 emotions-bg py-12"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-52">
        <Title
          heading="EMOTIONS"
          title="THE EMOTIONS"
          subtitle="Each emotion has its own unique effects and characteristics."
        />
        <div
          ref={desktopRef}
          className="relative h-[300px] mx-auto hidden md:block"
        >
          {emotions.map((emotion) => (
            <div key={emotion.name} className={`absolute ${emotion.position}`}>
              <DesktopEmotionCard emotion={emotion} />
            </div>
          ))}
        </div>

        <div
          ref={mobileRef}
          className="flex flex-col items-center md:hidden gap-6"
        >
          {emotions.map((emotion) => (
            <MobileEmotionCard key={emotion.name} emotion={emotion} />
          ))}
        </div>
        <p className="text-center text-sm opacity-70"></p>
        <div
          className={`flex items-center justify-center text-center gap-2 mt-8 mx-1 md:mx-auto rpg-border pixel-corners bg-(--omori-white) p-6 w-fit ${
            isMobile ? "text-sm flex-col" : "flex-row"
          }`}
        >
          <span>
            There are more emotions like AFRAID, ENRAGED, ... to discover!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Emotions;
