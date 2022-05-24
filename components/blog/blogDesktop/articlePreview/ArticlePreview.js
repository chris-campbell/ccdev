import React from "react";
import Image from "next/image";
import styled from "styled-components";
import PublishDate from "./publishDate/PublishDate";
import Title from "./title/Title";
import CoverImage from "./coverImage/CoverImage";
import Excerpt from "./excerpt/Excerpt";
import NavButton from "./navButton/NavButton";

const ArticlePreviewContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;

const ArticleMeta = styled.div`
  max-width: 40rem;
`;

const NavContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
`;

const ArticlePreview = ({ currentPreview }) => {
  const { title, excerpt, createdAt, coverImage, slug } = currentPreview;
  return (
    <ArticlePreviewContainer>
      <ArticleMeta>
        <PublishDate date={createdAt} />
        <Title title={title} />
      </ArticleMeta>
      <CoverImage url={coverImage?.url} />
      <NavContent>
        <Excerpt content={excerpt} />
        <NavButton slug={slug} />
      </NavContent>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
