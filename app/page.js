import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import Hero from "./components/Hero";
import { shopifyQuery } from "@/utils/shopify";
import { getAllProductsQuery } from "@/utils/shopifyQuery";
import { ProductCard } from "./components/Cards";
import { product } from "./data";


export default async function page({ params, searchQuery }) {
  const products = await shopifyQuery(getAllProductsQuery,{});
  return (
    <div>
      <HeroCarousel />
      <Hero />
      <div className=" py-10 bg-zinc-300 flex max-w-screen gap-3 flex-wrap justify-center">
        {products.products.edges.map((d, i) => {
          const data = d.node;
          return <ProductCard key={i} product={data}></ProductCard>;
        })}
      </div>
    </div>
  );
}
