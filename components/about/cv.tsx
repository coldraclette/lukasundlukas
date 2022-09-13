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
      <a href={aboutData.linkedin} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style={{ fill: "rgb(229, 231, 235)" }}
        >
          <circle cx="4.983" cy="5.009" r="2.188"></circle>
          <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
        </svg>
      </a>
    </div>
  );
};
