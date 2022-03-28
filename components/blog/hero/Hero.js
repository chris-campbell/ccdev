import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles/styles";

export default function Hero({ article }) {
  console.log(article);

  const { title, excerpt, coverImage, slug } = article;

  const avatar = article.authors[0].avatar.url;
  const name = article.authors[0].name;

  return (
    <S.HeroContainer>
      <S.HeroWrapper>
        <h1>Blog</h1>
        <Link href={`/blog/${slug}`}>
          <S.ArticleDetails>
            <S.ImageContainer>
              <Image src={coverImage.url} layout="fill" />
            </S.ImageContainer>
            <S.ArticleDescription>
              <span>Featured</span>
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <S.AuthorDetails>
                <Image src={avatar} width={70} height={70} />
                <S.DateContainer>
                  <span className="author">{name}</span>
                  <span className="date">Jun 22, 2022</span>
                </S.DateContainer>
              </S.AuthorDetails>
            </S.ArticleDescription>
          </S.ArticleDetails>
        </Link>
      </S.HeroWrapper>
    </S.HeroContainer>
  );
}
