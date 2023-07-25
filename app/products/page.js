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
export const metadata = {
  title: "STOre. Products",
  descirption:
    "Join our email list and stay in touch with all things Poketo. We'll send you a code for 10% off your first online purchase!",
  openGraph: ["/vercel.svg"],
};
export default async function page({ params, searchQuery }) {
  const products = await shopifyQuery(getAllProductsQuery);
  const collections = await shopifyQuery(getAllCollections);
  const id = 100;
  return (
    <div className="flex w-full flex-col gap-10 p-2 md:p-4 lg:p-5">
      <CollectionsList collections={collections} />
      <ProductsList products={products.products} />
    </div>
  );
}
