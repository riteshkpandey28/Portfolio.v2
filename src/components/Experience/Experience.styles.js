import styled from "styled-components";

export const ExperienceTab = styled.div`
  width: 100%;
  .experienceImg {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tab {
    cursor: pointer;
    font-family: var(--fontRed);
    font-size: var(--fontMed);
    padding: 10px 20px;
    margin: 0px 2px;
    background: #000;
    display: inline-block;
    color: #fff;
    border-radius: 3px 3px 0px 0px;
    box-shadow: 0 0.5rem 0.8rem #00000080;
  }
  .panels {
    box-shadow: 0 2rem 2rem #00000080;
    min-height: 200px;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
  }
  .panel {
    display: none;
    animation: fadein 0.8s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .panel-title {
    font-size: 1.5em;
    font-weight: bold;
  }
  .radio {
    display: none;
  }
  #one:checked ~ .panels #one-panel,
  #two:checked ~ .panels #two-panel {
    display: block;
  }
  #one:checked ~ .tabs #one-tab,
  #two:checked ~ .tabs #two-tab {
    background: #fffffff6;
    color: #000;
    border-top: 3px solid #000;
  }

  @media screen and (max-width: 600px) {
    .tab {
      font-size: var(--fontSmall);
      margin-bottom: 10px;
    }
  }
`;
