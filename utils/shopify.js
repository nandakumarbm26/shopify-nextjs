import { toast } from "@/app/components/Toast";
import { GraphQLClient } from "graphql-request";
const storefrontAccessToken = "cd02ae64a8631d0b54c297753f83f8b9";
const endpoint = "https://nkstore26.myshopify.com/api/2023-07/graphql.json";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});

export async function shopifyQuery(query, value) {
  try {
    const res = await graphQLClient.request(query, value);
    return res;
  } catch (e) {
     toast({
       type: "error",
       message: "Unexpected error occured. Please try again.",
     });
  }
}
