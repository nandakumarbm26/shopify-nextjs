import { shopifyQuery } from "@/utils/shopify";
import {
  getAllCollections,
  getAllProductsQuery,
} from "@/utils/shopifyQuery.js";
import { ProductCard } from "../components/Cards";
import Link from "next/link";
import {
  CollectionsList,
  ProductsList,
} from "../components/Product/ProductsList";

export default async function page({ params, searchQuery }) {
  const products = await shopifyQuery(getAllProductsQuery);
  const collections = await shopifyQuery(getAllCollections);
  const id = 100;
  return (
    <>
      <CollectionsList collections={collections} />
      <ProductsList products={products} />
    </>
  );
}
