import { ProductsList } from "@/app/components/Product/ProductsList";
import { shopifyQuery } from "@/utils/shopify";
import { getProductsInCollection } from "@/utils/shopifyQuery";

export async function generateMetadata(
  { params, searchParams },
  parent
) {
  const { handle } = params;
  const result = await shopifyQuery(getProductsInCollection(handle));
  const { products, title, description, image } = result.collection;

  return {
    title: title,
    description:description,
    openGraph: {
      images: [image.url],
    },
  };
}
async function page({ params }) {
  const { handle } = params;
  const result = await shopifyQuery(getProductsInCollection(handle));
const {products,title,description,image}=result.collection
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold text-slate-700 mb-5">{title}</h1>
      <h2 className="text-base lg:text-lg font-normal text-slate-500 mb-5">{description}</h2>
      <ProductsList products={products} />
    </div>
  );
}

export default page;
