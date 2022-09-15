export default {
  name: "about",
  title: "About Page",
  type: "document",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "body_left",
      title: "Textblock links",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
     {
      name: "body_right",
      title: "Textblock rechts",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
