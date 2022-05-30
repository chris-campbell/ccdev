import PublishDate from "./publishDate/PublishDate";
import CoverImage from "./coverImage/CoverImage";
import Title from "./title/Title";
import Content from "./content/Content";
import Author from "./author/Author";
import SocialIcons from "./socialIcons/SocialIcons";
import { useRouter } from "next/router";

import * as S from "./styles/styles";

const ArticleDetails = ({ article, host }) => {
  const { title, content, createdAt, coverImage, authors } = article;
  const path = useRouter().asPath;
  const url = `https://${host}${path}`;

  return (
    <>
      <S.ArticleDetailsContainer>
        <S.ArticleDetailsWrapper>
          <PublishDate date={createdAt} />
          <Title title={title} />
          <SocialIcons url={url} title={title} />
          <CoverImage url={coverImage.url} />
          <Content content={content} />
          <Author authors={authors} />
        </S.ArticleDetailsWrapper>
      </S.ArticleDetailsContainer>
    </>
  );
};

export default ArticleDetails;
