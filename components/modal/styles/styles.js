import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const ContactModalContainer = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: ${(p) => p.theme.colors.white300};
  width: 35rem;
  max-width: 35rem;
  height: 20rem;
  outline: none;
  padding: 1rem;
  border-radius: 0.3rem;
`;
