import { AwardsList } from "../components/awards/awardsList";
import { SEO } from "../components/SEO";
import { getAwardsAmgwerdData, getAwardsFrischknechtData } from "../lib/api";

export default function Contact({ amgwerdData, frischknechtData }: any) {
  return (
    <div className="flex flex-col md:flex-row about-wrapper">
      <SEO title="awards" desc="Awards von Lukas und Lukas" url="awards" />
      <div className="mb-4 md:mb-0 flex-1">
        <p className="text-2xl font-bold">Lukas Amgwerd</p>
        <p className="text-2xl font-thin mb-3 md:mb-4">Creative Director Text</p>
        <AwardsList awards={amgwerdData.awards} />
      </div>
      <div className="flex-1">
        <p className="text-2xl font-bold">Lukas Frischknecht</p>
        <p className="text-2xl font-thin mb-3 md:mb-4">Senior Art Director</p>
        <AwardsList awards={frischknechtData.awards} />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const awardsAmgwerdData = await getAwardsAmgwerdData(preview);
  const awardsFrischknechtData = await getAwardsFrischknechtData(preview);

  return {
    props: {
      amgwerdData: {
        awards: awardsAmgwerdData,
      },
      frischknechtData: {
        awards: awardsFrischknechtData,
      },
      preview,
    },
  };
};
