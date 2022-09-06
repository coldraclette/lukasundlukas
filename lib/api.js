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

export async function getAboutAmgwerdData(preview) {
  const result = await getClient(preview).fetch(`*[_type == "about_amgwerd"] {
    name,
    work_title,
    imageurl,
    street,
    postcode,
    tel,
    mail
    }`);
  return result[0];
}

export async function getExperienceAmgwerdData(preview) {
  const result = await getClient(preview).fetch(
    `*[_type == "experience_amgwerd"] | order(_createdAt desc)`
  );
  return result;
}

export async function getAboutFrischknechtData(preview) {
  const result = await getClient(preview)
    .fetch(`*[_type == "about_frischknecht"] {
    name,
    work_title,
    imageurl,
    street,
    postcode,
    tel,
    mail
    }`);
  return result[0];
}

export async function getExperienceFrischknechtData(preview) {
  const result = await getClient(preview).fetch(
    `*[_type == "experience_frischknecht"] | order(_createdAt desc)`
  );
  return result;
}

export async function getProjectsData(preview) {
  const result = await getClient(preview).fetch(
    `*[_type == "projects"] {
      title,
      slug,
      thumbnail,
      number
    }`
  );
  return result;
}

export async function getAllProjectsWithSlug(preview) {
  const result = await getClient(preview).fetch(
    `*[_type == "projects"] {
      slug {
        current
      }
    }`
  );
  return result;
}

export async function getSingleProjectData(preview, slug) {
  const result = await getClient(preview).fetch(
    `*[_type == "projects" && slug.current == $slug][0]`,
    { slug }
  );
  return result;
}
