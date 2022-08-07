import React from "react";
import { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// sanity
import sanityClient from "../../client";

// styles
import { Wrapper, Content } from "../Common.styles";
import { Timeline } from "../Education/Education.styles";

const Achievements = () => {
  const [Achievements, setAchievements] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "achievement"] | order(issuedate desc) {
            position,
            event,
            organizer,
            issuedate
        }`
      )
      .then((data) => setAchievements(data))
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
      <Content style={{ display: "block" }}>
        <VerticalTimeline animate={true}>
          {Achievements &&
            Achievements.map((achievement) => (
              <Timeline
                contentStyle={{ background: "#00fff5", color: "#000" }}
                contentArrowStyle={{ borderRight: "7px solid  #00fff5" }}
                icon={<i className="fas fa-trophy achievemntIcon"></i>}
                iconStyle={{
                  background: "#fff",
                }}
              >
                <h1>{achievement.position}</h1>
                <h3>{achievement.event}</h3>
                <h4>{achievement.organizer}</h4>
                <h5>
                  {new Date(achievement.issuedate).toLocaleString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                </h5>
              </Timeline>
            ))}
        </VerticalTimeline>
      </Content>
    </Wrapper>
  );
};

export default Achievements;
