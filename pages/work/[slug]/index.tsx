import { GetStaticProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { getAllProjectsWithSlug, getSingleProjectData } from "../../../lib/api";
import { urlForImage } from "../../../lib/sanity";
import { projectData } from "../../../lib/types";
import { buildFileUrl, parseAssetId } from "@sanity/asset-utils";
import { SEO } from "../../../components/SEO";

interface Props {
  project: projectData;
}

export default function SingleWorkPage({ project }: Props) {
  const [paddingTop, setPaddingTop] = useState<string>("0");

  const returnVideoUrl = () => {
    const id = project.video.asset._ref;
    return buildFileUrl(parseAssetId(id), {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: "production",
    });
  };

  const renderVideo = () => (
    <div className="my-4">
      <video controls preload="auto" width="100%">
        <source src={returnVideoUrl()} />
      </video>
    </div>
  );

  return (
    <div>
      <SEO
        title={project.title}
        desc={project.description}
        url={project.slug.current}
        // imgUrl={urlForImage(project.thumbnail).url()}
      />
      <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
      <p className="md:text-lg font-thin mt-2">{project.description}</p>
      {project.video && renderVideo()}
      <div>
        {project.images &&
          project.images.map((img: any) => {
            return (
              <div
                className="relative mb-4"
                style={{ paddingTop }}
                key={img._key}
              >
                <Image
                  alt="Portraitbild"
                  src={urlForImage(img).url()}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                  onLoad={({ target }) => {
                    const { naturalWidth, naturalHeight } =
                      target as HTMLImageElement;
                    setPaddingTop(
                      `calc(100% / (${naturalWidth} / ${naturalHeight})`
                    );
                  }}
                />
              </div>
            );
          })}
      </div>
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
