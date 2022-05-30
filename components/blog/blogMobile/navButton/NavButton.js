import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

import styled from "styled-components";

const NavButtonContainer = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;

const NavBbtn = styled(ArrowForwardIosIcon)`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grey200};
  padding: 0.5rem;
  border: 2px solid ${(p) => p.theme.colors.grey200};
  border-radius: 3rem;
  &:active {
    color: ${(p) => p.theme.colors.orange300};
  }
`;

const NavButton = ({ slug }) => {
  return (
    <NavButtonContainer>
      <Link href={`/blog/${slug}`}>
        <a>
          <NavBbtn />
        </a>
      </Link>
    </NavButtonContainer>
  );
};

export default NavButton;
