import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Avatar = ({ url }) => {
  return (
    <AvatarContainer>
      <Image src={url} width={200} height={200} />
    </AvatarContainer>
  );
};

export default Avatar;

const AvatarContainer = styled.div`
  img {
    min-width: 200px;
    border-radius: 10rem;
    @media (max-width: 405px) {
      min-width: auto;
    }
  }
`;
