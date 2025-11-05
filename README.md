# 🌙 OMORI Fan Website

A stunning interactive fan website celebrating the indie psychological horror RPG **OMORI**, built as a portfolio demonstration of modern web development techniques and animation capabilities.

## ✨ Features

### 🎭 Interactive Sections

- **Hero Section** - Toggle between Headspace (colorful dream world) and Real World (somber reality)
- **Characters** - 3D tilt effect cards showcasing main cast with character-specific color themes
- **Emotion System** - Interactive triangle diagram with hover tooltips and detailed tier progression modals
- **Locations** - Parallax scrolling through iconic game areas
- **Quotes** - Auto-cycling carousel of memorable dialogue
- **Gallery** - Lightbox modal system for viewing artwork

### 🎨 Design Philosophy

- Faithful recreation of OMORI's distinctive black & white aesthetic
- Character-specific color accents (purple, pink, orange, cyan, green, red)
- RPG-style UI elements (pixel borders, battle boxes, retro typography)
- Smooth transitions between Headspace and Real World themes

### ⚡ Technical Highlights

- **GSAP Animations** - Smooth entrance effects and scroll-triggered animations
- **ScrollTrigger** - Dynamic content reveals as you scroll
- **3D Tilt Effects** - Interactive card transforms using Vanilla Tilt
- **Parallax Scrolling** - Layered depth on location backgrounds
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Accessibility** - Respects `prefers-reduced-motion` for users with motion sensitivities

## ⚡ Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP
- **UI Components:** shadcn
- **Icons:** Lucide React
- **State Management:** Zustand
- **Linting:** ESLint 9
- **Build Tool:** Next.js (Turbopack)

## 📁 Project Structure

```
├── App.tsx                    # Main app component
├── components/
│   ├── Hero.tsx              # Headspace/Real World toggle
│   ├── Characters.tsx        # Character cards with 3D tilt
│   ├── Emotions.tsx          # Interactive emotion triangle
│   ├── Locations.tsx         # Parallax location showcase
│   ├── Quotes.tsx            # Carousel component
│   ├── Gallery.tsx           # Modal gallery system
│   ├── Navigation.tsx        # Smooth scroll navigation
│   └── Footer.tsx            # Credits and disclaimers
├── styles/
│   └── globals.css           # Custom CSS properties & animations
└── Attributions.md           # Image credits and legal info
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/omori-fan-website.git

# Navigate to project directory
cd omori-fan-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎮 Interactive Elements

| Feature                | Desktop                            | Mobile              |
| ---------------------- | ---------------------------------- | ------------------- |
| **Headspace Toggle**   | Click button                       | Tap button          |
| **Emotion Details**    | Hover for tooltip, Click for modal | Tap for modal       |
| **Character Cards**    | 3D tilt on mouse move              | Static cards        |
| **Parallax Locations** | Mouse-based parallax               | Scroll-based reveal |
| **Quote Carousel**     | Auto-advance + nav buttons         | Swipe + nav buttons |

## 🎨 Color System

The site uses OMORI's iconic color palette:

```css
/* Headspace - Black & White with pops of color */
--omori-black: #000000;
--omori-white: #ffffff;
--omori-gray: #808080;

/* Character Colors */
--omori-purple: #9370db; /* Omori/Sunny */
--aubrey-pink: #ff69b4;
--kel-orange: #ff8c42;
--hero-cyan: #4dd9e8;
--basil-green: #90ee90;
--mari-red: #dc143c;

/* Emotional States */
--happy-yellow: #ffd700;
--sad-blue: #4169e1;
--angry-red: #ff4444;
--neutral-gray: #a9a9a9;

/* Backgrounds */
--headspace-bg: #f5f5f5;
--real-world-bg: #2a2a2a;
--white-space-bg: #ffffff;

/* Typography */
--font-game: "Courier New", monospace;
--font-display: "Comic Sans MS", cursive;
```

## ⚖️ Legal Disclaimer

This is a **non-commercial fan project** created for educational and portfolio purposes. OMORI, its characters, story, and assets are © OMOCAT LLC. This project is not affiliated with, endorsed by, or connected to OMOCAT LLC.

All placeholder images are sourced from Omori Wiki Fandom. See the full credits.

**This project is intended to demonstrate:**

- Modern React development patterns
- Advanced CSS/Tailwind techniques
- Animation and interaction design
- Responsive web design principles

## 🙏 Credits

- **Game:** OMORI by OMOCAT
- **Images and text:** [Omori Wiki Fandom](https://omori.fandom.com/wiki/OMORI)
- **Icons:** Lucide React
- **UI Components:** Radix UI, shadcn/ui
- **Fonts:** System fonts with pixel-style fallbacks

## 📝 License

This fan project is released under the MIT License for the code only. OMORI game content, characters, and story elements remain the intellectual property of OMOCAT LLC.

---

<div align="center">

**"Everything is going to be okay."**

Made with 💜 by Ondřej Pták

</div>
