import React from "react";
import SocialIcons from "./socalIcons/SocialIcons";
import * as S from "./styles/styles";

const AuthorContact = ({ name, role }) => {
  return (
    <S.AuthorNameContainer>
      <div>
        <h2>{name}</h2>
        <span>{role}</span>
      </div>
      <SocialIcons />
    </S.AuthorNameContainer>
  );
};

export default AuthorContact;
