import Head from "next/head";
import BlogContainer from "../../components/blog/Blogcontainer";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>CCDev | Articles </title>
        <meta name="description" content="Professional" />
      </Head>

      <BlogContainer allArticles={articles} />
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
          createdAt
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

  return {
    props: {
      articles,
    },
  };
};
