"use client";

import { emotions } from "@/constants";
import EmotionCard from "./emotion-card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Emotions = () => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const ref = isMobile ? mobileRef : desktopRef;
    if (!ref.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    const children = Array.from(ref.current?.children ?? []);
    if (!children.length) return;
    children.forEach((child, index) => {
      tl.from(
        child,
        {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        index * 0.1
      );
    });
  }, []);

  return (
    <section
      id="emotions"
      className="min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-48 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-52">
        <div className="text-center">
          <div className="battle-box inline-block mb-6">
            <span className="text-sm opacity-70"> /| EMOTIONS |\ </span>
          </div>

          <h2 className="text-(--omori-black) mb-4 pixel-text">THE EMOTIONS</h2>

          <p className="max-w-2xl mx-auto text-lg">
            Each emotion has its own unique effects and characteristics.
          </p>
        </div>
        <div
          ref={desktopRef}
          className="relative size-[300px] mx-auto hidden md:block"
        >
          {emotions.map((emotion) => (
            <div key={emotion.name} className={`absolute ${emotion.position}`}>
              <EmotionCard emotion={emotion} />
            </div>
          ))}
        </div>

        <div
          ref={mobileRef}
          className="flex flex-col items-start md:hidden gap-6"
        >
          {emotions.map((emotion) => (
            <EmotionCard key={emotion.name} emotion={emotion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Emotions;
