import Head from "next/head";
import client from "../../apolloClient";
import ArticleDetails from "../../components/articledetails/ArticleDetails";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

function ArticleDetail({ article, host }) {
  const { coverImage } = article;
  const { title, description, keyword, image } = article.seo;
  const { url } = coverImage;
  const path = useRouter().asPath;

  return (
    <>
      <Head>
        {/* Default Meta */}
        <title>2nd Player | {title} </title>
        <meta name="keywords" content={keyword.toString()} />
        <meta name="description" content={description} />

        {/* OG Sharing Meta */}
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image.url ? image.url : null} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://${host}${path}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" itemProp="image" content={url} />
        <meta property="og:image:secure_url" content={url} />
        <meta property="og:site_name" content="2ndPlayer" />

        {/* Twitter Meta */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={`${url}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@2ndplayr" />
      </Head>

      <ArticleDetails article={article} host={host} />
    </>
  );
}

export default ArticleDetail;

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
            raw
          }
          authors {
            name
            description
            role
            socials {
              urls
            }
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
              url
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
