export default {
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skillName",
      title: "Skill Name",
      type: "string",
    },
    {
      name: "skillCategory",
      title: "Skill Category",
      type: "string",
      options: {
        list: [
          { value: "languages", title: "Languages" },
          { value: "frameworks", title: "Fameworks and Databases" },
          { value: "tools", title: "Tools and Technologies" },
        ],
      },
    },
  ],
};
