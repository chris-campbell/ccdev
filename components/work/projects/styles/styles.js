import styled from "styled-components";

export const ProjectsContainer = styled.section`
  clear: both;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.darkBlue};
  min-height: 40vh;

  .project-inner {
    max-width: 1600px;
    padding: clamp(2rem, 7vw, 10rem);
    margin: 0 auto;

    h2 {
      font-family: ${(p) => p.theme.fonts[1]};
      font-size: 1.3rem;
      color: ${(p) => p.theme.colors.egg};
      margin: 2rem 0;
    }
  }

  .projects-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1rem;
    }

    @media (max-width: 721px) {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
      row-gap: 1rem;
    }

    .projects-details {
      position: relative;
      bottom: 1.2rem;
      background-color: ${(p) => p.theme.colors.coalBlue};
      border-bottom-left-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
    }

    .project-details-wrapper {
      padding: 1rem 0;
      h4 {
        color: ${(p) => p.theme.colors.egg};
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
      }

      .external-links {
        display: flex;
        margin-top: 0.9rem;
        gap: 0.8rem;
        margin-left: 2rem;
      }
    }
  }

  .project-item-wrapper {
    position: relative;

    .project-image-frame {
      & > span {
        border-top-right-radius: 0.3rem;
        border-top-left-radius: 0.3rem;
        box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 14%) !important;
        background-color: #e1dede !important;
      }
    }
  }
`;
