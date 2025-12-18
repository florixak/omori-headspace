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
  Moon,
  Trees,
  Castle,
  Bug,
  Palmtree,
  Droplets,
  Fish,
  Eclipse,
  Twitter,
  Facebook,
  Instagram,
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
  effect: {
    type?: "increase" | "decrease" | "some damage to HP";
    stat:
      | "ATTACK"
      | "DEFENSE"
      | "SPEED"
      | "LUCK"
      | "JUICE"
      | "HIT RATE"
      | "No effect";
  }[];
  color: `var(--${string})`;
  description: string;
  imgSrc: {
    headspace: `/emotions/${string}.webp`;
    realWorld: `/emotions/${string}-real.webp`;
  };
  position: string;
  strong: "HAPPY" | "SAD" | "ANGRY" | null;
  weak: "HAPPY" | "SAD" | "ANGRY" | null;
}

export interface Location {
  name: string;
  description: string;
  imgSrc: `/locations/${string}.webp`;
  emoji: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Photo {
  src: `/gallery/${string}.webp`;
  caption: string;
  day: `${number}/${number}`;
  title: string;
}

interface Social {
  href: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
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
      trait: "The Silent Protector",
      description:
        "Sunny's dream alter-ego, calm and expressionless, representing his retreat from reality.",
      imgSrc: "/characters/omori.webp",
      emoji: "⚫",
      emotion: "NEUTRAL",
      weapon: "KNIFE",
      color: "var(--omori-purple)",
      icon: Star,
    },
    {
      name: "AUBREY",
      trait: "The Enthusiastic Friend",
      description: "Bubbly, energetic, and fiercely loyal with a short temper.",
      imgSrc: "/characters/aubrey.webp",
      emoji: "🎀",
      emotion: "ANGRY",
      weapon: "PLUSHIE",
      color: "var(--aubrey-pink)",
      icon: Heart,
    },
    {
      name: "KEL",
      trait: "The Playful Jock",
      description:
        "Upbeat, carefree, loves sports, and often teases his friends.",
      imgSrc: "/characters/kel.webp",
      emoji: "🍊",
      emotion: "HAPPY",
      weapon: "BASKETBALL",
      color: "var(--kel-orange)",
      icon: Zap,
    },
    {
      name: "HERO",
      trait: "The Gentle Leader",
      description:
        "Kind, responsible, skilled cook, and acts as the group's mediator.",
      imgSrc: "/characters/hero.webp",
      emoji: "💙",
      emotion: "NEUTRAL",
      weapon: "FRYING PAN",
      color: "var(--hero-cyan)",
      icon: Shield,
    },
    {
      name: "BASIL",
      trait: "The Sensitive Soul",
      description:
        "Shy, soft-spoken, loves plants and photography, prone to anxiety.",
      imgSrc: "/characters/basil.webp",
      emoji: "🌻",
      emotion: "AFRAID",
      weapon: "GARDENING SHEARS",
      color: "var(--basil-green)",
      icon: Leaf,
    },
    {
      name: "MARI",
      trait: "The Idealized Sister",
      description:
        "A loving, supportive, and comforting presence, representing Sunny's perfect memory.",
      imgSrc: "/characters/mari.webp",
      emoji: "💜",
      emotion: "HAPPY",
      weapon: "N/A",
      color: "var(--mari-red)",
      icon: Flower,
    },
  ],
  realWorld: [
    {
      name: "SUNNY",
      trait: "The Reclusive Protagonist",
      description:
        "Quiet boy, isolated for four years, struggling with guilt and depression.",
      imgSrc: "/characters/sunny.webp",
      emoji: "🏠",
      emotion: "NEUTRAL",
      weapon: "KNIFE",
      color: "var(--omori-purple)",
      icon: Star,
    },
    {
      name: "AUBREY",
      trait: "The Troubled Rebel",
      description:
        "Tough, rebellious leader of The Hooligans, harbors deep grief and resentment.",
      imgSrc: "/characters/aubrey-real.webp",
      emoji: "💔",
      emotion: "ANGRY",
      weapon: "BASEBALL BAT",
      color: "var(--aubrey-pink)",
      icon: Heart,
    },
    {
      name: "KEL",
      trait: "The Persistent Optimist",
      description:
        "Energetic and outgoing, tries to rekindle old friendships and help Sunny.",
      imgSrc: "/characters/kel-real.webp",
      emoji: "🏃",
      emotion: "HAPPY",
      weapon: "BASKETBALL",
      color: "var(--kel-orange)",
      icon: Zap,
    },
    {
      name: "HERO",
      trait: "The Grieving Achiever",
      description:
        "Kind, responsible, but carries heavy grief over Mari, tries to support friends.",
      imgSrc: "/characters/hero-real.webp",
      emoji: "📚",
      emotion: "SAD",
      weapon: "FRYING PAN",
      color: "var(--hero-cyan)",
      icon: Shield,
    },
    {
      name: "BASIL",
      trait: "The Anxious Friend",
      description:
        "Highly anxious, fragile, traumatized by the past, struggles with paranoia.",
      imgSrc: "/characters/basil-real.webp",
      emoji: "🥀",
      emotion: "AFRAID",
      weapon: "GARDENING SHEARS",
      color: "var(--basil-green)",
      icon: Leaf,
    },
    {
      name: "MARI",
      trait: "The Beloved Memory",
      description:
        "Sunny's deceased older sister, remembered fondly in flashbacks and memories.",
      imgSrc: "/characters/mari-real.webp",
      emoji: "👻",
      emotion: "HAPPY",
      weapon: "N/A",
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
    effect: [{ stat: "No effect" }],
    description: "Feeling indifferent. Nothing seems to matter.",
    imgSrc: {
      headspace: "/emotions/neutral.webp",
      realWorld: "/emotions/neutral-real.webp",
    },
    position: "top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    strong: null,
    weak: null,
  },
  {
    name: "HAPPY",
    color: "var(--happy-yellow)",
    emoji: "😊",
    icon: Smile,
    effect: [
      { type: "increase", stat: "LUCK" },
      { type: "increase", stat: "SPEED" },
      { type: "decrease", stat: "HIT RATE" },
    ],
    description: "Feeling joyful and energetic! Everything seems brighter.",
    imgSrc: {
      headspace: "/emotions/happy.webp",
      realWorld: "/emotions/happy-real.webp",
    },
    position: "-top-40 left-1/2 -translate-x-1/2",
    strong: "ANGRY",
    weak: "SAD",
  },
  {
    name: "SAD",
    color: "var(--sad-blue)",
    emoji: "😢",
    icon: Frown,
    effect: [
      { type: "increase", stat: "DEFENSE" },
      { type: "decrease", stat: "SPEED" },
      { type: "some damage to HP", stat: "JUICE" },
    ],
    description: "Feeling down and sluggish. The world feels heavy.",
    imgSrc: {
      headspace: "/emotions/sad.webp",
      realWorld: "/emotions/sad-real.webp",
    },
    position: "-bottom-30 -left-40",
    strong: "HAPPY",
    weak: "ANGRY",
  },
  {
    name: "ANGRY",
    color: "var(--angry-red)",
    emoji: "😡",
    icon: Flame,
    effect: [
      { type: "increase", stat: "ATTACK" },
      { type: "decrease", stat: "DEFENSE" },
    ],
    description: "Filled with rage! Ready to lash out at anything.",
    imgSrc: {
      headspace: "/emotions/angry.webp",
      realWorld: "/emotions/angry-real.webp",
    },
    position: "-bottom-30 -right-40",
    strong: "SAD",
    weak: "HAPPY",
  },
];

const locations: Location[] = [
  {
    name: "WHITESPACE",
    description:
      "A surreal, dream-like realm that serves as a hub connecting various locations in Omori's world.",
    imgSrc: "/locations/whitespace.webp",
    emoji: "⚪",
    icon: Ghost,
  },
  {
    name: "HEADSPACE",
    description:
      "The dream world where the story takes place, filled with memories and emotions.",
    imgSrc: "/locations/headspace.webp",
    emoji: "🌈",
    icon: Star,
  },
  {
    name: "VAST FOREST",
    description:
      "A dense and mysterious forest filled with towering trees and hidden secrets.",
    imgSrc: "/locations/vast-forest.webp",
    emoji: "🌲",
    icon: Trees,
  },
  {
    name: "OTHERWORLD",
    description:
      "A giant moon orbiting HEADSPACE. Luckily it never moves, as a ladder is the only means of getting there.",
    imgSrc: "/locations/otherworld.webp",
    emoji: "🌙",
    icon: Moon,
  },
  {
    name: "SWEETHEART'S CASTLE",
    description:
      "A grand and opulent castle filled with lavish decorations and a touch of whimsy.",
    imgSrc: "/locations/sweethearts-castle.webp",
    emoji: "🏰",
    icon: Castle,
  },
  {
    name: "PYREFLY FOREST",
    description:
      "A huge, mist covered forest surrounding a giant castle. Spiders prey on the weak, and shadows whisper in your ears.",
    imgSrc: "/locations/pyrefly-forest.webp",
    emoji: "🕷️",
    icon: Bug,
  },
  {
    name: "ORANGE OASIS",
    description:
      "Home of DINO'S DIG and a popular tourist spot, this desert oasis also holds its fair share of mystery.",
    imgSrc: "/locations/orange-oasis.webp",
    emoji: "🏜️",
    icon: Palmtree,
  },
  {
    name: "DEEPER WELL",
    description:
      "A dark underground passage that leads to forgotten memories and hidden truths beneath the surface.",
    imgSrc: "/locations/deeper-well.webp",
    emoji: "🕳️",
    icon: Droplets,
  },
  {
    name: "HUMPHREY",
    description:
      "A massive living whale that serves as both a location and a character, filled with bizarre internal landscapes.",
    imgSrc: "/locations/humphrey.webp",
    emoji: "🐋",
    icon: Fish,
  },
  {
    name: "BLACK SPACE",
    description:
      "A dark, surreal void filled with distorted memories and nightmarish imagery. The place where truth hides.",
    imgSrc: "/locations/black-space.webp",
    emoji: "⚫",
    icon: Eclipse,
  },
];

const quotes: Quote[] = [
  {
    text: "You have been living here for as long as you can remember.",
    author: "Narrator",
  },
  {
    text: "It’s okay to feel sad sometimes. That’s how you know when you’re happy.",
    author: "Basil",
  },
  {
    text: "Everything is going to be okay. No matter what happens. Promise me that we’ll always be there for each other.",
    author: "Mari",
  },
  {
    text: "No matter how deep you bury it, the past will always find its way back to you.",
    author: "Basil",
  },
  {
    text: "Why does parting have to hurt so much?",
    author: "Kel",
  },
  {
    text: "Memories can be painful. To forget may be a blessing.",
    author: "Narrator",
  },
  {
    text: "You really are my best friend… Always there when I need you.",
    author: "Omori",
  },
  {
    text: "Hey… don’t worry, everything will be okay!",
    author: "Kel",
  },
  {
    text: "Remember our promise? Always together… even when we’re apart.",
    author: "Mari",
  },
  {
    text: "It’s not just about facing your fears. It’s also about facing your past.",
    author: "Hero",
  },
  {
    text: "When you’re here, everything’s not so scary.",
    author: "Aubrey",
  },
  {
    text: "I... I have to tell you something.",
    author: "Sunny",
  },
  {
    text: "Who am I to you?",
    author: "Omori",
  },
  {
    text: "There’s always another day.",
    author: "Aubrey",
  },
  {
    text: "Bravery isn’t about not being afraid. It’s about being afraid and doing what’s right anyway.",
    author: "Hero",
  },
  {
    text: "It’s okay to be afraid… as long as we face our fears together.",
    author: "Omori",
  },
  {
    text: "What is real and what is imagined is not always clear the first time.",
    author: "Omori",
  },
  {
    text: "Healing doesn’t mean the damage never existed. It means the damage no longer controls our lives.",
    author: "Mari",
  },
  {
    text: "It’s okay to fall apart sometimes. Tacos fall apart, and we still love them.",
    author: "Omori",
  },
  {
    text: "Reality is often disappointing. That’s why we have our imaginations.",
    author: "Omori",
  },
];

const photos: Photo[] = [
  {
    src: "/gallery/01.webp",
    caption:
      '"MARI is teaching everyone how to make flower crowns! OMORI and KEL are holding MARI\'s example. So pretty..."',
    day: "1/1",
    title: "Friendship",
  },
  {
    src: "/gallery/02.webp",
    caption:
      '"OMORI and KEL gave up and ran off, but AUBREY and I got the hang of it really fast!"',
    day: "1/5",
    title: "Nature's Embrace",
  },
  {
    src: "/gallery/03.webp",
    caption:
      "\"HERO's still making his flower crown. It's taking him a little while, but he's getting it. You have to admire his persistence.\"",
    day: "1/10",
    title: "Lunar Adventure",
  },
  {
    src: "/gallery/04.webp",
    caption:
      '"Everyone\'s eating watermelons. So juicy! AUBREY has some seeds on her face. Maybe someone should tell her."',
    day: "1/15",
    title: "Royal Memories",
  },
  {
    src: "/gallery/05.webp",
    caption:
      '"KEL drinking a bottle of MILK, his favorite! I shouldn\'t get too close or he might get my camera wet."',
    day: "1/20",
    title: "Mystic Woods",
  },
  {
    src: "/gallery/06.webp",
    caption:
      '"MARI had HERO take a picture of us. Everyone thinks a flower crown really suits me."',
    day: "1/25",
    title: "Desert Dreams",
  },
  {
    src: "/gallery/07.webp",
    caption:
      '"HERO leaning in for a smooch! KEL looks so annoyed. Ah, brotherly love..."',
    day: "1/20",
    title: "Mystic Woods",
  },
  {
    src: "/gallery/08.webp",
    caption:
      '"We\'re having a picnic today! MARI wanted to take a picture of everyone. Say cheese!"',
    day: "1/25",
    title: "Desert Dreams",
  },
  {
    src: "/gallery/09.webp",
    caption:
      '"After eating, everyone fell asleep, except HERO and MARI. I\'m getting kind of sleepy myself."',
    day: "1/30",
    title: "Sweet Dreams",
  },
  {
    src: "/gallery/10.webp",
    caption:
      '"My best friends... KEL, AUBREY, HERO, and OMORI! I\'ll cherish them all forever."',
    day: "1/30",
    title: "Friendship Forever",
  },
  {
    src: "/gallery/11.webp",
    caption:
      '"All of our feet in a circle! Can you guess whose feet are whose?"',
    day: "1/31",
    title: "Green Thumbs",
  },
  {
    src: "/gallery/12.webp",
    caption:
      "\"MARI and I are posing for a picture together! I'm so glad we're friends.\"",
    day: "1/31",
    title: "Best Friends",
  },
  {
    src: "/gallery/13.webp",
    caption:
      '"Everyone helped me water my plants today! I tend to ramble on for too long when I start talking about plants, so I\'m glad my friends listened to me!"',
    day: "1/31",
    title: "Plant Parent",
  },
  {
    src: "/gallery/14.webp",
    caption:
      '"We found an old couch in the JUNKYARD! There was only enough space on the couch for four people, but I don\'t mind. I have the best view in the entire world!"',
    day: "1/31",
    title: "Home Run",
  },
  {
    src: "/gallery/15.webp",
    caption:
      '"A spider suddenly fell from a tree and surprised everyone! HERO is too AFRAID to look."',
    day: "1/31",
    title: "New Look",
  },
  {
    src: "/gallery/16.webp",
    caption:
      '"Oh, boy! Oh, boy! We were able to score five tickets to "SWEETHEART\'S QUEST FOR HEARTS"! I sure hope nothing unexpected happens..."',
    day: "1/31",
    title: "Master Chef",
  },
  {
    src: "/gallery/17.webp",
    caption:
      '"We\'re at the LAST RESORT! KEL keeps losing at slots. He should really learn when to stop."',
    day: "1/31",
    title: "Lucky Strike",
  },
  {
    src: "/gallery/18.webp",
    caption:
      '"We stopped by the MUSTARD SUB for some grub! COMBO MEALS for everyone!!"',
    day: "1/31",
    title: "Fast Food Fun",
  },
];

const socials: Social[] = [
  {
    href: "#",
    label: "X / Twitter",
    icon: Twitter,
  },
  {
    href: "#",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "#",
    label: "Instagram",
    icon: Instagram,
  },
];

export {
  navLinks,
  floatingEmojis,
  characters,
  emotions,
  locations,
  quotes,
  photos,
  socials,
};
