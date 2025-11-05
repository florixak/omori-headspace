import { Photo } from "@/constants";
import Image from "next/image";

interface PhotoCardProps {
  photo: Photo;
  position: string;
  index?: number;
}

const PhotoCard = ({ photo, position, index }: PhotoCardProps) => {
  const even = index !== undefined && index % 2 === 0;

  return (
    <div
      key={photo.src}
      className={`relative flex flex-row items-center ${
        even ? "flex-row-reverse" : ""
      } w-lg gap-5 ${position}`}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        width={160}
        height={180}
        loading="lazy"
      />

      <div className="">
        <span className="block font-bold text-sm mb-1">
          ({photo.day} - {photo.title})
        </span>
        {photo.caption}
      </div>
    </div>
  );
};

export default PhotoCard;
