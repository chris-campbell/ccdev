import * as S from "./styles/styles";
import formatDate from "../../../js/formatDate";

const PublishDate = ({ date }) => {
  return (
    <S.PublishDateContainer>{`Posted on ${formatDate(date)}`}</S.PublishDateContainer>
  );
};

export default PublishDate;
