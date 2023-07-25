import { gql } from "graphql-request";

export const getAllProductsQuery = gql`
  {
    products(first: 10) {
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
    collections(first: 20) {
      edges {
        cursor
        node {
          id
          handle
          title
          image {
            url
            altText
          }
          
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const getProductByHandle = (handle) => {
  return gql`
    {
      product(handle:"${handle}") {
        id
        title
        description
        featuredImage{
          url
          altText
        }
     
					images(first: 10) {
						edges {
							node {
								id
								url
								width
								height
								altText
							}
						}
					}
					priceRange { 
						minVariantPrice {
							amount
							currencyCode
						}
						maxVariantPrice {
							amount
							currencyCode
						}
					}
        variants(first: 3) {
          edges {
            cursor
            node {
              id
              title
              quantityAvailable
              price {
                amount
                currencyCode
              }
              image {
                url
                altText
              }
            }
          }
        }
      }
    }
  `;
};

export const getProductsInCollection = (collectionHandle) => {
  return gql`
  {
	collection(handle: "${collectionHandle}") {
		id
		title
    description
    seo{
      description
      title
    }
    image {
      url
      altText
    }
		products(first: 50, sortKey: BEST_SELLING) {
			edges {
				node {
					id
					title
					vendor
					availableForSale
          handle
          featuredImage {
            altText
            url 
          }
					images(first: 1) {
						edges {
							node {
								id
								url
								width
								height
								altText
							}
						}
					}
					priceRange { 
						minVariantPrice {
							amount
							currencyCode
						}
						maxVariantPrice {
							amount
							currencyCode
						}
					}
				}
			}
		}
	}
}`;
};

export const createCustomer = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
        phone
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
export const getCustomerInfo = gql`
{
  customer($customerAccessToken){
    
  }
}
`;


export const createAccessToken = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const createCart = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;