import styled from "styled-components";

export const Grid = styled.div`
  padding: 20px;
  width: 100%;
  color: var(--white);
`;

export const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export const CertificateCard = styled.div`
  padding: 10px;
  padding-bottom: 0;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(
    to bottom right,
    var(--darkPurple),
    var(--darkGrey)
  );
  h1 {
    font-size: var(--fontBig);
    font-family: var(--fontSpeakNow);
    margin-top: 2px;
    margin-bottom: 1px;
    text-decoration: underline;
    text-underline-position: under;
    min-height: 100px;
  }
  h2 {
    font-size: var(--fontMed);
    font-family: var(--fontRed);
    font-weight: 100;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 0.1ch;
  }
  .certificateLink {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  a {
    color: var(--lightPink);
    text-decoration: none;
    :hover {
      color: var(--white);
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.8rem;
      min-height: 0;
    }
    h2 {
      font-size: var(--fontSmall);
      text-align: center;
    }
  }
`;
