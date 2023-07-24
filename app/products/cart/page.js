import { shopifyQuery } from "@/utils/shopify";
import { createCart } from "@/utils/shopifyQuery";

const page = async () => {
  const cartInput = {
    cartInput: {
      lines: [
        {
          quantity: 1,
          merchandiseId: "gid://shopify/ProductVariant/123",
        },
      ],
      attributes: {
        key: "cart_attribute_key",
        value: "This is a cart attribute value",
      },
      buyerIdentity: {
        countryCode: "IN",
        customerAccessToken: "3951408f1d7ccb9bd3cc3195595af170",
      },
    },
  };
  const cart = await shopifyQuery(createCart, cartInput);
  return <div>{JSON.stringify(cart)}</div>;
};

export default page;
