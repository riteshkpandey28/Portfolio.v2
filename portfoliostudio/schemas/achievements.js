export default {
  name: "achievement",
  title: "Achievements",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Achievement Recieved",
      type: "string",
    },
    {
      name: "event",
      title: "Event",
      type: "string",
    },
    {
      name: "organizer",
      title: "Issued by",
      type: "string",
    },
    {
      name: "issuedate",
      title: "Issue Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
  ],
};
