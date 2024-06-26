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
    mail,
    linkedin
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
      slug,
      thumbnail,
      title,
      subtitle,
      number,
      number_mobile
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

export async function getAboutPageData(preview) {
  const result = await getClient(preview).fetch(`*[_type == "about"][0] {
    body_left,
    body_right
  }`);
  return result;
}

export async function getAwardsAmgwerdData(preview) {
  const result = await getClient(preview)
    .fetch(`*[_type == "awards_amgwerd"] | order(order asc) {
    competition,
    awards
  }`);
  return result;
}

export async function getAwardsFrischknechtData(preview) {
  const result = await getClient(preview)
    .fetch(`*[_type == "awards_frischknecht"] | order(order asc) {
    competition,
    awards
  }`);
  return result;
}
