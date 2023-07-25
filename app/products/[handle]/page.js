import { ProductCard } from "@/app/components/Cards";
import { product } from "@/app/data";
import { shopifyQuery } from "@/utils/shopify";
import { getProductByHandle } from "@/utils/shopifyQuery";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  const { handle } = params;
  const result = await shopifyQuery(getProductByHandle(handle));
  const { title, description, featuredImage } = result.product;

  return {
    title: title,
    description: description,
    openGraph: {
      images: [featuredImage.url],
    },
  };
}
async function page({ params }) {
  const { handle } = params;
  const values = {
    handle: handle,
  };
  const products = await shopifyQuery(getProductByHandle(handle), values);
  // const products = product.products.edges[0].node;
  const product = products.product;
  const varients = product.variants.edges;
  const images = product.images.edges
  return (
    <div className="flex flex-col md:flex-row w-full ">
      <div className="w-full min-h-[300px] h-max  md:w-[60%] md:min-h-[500px] relative flex flex-col md:flex-row md:m-5 bg-white drop-shadow-lg items-center">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          className="w-[80%] h-full"
          width={600}
          height={400}
        />
        <div className="flex md:flex-col h-full w-full overflow-x-scroll overflow-y-hidden mx-auto hide-scrollbar md:border-l ">
          {images.map((d, i) => {
            const image = d.node;
            return (
              <div key={i} className="">
                <Image
                  src={image.url}
                  alt={image.altText}
                  width={200}
                  height={120}
                  className="w-[80px] h-[60px] md:w-full md:h-[100px] hover:brightness-90 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-[40%]  p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-medium text-gray-800">{product.title}</h1>
        <h2 className="text-lg font-normal text-gray-800">{product.handle}</h2>
        <h3 className="text-lg font-semibold text-red-900">
          Price : ${product.priceRange.minVariantPrice.amount} - $
          {product.priceRange.maxVariantPrice.amount}
        </h3>
        <p>{product.description}</p>
        <div>
          <div className="text-base font-semibold">Variants:</div>
          <div className="flex gap-3">
            {varients.map((d, i) => {
              const prod = d.node;
              return (
                <div
                  key={i}
                  className="relative shadow-md w-full h-max group hover:bg-gray-200  transition-all duration-200 ease-linear rounded-lg hover:-translate-y-1"
                >
                  <Image
                    className=" w-[90px] h-[50px] object-contain group-hover:mix-blend-multiply"
                    src={prod.image.url}
                    width={120}
                    height={80}
                    alt={"d.title"}
                  />
                  <div className="group-hover:text-sm lg:group-hover:text-lg absolute top-0 right-0 text-xs text-black m-2 transition-all duration-200 ease-linear">
                    {prod.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="fixed md:relative bottom-0 w-screen md:w-full flex left-0 md:gap-2">
          <button className="p-2 bg-slate-500 md:rounded-md shadow-md text-white text-sm hover:bg-slate-400 h-[50px] transition-all duration-200 w-[50%] md:max-w-[200px]">
            Buy Now
          </button>
          <button className="p-2  w-[50%]  bg-slate-900 md:rounded-md shadow-md text-white text-sm h-[50px]  hover:bg-slate-700 transition-all duration-200 md:max-w-[200px]">
            Add to Cart
          </button>
        </div>
      </div>
      {/* <div>{JSON.stringify(images)}</div> */}
    </div>
  );
}

export default page;
