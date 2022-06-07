import styled from "styled-components";
import ArticleIndexItem from "./articleIndexItem/ArticleIndexItem";
import Link from "next/link";

const AllArticles = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.white300};
  padding: clamp(2rem, 9vw, 9rem);
`;

const AllArticlesContainer = ({ articles }) => {
  return (
    <AllArticles>
      <div className="article-index-wrapper">
        {articles.map((item) => (
          <ArticleIndexItem key={item.id} {...item} />
        ))}
      </div>
    </AllArticles>
  );
};

export default AllArticlesContainer;
