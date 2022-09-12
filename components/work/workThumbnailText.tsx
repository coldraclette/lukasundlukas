import { FC } from "react";

interface props {
  title: string;
  subtitle?: string;
}

export const WorkThumbnailText: FC<props> = ({ title, subtitle }) => {
  return (
    <div className="work-name-wrapper opacity-100 md:opacity-0 md:hover:opacity-100 absolute bottom-0 inset-0 flex justify-center items-center">
      <div className="work-name font-bold flex flex-col">
        <span className="text-2xl">{title}</span>
        {subtitle && <span className="text-xl font-thin">{subtitle}</span>}
      </div>
    </div>
  );
};
