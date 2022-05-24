import styled from "styled-components";

const PublishDateContainer = styled.div`
  font-family: ${(p) => p.theme.fonts.paragraph};
  color: #a8aaac;
  margin-bottom: 1rem;
`;

const PublishDate = ({ date }) => {
  const formattedDate = new Date(date);
  const dateOfMonth = formattedDate.getUTCDate();
  const month = formattedDate.toLocaleString("en-us", { month: "short" });
  const year = formattedDate.getUTCFullYear();

  const timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const time = formattedDate.toLocaleTimeString("en-us", timeFormatOptions);

  return (
    <PublishDateContainer>{`Posted on ${dateOfMonth} ${month}, ${year} - ${time}`}</PublishDateContainer>
  );
};

export default PublishDate;
