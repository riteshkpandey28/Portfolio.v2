export default {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "experienceCategory",
      title: "Experience Category",
      type: "string",
      options: {
        list: [
          { value: "work", title: "Work" },
          { value: "volunteer", title: "Volunteer" },
        ],
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
    },

    {
      name: "companylogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "type",
      title: "Experience Type",
      type: "string",
      options: {
        list: [
          { value: "Full Time", title: "Full Time" },
          { value: "Part Time", title: "Part Time" },
          { value: "Internship", title: "Internship" },
          { value: "Trainee", title: "Trainee" },
        ],
      },
    },
    {
      name: "startdate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
    {
      name: "currentlyworking",
      title: "Are you currently working here ?",
      type: "boolean",
    },
    {
      name: "enddate",
      title: "End Date",
      type: "date",
      hidden: ({ document }) => document?.currentlyworking,
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
    {
      name: "body",
      title: "Description",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Start Date, New",
      name: "startdateDesc",
      by: [{ field: "startdate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "company",
      media: "companylogo",
    },
  },
};
