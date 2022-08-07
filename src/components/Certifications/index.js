import React from "react";
import { useEffect, useState } from "react";

// sanity
import sanityClient from "../../client";

// sanity
import { Wrapper, Content } from "../Common.styles";
import { CertificateCard, CertificateGrid, Grid } from "./Certification.styles";

const Certification = () => {
  const [Certificates, setCertificates] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "certification"] | order(issuedate desc) {
            title,
            issuedby,
            issuedate,
            certificatelink
        }`
      )
      .then((data) => setCertificates(data))
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Grid>
          <CertificateGrid>
            {Certificates &&
              Certificates.map((certificate) => (
                <CertificateCard>
                  <h1>{certificate.title}</h1>
                  <h2>{certificate.issuedby}</h2>
                  <div className="certificateLink">
                    <h3>
                      {new Date(certificate.issuedate).toLocaleString("en-us", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                    <a href={certificate.certificatelink} target="blank">
                      View Certificate
                    </a>
                  </div>
                </CertificateCard>
              ))}
          </CertificateGrid>
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Certification;
