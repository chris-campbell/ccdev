import React from "react";
import Link from "next/link";
import * as S from "./styles/styles";

const NavButton = ({ slug }) => {
  return (
    <S.NavButtonContainer>
      <Link href={`/articles/${slug}`}>
        <a>
          <S.NavBbtn />
        </a>
      </Link>
    </S.NavButtonContainer>
  );
};

export default NavButton;
