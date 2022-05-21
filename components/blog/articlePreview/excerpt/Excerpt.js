import React from "react";
import styled from "styled-components";

const ExcerptContainer = styled.p`
  color: ${(p) => p.theme.colors.white300};
  font-size: 1em;
`;

const Excerpt = ({ content }) => {
  return <ExcerptContainer>{content}</ExcerptContainer>;
};

export default Excerpt;
