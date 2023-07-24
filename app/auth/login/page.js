"use client";
import { shopifyQuery } from "@/utils/shopify";
import { createAccessToken, createCustomer } from "@/utils/shopifyQuery";
import Link from "next/link";
import { toast } from "@/app/components/Toast";
const submitHandler = async (e) => {
  e.preventDefault();
  const user = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  const values = {
    input: user,
  };

  try {
    const customer = await shopifyQuery(createAccessToken, values);
    if (
      customer.customerAccessTokenCreate.customerUserErrors !== null &&
      customer.customerAccessTokenCreate.customerUserErrors.length
    ) {
      let msg = "";
      customer.customerAccessTokenCreate.customerUserErrors.map((d) => {
        msg += d.message + "\n";
      });
      throw new Error(msg);
    }
    console.log(customer)
    localStorage.setItem(
      "user",
      customer.customerAccessTokenCreate.customerAccessToken.accessToken
    );
  } catch (e) {
    toast({
      type: "error",
      message: "Unexpected error occured. Please try again.",
    });
  }
};
const page = () => {
  return (
    <div className="flex justify-center items-center m-5">
      <div className="bg-slate-50 rounded shadow-lg w-full px-8 pt-6 pb-8 mb-4 max-w-md">
        <h1 className="text-2xl mb-4 text-gray-700">Login.</h1>
        <form className="" onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-sm mt-4">
            New customer?{" "}
            <Link className=" text-slate-600" href="/auth/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
