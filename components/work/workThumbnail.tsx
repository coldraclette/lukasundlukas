import Link from "next/link";
import React, { FC, useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

interface WorkThumbnailProps {
  name: string;
  imageUrl: string;
  num: number;
  slug: string;
}

export const WorkThumbnail: FC<WorkThumbnailProps> = ({
  name,
  imageUrl,
  num,
  slug,
}) => {
  return (
    <div
      className={`work-thumbnail-${num} work-thumbnail md:hover:scale-105 md:hover:z-10 relative overflow-hidden rounded shadow hover:shadow-md mb-4 md:mb-0`}
    >
      <Link href={`/work/${slug}`}>
        <a>
          <div className="thumbnail-wrapper">
            <Image
              alt="Portraitbild"
              src={urlForImage(imageUrl).url()}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="work-name-wrapper opacity-100 md:opacity-0 md:hover:opacity-100 absolute bottom-0 inset-0 flex justify-center items-center">
            <div className="work-name text-3xl font-bold">{name}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};
