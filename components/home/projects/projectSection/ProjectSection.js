import React, { useRef, useState } from "react";
import * as s from "./styles/styles";
import styled from "styled-components";

const ListItems = styled.ul`
  .active {
    color: ${(p) => p.theme.colors.blueSky};
    transition: all 300ms ease-in-out;
  }

  .inactive {
    color: #e0e0e02e;
    font-family: SocialGothicMed !important;
    font-weight: 600 !important;
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
          <a href="#" className="code">
            Code
          </a>
          <span className="separator">|</span>
          <a href="#" className="live">
            Live
          </a>
        </div>
      </div>
    </s.ProjectSectionContainer>
  );
};

export default ProjectSection;
