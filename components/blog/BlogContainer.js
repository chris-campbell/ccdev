import Articles from "./articles/Articles";
import Hero from "./hero/Hero";

const BlogContainer = ({ article, allArticles }) => {
  return (
    <>
      <Hero article={article} />
      <Articles allArticles={allArticles} />
    </>
  );
};

export default BlogContainer;
