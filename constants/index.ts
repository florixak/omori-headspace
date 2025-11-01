import {
  Flame,
  Flower,
  Frown,
  Ghost,
  Heart,
  Leaf,
  LucideProps,
  Shield,
  Smile,
  Star,
  Zap,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface FloatingEmoji {
  whitespace: { emoji: string; color: string };
  realWorld: { emoji: string; color: string };
  position: string;
  delay: number;
  id: number;
}

export interface SpaceCharacter {
  name: string;
  trait: string;
  description: string;
  imgSrc: `/characters/${string}.webp`;
  emoji: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  emotion: "NEUTRAL" | "HAPPY" | "SAD" | "ANGRY" | "AFRAID";
  weapon: string;
  color: `var(--${string})`;
}

interface Character {
  whitespace: SpaceCharacter[];
  realWorld: SpaceCharacter[];
}

export interface Emotion {
  name: "NEUTRAL" | "HAPPY" | "SAD" | "ANGRY";
  emoji: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  effect: string;
  color: `var(--${string})`;
  description: string;
  imgSrc: `/emotions/${string}`;
  position: string;
  strong: "HAPPY" | "SAD" | "ANGRY" | null;
  weak: "HAPPY" | "SAD" | "ANGRY" | null;
}

const navLinks: NavLink[] = [
  { label: "CHARACTERS", href: "#characters" },
  { label: "EMOTIONS", href: "#emotions" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "QUOTES", href: "#quotes" },
  { label: "GALLERY", href: "#gallery" },
];

const floatingEmojis: FloatingEmoji[] = [
  {
    whitespace: { emoji: "⭐️", color: "bg-(--omori-white)" },
    realWorld: { emoji: "📷", color: "bg-(--basil-green)" },
    position: "top-1/2 -left-24",
    delay: 0,
    id: 1,
  },
  {
    whitespace: { emoji: "🌙", color: "bg-(--omori-purple)" },
    realWorld: { emoji: "🎹", color: "bg-(--omori-purple)" },
    position: "-top-24 -right-10",
    delay: 0.7,
    id: 2,
  },
  {
    whitespace: { emoji: "☁️", color: "bg-(--kel-orange)" },
    realWorld: { emoji: "🏏", color: "bg-(--aubrey-pink)" },
    position: "-top-42 -left-42",
    delay: 0.3,
    id: 3,
  },
  {
    whitespace: { emoji: "🌸", color: "bg-(--aubrey-pink)" },
    realWorld: { emoji: "🏀", color: "bg-(--kel-orange)" },
    position: "-top-42 -right-32",
    delay: 0.1,
    id: 4,
  },
];

const characters: Character = {
  whitespace: [
    {
      name: "OMORI",
      trait: "The Silent Protagonist",
      description:
        "A boy who wears a black tank top, long black socks, and black-striped shorts.",
      imgSrc: "/characters/omori.webp",
      emoji: "💀",
      emotion: "NEUTRAL",
      weapon: "KNIFE",
      color: "var(--omori-purple)",
      icon: Star,
    },
    {
      name: "AUBREY",
      trait: "The Energetic Friend",
      description:
        "A girl with a short temper and even shorter patience for those who annoy her.",
      imgSrc: "/characters/aubrey.webp",
      emoji: "🎀",
      emotion: "ANGRY",
      weapon: "BASEBALL BAT",
      color: "var(--aubrey-pink)",
      icon: Heart,
    },
    {
      name: "KEL",
      trait: "The Athletic Optimist",
      description:
        "An upbeat kid who can cheer up anyone with his happy-go-lucky attitude.",
      imgSrc: "/characters/kel.webp",
      emoji: "🏀",
      emotion: "HAPPY",
      weapon: "BASKETBALL",
      color: "var(--kel-orange)",
      icon: Zap,
    },
    {
      name: "HERO",
      trait: "The Caring Older Brother",
      description:
        "The oldest of the group. He is kind, understanding, and always there to help.",
      imgSrc: "/characters/hero.webp",
      emoji: "🍳",
      emotion: "NEUTRAL",
      weapon: "FRYING PAN",
      color: "var(--hero-cyan)",
      icon: Shield,
    },
    {
      name: "BASIL",
      trait: "The Gentle Photographer",
      description: "A shy boy who loves taking care of plants and photography.",
      imgSrc: "/characters/basil.webp",
      emoji: "🌿",
      emotion: "AFRAID",
      weapon: "SHEARS",
      color: "var(--basil-green)",
      icon: Leaf,
    },
    {
      name: "MARI",
      trait: "The Mysterious Sister",
      description:
        "A caring older sister who always knows how to make everyone smile.",
      imgSrc: "/characters/mari.webp",
      emoji: "🌸",
      emotion: "HAPPY",
      weapon: "UMBRELLA",
      color: "var(--mari-red)",
      icon: Flower,
    },
  ],
  realWorld: [
    {
      name: "SUNNY",
      trait: "The Real-World Counterpart",
      description:
        "Sunny is the real-world counterpart of Omori. He is a quiet boy.",
      imgSrc: "/characters/sunny.webp",
      emoji: "😶",
      emotion: "NEUTRAL",
      weapon: "KNIFE",
      color: "var(--omori-purple)",
      icon: Star,
    },
    {
      name: "AUBREY",
      trait: "The Energetic Friend",
      description: "Aubrey is strong-willed and protective of her friends.",
      imgSrc: "/characters/aubrey-real.webp",
      emoji: "🎀",
      emotion: "HAPPY",
      weapon: "BASEBALL BAT",
      color: "var(--aubrey-pink)",
      icon: Heart,
    },
    {
      name: "KEL",
      trait: "The Athletic Optimist",
      description:
        "Kel is a cheerful and energetic character who loves sports and physical activities.",
      imgSrc: "/characters/kel-real.webp",
      emoji: "🏀",
      emotion: "HAPPY",
      weapon: "BASKETBALL",
      color: "var(--kel-orange)",
      icon: Zap,
    },
    {
      name: "HERO",
      trait: "The Caring Older Brother",
      description: "Hero is a kind-hearted and responsible character.",
      imgSrc: "/characters/hero-real.webp",
      emoji: "🍳",
      emotion: "NEUTRAL",
      weapon: "FRYING PAN",
      color: "var(--hero-cyan)",
      icon: Shield,
    },
    {
      name: "BASIL",
      trait: "The Gentle Photographer",
      description:
        "Basil is a shy and sensitive character who has a passion for photography.",
      imgSrc: "/characters/basil-real.webp",
      emoji: "🌿",
      emotion: "NEUTRAL",
      weapon: "SHEARS",
      color: "var(--basil-green)",
      icon: Leaf,
    },
    {
      name: "MARI",
      trait: "The Mysterious Sister",
      description:
        "Mari is Sunny's older sister, known for her enigmatic presence and caring nature.",
      imgSrc: "/characters/mari-real.webp",
      emoji: "🌸",
      emotion: "HAPPY",
      weapon: "UMBRELLA",
      color: "var(--mari-red)",
      icon: Flower,
    },
  ],
};

const emotions: Emotion[] = [
  {
    name: "NEUTRAL",
    color: "var(--neutral-gray)",
    emoji: "😐",
    icon: Ghost,
    effect: "No effect",
    description: "Feeling indifferent. Nothing seems to matter.",
    imgSrc: "/emotions/neutral.webp",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    strong: null,
    weak: null,
  },
  {
    name: "HAPPY",
    color: "var(--happy-yellow)",
    emoji: "😊",
    icon: Smile,
    effect: "+1 SPEED, -1 HIT RATE",
    description: "Feeling joyful and energetic! Everything seems brighter.",
    imgSrc: "/emotions/happy.webp",
    position: "-top-40 left-1/2 -translate-x-1/2",
    strong: "ANGRY",
    weak: "SAD",
  },
  {
    name: "SAD",
    color: "var(--sad-blue)",
    emoji: "😢",
    icon: Frown,
    effect: "+1 DEFENSE, -1 SPEED",
    description: "Feeling down and sluggish. The world feels heavy.",
    imgSrc: "/emotions/sad.webp",
    position: "-bottom-30 -left-40",
    strong: "HAPPY",
    weak: "ANGRY",
  },
  {
    name: "ANGRY",
    color: "var(--angry-red)",
    emoji: "😡",
    icon: Flame,
    effect: "+1 ATTACK, -1 DEFENSE",
    description: "Filled with rage! Ready to lash out at anything.",
    imgSrc: "/emotions/angry.webp",
    position: "-bottom-30 -right-40",
    strong: "SAD",
    weak: "HAPPY",
  },
];

export { navLinks, floatingEmojis, characters, emotions };
