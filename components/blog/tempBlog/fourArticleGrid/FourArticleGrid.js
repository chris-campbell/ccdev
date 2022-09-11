import styled from "styled-components";
import ArticleGridItem from "./articleGridItem/ArticleGridItem";
import Link from "next/link";

const FourArticleGridContainer = styled.section`
  padding: clamp(2rem, 9vw, 9rem);
  background-color: ${(p) => p.theme.colors.egg};

  .four-article-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .view-all {
    padding: 2rem 0;
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;

    a {
      color: ${(p) => p.theme.colors.orange};
      &:hover {
        color: ${(p) => p.theme.colors.royal};
      }
    }
  }
`;

const FourArticleGrid = ({ articles }) => {
  return (
    <>
      <FourArticleGridContainer>
        <div className="four-article-wrapper">
          {articles.slice(1, 5).map((item) => (
            <ArticleGridItem key={item.id} {...item} />
          ))}
        </div>
        <div className="view-all">
          <Link href="/articles/all-articles">View All</Link>
        </div>
      </FourArticleGridContainer>
    </>
  );
};

export default FourArticleGrid;
