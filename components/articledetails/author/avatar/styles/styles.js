import styled from "styled-components";

export const AvatarContainer = styled.div`
  img {
    min-width: 200px;
    border-radius: 10rem;
    @media (max-width: 405px) {
      min-width: auto;
      width: 100px;
      height: 100px;
    }
  }
`;
