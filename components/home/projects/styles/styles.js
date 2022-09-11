import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  min-height: clamp(40vh, 50vw, 100vh);
  .projects-wrapper {
    max-width: 1300px;
    padding: clamp(3rem, 13vw, calc(250px - 57px)) clamp(1rem, 10vw, 150px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .project-title {
      h2 {
        color: ${(p) => p.theme.colors.egg};
        margin-bottom: 1.5rem;
        font-size: clamp(1.5rem, 2vw, 2rem);
      }

      .highlight {
        height: 3px;
        max-width: 4rem;
        background-color: ${(p) => p.theme.colors.blueSky};
        margin-bottom: clamp(2rem, 3vw, 4rem);
      }
    }
  }
`;
