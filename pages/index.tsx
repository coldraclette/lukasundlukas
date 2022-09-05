import React from "react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { NavigationFrontpage } from "../components/navigationFrontpage";
import { getFrontpageData } from "../lib/api";

interface Props {
  title: string;
  subtitle: string;
  introduction: string;
  preview: boolean;
}

export default function Home({ title, subtitle, introduction }: Props) {
  return (
    <div>
      <Head>
        <title>Lukas und Lukas</title>
        <meta name="description" content={introduction} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Hero title={title} subtitle={subtitle} introduction={introduction} />
        <NavigationFrontpage />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const { title, subtitle, introduction } = await getFrontpageData(preview);
  return {
    props: { title, subtitle, introduction, preview },
    // check revalidate to be sure
    revalidate: 1,
  };
};
