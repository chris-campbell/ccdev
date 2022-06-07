import React from "react";
import styled from "styled-components";

const DescriptionText = styled.p`
  min-height: 6rem;
  font-size: 0.9rem;
  line-height: 1.6;
`;
const Description = ({ projects, index }) => {
  return <DescriptionText>{projects[index].description}</DescriptionText>;
};

export default Description;
