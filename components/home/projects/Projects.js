import React, { useEffect, useState } from "react";
import * as styled from "./styles/styles";
import ProjectSection from "./projectSection/ProjectSection";

const Projects = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Index updated", index);
  }, [index]);

  const updateIndex = (value) => {
    setIndex(value);
  };
  return (
    <styled.ProjectsContainer id="projects">
      <div className="projects-wrapper">
        <div className="project-title">
          <h2>Projects</h2>
          <div className="highlight"></div>
        </div>

        <ProjectSection index={index} updateIndex={updateIndex} />
      </div>
    </styled.ProjectsContainer>
  );
};

export default Projects;
