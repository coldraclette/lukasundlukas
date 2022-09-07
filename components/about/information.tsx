import React, { useState } from "react";
import Image from "next/image";

interface InformationProps {
  name: string;
  workTitle: string;
  imageUrl: string;
  street: string;
  postcode: string;
  tel: string;
  mail: string;
}

export const Information = ({
  name,
  workTitle,
  imageUrl,
  street,
  postcode,
  tel,
  mail,
}: InformationProps) => {
  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl font-bold ">{name}</p>
        <p className="text-xl font-thin">{workTitle}</p>
      </div>
      <div className="relative">
        <Image
          alt="Portraitbild"
          src={imageUrl ? imageUrl : "/images/placeholder2.jpg"}
          className="rounded"
          width={300}
          height={300}
        />
      </div>
      <p className="font-thin">{street}</p>
      <p className="font-thin">{postcode}</p>
      <p className="font-thin">{tel}</p>
      <a className="font-thin" href={`mailto:${mail}`}>
        {mail}
      </a>
    </div>
  );
};
