import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ArticleIndexItemContainer = styled.article`
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
    max-height: 200px;

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
    color: ${(p) => p.theme.colors.darkGrey};
  }

  .article-index-title {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.colors.coalBlue};
  }

  .article-index-excerpt {
    line-height: 1.4;
    color: ${(p) => p.theme.colors.darkGrey};
  }
`;

const ArticleIndexItem = ({ coverImage, title, excerpt, slug }) => {
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
    <Link passHref href={`/articles/${slug}`}>
      <a>
        <ArticleIndexItemContainer>
          <div className="article-index-image">
            <Image
              src={coverImage.url}
              width={300}
              height={200}
              layout={width > 988 ? "" : "responsive"}
            />
          </div>
          <div className="article-index-details">
            <p className="article-index-date">March 31, 2022</p>
            <h3 className="article-index-title">{title}</h3>
            <p className="article-index-excerpt">{excerpt}</p>
          </div>
        </ArticleIndexItemContainer>
      </a>
    </Link>
  );
};

export default ArticleIndexItem;
