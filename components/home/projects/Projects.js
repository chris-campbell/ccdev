import React from "react";
import * as styled from "./styles/styles";
import ProjectSection from "./projectSection/ProjectSection";

const Projects = () => {
  return (
    <styled.ProjectsContainer>
      <div className="projects-wrapper">
        <div className="project-title">
          <h2>Projects</h2>
          <div className="highlight"></div>
        </div>

        <ProjectSection />
      </div>
    </styled.ProjectsContainer>
  );
};

export default Projects;
