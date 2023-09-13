import Head from "next/head";
import client from "../../apolloClient";
import ArticleDetails from "../../components/articledetails/ArticleDetails";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

function ArticleDetail({ article, host }) {
  const { metaTitle, metaDescription, metaImage} = article;
  const path = useRouter().asPath;

  return (
    <>
      <Head>
        {/* Default Meta */}
        <title>2ndPlayer | {metaTitle} </title>
        <meta name="description" content={metaDescription || ""} />
        
        <meta name="twitter:title" content={metaTitle || ""} />
        <meta name="twitter:description" content={metaDescription || ""} />
        <meta name="twitter:image" content={metaImage ? metaImage.url : null} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@2ndplayerco" />
        <meta name="twitter:creator" content="@2ndplayerco" />
        
        <meta property="og:title" content={metaTitle || ""} />
        <meta property="og:description" content={metaDescription || ""} />
        <meta property="og:image" content={metaImage ? metaImage.url : ''} />
        <meta property="og:url" content={`https://${host}${path}`} />
        <meta property="og:site_name" content="@2ndplayerco" />
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
          metaTitle
          metaDescription
          metaImage {
    			  id
            url
    			}
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
