import {
  Flower,
  Heart,
  Leaf,
  LucideProps,
  Shield,
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

export { navLinks, floatingEmojis, characters };
