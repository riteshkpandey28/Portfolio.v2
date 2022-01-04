import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 20px;
  animation: animateHome 4s;

  @keyframes animateHome {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    width: 100%;
  }

  .loader {
    top: 0;
    left: 0;
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 600px;
  max-width: 620px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const Text = styled.div`
  padding: 20px 40px;
  margin: auto;
  width: 70%;
  color: var(--white);
  overflow: hidden;
  text-align: center;

  h1 {
    margin: 0;
    font-family: var(--fontSpeakNow);
    font-size: var(--fontSuperBig);
  }

  h4 {
    font-size: var(--fontMed);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
    h1 {
      font-size: var(--fontMed);
    }
    h4 {
      font-size: 1rem;
    }
  }
`;

export const ExploreBtn = styled.button`
  width: 50%;
  font-size: var(--fontMed);
  font-family: var(--fontRed);
  background: linear-gradient(
    to bottom right,
    var(--lightPink),
    var(--darkPink)
  );
  border: none;
  border-radius: 25px;
  animation: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    color: var(--white);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  .social-media {
    margin: 15px 5px 0px 5px;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

export const Options = styled(Link)`
  background: linear-gradient(
    to bottom right,
    var(--lightPurple),
    var(--lightPink)
  );
  padding: 15px;
  margin: 0 10px 25px 10px;
  border-radius: 15px 50px;
  font-family: var(--fontSpeakNow);
  font-size: var(--fontMed);
  text-decoration: none;
  color: var(--white);
  cursor: pointer;

  :hover {
    animation: animateOption 3s infinite;
  }

  @keyframes animateOption {
    0% {
      transform: scale(1);
      background: linear-gradient(
        to bottom right,
        var(--lightPink),
        var(--lightPurple)
      );
      border-radius: 15px 50px;
    }
    50% {
      transform: scale(1.2);
      background: linear-gradient(
        to bottom right,
        var(--lightPurple),
        var(--lightPink)
      );
      border-radius: 0;
    }
    100% {
      transform: scale(1);
      background: linear-gradient(
        to bottom right,
        var(--lightPink),
        var(--lightPurple)
      );
      border-radius: 15px 50px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0 10px;
    padding: 5px;

    :last-child {
      margin-bottom: 25px;
    }
  }
`;

export const OtherMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  a {
    text-decoration: none;
    color: var(--white);
  }
`;

export const OtherOptions = styled.div`
  text-align: center;
  background: linear-gradient(
    to bottom right,
    var(--darkCyan),
    var(--darkPink)
  );
  width: 200px;
  padding: 15px;
  margin: 0 10px 25px 10px;
  font-family: var(--fontSpeakNow);
  font-size: var(--fontMed);
  text-decoration: none;
  color: var(--white);
  cursor: pointer;

  :hover {
    animation: animateOtherOption 3s infinite;
  }

  @keyframes animateOtherOption {
    0% {
      transform: scale(1);
      background: linear-gradient(
        to bottom right,
        var(--darkCyan),
        var(--darkPink)
      );
    }
    50% {
      transform: scale(1.2);
      background: linear-gradient(
        to bottom right,
        var(--lightCyan),
        var(--lightPink)
      );
      color: var(--black);
      border-radius: 0;
    }
    100% {
      transform: scale(1);
      background: linear-gradient(
        to bottom right,
        var(--darkCyan),
        var(--darkPink)
      );
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0 10px;
    padding: 5px;
    width: 100px;
  }
`;
