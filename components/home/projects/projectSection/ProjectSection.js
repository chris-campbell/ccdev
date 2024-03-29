import React, { useRef, useState } from "react";
import * as s from "./styles/styles";

import styled from "styled-components";

const ListItems = styled.ul`
  .active {
    color: ${(p) => p.theme.colors.blueSky};
    transition: all 300ms ease-in-out;
    cursor: pointer;
  }

  .inactive {
    color: #e0e0e02e;
    font-family: SocialGothicMed !important;
    font-weight: 600 !important;
    cursor: pointer;
    &:hover {
      color: #e0e0e07d;
      transition: all 300ms ease-in-out;
    }
  }
`;

import projects from "../utils/projects";

const ProjectSection = ({ updateIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const linkRef = useRef(null);

  const getData = (e) => {
    const value = e.currentTarget.getAttribute("data-index");
    setActiveIndex(parseInt(e.currentTarget.getAttribute("data-index")));
    updateIndex(value);
  };

  return (
    <s.ProjectSectionContainer>
      <div className="project-list">
        <ListItems className="list-items">
          {projects.map((project, i) => {
            const className = activeIndex === i ? "active" : "inactive";

            return (
              <li
                className={className}
                onClick={(e) => getData(e)}
                ref={linkRef}
                key={project.id}
                data-index={i}
              >
                {project.name}
              </li>
            );
          })}
        </ListItems>
      </div>

      <div className="project-details">
        <p>{projects[activeIndex]?.description}</p>

        <div>
          <a
            href={projects[activeIndex].code}
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            Code
          </a>
          <span className="separator">•</span>
          <a
            href={projects[activeIndex].live}
            target="_blank"
            rel="noreferrer"
            className="live"
          >
            Live
          </a>
        </div>
      </div>
    </s.ProjectSectionContainer>
  );
};

export default ProjectSection;
