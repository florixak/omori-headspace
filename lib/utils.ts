import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorOfEmotion(
  emotion: "HAPPY" | "SAD" | "ANGRY" | "NEUTRAL" | null
): string {
  switch (emotion) {
    case "HAPPY":
      return "var(--happy-yellow)";
    case "SAD":
      return "var(--sad-blue)";
    case "ANGRY":
      return "var(--angry-red)";
    case "NEUTRAL":
      return "var(--neutral-gray)";
    default:
      return "var(--omori-black)";
  }
}
