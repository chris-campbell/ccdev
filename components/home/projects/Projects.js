import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
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

    .work {
      display: grid;
      grid-template-columns: 1fr 2fr;
      @media (max-width: 881px) {
        grid-template-rows: 1fr;
        grid-template-columns: none;
      }
      .work-list {
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
    }

    .work-details {
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
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="projects-wrapper">
        <div className="project-title">
          <h2>Projects</h2>
          <div className="highlight"></div>
        </div>

        <div className="work">
          <div className="work-list">
            <ul className="list-items">
              <li>Hello Dixie Co</li>
              <li>Laymanns</li>
              <li>Watch Later</li>
              <li>Savorys</li>
            </ul>
          </div>

          <div className="work-details">
            <p>
              Blogging application that allows authors to create unique blog
              post. anc allows the lavmanns communitv to add adtional context to
              articles fr reduce comnievitv.
            </p>

            <div>
              <a href="#" className="code">
                Code
              </a>{" "}
              |{" "}
              <a href="#" className="live">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
