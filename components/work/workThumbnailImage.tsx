import { FC } from "react";
import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

interface props {
  image: string;
  title: string;
}

export const WorkThumbnailImage: FC<props> = ({ image, title }) => {
  return (
    <div className="thumbnail-wrapper">
      <Image
        alt={title}
        src={urlForImage(image).url()}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};