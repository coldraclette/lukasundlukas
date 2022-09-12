import Image from "next/image";
import { FC, useState } from "react";
import { urlForImage } from "../../lib/sanity";

interface props {
  images: [];
}

export const WorkImages: FC<props> = ({ images }) => {
  const [paddingTop, setPaddingTop] = useState<string>("0");

  return (
    <div className="mt-4">
      {images.map((img: any) => {
        return (
          <div className="relative mb-4" style={{ paddingTop }} key={img._key}>
            <Image
              alt="Portraitbild"
              src={urlForImage(img).url()}
              layout="fill"
              objectFit="contain"
              className="rounded"
              onLoad={({ target }) => {
                const { naturalWidth, naturalHeight } =
                  target as HTMLImageElement;
                setPaddingTop(
                  `calc(100% / (${naturalWidth} / ${naturalHeight})`
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
