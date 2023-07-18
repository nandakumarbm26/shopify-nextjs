import { shopifyQuery } from "@/utils/shopify";
import {
  getAllCollections,
  getAllProductsQuery,
} from "@/utils/shopifyQuery.js";

export default async function page({ params, searchQuery }) {
  const products = await shopifyQuery(getAllProductsQuery);
  const collections = await shopifyQuery(getAllCollections);
  console.log(JSON.stringify(collections));
  const id = 100;
  return (
    <>
      <div className=" bg-zinc-300 flex max-w-screen gap-3 flex-wrap justify-center mb-10">
        {collections.collections.edges.map((d, i) => {
          const data = d.node;
          return (
            <div className=" flex flex-col min-w-[300px] max-w-[400px] w-[10vw] bg-stone-100 rounded-lg drop-shadow-md p-5 justify-between ">
              <h1 className="text-xl font-bold">{data.title}</h1>
              {/* <h2>{data.handle}</h2> */}
            </div>
          );
        })}
      </div>
      <div className=" bg-zinc-300 flex max-w-screen gap-3 flex-wrap justify-center">
        {products.products.edges.map((d, i) => {
          const data = d.node;
          return (
            <div className=" flex flex-col min-w-[300px] max-w-[400px] w-[10vw] bg-stone-100 rounded-lg drop-shadow-md p-5 justify-between ">
              <h1 className="text-xl font-bold">{data.title}</h1>
              {/* <h2>{data.handle}</h2> */}

              <img
                src={data.featuredImage.url}
                className=" mix-blend-multiply"
                height={200}
                width={200}
                alt={data.featuredImage.altText}
              />
              <div>{data.priceRange.minVariantPrice.amount}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
