import React from "react";
import { CV } from "../components/about/cv";
import {
  getAboutAmgwerdData,
  getAboutFrischknechtData,
  getExperienceAmgwerdData,
  getExperienceFrischknechtData,
} from "../lib/api";

export default function About({ amgwerdData, frischknechtData }: any) {
  return (
    <div className="flex justify-between">
      <CV data={amgwerdData} />
      <CV data={frischknechtData} />
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const aboutAmgwerdData = await getAboutAmgwerdData(preview);
  const experienceAmgwerdData = await getExperienceAmgwerdData(preview);
  const aboutFrischknechtData = await getAboutFrischknechtData(preview);
  const experienceFrischknechtData = await getExperienceFrischknechtData(
    preview
  );

  return {
    props: {
      amgwerdData: {
        aboutData: aboutAmgwerdData,
        experienceData: experienceAmgwerdData,
      },
      frischknechtData: {
        aboutData: aboutFrischknechtData,
        experienceData: experienceFrischknechtData,
      },

      preview,
    },
    // check revalidate to be sure
    revalidate: 1,
  };
};
