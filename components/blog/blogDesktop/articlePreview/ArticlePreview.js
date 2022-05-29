import PublishDate from "./publishDate/PublishDate";
import Title from "./title/Title";
import CoverImage from "./coverImage/CoverImage";
import Excerpt from "./excerpt/Excerpt";
import NavButton from "./navButton/NavButton";

const ArticlePreview = ({ currentPreview }) => {
  const { title, excerpt, createdAt, coverImage, slug } = currentPreview;
  return (
    <S.ArticlePreviewContainer>
      <S.ArticleMeta>
        <PublishDate date={createdAt} />
        <Title title={title} />
      </S.ArticleMeta>
      <CoverImage url={coverImage?.url} />
      <S.NavContent>
        <Excerpt content={excerpt} />
        <NavButton slug={slug} />
      </S.NavContent>
    </S.ArticlePreviewContainer>
  );
};

export default ArticlePreview;
