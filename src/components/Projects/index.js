import React from "react";
import { Wrapper, Content } from "../Common.styles";
import {
  CertificateCard,
  CertificateGrid,
  Grid,
} from "../Certifications/Certification.styles";

// sanity
import sanityClient from "../../client";
import { useEffect, useState } from "react";

const Project = () => {
  const [Projects, setProjects] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(enddate desc) {
            title,
            slug,
            projectlink    
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Grid>
          <CertificateGrid>
            {Projects &&
              Projects.map((project) => (
                <CertificateCard>
                  <h1>{project.title}</h1>
                  <div className="certificateLink">
                    <h3>
                      <a href={"/project-" + project.slug.current}>Know More</a>
                    </h3>
                    <h3>
                      <a href={project.projectlink} target="blank">
                        View Project
                      </a>
                    </h3>
                  </div>
                </CertificateCard>
              ))}
          </CertificateGrid>
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Project;
