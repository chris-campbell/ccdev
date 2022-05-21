import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.p`
  color: ${(p) => p.theme.colors.white300};
  line-height: 1.7;
`;

const Description = () => {
  return (
    <DescriptionContainer>
      Jamie is a software engineer turned developer advocate. Born and bred in
      North East England, he loves learning and teaching others through video
      and written tutorials. Jamie maintains Build your DXP, Headless Commerce
      Resources, and GraphQL WTF.
    </DescriptionContainer>
  );
};

export default Description;
