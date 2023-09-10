import Modal from "@mui/material/Modal";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.blueSky};
  padding: clamp(3rem, 4vw, 8rem);
`;

export const FooterWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  max-width: 100%;
  gap: 7rem;

  @media (max-width: 720px) {
    gap: 2rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  h4 {
    color: ${(p) => p.theme.colors.darkBlue};
    margin-bottom: 1rem;
  }

  ul {
    justify-content: flex-start;
  }

  ul > li {
    color: ${(p) => p.theme.colors.darkBlue};
    list-style: none;
    margin-bottom: 0.5rem;
    &:hover {
      transition: all 300ms;
      opacity: 0.7;
    }

    &:active {
      color: ${(p) => p.theme.colors.darkBlue};
    }
  }
`;

export const Frame = styled.div`
  @media (max-width: 720px) {
    margin-bottom: 1.5rem;
  }
`;

export const Legal = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  max-width: 1200px;
  padding-top: 1rem;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.darkBlue};
`;

export const ModalContent = styled.div`
  background-color: ${(p) => p.theme.colors.egg};
  width: 20rem;
  max-width: 20rem;
  height: 20rem;
`;
