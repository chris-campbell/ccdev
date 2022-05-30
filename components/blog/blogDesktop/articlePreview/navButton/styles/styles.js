import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavBbtn = styled(ArrowForwardIosIcon)`
  font-size: 2rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grey200};
  padding: 0.5rem;
  border: 2px solid ${(p) => p.theme.colors.grey200};
  border-radius: 3rem;
  &:active {
    color: ${(p) => p.theme.colors.orange300};
  }
`;
