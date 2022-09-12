import React from "react";

interface Props {
  title: string;
  subtitle: string;
  introduction: string;
}

export const Hero = ({ title, subtitle, introduction }: Props) => {
  return (
    <div className="my-8">
      <h1 className="md:text-center text-5xl md:text-6xl font-bold mb-4">{title}</h1>
      <h2 className="md:text-center text-2xl md:text-2xl font-thin mb-4">{subtitle}</h2>
      <p className="font-thin md:text-center md:text-lg md:mt-8">{introduction}</p>
    </div>
  );
};
