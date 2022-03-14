import styled from "styled-components";

export const ProjectsContainer = styled.section`
  clear: both;
  margin: 0 auto;
  max-width: 1600px;
`;

export const ProjectsWrapper = styled.div`
  h2 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 5rem 0;
  }

  padding: calc(250px - 150px) 150px;
  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }
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
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-family: ${(p) => p.theme.font.paragraph};
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
    color: #72707061;
    flex-grow: 1;
    &:hover {
      font-weight: 600;
      color: ${(p) => p.theme.colors.white_300};
      transition: 400ms;
      cursor: pointer;
    }
  }
`;

export const ProjectsDescription = styled.div`
  flex: 4;
  font-size: clamp(1rem, 5vw, 1.2rem);
  font-family: ${(p) => p.theme.font.paragraph};
  color: ${(p) => p.theme.colors.white_300};
  line-height: 1.9rem;
  letter-spacing: 0.1rem;
`;

export const ProjectIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  color: ${(p) => p.theme.colors.blue_100};
  font-size: 1.5rem;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ExternalLinks = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(p) => p.theme.colors.white_300};
`;

export const Hobbies = styled.p`
  font-family: ${(p) => p.theme.font.paragraph};
  color: ${(p) => p.theme.colors.white_300};
  margin-top: 4rem;
  span {
    margin-left: 1rem;
    color: ${(p) => p.theme.colors.grey_200};
  }
`;
