import React from "react";
import styled from "styled-components";

const ExcerptContainer = styled.p`
  color: #a8aaac;
  font-size: clamp(0.9rem, 1vw, 1rem);
  max-width: 55rem;
`;

const Excerpt = ({ content }) => {
  return <ExcerptContainer>{content}</ExcerptContainer>;
};

export default Excerpt;