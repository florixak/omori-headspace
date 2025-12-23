import { Pause, Play } from "lucide-react";

interface PlayButtonProps {
  isHeadspace: boolean;
  isRunning: boolean;
  toggleRunning: () => void;
}

const PlayButton = ({
  isHeadspace,
  isRunning,
  toggleRunning,
}: PlayButtonProps) => {
  return (
    <button
      onClick={toggleRunning}
      aria-label={isRunning ? "Pause Quotes" : "Play Quotes"}
      className={`rpg-border px-4 py-2 flex items-center justify-center rounded transition-all duration-300 w-auto sm:w-28 cursor-pointer
        ${
          isHeadspace
            ? "bg-(--omori-black) text-(--omori-white) hover:bg-(--omori-purple)"
            : "bg-(--omori-white) text-(--omori-black) hover:bg-(--kel-orange)"
        }
        ${isRunning ? "" : "opacity-80"}
      `}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
      <span className="ml-2 text-sm font-mono hidden sm:inline">
        {isRunning ? "PAUSE" : "PLAY"}
      </span>
    </button>
  );
};

export default PlayButton;
