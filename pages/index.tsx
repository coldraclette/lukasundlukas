import React from "react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { getFrontpageData, getProjectsData } from "../lib/api";
import { frontpageData } from "../lib/types";
import { WorkThumbnail } from "../components/work/workThumbnail";

interface Props {
  data: frontpageData;
}

export default function Home({ data, projects }: any) {
  const { title, subtitle, introduction } = data;
  return (
    <div>
      <Head>
        <title>Lukas und Lukas</title>
        <meta name="description" content={introduction} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title={title} subtitle={subtitle} introduction={introduction} />
      <div>
        <div className="work-container mx-auto">
          <div className="work flex flex-col md:grid md:gap-8">
            {projects &&
              projects.map((project: any, index: any) => (
                <WorkThumbnail
                  key={index}
                  name={project.title}
                  imageUrl={project.thumbnail}
                  num={project.number}
                  numMobile={project.number_mobile}
                  slug={project.slug.current}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getFrontpageData(preview);
  const projects = await getProjectsData(preview);

  return {
    props: { data, projects, preview },
    // check revalidate to be sure
    revalidate: 1,
  };
};
