export default {
  name: "about",
  title: "About Page",
  type: "document",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "body",
      title: "Textblock",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
