import { useEffect, useState } from "react";
import BlogIndex from "./blogIndex/BlogIndex";
import ArticlePreview from "./articlePreview/ArticlePreview";

import styled from "styled-components";

const Blog = styled.div``;

const BlogWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  padding: clamp(1rem, 4vw, 100px) 100px;
  margin: 0 auto;
  gap: 2rem;
`;
const BlogContainer = ({ allArticles }) => {
  const [activeId, setActiveId] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [currentArticlePreview, setCurrentArticlePreview] = useState(
    allArticles[allArticles.length - 1]
  );

  const setPreviewData = (preview, id) => {
    setActiveId(id);
    setCurrentArticlePreview(preview);
  };

  const setInactiveColor = (color) => {
    if (prevId)
      return (
        (prevId.current.style.color = color),
        (prevId.current.style.fontWeight = 400)
      );
  };

  const setActiveColor = (color) => {
    return (
      (activeId.current.style.color = color),
      (activeId.current.style.fontWeight = 600)
    );
  };

  useEffect(() => {
    if (activeId !== null) {
      setActiveColor("#ff7105");
      setPrevId(activeId);
      setInactiveColor("#FFF");
    }
  }, [activeId]);

  return (
    <Blog>
      <BlogWrapper>
        <BlogIndex allArticles={allArticles} setPreview={setPreviewData} />
        <>
          <ArticlePreview currentPreview={currentArticlePreview} />
        </>
      </BlogWrapper>
    </Blog>
  );
};

export default BlogContainer;
