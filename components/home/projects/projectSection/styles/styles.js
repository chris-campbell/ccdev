import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 881px) {
    grid-template-rows: 1fr;
    grid-template-columns: none;
  }
  .project-list {
    display: grid;
    @media (max-width: 881px) {
      margin-bottom: 1.5rem;
    }
    .list-items {
      list-style: none;
      li {
        font-family: ${(p) => p.theme.fonts[0]};
        font-size: clamp(1rem, 3vw, 1.4rem);
        color: ${(p) => p.theme.colors.egg};
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
    }
  }

  .project-details {
    p {
      color: ${(p) => p.theme.colors.lightGrey};
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: clamp(0.8rem, 2vw, 1rem);
      max-width: 83%;
    }

    a {
      color: ${(p) => p.theme.colors.egg};
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
  }
`;
