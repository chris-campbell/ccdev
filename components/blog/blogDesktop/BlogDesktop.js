import { useState, useEffect } from "react";
import BlogIndex from "./blogIndex/BlogIndex";
import ArticlePreview from "./articlePreview/ArticlePreview";

import styled from "styled-components";

const BlogDesktop = ({ allArticles }) => {
  const [activeEl, setActiveEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [currentArticlePreview, setCurrentArticlePreview] = useState(
    allArticles[allArticles.length - 1]
  );

  const setPreviewData = (preview, id) => {
    setActiveEl(id);
    setCurrentArticlePreview(preview);
  };

  const setInactiveColor = (color) => {
    if (prevEl)
      return (
        (prevEl.current.style.color = color),
        (prevEl.current.style.fontWeight = 400)
      );
  };

  const setActiveColor = (color) => {
    return (
      (activeEl.current.style.color = color),
      (activeEl.current.style.fontWeight = 600)
    );
  };

  useEffect(() => {
    if (activeEl !== null) {
      setActiveColor("#ff7105");
      setPrevEl(activeEl);
      setInactiveColor("#FFF");
    }
  }, [activeEl]);

  return (
    <>
      <BlogWrapper>
        <BlogIndex allArticles={allArticles} setPreview={setPreviewData} />
        <>
          <ArticlePreview currentPreview={currentArticlePreview} />
        </>
      </BlogWrapper>
    </>
  );
};

export default BlogDesktop;

const BlogWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  padding: clamp(3rem, 6vw, 100px) 1rem;
  margin: 0 auto;
  gap: 2rem;
`;
