"use client";

import useSpaceStore from "@/store/space-store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const SpoilerWarning = () => {
  const { space } = useSpaceStore();
  const [showWarning, setShowWarning] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const warningRef = useRef<HTMLDivElement>(null);

  const hideWarning = () => {
    setShowWarning(false);
  };

  useGSAP(() => {
    if (!warningRef.current) return;

    if (showWarning) {
      gsap.fromTo(
        warningRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(warningRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (warningRef.current) {
            setShouldRender(false);
          }
        },
      });
    }
  }, [showWarning]);

  if (!shouldRender) return null;

  const isHeadspace = space === "headspace";

  return (
    <div ref={warningRef} className="fixed z-1000 bottom-4 right-0">
      <div className="flex justify-center items-center px-4 gap-4">
        <div className="relative">
          <span className="flex items-center justify-center text-sm rpg-border bg-(--omori-black) text-(--omori-white) py-2 px-4 font-semibold">
            Warning: This site contains spoilers for the game Omori. Proceed at
            your own risk!
          </span>
          <div className="absolute -top-5 -right-5">
            <button
              onClick={hideWarning}
              aria-label="Close Spoiler Warning"
              className={`
                      transition-colors rpg-border bg-(--omori-white) p-2 cursor-pointer
                      ${
                        isHeadspace
                          ? "hover:bg-(--omori-purple)"
                          : "hover:bg-(--omori-black)"
                      }
                    `}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <Image
          src="/mewo.webp"
          alt="Mewo"
          width={64}
          height={64}
          className="inline-block w-16 h-16"
        />
      </div>
    </div>
  );
};

export default SpoilerWarning;
