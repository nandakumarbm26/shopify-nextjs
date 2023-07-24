"use client";
import { useState } from "react";
import Slider, { SliderItem } from "./NavSlider";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="flex justify-between w-full px-4 lg:px-10 py-2 shadow-inner items-center h-[80px] bg-slate-100">
      <div className="flex items-center gap-10 ">
        <div className="text-2xl font-bold">STOre.</div>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <div className="hidden text-[10px] text-gray-700 lg:flex gap-2 lg:gap-5 ">
          <Link href="/products">Collections</Link>
          <Link href="/products">Products</Link>
          <Link href="#">Offers</Link>
          <Link href="#">Latest Products</Link>
          <Link href="/auth/login">Login</Link>
        </div>
        <div className="flex gap-2 text-gray-500">
          <Image
            src="/icons/hamburger.svg"
            height={25}
            width={25}
            alt="menu-icon"
          />
          <Image src="/icons/cart.svg" height={25} width={25} alt="menu-icon" />
          <div className="cursor-pointer" onClick={() => setSearch(!search)}>
            <Image
              src="/icons/search.svg"
              height={25}
              width={25}
              alt="menu-icon"
            />
          </div>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          <Image
            src="/icons/hamburger.svg"
            height={40}
            width={40}
            alt="menu-icon"
          />
        </div>
      </div>
      <Slider title="Search" open={search} setOpen={setSearch} OutSideClick={true}>
        <div className="input123_field">
          <input
            type="text"
            className="w-[25vw] p-2 rounded-lg drop-shadow-lg input123__field  h-[40px]"
            placeholder="Search"
          />
        </div>
      </Slider>
      <Slider title="Menu" open={nav} setOpen={setNav}>
        <SliderItem title="Home" href="/" />
        <SliderItem title="Collections" href="/products" />
        <SliderItem title="Products" href="/products" />
        <SliderItem title="Offers" />
        <SliderItem title="Latest Products" />
        <SliderItem title="Login" href="/auth/login" />
      </Slider>
    </div>
  );
};

export default Navbar;
