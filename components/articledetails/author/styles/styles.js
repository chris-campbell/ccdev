import styled from "styled-components";

export const AuthorContainer = styled.section`
  border-top: 1px solid #29313a;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  padding: clamp(1.2rem, 3vw, 7rem) clamp(1.2rem, 3vw, 7rem);
  gap: 3rem;
  margin: 0 auto;
  max-width: 60rem;
  @media (max-width: 857px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
