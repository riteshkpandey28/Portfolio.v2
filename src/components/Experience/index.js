import React, { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// sanity
import sanityClient from "../../client";
import SanityBlockContent from "@sanity/block-content-to-react";

// styles
import { Wrapper, Content } from "../Common.styles";
import { ExperienceTab } from "./Experience.styles";
import { Timeline } from "../Education/Education.styles";

const Experience = () => {
  const [Works, setWorks] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience" && experienceCategory == "work"] | order(startdate desc) {
            role,
            company,
            companylogo{
                asset->{
                    _id,
                    url
                },
                alt
            },
            type,
            startdate,
            enddate,
            body
        }`
      )
      .then((data) => setWorks(data))
      .catch(console.error);
  }, []);

  const [Volunteers, setVolunteers] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience" && experienceCategory == "volunteer"] | order(startdate desc) {
            role,
            company,
            companylogo{
                asset->{
                    _id,
                    url
                },
                alt
            },
            startdate,
            enddate,
            body
        }`
      )
      .then((data) => setVolunteers(data))
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
      <Content>
        <ExperienceTab>
          <div className="wrapper">
            <input
              className="radio"
              id="one"
              name="group"
              type={"radio"}
              checked
            />
            <input className="radio" id="two" name="group" type={"radio"} />
            <div className="tabs">
              <label className="tab" id="one-tab" for="one">
                Work Experience
              </label>
              <label className="tab" id="two-tab" for="two">
                Volunteer Experience
              </label>
            </div>
            <div className="panels">
              <div className="panel" id="one-panel">
                <VerticalTimeline animate={true} layout="1-column-left">
                  {Works &&
                    Works.map((work) => (
                      <>
                        <Timeline
                          contentStyle={{
                            background: "#8e05c2",
                            color: "#fff",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid  #8e05c2",
                          }}
                          iconStyle={{
                            width: "50px",
                            height: "50px",
                          }}
                          icon={
                            <img
                              className="experienceImg"
                              src={work.companylogo.asset.url}
                              alt={work.companylogo.alt}
                            />
                          }
                        >
                          <h3>{work.role}</h3>
                          <h4>
                            {work.company} | {work.type}
                          </h4>
                          <p>
                            <SanityBlockContent
                              blocks={work.body}
                              projectId="6mqb66gq"
                              dataset="production"
                            />
                          </p>
                          <h5>
                            {new Date(work.startdate).toLocaleString("en-us", {
                              month: "long",
                              year: "numeric",
                            })}
                            -{" "}
                            {work.enddate
                              ? new Date(work.enddate).toLocaleString("en-us", {
                                  month: "long",
                                  year: "numeric",
                                })
                              : "Present"}
                          </h5>
                        </Timeline>
                      </>
                    ))}
                </VerticalTimeline>
              </div>
              <div className="panel" id="two-panel">
                <VerticalTimeline animate={true} layout="1-column-right">
                  {Volunteers &&
                    Volunteers.map((volunteer) => (
                      <>
                        <Timeline
                          contentStyle={{
                            background: "#e41f7b",
                            color: "#fff",
                          }}
                          contentArrowStyle={{
                            borderLeft: "7px solid  #e41f7b",
                          }}
                          iconStyle={{
                            width: "50px",
                            height: "50px",
                          }}
                          icon={
                            <img
                              className="experienceImg"
                              src={volunteer.companylogo.asset.url}
                              alt={volunteer.companylogo.alt}
                            />
                          }
                        >
                          <h3>{volunteer.role}</h3>
                          <h4>{volunteer.company}</h4>
                          <p>
                            <SanityBlockContent
                              blocks={volunteer.body}
                              projectId="6mqb66gq"
                              dataset="production"
                            />
                          </p>
                          <h5>
                            {new Date(volunteer.startdate).toLocaleString(
                              "en-us",
                              {
                                month: "long",
                                year: "numeric",
                              }
                            )}
                            -{" "}
                            {volunteer.enddate
                              ? new Date(volunteer.enddate).toLocaleString(
                                  "en-us",
                                  {
                                    month: "long",
                                    year: "numeric",
                                  }
                                )
                              : "Present"}
                          </h5>
                        </Timeline>
                      </>
                    ))}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </ExperienceTab>
      </Content>
    </Wrapper>
  );
};

export default Experience;
