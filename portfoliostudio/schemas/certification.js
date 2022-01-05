export default {
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Certification Name",
      type: "string",
    },
    {
      name: "issuedby",
      title: "Issued By",
      type: "string",
    },
    {
      name: "issuedate",
      title: "Issue Date",
      type: "date",
    },
    {
      name: "certificatelink",
      title: "Certificate Link",
      type: "url",
    },
  ],
};
