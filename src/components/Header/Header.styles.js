import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  max-height: 200px;
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

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    width: 100%;
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 600px;
  max-width: 720px;
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
    font-size: var(--fontBig);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
    h1 {
      font-size: var(--fontBig);
    }
    h4 {
      font-size: 1rem;
    }
  }
`;

export const ExploreBtn = styled.button`
  width: 50%;
  font-size: var(--fontBig);
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
