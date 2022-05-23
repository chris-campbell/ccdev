import React from "react";
import styled from "styled-components";

const ExcerptContainer = styled.p`
  color: ${(p) => p.theme.colors.white300};
  font-size: clamp(0.9rem, 2vw, 1rem);
  width: 90%;
`;

const Excerpt = ({ content }) => {
  return <ExcerptContainer>{content}</ExcerptContainer>;
};

export default Excerpt;
