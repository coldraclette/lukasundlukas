import React from "react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { NavigationFrontpage } from "../components/navigationFrontpage";
import { getFrontpageData } from "../lib/api";
import { frontpageData } from "../lib/types";

interface Props {
  data: frontpageData;
}

export default function Home({ data }: Props) {
  const { title, subtitle, introduction } = data;
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
  const data = await getFrontpageData(preview);
  return {
    props: { data, preview },
    // check revalidate to be sure
    revalidate: 1,
  };
};
