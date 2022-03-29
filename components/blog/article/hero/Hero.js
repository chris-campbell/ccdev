import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 9rem auto 0 auto;
`;

const BlueBack = styled.div`
  width: 100%;
  background: ${(p) => p.theme.colors.blue_100};
  position: absolute;
  top: 0;
`;

const ArticleNav = styled.div`
  padding: 4rem 2rem 5rem 2rem;
  color: ${(p) => p.theme.colors.white_300};

  span {
    display: flex;
    font-family: ${(p) => p.theme.font.paragraph};
    padding-bottom: 1.5rem;
    &:hover {
      color: ${(p) => p.theme.colors.orange_300};
    }
  }

  h1 {
    font-family: ${(p) => p.theme.font.heading};
    font-size: clamp(1.5rem, 5vw, 2.7rem);
  }
`;

const BackToBlog = styled(ArrowBackIcon)`
  margin-right: 1rem;
`;

function Hero({ article }) {
  const { title } = article;
  return (
    <BlueBack>
      <HeroContainer>
        <ArticleNav>
          <Link href="/blog" passHref={true}>
            <a>
              <span>
                <BackToBlog /> Back to Articles
              </span>
            </a>
          </Link>
          <h1>{title}</h1>
        </ArticleNav>
      </HeroContainer>
    </BlueBack>
  );
}

export default Hero;
