import React, { FC } from "react";

interface OtherInformationProps {
  title: string;
  text: string;
  text2?: string;
}

export const OtherInformation: FC<OtherInformationProps> = ({
  title,
  text,
  text2,
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      <p>{text2}</p>
    </div>
  );
};
