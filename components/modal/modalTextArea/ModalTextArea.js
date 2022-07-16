import TextareaAutosize from "react-textarea-autosize";
import * as S from "./styles/styles";

const ModalTextArea = ({ label, type, placeholder, name }) => {
  const invalidInput = () => {
    alert("Please enter a message");
  };
  return (
    <S.ModalTextAreaContainer>
      <label>{label}</label>

      <TextareaAutosize
        type={type}
        name={name}
        className="textarea"
        required
        onInvalid={invalidInput}
        placeholder={placeholder}
      />
    </S.ModalTextAreaContainer>
  );
};

export default ModalTextArea;
