"use client";

import { characters } from "@/constants";
import useSpaceStore from "@/store/space-store";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import CharacterCard from "./character-card";

gsap.registerPlugin(ScrollTrigger);

const Characters = () => {
  const { space } = useSpaceStore();

  const spaceCharacters =
    space === "real-world" ? characters.realWorld : characters.whitespace;

  return (
    <section
      id="characters"
      className="min-h-screen bg-(--omori-white) flex items-center justify-center px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-16">
          <div className="battle-box inline-block mb-6">
            <span className="text-sm opacity-70"> /| PARTY MEMBERS |\ </span>
          </div>

          <h2 className="text-(--omori-black) mb-4 pixel-text">THE FRIENDS</h2>

          <p className="max-w-2xl mx-auto text-lg">
            Your party members. Each with their own strengths and weaknesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {spaceCharacters.map((character, index) => (
            <CharacterCard
              key={character.name}
              character={character}
              index={index}
            />
          ))}
        </div>
        <div className="w-fit mx-auto text-center mt-16 text-(--omori-black) rpg-border p-6 bg-(--omori-white)">
          <p className="text-sm">
            💜 Your friends will always be there for you. 💜
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characters;
