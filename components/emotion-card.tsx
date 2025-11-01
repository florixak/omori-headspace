"use client";

import { Emotion } from "@/constants";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface EmotionCardProps {
  emotion: Emotion;
}

const EmotionCard = ({ emotion }: EmotionCardProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);
  const textColor = { color: emotion.color };
  const borderColor = { borderColor: emotion.color };

  if (isMobile) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger>
          <div
            className={`relative rpg-border p-1 w-fit hover:scale-110 transition-transform duration-150 mb-2`}
          >
            <Image
              src={emotion.imgSrc}
              alt={emotion.name}
              width={128}
              height={128}
              loading="lazy"
            />
            <div className="rpg-bg rpg-border text-center">
              <span style={textColor} className="font-bold">
                {emotion.name}
              </span>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute left-full ml-4 top-0">
          <div
            style={borderColor}
            className="rpg-border w-64 bg-(--omori-white) p-4 h-fit"
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
            <p className="mt-2 text-sm">{emotion.description}</p>
            <div className="mt-2 text-sm">
              <span className="font-bold">Strong Against:</span>{" "}
              {emotion.strong ? emotion.strong : "None"}
            </div>
            <div className="mt-1 text-sm">
              <span className="font-bold">Weak Against:</span>{" "}
              {emotion.weak ? emotion.weak : "None"}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <div
          className={`relative rpg-border p-1 w-fit hover:scale-110 transition-transform duration-150`}
        >
          <Image
            src={emotion.imgSrc}
            alt={emotion.name}
            width={128}
            height={128}
            loading="lazy"
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
        <p className="mt-2 text-sm">{emotion.description}</p>
        <div className="mt-2 text-sm">
          <span className="font-bold">Strong Against:</span>{" "}
          {emotion.strong ? emotion.strong : "None"}
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">Weak Against:</span>{" "}
          {emotion.weak ? emotion.weak : "None"}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default EmotionCard;
