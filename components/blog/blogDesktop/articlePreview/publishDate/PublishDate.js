import * as S from "./styles/styles";

const PublishDate = ({ date }) => {
  const formattedDate = new Date(date);
  const dateOfMonth = formattedDate.getUTCDate();
  const month = formattedDate.toLocaleString("en-us", { month: "short" });
  const year = formattedDate.getUTCFullYear();

  const timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const time = formattedDate.toLocaleTimeString("en-us", timeFormatOptions);

  return (
    <S.PublishDateContainer>{`Posted on ${dateOfMonth} ${month}, ${year} - ${time}`}</S.PublishDateContainer>
  );
};

export default PublishDate;
