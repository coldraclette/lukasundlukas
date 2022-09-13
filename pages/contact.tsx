import { Information } from "../components/about/information";
import { getAboutAmgwerdData, getAboutFrischknechtData } from "../lib/api";

export default function Contact({ amgwerdData, frischknechtData }: any) {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:mt-12">
      <div className="mb-4 md:mb-0 md:mr-8">
        <Information
          name={amgwerdData.aboutData.name}
          workTitle={amgwerdData.aboutData.work_title}
          street={amgwerdData.aboutData.street}
          postcode={amgwerdData.aboutData.postcode}
          tel={amgwerdData.aboutData.tel}
          mail={amgwerdData.aboutData.mail}
          imageUrl={amgwerdData.aboutData.imageurl}
        />
      </div>
      <Information
        name={frischknechtData.aboutData.name}
        workTitle={frischknechtData.aboutData.work_title}
        street={frischknechtData.aboutData.street}
        postcode={frischknechtData.aboutData.postcode}
        tel={frischknechtData.aboutData.tel}
        mail={frischknechtData.aboutData.mail}
        imageUrl={frischknechtData.aboutData.imageurl}
      />
    </div>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const aboutAmgwerdData = await getAboutAmgwerdData(preview);
  const aboutFrischknechtData = await getAboutFrischknechtData(preview);

  return {
    props: {
      amgwerdData: {
        aboutData: aboutAmgwerdData,
      },
      frischknechtData: {
        aboutData: aboutFrischknechtData,
      },
      preview,
    },
  };
};
