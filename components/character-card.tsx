import { SpaceCharacter } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

interface CharacterCardProps {
  character: SpaceCharacter;
  index: number;
}

const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = character.icon;

  const bgColor = {
    backgroundColor: character.color,
  };
  const textColor = { color: character.color };

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!cardRef.current || prefersReducedMotion) return;
    const element = cardRef.current;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      rotationX: -20,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.2)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left; // X position within the element
      const y = e.clientY - top; // Y position within the element

      const centerX = width / 2; // Center X of the element
      const centerY = height / 2; // Center Y of the element

      const rotateX = (y - centerY) / 20; // Adjust the divisor to control tilt intensity
      const rotateY = (centerX - x) / 20; // Adjust the divisor to control tilt intensity

      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      className={`group relative rpg-border bg-(--omori-white) overflow-hidden cursor-pointer`}
      ref={cardRef}
    >
      <div style={bgColor} className={`absolute top-0 left-0 w-full h-2`} />
      <Icon
        style={textColor}
        className={`absolute top-8 right-8 size-8 opacity-40`}
      />

      <div className="p-6">
        <Image
          src={character.imgSrc}
          alt={character.name}
          className={`mb-4 rounded-lg rpg-border`}
          width={180}
          height={180}
          loading="lazy"
          unoptimized
        />
        <h3 className="mb-2">{character.name}</h3>
        <div
          style={bgColor}
          className={`inline-block px-3 py-1 mb-3 text-xs border-2 border-(--omori-black) text-(--omori-white)`}
        >
          {character.trait}
        </div>
        <p className="text-sm mb-4 leading-relaxed">{character.description}</p>
        <hr />
        <div className="mt-2 flex items-center justify-between text-base">
          <span>EMOTION:</span>
          <span style={textColor}>{character.emotion}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-base">
          <span>WEAPON:</span>
          <span>{character.weapon}</span>
        </div>
        <div className="mt-2 mb-1 flex items-center justify-between text-base">
          <span>HP:</span>
          <span>∞/∞</span>
        </div>
        <div
          style={bgColor}
          className="w-full h-3 border-2 border-(--omori-black)"
        />
      </div>
    </div>
  );
};

export default CharacterCard;
