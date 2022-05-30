import Head from "next/head";
import client from "../../apolloClient";
import ArticleDetails from "../../components/articledetails/ArticleDetails";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

function ArticleDetail({ article, host }) {
  console.log({ article });
  const { coverImage } = article;
  const { title, description, keyword } = article.seo;

  const { url } = coverImage;
  const path = useRouter().asPath;

  return (
    <>
      <Head>
        {/* Default Meta */}
        {console.log(host)}
        <title>CCDev | {title} </title>
        <meta name="keywords" content={keyword.toString()} />
        <meta name="description" content={description} />

        {/* OG Sharing Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://${host}${path}`} />
        <meta property="og:locale" content="en_US" />

        <meta property="og:image" itemprop="image" content={url} />
        <meta property="og:image:secure_url" content={url} />
        <meta property="og:image:type" content="image/jpeg" />

        <meta property="og:site_name" content="chriscampbelldev" />

        {/* Twitter Meta */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={`${url}`} />
        <meta name="twitter:image:width" content="400" />
        <meta name="twitter:image:height" content="400" />
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
