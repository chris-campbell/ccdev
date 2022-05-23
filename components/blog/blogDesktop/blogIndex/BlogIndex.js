import { useRef } from "react";
import useArticles from "../../../../hooks/articlesByYear";
import styled from "styled-components";
import Accordion from "./accordion/Accordion";

const BlogIndex = ({ allArticles, setPreview }) => {
  const blogIndexRef = useRef(null);
  const [list] = useArticles(allArticles);

  const renderIndex = () => {
    return list.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        return (
          <div key={key}>
            <Accordion
              title={key}
              articleList={value}
              setPreview={setPreview}
            />
          </div>
        );
      }
    });
  };

  return (
    <BlogIndexContainer>
      <BlogIndexWrapper ref={blogIndexRef}>{renderIndex()}</BlogIndexWrapper>
    </BlogIndexContainer>
  );
};

export default BlogIndex;

const BlogIndexContainer = styled.section`
  margin-left: 0.5rem;
`;

const BlogIndexWrapper = styled.div`
  height: calc(70vh - 200px);
  overflow-y: auto;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column-reverse;

  ::-webkit-scrollbar {
    background-color: transparent;
    padding-left: 1rem;
    max-width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid ${(p) => p.theme.colors.blue200};
    border-radius: 1rem;
    max-width: 14px;
  }
`;
