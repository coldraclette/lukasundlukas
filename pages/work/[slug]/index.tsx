import { GetStaticProps } from "next";
import React from "react";
import { getAllProjectsWithSlug, getSingleProjectData } from "../../../lib/api";

export default function SingleWorkPage() {
  return (
    <>
      <p>single work page</p>
    </>
  );
}

export const getStaticPaths = async () => {
  const allProjects = await getAllProjectsWithSlug();

  return {
    paths: allProjects?.map((project: any) => ({
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
