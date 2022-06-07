import * as S from "./styles/styles";

const ContactLink = ({ label, fade, open }) => {
  return (
    <S.ContactLinkContainer variants={fade} initial="hidden" animate="visible">
      <a onClick={open}>{label}</a>
    </S.ContactLinkContainer>
  );
};

export default ContactLink;
