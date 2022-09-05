import client, { previewClient } from "./sanity";

const getClient = (preview) => (preview ? previewClient : client);

export async function getFrontpageData(preview) {
  const result = await getClient(preview).fetch(`*[_type == "frontpage"] {
     title,
      subtitle,
     introduction 
    }`);
  return result[0];
}
