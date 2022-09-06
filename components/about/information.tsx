import React from "react";
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
      <p>
        {name}, {workTitle}
      </p>
      <Image
        alt="Portraitbild"
        src={imageUrl ? imageUrl : "/images/placeholder2.jpg"}
        width={200}
        height={200}
      />
      <p>{street}</p>
      <p>{postcode}</p>
      <p>{tel}</p>
      <a href={`mailto:${mail}`}>{mail}</a>
    </div>
  );
};
