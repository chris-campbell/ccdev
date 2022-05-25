import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import Head from "next/head";
import ArticleDetails from "../../components/articledetails/ArticleDetails";
import GeneralHead from "../../components/heads/GeneralHead";
import TwitterHead from "../../components/heads/TwitterHead";

function ArticleDetail({ article, host }) {
  const { coverImage, title, excerpt } = article;
  const { url } = coverImage;
  const asPath = useRouter().asPath;

  return (
    <>
      <Head>
        {/* Default Meta */}
        <title>CCDev | Articles </title>
        {/* OG Sharing Meta */}
        <GeneralHead
          ogType="article"
          image={url}
          title={title}
          host={host}
          path={asPath}
        />
        {/* Twitter Meta */}
        {console.log({ url })}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image:src" content={`${url}`} />
        <meta name="twitter:image:width" content="400" />
        <meta name="twitter:image:height" content="400" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Head></Head>

      <RWebShare
        data={{
          text: `${title}`,
          url: `${host}${asPath}`,
          title: `${title}`,
          files: `${url}`,
        }}
        onClick={() => console.info("share successful!")}
      >
        <button>Share Button</button>
      </RWebShare>
      <ArticleDetails article={article} />
    </>
  );
}

export default ArticleDetail;

// Gets all the different paths for all the different post
// export const getStaticPaths = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         articles {
//           slug
//         }
//       }
//     `,
//   });

//   const { articles } = data;

//   const paths = articles.map((article) => ({
//     params: { slug: [article.slug] },
//   }));

//   return { paths, fallback: false };
// };

export async function getServerSideProps({ req, params }) {
  const { host } = req.headers;

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
    props: { article, host },
  };
}
