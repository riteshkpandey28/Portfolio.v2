import react from "react";
import { Link } from "react-router-dom";

// styles
import { SocialIcon } from "react-social-icons";
import {
  Wrapper,
  Content,
  Thumb,
  Text,
  ExploreBtn,
  SocialMedia,
} from "./Header.styles";

// images
import Profile from "../../assests/profile1.jpg";

const Header = ({ ritesh = "ritesh" }) => (
  <Wrapper>
    <Content>
      <Thumb src={Profile} alt="profile" />
      <Text>
        Hello, I am
        <h1>Ritesh Kumar Pandey</h1>
        <h4>
          "Professional Developer born in an era where its too late to explore
          the Earth and too early to explore the Universe who believes turning
          good ideas into great projects where creativity meets technology"
        </h4>
        <Link to={`/${ritesh}`}>
          <ExploreBtn>Know Me</ExploreBtn>
        </Link>
        <SocialMedia>
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
        </SocialMedia>
      </Text>
    </Content>
  </Wrapper>
);

export default Header;
