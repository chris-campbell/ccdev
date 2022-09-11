import styled from "styled-components";

export const Title = ({ title, isShowing, toggle }) => {
  return (
    <TitleContainer showing={isShowing}>
      <p onClick={() => toggle()}>{title}</p>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  color: ${(p) => p.theme.colors.egg};
  border-bottom: 1px solid ${(p) => p.theme.colors.royal};
  p {
    font-size: 0.9rem;
    padding: 0.6rem;
    width: 100%;
    &:hover {
      transition: 500ms;
      background-color: ${(p) => p.theme.colors.coalBlue};
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
    }
  }
`;
