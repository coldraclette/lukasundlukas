import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { CV } from "../components/about/cv";
import { SEO } from "../components/SEO";
import {
  getAboutAmgwerdData,
  getAboutFrischknechtData,
  getAboutPageData,
  getExperienceAmgwerdData,
  getExperienceFrischknechtData,
} from "../lib/api";

export default function About({
  amgwerdData,
  frischknechtData,
  aboutPageData,
}: any) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="mb-2 md:text-lg font-thin">{children}</p>
      ),
    },
  };

  return (
    <>
      <SEO title="About" desc="Lebensläufe von Lukas und Lukas" url="about" />
      <PortableText value={aboutPageData.body} components={components} />
      <div className="md:flex justify-between mt-4">
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

  const aboutPageData = await getAboutPageData(preview);

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
      aboutPageData,
      preview,
    },
  };
};
