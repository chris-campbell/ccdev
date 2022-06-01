import styled from "styled-components";

export const ExcerptContainer = styled.p`
  color: ${(p) => p.theme.colors.grey400};
  font-size: clamp(0.9em, 1vw, 1em);
  line-height: 1.6;
`;
