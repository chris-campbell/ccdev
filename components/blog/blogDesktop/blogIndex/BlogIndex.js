import { useEffect, useState, useRef } from "react";
import Accordion from "./accordion/Accordion";
import useArticles from "../../../../hooks/articlesByYear";
import * as S from "./styles/styles";

const BlogIndex = ({ allArticles, setPreview }) => {
  const [list, setList] = useState([]);
  const blogIndexRef = useRef(null);
  const years = useArticles(allArticles);

  useEffect(() => {
    setList(years[0]);
    blogIndexRef.current.scrollTop = blogIndexRef.current.scrollHeight;
  }, [years]);

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
    <S.BlogIndexContainer>
      <S.BlogIndexWrapper ref={blogIndexRef}>
        {renderIndex()}
      </S.BlogIndexWrapper>
    </S.BlogIndexContainer>
  );
};

export default BlogIndex;
