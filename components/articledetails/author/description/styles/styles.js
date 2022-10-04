import styled from "styled-components";

export const DescriptionContainer = styled.p`
  color: ${(p) => p.theme.colors.egg};
  line-height: 1.5;
  font-size: 0.9rem;

  @media (max-width: 876px) {
    margin: 3rem 0;
  }
`;
