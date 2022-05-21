import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import styled from "styled-components";

const SocialIcons = () => {
  return (
    <IconContainer>
      <Facebook />
      <Twitter />
      <LinkedIn />
    </IconContainer>
  );
};

export default SocialIcons;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  bottom: 0.7rem;

  @media (max-width: 876px) {
    bottom: -0.5rem;
  }

  svg {
    color: ${(p) => p.theme.colors.orange300};
    font-size: 1.7rem;
  }
`;
