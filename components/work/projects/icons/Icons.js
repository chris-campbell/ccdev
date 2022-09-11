import styled from "styled-components";
import Icon from "./icon/Icon";

export const ProjectIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  color: ${(p) => p.theme.colors.royal};
  font-size: 1.5rem;
  justify-content: space-between;
`;

export const IconsBar = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icons = ({ projects, index }) => {
  return (
    <div>
      <ProjectIcons>
        <IconsBar>
          {projects[index].icons.map((icon) => (
            <Icon key={icon.id} url={icon.url} />
          ))}
        </IconsBar>
      </ProjectIcons>
    </div>
  );
};

export default Icons;
