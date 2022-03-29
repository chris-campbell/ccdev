import styled from "styled-components";
import Image from "next/image";
import * as S from "./styles/styles";
import Link from "next/link";

const ArticleItem = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 500ms;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }

  h3 {
    color: ${(p) => p.theme.colors.white_300};
    font-family: ${(p) => p.theme.font.heading};
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }

  p {
    color: ${(p) => p.theme.colors.white_300};
    font-family: ${(p) => p.theme.font.paragraph};
    font-size: 0.8rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  img {
    object-fit: cover;
    border-radius: 0.5rem;
    flex-basis: auto;
  }
`;

const ArticleDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

function Articles({ allArticles }) {
  const displayArticles = () => {
    return allArticles.map((article, key) => {
      const { coverImage, title, excerpt, authors } = article;

      const authorName = authors[0].name;
      const authorAvatar = authors[0].avatar.url;

      return (
        <Link key={key} href={`/blog/${article.slug}`} passHref="true">
          <ArticleItem key={key}>
            <ImageContainer>
              <Image src={coverImage.url} layout="fill" alt="cover img" />
            </ImageContainer>
            <ArticleDetails>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <S.AuthorDetails>
                <Image
                  src={authorAvatar}
                  width={40}
                  height={40}
                  alt="Author Avatar"
                />
                <S.DateContainer>
                  <span className="author">{authorName}</span>
                  <span className="date">Jun 22, 2022</span>
                </S.DateContainer>
              </S.AuthorDetails>
            </ArticleDetails>
          </ArticleItem>
        </Link>
      );
    });
  };

  return (
    <S.ArticlesContainer>
      <S.ArticlesWrapper>
        <h2>Articles</h2>
        <S.ArticleItems>{displayArticles()}</S.ArticleItems>
        {/* <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack> */}
      </S.ArticlesWrapper>
    </S.ArticlesContainer>
  );
}

export default Articles;
