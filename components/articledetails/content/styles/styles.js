import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-bottom: 5rem;
  max-width: 1000px;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 2rem;
    color: ${(p) => p.theme.colors.egg};
  }

  p {
    color: #aaa;
    max-width: 95%;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul {
    margin: 3rem 2rem;

    li {
      color: #aaa;
      font-family: ${(p) => p.theme.fonts[1]};
      margin-bottom: 0.7rem;
      list-style: none;
      display: flex;

      &::before {
        content: "° ";
        color: ${(p) => p.theme.colors.orange};
        border-radius: 0.5rem;
        margin-right: 1rem;
      }
    }
  }
  a {
    color: ${(p) => p.theme.colors.royal};
  }

  img {
    height: 100%;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }
`;
