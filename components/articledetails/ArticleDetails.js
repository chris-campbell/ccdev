import React from "react";
import PublishDate from "./publishDate/PublishDate";
import CoverImage from "./coverImage/CoverImage";
import Title from "./title/Title";
import Content from "./content/Content";
import Author from "./author/Author";
import styled from "styled-components";

const ArticleDetails = ({ article }) => {
  const { title, content, createdAt, coverImage, authors } = article;

  return (
    <ArticleDetailsContainer>
      <ArticleDetailsWrapper>
        <PublishDate date={createdAt} />
        <Title title={title} />
        <CoverImage url={coverImage.url} />
        <Content content={content} />
        <Author authors={authors} />
      </ArticleDetailsWrapper>
    </ArticleDetailsContainer>
  );
};

export default ArticleDetails;

const ArticleDetailsContainer = styled.div``;

const ArticleDetailsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 100px);
`;
