import React from "react";
import * as styled from "./styles/styles";

const ProjectSection = () => {
  return (
    <styled.ProjectSectionContainer className="project-section">
      <div className="project-list">
        <ul className="list-items">
          <li>Hello Dixie Co</li>
          <li>Laymanns</li>
          <li>Watch Later</li>
          <li>Savorys</li>
        </ul>
      </div>

      <div className="project-details">
        <p>
          Blogging application that allows authors to create unique blog post.
          anc allows the lavmanns communitv to add adtional context to articles
          fr reduce comnievitv.
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
    </styled.ProjectSectionContainer>
  );
};

export default ProjectSection;
