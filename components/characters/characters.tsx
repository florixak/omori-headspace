"use client";

import { characters } from "@/constants";
import useSpaceStore from "@/store/space-store";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import CharacterCard from "./character-card";
import Title from "../title";

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
        <Title
          heading="PARTY MEMBERS"
          title="THE FRIENDS"
          subtitle="Your party members. Each with their own strengths and weaknesses."
          className="my-16"
        />

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
