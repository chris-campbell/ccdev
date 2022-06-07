import styled from "styled-components";

export const ProjectsContainer = styled.section`
  clear: both;
  margin: 0 auto;
  max-width: 1300px;
`;

export const ProjectsWrapper = styled.div`
  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    margin: 5rem 0;
  }

  padding: clamp(2.5rem, 10vw, calc(250px - 100px)) clamp(1rem, 10vw, 150px);
`;

export const ProjectsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 879px) {
    flex-direction: column;
  }
`;

export const ProjectsListItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 0;
  width: -webkit-fill-available;
  li {
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-family: ${(p) => p.theme.fonts.heading};
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
    color: #72707061;
    flex-grow: 1;
    &:hover {
      font-weight: 600;
      color: ${(p) => p.theme.colors.white300};
      transition: 400ms;
      cursor: pointer;
    }
  }
`;

export const ProjectsDescription = styled.div`
  flex: 4;
  font-size: 1rem;
  font-family: ${(p) => p.theme.fonts.paragraph};
  color: ${(p) => p.theme.colors.white300};
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
`;

export const ExternalLinks = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(p) => p.theme.colors.white300};
`;

export const Hobbies = styled.p`
  font-family: ${(p) => p.theme.fonts.parapgraph};
  color: ${(p) => p.theme.colors.white300};
  margin-top: 4rem;
  span {
    margin-left: 1rem;
    color: ${(p) => p.theme.colors.grey200};
  }
`;
