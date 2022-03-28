import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  padding: calc(250px - 150px) 150px;
  h1 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
    margin-bottom: 4rem;
  }

  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }
`;

export const ArticleDetails = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 500ms;
  }

  @media (max-width: 1130px) {
    flex-direction: column;
  }

  h2 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
    font-size: clamp(1.2rem, 2vw, 2.5rem);
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: ${(p) => p.theme.colors.white_300};
    font-family: ${(p) => p.theme.font.paragraph};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  flex: 3;

  > span {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 0.5rem;
  }
`;

export const ArticleDescription = styled.div`
  margin-bottom: 0.5rem;
  flex: 2;

  span {
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.blue_100};
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    border-radius: 10rem;
    width: clamp(2rem, 4vw, 3.6rem) !important;
    height: clamp(2rem, 4vw, 3.6rem) !important;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  .author {
    color: ${(p) => p.theme.colors.white_300};
  }

  .date {
    color: ${(p) => p.theme.colors.grey_200};
    font-size: clamp(0.7rem, 1vw, 0.9rem);
  }
`;
