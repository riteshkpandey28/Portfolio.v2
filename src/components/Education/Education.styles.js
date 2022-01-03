import styled from "styled-components";

import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";

export const Timeline = styled(VerticalTimelineElement)`
  cursor: pointer;
  :hover {
    animation: animateTimeline 2s;
    transform: scale(1.1);
  }

  @keyframes animateTimeline {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1.1);
    }
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

  p {
    font-size: var(--fontSmall);
    letter-spacing: 0.05em;
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: var(--fontMed);
    }
    h4 {
      font-size: var(--fontMed);
      font-size: 1.2rem;
    }
  }
`;
