import styled from "styled-components";

const PublishDateContainer = styled.div`
  font-family: ${(p) => p.theme.fonts[1]};
  color: ${(p) => p.theme.colors.grey400};
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
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
