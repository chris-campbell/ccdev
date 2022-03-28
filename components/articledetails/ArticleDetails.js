import React from "react";
import styled from "styled-components";
import Content from "../blog/article/content/Content";
import Hero from "../blog/article/hero/Hero";

const ArticleDetailsContainer = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(p) => p.theme.font.heading};
  }
`;

const ArticleDetails = ({ article }) => {
  return (
    <ArticleDetailsContainer>
      <Hero article={article} />
      <Content article={article} />
    </ArticleDetailsContainer>
  );
};

export default ArticleDetails;
