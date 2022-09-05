import React from "react";

interface Props {
  title: string;
  subtitle: string;
  introduction: string;
}

export const Hero = ({ title, subtitle, introduction }: Props) => {
  return (
    <div className="my-8">
      <h1 className="text-center text-6xl font-bold mb-4">{title}</h1>
      <h2 className="text-center text-2xl mb-4">{subtitle}</h2>
      <p className="text-center">{introduction}</p>
    </div>
  );
};
