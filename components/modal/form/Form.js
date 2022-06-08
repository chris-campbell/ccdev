import ModalInput from "../modalInput/ModalInput";
import ModalTextArea from "../modalTextArea/ModalTextArea";
import SubmitButton from "../submitButton/SubmitButton";

import * as S from "./styles/styles";

const Form = ({ form, sendEmail }) => {
  return (
    <form ref={form} onSubmit={sendEmail}>
      <S.ModalNameInputs>
        <ModalInput
          label="Name"
          type="text"
          name="name"
          placeholder="Joe Smith"
        />
        <ModalInput
          label="Email"
          type="email"
          name="email"
          placeholder="doe@domain.com"
        />
      </S.ModalNameInputs>

      <ModalTextArea
        type="text"
        label="Message"
        name="message"
        placeholder="Talk to me..."
      />

      <SubmitButton />
    </form>
  );
};

export default Form;
