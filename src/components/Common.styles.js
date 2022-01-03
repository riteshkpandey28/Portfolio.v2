import styled from "styled-components";

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
`;
