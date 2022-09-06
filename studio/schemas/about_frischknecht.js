export default {
  name: "about_frischknecht",
  title: "About (Frischknecht)",
  type: "document",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "work_title",
      title: "Work title",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "street",
      title: "Street",
      type: "string",
    },
    {
      name: "postcode",
      title: "Postcode",
      type: "string",
    },
    {
      name: "tel",
      title: "Tel",
      type: "string",
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
  ],
};
