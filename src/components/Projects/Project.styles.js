import styled from "styled-components";

export const ProjectContent = styled.div`
  color: var(--white);
  padding: 0 20px;

  h1 {
    text-align: center;
    font-size: var(--fontSuperBig);
    font-family: var(--fonrRed);
    text-transform: uppercase;
    margin-top: 0;
    color: var(--lightCyan);
  }

  h3 {
    font-size: var(--fontMed);
    font-family: var(--fontSpeakNow);
    margin-bottom: 3px;
    border-bottom: 2px solid red;
  }

  .techstack {
    display: flex;
    flex-flow: row wrap;
  }

  .projectImg {
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }

  span {
    margin: 5px;
    padding: 5px 15px;
    background: linear-gradient(
      to bottom right,
      var(--lightPink),
      var(--darkPink)
    );
    border-radius: 15px;
    font-size: var(--fontMed);
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }

  p {
    font-size: var(--fontMed);
    text-align: justify;
    margin-top: 0;
  }

  .projectDate {
    display: flex;
    align-items: center;
    h2 {
      font-size: var(--fontMed);
      margin-bottom: -5px;
      margin-left: 5px;
    }
  }

  .projectLink {
    text-align: center;

    a {
      color: var(--white);
      padding: 15px;
      background: linear-gradient(
        to bottom right,
        var(--lightPurple),
        var(--darkPurple)
      );
      font-size: var(--fontMed);
      text-decoration: none;

      :hover {
        opacity: 0.7;
      }
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: var(--fontMed);
    }
  }
`;
