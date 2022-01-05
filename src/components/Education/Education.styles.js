import styled from "styled-components";

import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";

export const Timeline = styled(VerticalTimelineElement)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  h1 {
    margin: 0;
  }

  h3 {
    font-size: var(--fontBig);
    font-family: var(--fontRed);
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    font-weight: 100;
    margin: 0;
  }
  h4 {
    font-size: var(--fontMed);
    font-family: var(--fontSpeakNow);
    margin: 5px;
    letter-spacing: 0.1ch;
    font-weight: 100;
  }
  h5 {
    margin-bottom: 0;
    font-family: var(--fontSpeakNow);
    letter-spacing: 0.1ch;
  }

  p {
    font-size: var(--fontSmall);
    letter-spacing: 0.05em;
  }

  .achievemntIcon {
    color: gold;
    transform: scale(2);
    margin: 20px;
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: var(--fontMed);
    }
    h4 {
      font-size: var(--fontMed);
      font-size: 1.2rem;
    }
    .achievemntIcon {
      transform: scale(1.5);
      margin: 11px;
    }
  }
`;
