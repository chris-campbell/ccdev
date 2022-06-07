import React from "react";
import Link from "next/link";
import * as S from "./styles/styles";

const NavLink = ({ fade, label, url }) => {
  return (
    <S.NavLinkContainer variants={fade} initial="hidden" animate="visible">
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </S.NavLinkContainer>
  );
};

export default NavLink;
