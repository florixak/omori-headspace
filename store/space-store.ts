import gsap from "gsap";
import { RefObject } from "react";
import { create } from "zustand";

interface SpaceStore {
  space: "headspace" | "real-world";
  toggleSpace: (ref: RefObject<HTMLDivElement | null>) => void;
}

const useSpaceStore = create<SpaceStore>((set) => ({
  space: "headspace",
  toggleSpace: (ref: RefObject<HTMLDivElement | null>) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !ref?.current) {
      set((state) => ({
        space: state.space === "headspace" ? "real-world" : "headspace",
      }));
      return;
    }

    gsap.to(ref.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      onComplete: () => {
        set((state) => ({
          space: state.space === "headspace" ? "real-world" : "headspace",
        }));
        if (!ref.current) return;
        gsap.to(ref.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        });
      },
    });
  },
}));

export default useSpaceStore;
