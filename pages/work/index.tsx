import React from "react";
import { getProjectsData } from "../../lib/api";
import { frontpageData } from "../../lib/types";
import { SEO } from "../../components/SEO";
import { WorkWrapper } from "../../components/work/workWrapper";

interface Props {
  data: frontpageData;
}

export default function Work({ projects }: any) {
  return (
    <div className="md:mt-12">
      <SEO title="work" desc="Unsere Projekte" />
      <WorkWrapper projects={projects} />
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const projects = await getProjectsData(preview);

  return {
    props: { projects, preview },
  };
};
