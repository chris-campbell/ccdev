import { useState } from "react";
import { Javascript } from "@mui/icons-material";
import { projects } from "../utils/projects";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import * as S from "./styles/styles";

export const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const listProjectNames = () => {
    return projects.map((project, key) => (
      <li key={key} index-data={key} onClick={(e) => changeProjectIndex(e)}>
        {project.name}
      </li>
    ));
  };

  const changeProjectIndex = (e) => {
    e.preventDefault();

    setProjectIndex(e.target.getAttribute("index-data"));
  };

  return (
    <S.ProjectsContainer>
      <S.ProjectsWrapper>
        <h2>Projects</h2>
        <S.ProjectsBox className="projects-bx">
          <S.ProjectsListItems>{listProjectNames()}</S.ProjectsListItems>
          <S.ProjectsDescription className="projects-description">
            {projects[projectIndex].description}
            <S.ProjectIcons>
              <S.Icons>
                {projects[projectIndex].icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </S.Icons>
              <S.ExternalLinks>
                <SiGithub />
                <FiExternalLink />
              </S.ExternalLinks>
            </S.ProjectIcons>
          </S.ProjectsDescription>
        </S.ProjectsBox>

        <S.Hobbies>
          Hobbies <span>Drawing & Wine Brewing</span>
        </S.Hobbies>
      </S.ProjectsWrapper>
    </S.ProjectsContainer>
  );
};

export default Projects;
