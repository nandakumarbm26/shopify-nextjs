import { shopifyQuery } from "@/utils/shopify";
import {
  getAllCollections,
  getAllProductsQuery,
} from "@/utils/shopifyQuery.js";
import { ProductCard } from "../../components/Cards";
import Link from "next/link";
import {
  CollectionsList,
  ProductsList,
} from "../../components/Product/ProductsList";
export const metadata = {
  title: "Trendy STOre. Collections",
  descirption:
    "Join our email list and stay in touch with all things Poketo. We'll send you a code for 10% off your first online purchase!",
  openGraph: ["/vercel.svg"],
};
export default async function page({ params, searchQuery }) {
  const products = await shopifyQuery(getAllProductsQuery);
  const result = await shopifyQuery(getAllCollections);
  const collections = result.collections.edges;
  return (
    <div className="flex w-full flex-col gap-10 p-2 md:p-4 lg:p-5">
      <h1 className="text-xl md:text-3xl font-bold text-slate-700 mb-5">
        Collections
      </h1>

      <ProductsList>
        {collections.map((d, i) => {
          const col = d.node;
          return (
            <ProductCard
            key={i}
              url="collections"
              product={{
                title: col.title,
                handle: col.handle,
                featuredImage: {
                  url: col.image?.url || "",
                  altText: col.image?.altText || "",
                },
              }}
            />
          );
        })}
      </ProductsList>
    </div>
  );
}
