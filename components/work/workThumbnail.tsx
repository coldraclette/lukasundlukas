import Link from "next/link";
import React, { FC } from "react";
import { WorkThumbnailText } from "./workThumbnailText";
import { WorkThumbnailImage } from "./workThumbnailImage";
import { WorkThumbnailVideo } from "./workThumbnailVideo";

interface WorkThumbnailProps {
  thumbnail?: {
    videoWebm: { image: string | null } | undefined;
    videoMp4: { image: string | null } | undefined;
    image: string | null;
  };
  num: number;
  numMobile: number;
  slug: string;
  title: string;
  subtitle?: string;
}

export const WorkThumbnail: FC<WorkThumbnailProps> = ({
  num,
  numMobile,
  slug,
  title,
  subtitle,
  thumbnail,
}) => {
  const renderThumbnail = () => {
    if (thumbnail && thumbnail.image) {
      return <WorkThumbnailImage title={title} image={thumbnail.image} />;
    } else if (thumbnail && thumbnail.videoWebm) {
      return (
        <WorkThumbnailVideo
          videoWebm={thumbnail.videoWebm}
          videoMp4={thumbnail.videoMp4}
        />
      );
    }
  };

  return (
    <div
      className={`work-thumbnail-${num} work-thumbnail text-center md:hover:scale-105 md:hover:z-10 relative overflow-hidden rounded shadow hover:shadow-md mb-4 md:mb-0 `}
      style={{ order: numMobile }}
    >
      <Link href={`/work/${slug}`}>
        <a>
          {renderThumbnail()}
          <WorkThumbnailText title={title} subtitle={subtitle} />
        </a>
      </Link>
    </div>
  );
};
