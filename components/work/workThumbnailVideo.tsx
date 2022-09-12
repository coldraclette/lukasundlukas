import { FC } from "react";
import { returnVideoUrl } from "../../lib/utils";

interface props {
  videoWebm: { image: string | null } | undefined;
  videoMp4: { image: string | null } | undefined;
}

export const WorkThumbnailVideo: FC<props> = ({ videoWebm, videoMp4 }) => {
  return (
    <div className="h-full w-full">
      <video
        preload="auto"
        muted
        playsInline
        autoPlay
        loop
        className="object-cover h-full w-full"
      >
        <source src={returnVideoUrl(videoWebm)} />
        <source src={returnVideoUrl(videoMp4)} />
      </video>
    </div>
  );
};
