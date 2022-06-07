import AllArticlesContainer from "../../components/blog/allArticlesContainer/AllArticlesContainer";
import { fetchAllArticles } from "../../query/query";

const AllArticles = (articles) => {
  return <AllArticlesContainer articles={articles.articles} />;
};

export default AllArticles;

export const getStaticProps = async () => {
  const { articles } = await fetchAllArticles();

  return {
    props: {
      articles,
    },
  };
};
