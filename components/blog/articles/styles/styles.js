import styled from "styled-components";

export const ArticlesContainer = styled.section`
  width: 100%;
`;

export const ArticlesWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  padding: calc(250px - 150px) 150px;

  h2 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
    margin-bottom: 2rem;
  }

  @media (max-width: 995px) {
    flex-direction: column;
  }
  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }

  @media (max-width: 1130px) {
    padding-top: 0rem;
  }
`;

export const ArticleItem = styled.article`
  &:hover {
    transform: scale(1.03);
    transition: 300ms ease-in-out;
  }
  h3 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
  }

  p {
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.white_300};
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    margin-bottom: 1.3rem;
  }

  @media (max-width: 1130px) {
    margin-bottom: 3rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  flex: 3;
  margin-bottom: 1rem;
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

export const ArticleItems = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    border-radius: 10rem;
    width: clamp(2rem, 4vw, 2.3rem) !important;
    height: clamp(2rem, 4vw, 2.3rem) !important;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  .author {
    color: ${(p) => p.theme.colors.white_300};
    font-size: clamp(0.7rem, 1vw, 0.8rem);
    font-family: ${(p) => p.theme.font.paragraph};
  }

  .date {
    color: ${(p) => p.theme.colors.grey_200};
    font-size: clamp(0.7rem, 1vw, 0.8rem);
    font-family: ${(p) => p.theme.font.paragraph};
  }
`;
