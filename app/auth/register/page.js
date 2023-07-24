"use client";
import { shopifyQuery } from "@/utils/shopify";
import { createCustomer } from "@/utils/shopifyQuery";
import Link from "next/link";
import { toast } from "@/app/components/Toast";
const submitHandler = async (e) => {
  e.preventDefault();
  const user = {
    acceptsMarketing: e.target.marketing.checked,
    email: e.target.email.value,
    firstName: e.target.first_name.value,
    lastName: e.target.last_name.value,
    password: e.target.password.value,
    phone: e.target.phone.value,
  };
  const values = {
    input: user,
  };
  try {
    const customer = await shopifyQuery(createCustomer, values);
    if (
      customer.customerCreate.customerUserErrors !== null &&
      customer.customerAccessTokenCreate.customerUserErrors.length
    ) {
      let msg = "";
      customer.customerCreate.customerUserErrors.map((d) => {
        msg += d.message + "\n";
      });
      toast({ type: "error", message: msg });
    }
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
        <h1 className="text-2xl mb-4 text-gray-700">Register.</h1>
        <form className="" onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Last Name"
            />
          </div>
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
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone Number"
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cnfpassword"
            >
              Confirm Password
            </label>
            <input
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnfpassword"
              type="cnfpassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="marketing"
            >
              <input
                required
                className=" mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="marketing"
                type="checkbox"
                value={true}
              />
              Sign up for promotional emails.
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="text-sm mt-4">
            Already an user?{" "}
            <Link className=" text-slate-600" href="/auth/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
