import Link from "next/link";
import { ProductCard } from "../Cards";

const ProductsList = ({products}) => {
  return (
    <div className=" bg-zinc-300 flex max-w-screen gap-3 flex-wrap justify-center">
      {products.products.edges.map((d, i) => {
        const data = d.node;
        return <ProductCard key={i} product={data}></ProductCard>;
      })}
    </div>
  );
}

const CollectionsList = ({ collections }) => {
  return (
    <div className=" bg-zinc-300 flex max-w-screen gap-3 flex-wrap justify-center mb-10">
      {collections.collections.edges.map((d, i) => {
        const data = d.node;
        return (
          <Link
          key={i}
            href={`/products/collections/${data.handle}`}
            className=" flex flex-col min-w-[300px] max-w-[400px] w-[10vw] bg-stone-100 rounded-lg drop-shadow-md p-5 justify-between "
          >
            <h1 className="text-xl font-bold">{data.title}</h1>
            <h2>{data.handle}</h2>
          </Link>
        );
      })}
    </div>
  );
};
export { ProductsList,CollectionsList}