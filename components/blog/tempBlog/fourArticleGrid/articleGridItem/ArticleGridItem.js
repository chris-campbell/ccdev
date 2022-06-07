import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ArticleGridItemContainer = styled.article`
  cursor: pointer;

  &:hover {
    transition: 300ms;
    transform: scale(0.99);
    padding: 0.8rem;
    box-sizing: contents-box;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 14%) !important;
  }
  .article-item-image {
    margin-bottom: 1rem;
    border-radius: 0.1rem;
    box-sizing: content-box;
    & > span {
      height: 100% !important;
      border-radius: 0.3rem;
      box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 14%) !important;
    }
  }

  .article-item-details {
    .article-item-date {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    .article-item-title {
      font-size: clamp(1.5rem, 3vw, 1.7rem);
      margin-bottom: 0.5rem;
      color: ${(p) => p.theme.colors.blue200};
      text-transform: uppercase;
    }

    .article-item-excerpt {
      font-size: clamp(1rem, 1vw, 1.1rem);
      color: ${(p) => p.theme.colors.grey300};
    }
  }
`;

const ArticleGridItem = ({ coverImage, title, slug }) => {
  return (
    <Link href={`/articles/${slug}`}>
      <ArticleGridItemContainer>
        <div className="article-item-image">
          <Image
            src={coverImage.url}
            layout="responsive"
            width={400}
            height={300}
          />
        </div>
        <div className="article-item-details">
          <p className="article-item-date">March 31, 2023</p>
          <h3 className="article-item-title">{title}</h3>
          <p className="article-item-excerpt">
            Praesent at efficitur Leo. Morbi vestibulum condimentum metus ac
            maximus. Maecenas urna neque, ornare sed lorem sed.
          </p>
        </div>
      </ArticleGridItemContainer>
    </Link>
  );
};

export default ArticleGridItem;
