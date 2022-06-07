import * as React from "react";
import * as S from "./styles/styles";

const ContactModal = ({ open, handleClose }) => {
  return (
    <div>
      <S.ContactModalContainer
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalContent>
          <h2>Reach out!</h2>
        </S.ModalContent>
      </S.ContactModalContainer>
    </div>
  );
};

export default ContactModal;
