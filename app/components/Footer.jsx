import Link from "next/link";

function Footer() {
  return (
    <div id="footer" className="w-full bg-slate-800  px-2 lg:px-10 py-5">
      <div className="text-2xl text-slate-200">STOre.</div>
      <div className="flex flex-col lg:flex-row gap-5 text-gray-400">
        <Link href="#">About us</Link>
        <Link href="#">About us</Link>
        <Link href="#">About us</Link>
        <Link href="#">About us</Link>
      </div>
      <div>Sign Up for Newsletter.</div>
      <div className="flex flex-col lg:flex-row gap-5 text-gray-400">
        <Link href="#">Instagram</Link>
        <Link href="#">Facebook</Link>
        <Link href="#">Twitter</Link>
      </div>
    </div>
  );
}

export default Footer