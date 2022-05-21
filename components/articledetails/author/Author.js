import React from "react";
import Image from "next/image";
import Avatar from "./avatar/Avatar";
import styled from "styled-components";
import AuthorDetails from "./authorDetails/AuthorDetails";

const AuthorContainer = styled.section`
  border-top: 1px solid #29313a;
`;

const AuthorWrapper = styled.div`
  display: flex;
  padding: clamp(1.2rem, 3vw, 7rem) clamp(1.2rem, 3vw, 7rem);
  gap: 3rem;
  margin: 0 auto;
  max-width: 60rem;
  @media (max-width: 857px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Author = ({ authors }) => {
  const { name, description } = authors[0];
  const { url } = authors[0].avatar;

  console.log({ name });
  return (
    <AuthorContainer>
      <AuthorWrapper>
        <Avatar url={url} />
        <AuthorDetails name={name} description={description} />
      </AuthorWrapper>
    </AuthorContainer>
  );
};

export default Author;
