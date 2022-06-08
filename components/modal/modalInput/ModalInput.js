import * as S from "./styles/styles";

const ModalInput = ({ type, label, placeholder, name }) => {
  return (
    <S.ModalInputContainer>
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </S.ModalInputContainer>
  );
};

export default ModalInput;
