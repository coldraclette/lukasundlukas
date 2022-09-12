import { WorkThumbnail } from "./workThumbnail";

export const WorkWrapper = ({ projects }: any) => {
  return (
    <div className="work-container mx-auto">
      <div className="work flex flex-col md:grid md:gap-8">
        {projects &&
          projects.map((project: any, index: any) => (
            <WorkThumbnail
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              subtitle={project.subtitle}
              num={project.number}
              numMobile={project.number_mobile}
              slug={project.slug.current}
            />
          ))}
      </div>
    </div>
  );
};
