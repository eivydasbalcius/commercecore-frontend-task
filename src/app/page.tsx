import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";

import MobileHeader from "./MobileHeader";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import Footer from "./Footer";

const GetCheckoutItems = graphql(`
query Chceckout {
  pages(where: { name: "Checkout" }) {
    nodes {
      product_1 {
        product {
          title
          price
          amount
          image {
            id
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
}
`);

export default async function Home() {
  const { pages } = await graphqlClient.request(GetCheckoutItems);
  return (
    <>
      <div className="background">
        <MobileHeader pages={pages} />
        <main>
          <div className="container">
            <CheckoutForm />
          </div>
          <div className="hide-on-mobile">
            <OrderSummary pages={pages} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
