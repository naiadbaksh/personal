import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(380px, 100%);
  max-width: 100%;
  padding: 0 1rem 1.5rem;
  box-sizing: border-box;

  @media (max-width: 640px) {
    width: 100%;
    padding: 0 0.75rem 1.5rem;
  }
`;

export const ContactTitle = styled.h2`
  margin: 10px 0;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  line-height: 1.2;

  @media (max-width: 640px) {
    margin-top: 1.5rem;
    padding-right: 2rem;
  }
`;
