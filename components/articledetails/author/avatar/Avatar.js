import React from "react";
import Image from "next/image";

import * as S from "./styles/styles";

const Avatar = ({ url }) => {
  return (
    <S.AvatarContainer>
      <Image src={url} width={200} height={200} />
    </S.AvatarContainer>
  );
};

export default Avatar;
