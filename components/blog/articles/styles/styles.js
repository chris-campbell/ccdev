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
  height: 300px;
  max-width: 100%;
  max-height: 300px;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 0.5rem;
  }
`;

export const ArticleItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 1100px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 780px) {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    border-radius: 10rem;
    /* width: clamp(2rem, 4vw, 2.3rem) !important;
    height: clamp(2rem, 4vw, 2.3rem) !important; */
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
