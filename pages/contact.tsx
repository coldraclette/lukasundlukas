import { ContactInfo } from "../components/contact/contactInfo";
import { SEO } from "../components/SEO";
import { getAboutAmgwerdData, getAboutFrischknechtData } from "../lib/api";

export default function Contact({ amgwerdData, frischknechtData }: any) {
  return (
    <div className="flex flex-col md:flex-row about-wrapper mt-12">
      <SEO title="contact" desc="Kontaktdaten von Lukas und Lukas" url="contact" />
      <div className="mb-4 md:mb-0 flex-1">
        <ContactInfo data={amgwerdData} />
      </div>
      <div className="flex-1">
        <ContactInfo data={frischknechtData} />
      </div>
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
