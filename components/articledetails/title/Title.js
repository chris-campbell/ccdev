import styled from "styled-components";

const TitleContainer = styled.h1`
  color: ${(p) => p.theme.colors.white300};
  margin-bottom: 3rem;
  text-transform: uppercase;
  max-width: 42rem;
`;

const Title = ({ title }) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default Title;
