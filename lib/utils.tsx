import { buildFileUrl, parseAssetId } from "@sanity/asset-utils";

export const returnVideoUrl = (video: any) => {
  const id = video.asset._ref;
  return buildFileUrl(parseAssetId(id), {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
  });
};

export const renderVideo = ({ video }: any) => {
  return (
    <div className="my-4">
      {video.map((vid: any, index: number) => {
        return (
          <video key={index} controls preload="metadata" width="100%" className="mb-4">
            <source src={returnVideoUrl(vid)+"#t0.1"} />
          </video>
        );
      })}
    </div>
  );
};
