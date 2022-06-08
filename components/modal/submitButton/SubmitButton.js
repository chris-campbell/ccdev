import SendIcon from "@mui/icons-material/Send";
import * as S from "./styles/styles";

const SubmitButton = () => {
  return (
    <S.SubmitButtonContainer>
      <S.SubmitButtonWrapper type="submit" value="Send">
        Send
        <SendIcon />
      </S.SubmitButtonWrapper>
    </S.SubmitButtonContainer>
  );
};

export default SubmitButton;
