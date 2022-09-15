import { GetStaticProps } from "next";
import React from "react";
import { getAllProjectsWithSlug, getSingleProjectData } from "../../../lib/api";
import { projectData } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { renderVideo } from "../../../lib/utils";
import { WorkTitle } from "../../../components/work/workTitle";
import { WorkImages } from "../../../components/work/workImages";

interface Props {
  project: projectData;
}

export default function SingleWorkPage({ project }: Props) {
  const seoTitle = `${project.title} - ${project.subtitle}`;
  
  return (
    <div>
      <SEO
        title={seoTitle}
        desc={project.description}
        url={project.slug.current}
        // imgUrl={urlForImage(project.thumbnail).url()}
      />
      <WorkTitle
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
      />
      {project.video && renderVideo(project)}
      {project.images && <WorkImages images={project.images} />}
    </div>
  );
}

export const getStaticPaths = async () => {
  const allProjects = await getAllProjectsWithSlug();

  return {
    paths: allProjects?.map((project: projectData) => ({
      params: { slug: project.slug.current },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: any) => {
  const project = await getSingleProjectData(preview, params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: { project, preview },
  };
};
