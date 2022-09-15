import React, { ReactElement } from "react";
import { Hero } from "../components/hero";
import { getFrontpageData, getProjectsData } from "../lib/api";
import { frontpageData } from "../lib/types";
import { WorkThumbnail } from "../components/work/workThumbnail";
import { SEO } from "../components/SEO";
import Link from "next/link";
import { WorkWrapper } from "../components/work/workWrapper";

interface Props {
  data: frontpageData;
}

export default function Home({ data, projects }: any) {
  const { title, subtitle, introduction } = data;

  return (
    <div>
      <SEO desc={subtitle} imgUrl="/public/images/lukasundlukas_screenshot.png" url="/" />
      <Hero title={title} subtitle={subtitle} introduction={introduction} />
      <WorkWrapper projects={projects} />
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const projects = await getProjectsData(preview);
  const data = await getFrontpageData(preview);

  return {
    props: { data, projects, preview },
    // check revalidate to be sure
  };
};
