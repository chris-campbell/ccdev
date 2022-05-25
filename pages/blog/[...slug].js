import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";
import Head from "next/head";
import ArticleDetails from "../../components/articledetails/ArticleDetails";
import GeneralHead from "../../heads/GeneralHead";
import TwitterHead from "../../heads/TwitterHead";

function ArticleDetail({ article, host }) {
  const { coverImage, title, excerpt } = article;
  const { url } = coverImage;
  const asPath = useRouter().asPath;

  return (
    <div>
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

        <TwitterHead
          title={title}
          description={excerpt}
          image={url}
          card={"summary_large_image"}
        />
      </Head>

      <RWebShare
        data={{
          text: `${excerpt}`,
          url: `${host}${asPath}`,
          title: `${title}`,
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
