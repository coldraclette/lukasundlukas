import Link from "next/link";
import React, { FC, useState } from "react";
import Image from "next/image";

interface WorkThumbnailProps {
  name: string;
  imageUrl?: string;
  num: number;
}

export const WorkThumbnail: FC<WorkThumbnailProps> = ({
  name,
  imageUrl,
  num,
}) => {
  const [paddingTop, setPaddingTop] = useState<string>("0");

  return (
    <div
      className={`work-thumbnail-${num} work-thumbnail relative `}
      style={{ paddingTop }}
    >
      <Link href={`/work/${name}`}>
        <a>
          <div>
            <Image
              alt="Portraitbild"
              src="/images/placeholder2.jpg"
              layout="fill"
              objectFit="contain"
              onLoad={({ target }) => {
                const { naturalWidth, naturalHeight } =
                  target as HTMLImageElement;
                setPaddingTop(
                  `calc(100% / (${naturalWidth} / ${naturalHeight})`
                );
              }}
            />
          </div>
          <div className="work-name-wrapper absolute bottom-0 inset-0 flex justify-center items-center">
            <div className="work-name text-3xl font-bold">{name}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};
