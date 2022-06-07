import Head from "next/head";
import dynamic from "next/dynamic";
import { fetchAllArticles } from "../../query/query";
import { AppContext } from "../../context/state";
import { useContext, useEffect } from "react";

const BlogContainer = dynamic(
  () => import("../../components/blog/BlogContainer"),
  { ssr: false }
);

const Blog = (articles) => {
  const { setCurrentArticles } = useContext(AppContext);

  useEffect(() => {
    setCurrentArticles(articles);
  }, []);

  return (
    <>
      <Head>
        <title>2ndPlayer | Articles, Tutorial & Tech News </title>
        <meta
          name="description"
          content="Articles and tutorials that focus on both programming and tech products and news."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <BlogContainer articles={articles} />
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const { articles } = await fetchAllArticles(5);

  return {
    props: {
      articles,
    },
  };
};
