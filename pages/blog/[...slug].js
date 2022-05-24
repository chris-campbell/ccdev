import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import Head from "next/head";
import ArticleDetails from "../../components/articledetails/ArticleDetails";

function ArticleDetail({ article }) {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div>
      <Head>
        <title>CCDev | Articles </title>
        <meta property="og:image" content={`${article.coverImage.url}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:url" content={router.asPath} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${article.coverImage.url}`} />
        <meta name="twitter:title" content={article.title} />
      </Head>

      <RWebShare
        data={{
          text: article.title,
          url: `https://www.chriscampbelldev.com${router.asPath}`,
          title: "Share this article on Flamingos",
        }}
        onClick={() => console.info("share successful!")}
      >
        <button>Share Button</button>
      </RWebShare>
      <ArticleDetails article={article} />
    </div>
  );
}

export default ArticleDetail;

// Gets all the different paths for all the different post
export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          slug
        }
      }
    `,
  });

  const { articles } = data;

  const paths = articles.map((article) => ({
    params: { slug: [article.slug] },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query Article($slug: String!) {
        articles(where: { slug: $slug }) {
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

    variables: { slug },
  });

  const { articles } = data;

  const article = articles[0];

  return {
    props: { article },
  };
}
