import styled from "styled-components";
import Image from "next/image";
import * as S from "./styles/styles";

function Articles() {
  return (
    <S.ArticlesContainer>
      <S.ArticlesWrapper>
        <h2>Articles</h2>
        <S.ArticleItems>
          <S.ArticleItem>
            <S.ImageContainer>
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80"
                width="200"
                height="200"
                layout="fill"
              />
            </S.ImageContainer>

            <h3>
              Why Most Businesses fails, and how not to be another statistic?
            </h3>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>

            <S.AuthorDetails>
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                width={70}
                height={70}
              />
              <S.DateContainer>
                <span className="author">Chris Campbell</span>
                <span className="date">Jun 22, 2022</span>
              </S.DateContainer>
            </S.AuthorDetails>
          </S.ArticleItem>
          <S.ArticleItem>
            <S.ImageContainer>
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80"
                width="200"
                height="200"
                layout="fill"
              />
            </S.ImageContainer>

            <h3>
              Why Most Businesses fails, and how not to be another statistic?
            </h3>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>

            <S.AuthorDetails>
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                width={70}
                height={70}
              />
              <S.DateContainer>
                <span className="author">Chris Campbell</span>
                <span className="date">Jun 22, 2022</span>
              </S.DateContainer>
            </S.AuthorDetails>
          </S.ArticleItem>
          <S.ArticleItem>
            <S.ImageContainer>
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80"
                width="200"
                height="200"
                layout="fill"
              />
            </S.ImageContainer>

            <h3>
              Why Most Businesses fails, and how not to be another statistic?
            </h3>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>

            <S.AuthorDetails>
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                width={70}
                height={70}
              />
              <S.DateContainer>
                <span className="author">Chris Campbell</span>
                <span className="date">Jun 22, 2022</span>
              </S.DateContainer>
            </S.AuthorDetails>
          </S.ArticleItem>
        </S.ArticleItems>
      </S.ArticlesWrapper>
    </S.ArticlesContainer>
  );
}

export default Articles;
