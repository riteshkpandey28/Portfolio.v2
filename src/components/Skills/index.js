import { useEffect, useState } from "react";

// sanity
import sanityClient from "../../client";

// styles
import { Wrapper, Content } from "../Common.styles";
import { SkillGrid, SkillContent, SkillSection, Text } from "./Skills.styles";

const Skills = () => {
  const [Languages, setLanguages] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill" && skillCategory == "languages"]{
          skillName
      }`
      )
      .then((data) => setLanguages(data))
      .catch(console.error);
  }, []);

  const [Frameworks, setFrameworks] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill" && skillCategory == "frameworks"]{
          skillName
      }`
      )
      .then((data) => setFrameworks(data))
      .catch(console.error);
  }, []);

  const [Tools, setTools] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill" && skillCategory == "tools"]{
          skillName
      }`
      )
      .then((data) => setTools(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <Text>
            <SkillGrid>
              <SkillSection>
                <h1>Languages</h1>
                <div className="content">
                  {Languages &&
                    Languages.map((language) => (
                      <>
                        <SkillContent key={language.skillName}>
                          {language.skillName}
                        </SkillContent>
                      </>
                    ))}
                </div>
              </SkillSection>
              <SkillSection>
                <h1>Frameworks / Databases</h1>
                <div className="content">
                  {Frameworks &&
                    Frameworks.map((framework) => (
                      <>
                        <SkillContent key={framework.skillName}>
                          {framework.skillName}
                        </SkillContent>
                      </>
                    ))}
                </div>
              </SkillSection>
              <SkillSection>
                <h1>Tools / Technologies</h1>
                <div className="content">
                  {Tools &&
                    Tools.map((tool) => (
                      <>
                        <SkillContent key={tool.skillName}>
                          {tool.skillName}
                        </SkillContent>
                      </>
                    ))}
                </div>
              </SkillSection>
            </SkillGrid>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
};

export default Skills;
