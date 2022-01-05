import React from "react";
import ReactCardFlip from "react-card-flip";

// styles
import { SocialIcon } from "react-social-icons";
import {
  Wrapper,
  Content,
  Thumb,
  Text,
  ExploreBtn,
  SocialMedia,
  Menu,
  Options,
  OtherOptions,
  OtherMenu,
} from "./Home.styles";

// assests
import BgVideo from "../BgVideo";
import Profile from "../../assests/profile.jpg";
import Resume from "../../assests/resume.pdf";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <>
        <BgVideo />
        <Wrapper>
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="vertical"
            flipSpeedBackToFront="2"
            flipSpeedFrontToBack="2"
            className="card"
          >
            <Content>
              <Thumb src={Profile} alt="profile" />
              <Text>
                Hello, I am
                <h1>Ritesh Kumar Pandey</h1>
                <h4>
                  "Professional Developer born in an era where its too late to
                  explore the Earth and too early to explore the Universe who
                  believes turning good ideas into great projects where
                  creativity meets technology"
                </h4>
                <ExploreBtn onClick={this.handleClick}>Explore</ExploreBtn>
                <SocialMedia>
                  <SocialIcon
                    url="mailto:riteshkumar.dp@somaiya.edu"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/ritesh28p/"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://github.com/stupiloid-coder"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://www.instagram.com/simply__sstupid/"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://wa.me/+919082407433"
                    network="whatsapp"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                </SocialMedia>
              </Text>
            </Content>
            <Content>
              <Text>
                <Menu>
                  <Options to="/education">
                    <i className="fas fa-user-graduate"></i> <br /> Education
                  </Options>
                  <Options to="/experience">
                    <i className="fas fa-briefcase"></i> <br /> Experience
                  </Options>
                  <Options to="/skills">
                    <i className="fas fa-chart-line"></i> <br /> Skills
                  </Options>
                  <Options to="/achievements">
                    <i className="fas fa-trophy"></i> <br /> Achievements
                  </Options>
                  <Options to="/experience">
                    <i className="fas fa-bahai"></i> <br /> Certifications
                  </Options>
                  <Options to="/experience">
                    <i className="fas fa-code"></i> <br /> Projects
                  </Options>
                </Menu>
                <OtherMenu>
                  <a href={Resume} target="blank">
                    <OtherOptions>
                      <i className="fas fa-download"></i> <br /> Download CV
                    </OtherOptions>
                  </a>
                  <OtherOptions onClick={this.handleClick}>
                    <i className="fas fa-user"></i> <br />
                    About Me
                  </OtherOptions>
                </OtherMenu>
                <SocialMedia>
                  <SocialIcon
                    url="mailto:riteshkumar.dp@somaiya.edu"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/ritesh28p/"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://github.com/stupiloid-coder"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://www.instagram.com/simply__sstupid/"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://wa.me/+919082407433"
                    network="whatsapp"
                    fgColor="#fff"
                    target="blank"
                    className="social-media"
                    style={{ height: 40, width: 40 }}
                  />
                </SocialMedia>
              </Text>
            </Content>
          </ReactCardFlip>
        </Wrapper>
      </>
    );
  }
}

export default Home;
