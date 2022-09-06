import React from "react";
import Image from "next/image";

interface InformationProps {
  name: string;
  imageUrl: string;
  street: string;
  postcode: string;
  tel: string;
  mail: string;
}

export const Information = ({
  name,
  imageUrl,
  street,
  postcode,
  tel,
  mail,
}: InformationProps) => {
  return (
    <div>
      <p>{name}</p>
      <Image alt="Portraitbild" src={imageUrl} width={200} height={200} />
      <p>{street}</p>
      <p>{postcode}</p>
      <p>{tel}</p>
      <a href={`mailto:${mail}`}>{mail}</a>
    </div>
  );
};
