import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const ContactModalContainer = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: ${(p) => p.theme.colors.blue100};
  width: 100%;
  max-width: 45rem;
  min-height: 20rem;
  outline: none;
  padding: 4rem 2rem;
  border-radius: 0.3rem;
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 39%) !important;
  margin: 0 1rem;
`;

export const ReachOut = styled.div`
  display: flex;
  gap: 2.3rem;
  margin-bottom: 2rem;

  h2 {
    color: ${(p) => p.theme.colors.white300};
  }

  .social-outreach {
    display: flex;
    gap: 0.7rem;

    span > img {
      width: 1.2rem !important;
    }
  }
`;
