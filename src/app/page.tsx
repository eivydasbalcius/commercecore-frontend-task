import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";

import MobileHeader from "./MobileHeader";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Footer from "./Footer";

import type { Order } from "../mapper/types";

const GetCheckoutItems = graphql(`
  query Chceckout {
    pages(where: { title: "Checkout" }) {
      nodes {
        product_1 {
          product {
            title
            price
            amount
            image {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`);

const getOrder = async (): Promise<Order[]> => {
  const { pages } = await graphqlClient.request(GetCheckoutItems);

  const node = pages?.nodes[0]!;
  const orderData = node?.product_1?.product?.map(
    (product) =>
      ({
        title: product?.title,
        price: product?.price,
        amount: product?.amount,
        image: {
          altText: product?.image?.altText,
          mediaItemUrl: product?.image?.mediaItemUrl,
        },
      } as Order)
  ) as Order[];

  return orderData;
};

export default async function Home() {
  const orderData = await getOrder();
  return (
    <>
      <div className="background">
        <MobileHeader orderData={orderData} />
        <main>
          <div className="container">
            <CheckoutForm />
          </div>
          <div className="hide-on-mobile">
            <OrderSummary orderData={orderData} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
