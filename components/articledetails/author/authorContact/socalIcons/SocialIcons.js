import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import * as S from "./styles/styles";

const SocialIcons = () => {
  return (
    <S.IconContainer>
      <GitHub />
      <LinkedIn />
      <Twitter />
    </S.IconContainer>
  );
};

export default SocialIcons;
