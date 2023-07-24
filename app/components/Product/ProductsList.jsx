import Link from "next/link";
import { ProductCard } from "../Cards";

const ProductsList = ({products}) => {
  return (
    <div className="  flex max-w-screen gap-3 flex-wrap justify-center">
      {products.edges.map((d, i) => {
        const data = d.node;
        return <ProductCard key={i} product={data}></ProductCard>;
      })}
    </div>
  );
}

const CollectionsList = ({ collections }) => {
  return (
    <div className="flex w-full gap-4 overflow-x-scroll hide-scrollbar p-2">
      {collections.collections.edges.map((d, i) => {
        const data = d.node;
        return (
          <Link
            key={i}
            href={`/products/collections/${data.handle}`}
            className=" flex flex-col min-w-max bg-stone-100 hover:bg-stone-200 rounded-lg drop-shadow-md px-3 py-2 justify-between "
          >
            <div className="text-xs font-bold">{data.title}</div>
          </Link>
        );
      })}
    </div>
  );
};
export { ProductsList,CollectionsList}