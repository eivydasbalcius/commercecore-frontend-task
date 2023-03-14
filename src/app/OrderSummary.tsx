import Image from "next/image";
import type { Order } from "../mapper/types";

function OrderSummary({ orderData }: { orderData: Order[] }) {
  const totalPrice = orderData?.reduce(
    (sum: number, currentProduct: { price: number; amount: number }) =>
      sum + currentProduct?.price! * currentProduct?.amount!,
    0
  );

  return (
    <section className="product-section">
      <div className="summary-container">
        <ul role="list" className=" ">
          {orderData.map((order) => (
            <li className="product-list">
              <Image
                src={order.image.mediaItemUrl}
                alt={order.image.altText}
                height={120}
                width={120}
                className="image"
              />

              <div className="product-name">
                <div className="align-product-name">
                  <p className="product-amount">{order.amount}x</p>
                  <p>{order.title}</p>
                </div>
                <button className="remove-button">x Remove</button>
              </div>

              <p className="product-price">${order.price}</p>
            </li>
          ))}
        </ul>
        <dl className="">
          <div className="total-price-section">
            <dt id="total">Total</dt>
            <dd className="total-price">
              <p className="currency">USD</p>${totalPrice}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default OrderSummary;
