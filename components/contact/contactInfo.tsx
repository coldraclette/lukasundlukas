interface props {
  data: any;
}
export const ContactInfo = ({ data }: props) => {
  return (
    <div>
      <div className="md:mb-2 text-3xl md:text-5xl font-bold">
        <p>{data.aboutData.name}</p>
        <p className="font-thin">{data.aboutData.work_title}</p>
      </div>
      <div className="text-lg md:text-2xl font-thin">
        <p>{data.aboutData.street}</p>
        <p>{data.aboutData.postcode}</p>
        <p>{data.aboutData.tel}</p>
        <a href={`mailto:${data.aboutData.mail}`}>{data.aboutData.mail}</a>
      </div>
    </div>
  );
};
