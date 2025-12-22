import Image from "next/image";

const HeadspaceSnake = () => {
  const text = "Sssssssss...? (Going, out?)";
  const textToAnimate = text.split(" ", 1)[0];
  return (
    <div className="relative w-full h-16">
      <Image
        src="/snake.webp"
        alt="Snake"
        width={56}
        height={56}
        className="absolute bottom-2 right-2 w-14 h-14 opacity-50 pointer-events-none"
        loading="lazy"
      />
      <div className="absolute bottom-6 right-16 bg-(--omori-black) border-2 border-(--omori-white) px-4 py-2 shadow text-xs text-(--omori-white) font-semibold z-30 pointer-events-none">
        {textToAnimate.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              display: "inline-block",
              animation: "wave 3s infinite",
              animationDelay: `${i * 0.07}s`,
            }}
          >
            {char}
          </span>
        ))}
        {text.slice(textToAnimate.length)}
      </div>
    </div>
  );
};

export default HeadspaceSnake;
