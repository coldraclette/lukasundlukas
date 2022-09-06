import React from "react";
import { WorkThumbnail } from "../../components/work/workThumbnail";
import { getProjectsData } from "../../lib/api";

export default function Work({ data }: any) {
  return <p>test</p>;
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getProjectsData(preview);
  return {
    props: { data, preview },
    // check revalidate to be sure
    revalidate: 1,
  };
};
