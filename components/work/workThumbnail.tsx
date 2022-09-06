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
    <div className={`work-thumbnail-${num} work-thumbnail relative overflow-hidden rounded`}>
      <Link href={`/work/${slug}`}>
        <a>
          <div style={{ height: 220, width: 300 }}>
            <Image
              alt="Portraitbild"
              src={urlForImage(imageUrl).url()}
              layout="fill"
              objectFit="cover"
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
