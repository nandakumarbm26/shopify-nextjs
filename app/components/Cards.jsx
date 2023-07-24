import Link from "next/link";

export function Card({ children }) {
  return <div className="bg-white drop-shadow-md p-4">{children}</div>;
}

export function ProductCard({ product, children,key }) {
  return (
    <Link
    key={key}
      className="cursor-pointer relative flex hover:scale-[102%] hover:-translate-y-1 transition-all duration-100  flex-col min-w-[300px] max-w-[400px] w-[10vw] bg-stone-100 rounded-lg drop-shadow-md p-5 justify-between "
      href={`/products/${product.handle}`}
    >
      <h1 className="text-xl font-bold">{product.title}</h1>
      <h2>{product.handle}</h2>
      {children}
      <img
        src={product.featuredImage.url}
        className=" mix-blend-multiply"
        height={200}
        width={200}
        alt={product.featuredImage.altText}
      />
      <div>{product.priceRange.minVariantPrice.amount}</div>
    </Link>
  );
}
