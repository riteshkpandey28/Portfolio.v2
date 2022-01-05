export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "projectimage",
      title: "Project Image",
      type: "image",
    },
    {
      name: "enddate",
      title: "Finished on",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
    {
      name: "projectlink",
      title: "Project Link",
      type: "url",
    },
    {
      name: "tags",
      title: "Technology Stack",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "description",
      title: "Project Description",
      type: "blockContent",
    },
  ],
};
