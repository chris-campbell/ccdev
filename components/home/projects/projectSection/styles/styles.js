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

    .separator {
      color: ${(p) => p.theme.colors.lightGrey};
      padding: 0 0.5rem;
    }

    a {
      color: ${(p) => p.theme.colors.lightGrey};
      font-size: clamp(0.8rem, 2vw, 0.9rem);
      transition: all 300ms ease-in-out;
      &:hover {
        color: ${(p) => p.theme.colors.blueSky};
      }
    }
  }
`;
