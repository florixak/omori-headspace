"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Emotion } from "@/constants";
import useEmotion from "@/hooks/use-emotion";
import { getColorOfEmotion } from "@/lib/utils";
import useSpaceStore from "@/store/space-store";
import Image from "next/image";
import { useState } from "react";

interface EmotionCardProps {
  emotion: Emotion;
}

const MobileEmotionCard = ({ emotion }: EmotionCardProps) => {
  const { space } = useSpaceStore();
  const { emotionEffectText } = useEmotion({ emotion });

  const textColor = { color: emotion.color };
  const borderColor = { borderColor: emotion.color };
  const isHeadspace = space === "headspace";

  return (
    <div
      aria-label="Emotion Card"
      className={`
        relative rpg-border bg-(--omori-white) w-full transition-all duration-300
      `}
    >
      <div className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-50">
        <Image
          src={
            isHeadspace ? emotion.imgSrc.headspace : emotion.imgSrc.realWorld
          }
          alt={emotion.name}
          width={64}
          height={64}
          loading="lazy"
          className="rpg-border"
          unoptimized
        />

        <div className="flex-1">
          <h3 style={textColor} className="font-bold text-lg pixel-text">
            {emotion.emoji} {emotion.name}
          </h3>
          <div className="bg-black text-(--omori-white) px-2 py-1 text-xs mt-1 inline-block w-full">
            {emotionEffectText()}
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="p-4 border-t-2" style={borderColor}>
          <p className="text-sm mb-3">{emotion.description}</p>

          <div className="space-y-2 text-sm">
            <div>
              <span className="font-bold">💪 Strong Against:</span>{" "}
              <span
                className="font-semibold"
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
                className="font-semibold"
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
  const { space } = useSpaceStore();
  const { emotionEffectText } = useEmotion({ emotion });
  const [isOpen, setIsOpen] = useState(false);

  const textColor = { color: emotion.color };
  const borderColor = { borderColor: emotion.color };
  const isHeadspace = space === "headspace";

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
            src={
              isHeadspace ? emotion.imgSrc.headspace : emotion.imgSrc.realWorld
            }
            alt={emotion.name}
            loading="lazy"
            width={180}
            height={180}
            unoptimized
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
          {emotionEffectText()}
        </div>
        <p className="my-2 text-sm">{emotion.description}</p>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-bold">💪 Strong Against:</span>{" "}
            <span
              className="font-semibold"
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
              className="font-semibold"
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

export { DesktopEmotionCard, MobileEmotionCard };
