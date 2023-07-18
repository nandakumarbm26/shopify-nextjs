import { gql } from "graphql-request";

export const getAllProductsQuery = gql`
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          featuredImage {
            altText
            url
          }
        }
      }
    }
  }
`;

export const getAllCollections = gql`
  {
    collections(first: 10) {
      edges {
        cursor
        node {
          id
          handle
          title
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
