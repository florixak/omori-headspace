import { Emotion } from "@/constants";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

interface UseEmotionProps {
  emotion: Emotion;
}

const useEmotion = ({ emotion }: UseEmotionProps) => {
  const emotionEffectText = () =>
    emotion.effect.map((eff): React.ReactNode => {
      let symbol: React.ReactNode = null;
      let bgColor = "";

      if (eff.type === "increase") {
        symbol = <ArrowBigUp size={16} className="text-green-400" />;
        bgColor = "bg-green-900/30";
      } else if (eff.type === "decrease") {
        symbol = <ArrowBigDown size={16} className="text-red-400" />;
        bgColor = "bg-red-900/30";
      } else if (eff.type === "some damage to HP") {
        symbol = "💧";
        bgColor = "bg-blue-900/30";
      }

      return (
        <div
          key={eff.stat}
          className={`flex items-center gap-2 rounded ${bgColor} text-sm font-semibold text-white w-fit`}
        >
          {symbol}
          <span>{eff.stat}</span>
        </div>
      );
    });
  return { emotionEffectText };
};

export default useEmotion;
