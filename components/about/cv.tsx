import React, { FC } from "react";
import { aboutData, experienceData } from "../../lib/types";
import { Information } from "./information";
import { Ocupation } from "./ocupation";

interface Props {
  aboutData: aboutData;
  experienceData: experienceData[];
}

export const CV: FC<Props> = ({ aboutData, experienceData }) => {
  return (
    <div className="flex-1 even:mt-8 md:even:mt-0">
      <Information
        name={aboutData.name}
        workTitle={aboutData.work_title}
        imageUrl={aboutData.imageurl}
      />

      {experienceData.map((exp: any) => (
        <Ocupation
          key={exp._id}
          title={exp.title}
          timespan1={exp.timespan1}
          timespan2={exp.timespan2}
          timespan3={exp.timespan3}
          timespan4={exp.timespan4}
          workTitle1={exp.worktitle1}
          workTitle2={exp.worktitle2}
          workTitle3={exp.worktitle3}
          workTitle4={exp.worktitle4}
          customers={exp.customers}
          text={exp.text}
          text2={exp.text2}
        />
      ))}
    </div>
  );
};
