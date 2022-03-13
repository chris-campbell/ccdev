import { Javascript } from "@mui/icons-material";
import * as S from "./styles/styles";

export const Projects = () => {
  return (
    <S.ProjectsContainer>
      <S.ProjectsWrapper>
        <h2>Projects</h2>

        <S.ProjectsBox className="projects-bx">
          <S.ProjectsListItems>
            <li>Hello Dixie Co.</li>
            <li>Laymanns</li>
            <li>Movie Searcher</li>
            <li>Sudoku</li>
          </S.ProjectsListItems>
          <S.ProjectsDescription className="projects-description">
            Breathe new life into your existing platform. Whether it needs a
            face-lift or just to have its performance-optimized, improving your
            site’s aesthetics will drastically change how quickly customers open
            their wallets.
            <div>
              <Javascript />
              <Javascript />
              <Javascript />
            </div>
          </S.ProjectsDescription>
        </S.ProjectsBox>
      </S.ProjectsWrapper>
    </S.ProjectsContainer>
  );
};

export default Projects;
