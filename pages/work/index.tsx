import React from "react";
import { WorkThumbnail } from "../../components/work/workThumbnail";
import { getProjectsData } from "../../lib/api";

export default function Work({ data }: any) {
  return (
    <div>
      <h1>Work</h1>
      <div className="work-container mx-auto">
        <div className="work">
          {data &&
            data.map((project: any) => (
              <WorkThumbnail
                key={project._id}
                name={project.title}
                imageUrl={project.thumbnail}
                num={project.number}
                slug={project.slug.current}
              />
            ))}
          {/* <WorkThumbnail name="test3" num={3} />
          <WorkThumbnail name="test4" num={4} />
          <WorkThumbnail name="test5" num={5} />
          <WorkThumbnail name="test6" num={6} />
          <WorkThumbnail name="test7" num={7} />
          <WorkThumbnail name="test8" num={8} />
          <WorkThumbnail name="test9" num={9} />
          <WorkThumbnail name="test10" num={10} /> */}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getProjectsData(preview);
  return {
    props: { data, preview },
    // check revalidate to be sure
    revalidate: 1,
  };
};
