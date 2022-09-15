export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "number",
      title: "Position number desktop",
      type: "number",
    },
    {
      name: "number_mobile",
      title: "Position number mobile",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "videoWebm",
          title: "Video Webm",
          description: "neuste technologie .webm",
          type: "file",
        },
        {
          name: "videoMp4",
          title: "Video MP4",
          description: "fallback video .mp4",
          type: "file",
        },
        {
          name: "videoImage",
          title: "Video cover image",
          description:
            "videos laden manchmal bei safari mobile kein vorschaubild",
          type: "image",
          options: {
            hotspot: true,
          }, 
        },
      ],
    },
    {
      name: "video",
      title: "Video",
      type: "array",
      of: [
        {
          type: "file",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
};
