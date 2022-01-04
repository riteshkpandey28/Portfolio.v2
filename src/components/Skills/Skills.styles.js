import styled from "styled-components";

export const Text = styled.div`
  margin: auto;
  width: 100%;
  color: var(--white);
  overflow: hidden;
  text-align: center;

  h1 {
    margin: 0;
    font-family: var(--fontSpeakNow);
    font-size: var(--fontBig);
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

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export const SkillSection = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(
    to bottom right,
    var(--lightPink),
    var(--darkPink)
  );
  animation: animateSkill 3s;

  @keyframes animateSkill {
    from {
      transform: translateX(900px);
      opacity: 0.3;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .content {
    height: 90%;
    margin: auto;
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;
  }
  .container::before,
  .container::after {
    content: "";
    width: 100%;
    order: 1;
  }
`;

export const SkillContent = styled.div`
  padding: 1.2rem;
  margin: 5px;
  border-radius: 15px 35px;
  background: linear-gradient(
    to bottom right,
    var(--lightPurple),
    var(--darkPurple)
  );
  font-family: var(--fontRed);
  font-size: var(--fontMed);
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: var(--fontSmall);
  }
`;
