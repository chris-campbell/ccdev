import * as S from "./styles/styles";

const Content = ({ content }) => {
  return (
    <div>
      <S.ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </S.ContentWrapper>
    </div>
  );
};

export default Content;
