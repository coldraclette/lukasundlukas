import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { urlForImage } from "../../lib/sanity";
import { Linkedin } from "./linkedin";

interface InformationProps {
  name: string;
  workTitle: string;
  imageUrl?: string;
  street: string;
  postcode: string;
  tel: string;
  mail: string;
  linkedin?: string;
}

export const Information = ({
  name,
  workTitle,
  imageUrl,
  street,
  postcode,
  tel,
  mail,
  linkedin,
}: InformationProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl font-bold ">{name}</p>
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
          />
        </div>
      )}
      <p className="font-thin">{street}</p>
      <p className="font-thin">{postcode}</p>
      <p className="font-thin">{tel}</p>
      <a className="font-thin" href={`mailto:${mail}`}>
        {mail}
      </a>
      {router.pathname === "/contact" && <Linkedin url={linkedin} />}
    </div>
  );
};
