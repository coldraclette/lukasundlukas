import React from "react";
import { CV } from "../components/about/cv";
import { SEO } from "../components/SEO";
import {
  getAboutAmgwerdData,
  getAboutFrischknechtData,
  getExperienceAmgwerdData,
  getExperienceFrischknechtData,
} from "../lib/api";

export default function About({ amgwerdData, frischknechtData }: any) {
  return (
    <>
      <SEO title="About" desc="Lebensläufe von Lukas und Lukas" url="about" />
      <div className="md:flex justify-between">
        <CV
          aboutData={amgwerdData.aboutData}
          experienceData={amgwerdData.experienceData}
        />
        <CV
          aboutData={frischknechtData.aboutData}
          experienceData={frischknechtData.experienceData}
        />
      </div>
    </>
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
  };
};
