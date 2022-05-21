import { gql } from "@apollo/client";
import client from "../../apolloClient";
import ArticleDetails from "../../components/articledetails/ArticleDetails";

function ArticleDetail() {
  return <ArticleDetails article={dummyArticle} />;
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
