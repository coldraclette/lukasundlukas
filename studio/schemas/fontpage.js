export default {
  name: "frontpage",
  title: "Frontpage",
  type: "document",
  // __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "string",
    },
  ],
};
