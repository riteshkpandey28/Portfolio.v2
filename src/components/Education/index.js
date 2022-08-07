import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// styles
import { Wrapper, Content } from "../Common.styles";
import { Timeline } from "./Education.styles";

const Education = () => (
  <Wrapper>
    <Content style={{ display: "block" }}>
      <VerticalTimeline animate={true} layout="1-column-left">
        <Timeline
          contentStyle={{ background: "#86003c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #86003c" }}
          date="August, 2011 - Present"
        >
          <h3>
            K. J. Somaiya Institute of Engineering and Information Technology
          </h3>
          <h4>Bachelors of Technology in Information Technology</h4>
          <p>
            <ul>
              <li>Current CGPA : 9.94 / 10</li>
              <li>Class Representative</li>
              <li>Senior Student Mentor</li>
              <li>
                Taking up electives in Artificial Intelligence and Optimization
              </li>
            </ul>
          </p>
        </Timeline>

        <Timeline
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#e41f7b", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #e41f7b" }}
          date="July, 2017 - June, 2019"
        >
          <h3>B. K. Birla College of Arts, Science &amp; Commerce</h3>
          <h4>Junior College</h4>
          <p>
            <ul>
              <li>HSC Score : 87.08 %</li>
              <li>Class Representative</li>
              <li>Took Electronics as Vocational Subject</li>
            </ul>
          </p>
        </Timeline>

        <Timeline
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff8ba0", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff8ba0" }}
          date="June, 2007 - June, 2017"
        >
          <h3>National English High School</h3>
          <h4>High School</h4>
          <p>
            <ul>
              <li>SSC Score : 91.20 %</li>
              <li>Class Representative</li>
              <li>Represented School in Cricket at District Level</li>
              <li>
                Brilliant Performance Recognition at State Level in English
                Marathon
              </li>
            </ul>
          </p>
        </Timeline>
      </VerticalTimeline>
    </Content>
  </Wrapper>
);

export default Education;
