import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AllArticles = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.white300};
  padding: clamp(2rem, 9vw, 9rem);
`;

const ArticleIndexItem = styled.article`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  justify-content: center;

  @media (max-width: 819px) {
    flex-direction: column;
  }

  .article-index-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  .article-index-image {
    border-radius: 0.1rem;
    box-sizing: content-box;
    min-width: 300px;
    max-height: 300px;

    @media (max-width: 819px) {
      min-width: none;
      max-height: none;
    }

    & > span {
      height: 100% !important;
      border-radius: 0.3rem;
      box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 14%) !important;
    }
  }

  .article-index-details {
    max-width: 40rem;
  }

  .article-index-date {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: ${(p) => p.theme.colors.grey300};
  }

  .article-index-title {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.colors.blue200};
  }

  .article-index-excerpt {
    line-height: 1.4;
    color: ${(p) => p.theme.colors.grey300};
  }
`;

const AllArticlesContainer = ({ articles }) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <AllArticles>
      <div className="article-index-wrapper">
        {articles.map((item) => (
          <ArticleIndexItem>
            <div className="article-index-image">
              <Image
                src={item.coverImage.url}
                width={300}
                height={200}
                layout={width > 988 ? "" : "responsive"}
              />
            </div>
            <div className="article-index-details">
              <p className="article-index-date">March 31, 2022</p>
              <h3 className="article-index-title">{item.title}</h3>
              <p className="article-index-excerpt">{item.excerpt}</p>
            </div>
          </ArticleIndexItem>
        ))}
      </div>
    </AllArticles>
  );
};

export default AllArticlesContainer;
