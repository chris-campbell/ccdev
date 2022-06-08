import { useRef } from "react";
import Form from "./form/Form";
import SocialIcon from "./socialIcon/SocialIcon";
import sendEmail from "./utils/sendEmail";

import * as S from "./styles/styles";

const ContactModal = ({ open, handleClose }) => {
  const form = useRef();

  return (
    <div>
      <S.ContactModalContainer
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalContent>
          <div className="modal-content-wrapper">
            <S.ReachOut className="reach-out">
              <h2>Contact me</h2>
              <div className="social-outreach">
                <SocialIcon
                  imageUrl="https://s3.us-east-2.amazonaws.com/2ndplayer.co/contact-icons/whatsapp-icon.svg"
                  iconSize={25}
                />
                <SocialIcon
                  imageUrl="https://s3.us-east-2.amazonaws.com/2ndplayer.co/contact-icons/messenger-icon.svg"
                  iconSize={25}
                />
                <SocialIcon
                  imageUrl="https://s3.us-east-2.amazonaws.com/2ndplayer.co/contact-icons/email-icon.svg"
                  iconSize={25}
                />
              </div>
            </S.ReachOut>

            <Form form={form} sendEmail={(e) => sendEmail(e, form)} />
          </div>
        </S.ModalContent>
      </S.ContactModalContainer>
    </div>
  );
};

export default ContactModal;
