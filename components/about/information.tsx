import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { urlForImage, urlForPlaceholder } from "../../lib/sanity";

interface InformationProps {
  name: string;
  workTitle: string;
  imageUrl?: string;
  street?: string;
  postcode?: string;
  tel?: string;
  mail?: string;
}

export const Information = ({
  name,
  workTitle,
  imageUrl,
}: InformationProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-xl font-thin">{workTitle}</p>
      </div>
      {imageUrl && (
        <div className="relative">
          <Image
            alt="Portraitbild"
            src={urlForImage(imageUrl).url()}
            className="rounded"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={urlForPlaceholder(imageUrl).url()}
          />
        </div>
      )}
    </div>
  );
};
