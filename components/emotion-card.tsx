"use client";

import { Emotion } from "@/constants";
import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { getColorOfEmotion } from "@/lib/utils";

interface EmotionCardProps {
  emotion: Emotion;
}

const MobileEmotionCard = ({ emotion }: EmotionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const textColor = { color: emotion.color };
  const borderColor = { borderColor: emotion.color };

  useGSAP(() => {
    if (!detailsRef.current) return;

    if (isExpanded) {
      gsap.to(detailsRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(detailsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isExpanded]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className={`
        rpg-border bg-(--omori-white) w-full
        ${isExpanded ? "shadow-lg" : ""}
        transition-all duration-300
      `}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-50">
        <Image
          src={emotion.imgSrc}
          alt={emotion.name}
          width={64}
          height={64}
          loading="lazy"
          className="rpg-border"
        />

        <div className="flex-1">
          <h3 style={textColor} className="font-bold text-lg pixel-text">
            {emotion.emoji} {emotion.name}
          </h3>
          <div className="rpg-border bg-black text-(--omori-white) px-2 py-1 text-xs mt-1 inline-block">
            {emotion.effect}
          </div>
        </div>

        <div
          className="text-2xl transition-transform duration-300"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </div>
      </div>

      <div
        ref={detailsRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="p-4 border-t-2" style={borderColor}>
          <p className="text-sm mb-3">{emotion.description}</p>

          <div className="space-y-2 text-sm">
            <div className="rpg-border p-2">
              <span className="font-bold">💪 Strong Against:</span>{" "}
              <span
                style={{
                  color: getColorOfEmotion(emotion.strong),
                }}
              >
                {emotion.strong || "None"}
              </span>
            </div>
            <div className="rpg-border p-2">
              <span className="font-bold">💔 Weak Against:</span>{" "}
              <span
                style={{
                  color: getColorOfEmotion(emotion.weak),
                }}
              >
                {emotion.weak || "None"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopEmotionCard = ({ emotion }: EmotionCardProps) => {
  const textColor = { color: emotion.color };
  const borderColor = { borderColor: emotion.color };
  const [isOpen, setIsOpen] = useState(false);

  const handleTabletClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HoverCard
      openDelay={100}
      closeDelay={100}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <HoverCardTrigger onClick={handleTabletClick}>
        <div
          className={`relative rpg-border p-1 w-fit hover:scale-110 transition-transform duration-150`}
        >
          <Image
            src={emotion.imgSrc}
            alt={emotion.name}
            loading="lazy"
            width={180}
            height={180}
          />
          <div className="rpg-bg rpg-border text-center">
            <span style={textColor} className="font-bold">
              {emotion.name}
            </span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        style={borderColor}
        className="rpg-border w-64 bg-(--omori-white) p-4 h-fit"
        side={
          emotion.name === "HAPPY"
            ? "right"
            : emotion.name === "NEUTRAL"
            ? "bottom"
            : "top"
        }
      >
        <p>
          {emotion.emoji}{" "}
          <span style={textColor} className="font-bold">
            {emotion.name}
          </span>
        </p>
        <div className="p-2 bg-black text-(--omori-white) text-sm">
          <span>{emotion.effect}</span>
        </div>
        <p className="my-2 text-sm">{emotion.description}</p>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-bold">💪 Strong Against:</span>{" "}
            <span
              style={{
                color: getColorOfEmotion(emotion.strong),
              }}
            >
              {emotion.strong || "None"}
            </span>
          </div>
          <div>
            <span className="font-bold">💔 Weak Against:</span>{" "}
            <span
              style={{
                color: getColorOfEmotion(emotion.weak),
              }}
            >
              {emotion.weak || "None"}
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export { MobileEmotionCard, DesktopEmotionCard };
