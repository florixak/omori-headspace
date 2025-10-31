"use client";

import { floatingEmojis } from "@/constants";
import useSpaceStore from "@/store/space-store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const omoriRef = useRef<HTMLDivElement>(null);
  const { toggleSpace, space } = useSpaceStore();

  const isHeadspace = space === "headspace";

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!omoriRef.current || prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(omoriRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, [isHeadspace]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000 ${
        isHeadspace ? "bg-(--headspace-bg)" : "bg-(--real-world-bg)"
      }`}
    >
      {!isHeadspace && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="w-full h-full bg-linear-to-b from-orange-200 via-gray-800 to-black opacity-50"></div>
        </div>
      )}
      <div
        ref={omoriRef}
        className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center gap-6"
      >
        <Image
          src={isHeadspace ? "/headspace-mirror.webp" : "/group-hug.webp"}
          alt={isHeadspace ? "Headspace" : "Real World"}
          width={320}
          height={320}
          className="object-cover rpg-border breathe relative"
        />
        <div className="w-0 h-0">
          {floatingEmojis.map((emoji) => (
            <div
              key={emoji.id}
              className={`absolute ${
                emoji.position
              } text-2xl float rpg-border size-12 flex items-center justify-center ${
                isHeadspace ? emoji.whitespace.color : emoji.realWorld.color
              }`}
              style={{ animationDelay: `${emoji.delay}s` }}
            >
              <span>
                {isHeadspace ? emoji.whitespace.emoji : emoji.realWorld.emoji}
              </span>
            </div>
          ))}
        </div>

        {isHeadspace ? (
          <h1 className="font-bold pixel-text">
            WELCOME TO <br />{" "}
            <span className="text-(--omori-purple)">HEADSPACE</span>
          </h1>
        ) : (
          <h1 className="font-bold pixel-text text-(--omori-white)">
            THE <br /> <span className="text-(--kel-orange)">REAL WORLD</span>
          </h1>
        )}
        <div className="battle-box max-w-2xl mx-auto">
          {isHeadspace ? (
            <>
              <p className="text-lg mb-4">
                A place where imagination runs wild and friends are always
                there.
              </p>
              <p className="text-sm opacity-70">
                Everything is going to be okay.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg mb-4 text-(--omori-black)">
                Where memories resurface and truth awaits.
              </p>
              <p className="text-sm opacity-70 text-(--omori-black)">
                You have been living here for as long as you can remember.
              </p>
            </>
          )}
        </div>
        <button
          onClick={() => toggleSpace(heroRef)}
          className={`group cursor-pointer relative px-8 py-4 ${
            isHeadspace
              ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
              : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
          } rpg-border hover:text-(--omori-white) transition-all duration-300 flex items-center gap-4`}
        >
          {isHeadspace ? <Moon /> : <Sun />}
          {isHeadspace ? "ENTER WHITE SPACE" : "RETURN TO HEADSPACE"}
        </button>
      </div>
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-(--omori-black) opacity-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-(--omori-black) opacity-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-(--omori-black) opacity-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-(--omori-black) opacity-20" />
    </section>
  );
};

export default Hero;
