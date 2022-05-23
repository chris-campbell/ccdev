import styled from "styled-components";

const TitleContainer = styled.h1`
  color: ${(p) => p.theme.colors.white300};
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-size: clamp(1.1rem, 2vw, 2rem);
`;

const Title = ({ title }) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default Title;
