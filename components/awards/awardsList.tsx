interface props {
  awards: [];
}
export const AwardsList = ({ awards }: props) => {
  return (
    <>
      {awards.map((award: any, index: number) => {
        return (
          <div key={index} className="mb-2">
            <p className="font-thin">{award.competition}</p>
            <p className="font-bold">{award.awards}</p>
          </div>
        );
      })}
    </>
  );
};
