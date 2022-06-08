import TextareaAutosize from "react-textarea-autosize";
import * as S from "./styles/styles";

const ModalTextArea = ({ label, type, placeholder, name }) => {
  return (
    <S.ModalTextAreaContainer>
      <label>{label}</label>
      <TextareaAutosize
        type={type}
        name={name}
        className="textarea"
        placeholder={placeholder}
      />
    </S.ModalTextAreaContainer>
  );
};

export default ModalTextArea;
