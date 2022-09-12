import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  bottom: 0.7rem;

  @media (max-width: 876px) {
    bottom: -0.5rem;
  }

  svg {
    color: ${(p) => p.theme.colors.blueSky};
    font-size: 1.7rem;
  }
`;
