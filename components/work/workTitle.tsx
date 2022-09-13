import { FC } from "react";

interface props {
  title: string;
  subtitle?: string;
  description: string;
}

export const WorkTitle: FC<props> = ({ title, subtitle, description }) => (
  <div className="mb-4">
    <h1 className="text-4xl md:text-6xl font-bold flex flex-col">
      {title} {subtitle && <span className="font-thin text-3xl md:text-5xl">{subtitle}</span>}
    </h1>
    <p className="md:text-lg font-thin mt-2">{description}</p>
  </div>
);
