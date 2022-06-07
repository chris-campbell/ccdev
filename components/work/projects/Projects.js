import React from "react";
import projects from "../utils/projects";
import Project from "./project/Project";
import * as S from "./styles/styles";

const Projects = () => {
  return (
    <S.ProjectsContainer>
      <div className="project-inner">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </S.ProjectsContainer>
  );
};

export default Projects;
