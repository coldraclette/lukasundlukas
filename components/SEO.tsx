import Head from "next/head";

interface SEOProps {
  title?: string;
  desc: string;
  url?: string;
  imgUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, desc, url, imgUrl }) => {
  const SEOTitle = () => {
    if (!title) {
      return "Lukas und Lukas";
    }

    return `Lukas und Lukas | ${title}`;
  };
  return (
    <Head>
      <title>{SEOTitle()}</title>
      <meta name="description" content={`${desc}`} />
      <meta property="og:title" content={SEOTitle()} />
      <meta property="og:description" content={`${desc}`} key="ogdesc" />
      <meta property="og:url" content={`https://lukasundlukas.ch/${url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} key="ogimage" />
    </Head>
  );
};
