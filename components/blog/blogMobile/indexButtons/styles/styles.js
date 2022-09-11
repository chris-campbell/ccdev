import styled from "styled-components";

export const IndexButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: clamp(1rem, 1vw, 3rem);
  margin-top: 2rem;
`;

export const IndexButton = styled.div`
  border: 2px solid ${(p) => p.theme.colors.egg};
  width: fit-content;
  padding: 0.8rem 1rem;
  color: ${(p) => p.theme.colors.egg};
  border-radius: 0.2rem;
  font-family: ${(p) => p.theme.fonts[0]};
  font-size: 0.8rem;
`;
