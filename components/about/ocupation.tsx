import React, { FC } from "react";

interface OcupationProps {
  title: string;
  timespan1?: string;
  timespan2?: string;
  timespan3?: string;
  timespan4?: string;
  workTitle1?: string;
  workTitle2?: string;
  workTitle3?: string;
  workTitle4?: string;
  text?: string;
  text2?: string;
}

export const Ocupation: FC<OcupationProps> = ({
  title,
  timespan1,
  timespan2,
  timespan3,
  timespan4,
  workTitle1,
  workTitle2,
  workTitle3,
  workTitle4,
  text,
  text2,
}) => {
  return (
    <div className="my-4">
      <p className="font-bold">{title}</p>
      <div className="flex">
        <div className="mr-6">
          <p>{timespan1}</p>
          <p>{timespan2}</p>
          <p>{timespan3}</p>
          <p>{timespan4}</p>
        </div>
        <div>
          <p>{workTitle1}</p>
          <p>{workTitle2}</p>
          <p>{workTitle3}</p>
          <p>{workTitle4}</p>
        </div>
      </div>
      <div>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};
