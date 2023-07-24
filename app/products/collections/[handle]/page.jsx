import { ProductsList } from "@/app/components/Product/ProductsList";
import { shopifyQuery } from "@/utils/shopify";
import { getProductsInCollection } from "@/utils/shopifyQuery";

async function page({ params }) {
  const { handle } = params;
  const products = await shopifyQuery(getProductsInCollection(handle));

  return <ProductsList products={products.collection}/>;
}

export default page;
