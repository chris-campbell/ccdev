import Head from "next/head";
import dynamic from "next/dynamic";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

const BlogContainer = dynamic(
  () => import("../../components/blog/BlogContainer"),
  { ssr: false }
);

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>CCDev | Articles, Tutorial & Tech News </title>
        <meta
          name="description"
          content="Articles and tutorials that focus on both programming and tech products and news."
        />
        <meta name="robots" content="index, follow" />
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
            name
            role
            description
            socials {
              urls
            }
            avatar {
              id
              url
              createdAt
            }
          }
          seo {
            title
            description
            keyword

            image {
              url
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
