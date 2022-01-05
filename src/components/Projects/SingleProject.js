import sanityClient from "../../client";
import SanityBlockContent from "@sanity/block-content-to-react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Content, Wrapper } from "../Common.styles";
import { ProjectContent } from "./Project.styles";

import BgVideo from "../BgVideo";

const SingleProject = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
            title,
            projectimage{
              asset->{
                _id,
                url
              },
              alt
            },
            enddate,
            projectlink,
            tags,
            description   
        }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject)
    return (
      <Wrapper>
        <Content>
          <h2>Loading ....</h2>
        </Content>
      </Wrapper>
    );

  return (
    <>
      <Wrapper>
        <Content>
          <ProjectContent>
            <h1>{singleProject.title}</h1>

            <div className="projectImg">
              <img
                src={singleProject.projectimage.asset.url}
                alt={singleProject.projectimage.alt}
              />
            </div>

            <div className="projectDate">
              <h3>Finished on :</h3>
              <h2>
                {new Date(singleProject.enddate).toLocaleString("en-us", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
            </div>

            <h3>Technology Stack : </h3>
            <div className="techstack">
              {singleProject.tags &&
                singleProject.tags.map((tag) => <span>{tag}</span>)}
            </div>

            <h3>Description : </h3>
            <p>
              <SanityBlockContent
                blocks={singleProject.description}
                projectId="6mqb66gq"
                dataset="production"
              />
            </p>

            <div className="projectLink">
              <a href={singleProject.projectlink} target="blank">
                View Project
              </a>
            </div>
          </ProjectContent>
        </Content>
      </Wrapper>
    </>
  );
};

export default SingleProject;
