import styled from "styled-components";

export const ContactLinkContainer = styled.li`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.egg};

  &:hover {
    color: ${(p) => p.theme.colors.orange};
    transition: 300ms;
  }
`;
