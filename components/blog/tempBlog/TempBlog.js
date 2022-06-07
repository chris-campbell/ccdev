import FourArticleGrid from "./fourArticleGrid/FourArticleGrid";
import Hero from "./hero/Hero";

const TempBlog = ({ articles }) => {
  return (
    <div>
      <div>
        <Hero article={articles.articles[0]} />
        <FourArticleGrid articles={articles.articles} />
      </div>
    </div>
  );
};

export default TempBlog;
