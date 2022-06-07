import client from "../apolloClient";
import { gql } from "@apollo/client";

export const fetchAllArticles = async (limit = 50) => {
  const { data } = await client.query({
    query: gql`
      query {
        articles(first: ${limit}) {
          id
          title
          slug
          featured
          category
          excerpt
          createdAt
          tags
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

  return data;
};
