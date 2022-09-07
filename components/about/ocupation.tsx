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
  customers?: string;
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
  customers,
  text,
  text2,
}) => {
  return (
    <div className="mt-8">
      <p className="text-lg md:text-xl font-bold">{title}</p>
      <div className="flex">
        {timespan1 && (
          <div className="mr-12 md:mr-6">
            <p className="text-sm md:text-base font-thin">{timespan1}</p>
            {timespan2 && (
              <p className="text-sm md:text-base font-thin">{timespan2}</p>
            )}
            {timespan3 && (
              <p className="text-sm md:text-base font-thin">{timespan3}</p>
            )}
            {timespan4 && (
              <p className="text-sm md:text-base font-thin">{timespan4}</p>
            )}
          </div>
        )}
        {workTitle1 && (
          <div>
            <p className="text-sm md:text-base font-bold">{workTitle1}</p>
            {workTitle2 && (
              <p className="text-sm md:text-base font-bold">{workTitle2}</p>
            )}
            {workTitle3 && (
              <p className="text-sm md:text-base font-bold">{workTitle3}</p>
            )}
            {workTitle4 && (
              <p className="text-sm md:text-base font-bold">{workTitle4}</p>
            )}
          </div>
        )}
      </div>
      {customers && (
        <div className="mt-2 max-w-md">
          <p className="text-sm md:text-base font-bold">Kunden</p>
          <p className="text-sm md:text-base font-thin">{customers}</p>
        </div>
      )}
      {text && (
        <div>
          <p className="text-sm md:text-base">{text}</p>
          {text2 && <p className="text-sm md:text-base">{text2}</p>}
        </div>
      )}
    </div>
  );
};
