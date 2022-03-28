import Head from "next/head";
import BlogContainer from "../../components/blog/BlogContainer";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

const Blog = ({ articles }) => {
  const article = articles[0];

  console.log(article);

  return (
    <>
      <Head>
        <title>CCDev | Articles </title>
        <meta name="description" content="Professional" />
      </Head>

      <BlogContainer article={article} allArticles={articles} />
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          id
          title
          slug
          featured
          category
          excerpt
          coverImage {
            url
          }
          content {
            html
          }
          authors {
            avatar {
              id
              url
              createdAt
            }
            name
          }
          seo {
            title
            description
            keyword
            image {
              id
            }
          }
        }
      }
    `,
  });

  const { articles } = data;

  console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
