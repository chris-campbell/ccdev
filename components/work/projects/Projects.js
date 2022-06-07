import { useState, useEffect } from "react";
import projects from "../utils/projects";
import Description from "./description/Description";
import Icons from "./icons/Icons";
import Tab from "./tab/Tab";
import * as S from "./styles/styles";

export const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [prevTab, setPrevTab] = useState(null);

  const listProjectNames = () => {
    return projects.map((project, index) => (
      <Tab
        key={project.id}
        project={project}
        dataIndex={index}
        updateIndex={setProjectIndex}
        updateTab={setPrevTab}
      />
    ));
  };

  return (
    <S.ProjectsContainer>
      <S.ProjectsWrapper>
        <h2>Projects</h2>
        <S.ProjectsBox>
          <S.ProjectsListItems>{listProjectNames()}</S.ProjectsListItems>

          <S.ProjectsDescription>
            <Description projects={projects} index={projectIndex} />
            <Icons projects={projects} index={projectIndex} />
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
