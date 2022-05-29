import React from "react";
import Avatar from "./avatar/Avatar";
import AuthorDetails from "./authorDetails/AuthorDetails";
import * as S from "./styles/styles";

const Author = ({ authors }) => {
  const { name, description, role } = authors[0];
  const { url } = authors[0].avatar;

  return (
    <S.AuthorContainer>
      <S.AuthorWrapper>
        <Avatar url={url} />
        <AuthorDetails name={name} description={description} role={role} />
      </S.AuthorWrapper>
    </S.AuthorContainer>
  );
};

export default Author;
