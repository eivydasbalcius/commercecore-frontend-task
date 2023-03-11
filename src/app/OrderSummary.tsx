import Image from "next/image";

function OrderSummary({ pages }) {
  return (
    <section className="product-section">
      <div className="summary-container">
        <ul role="list" className=" ">
          {pages?.nodes.map((node) =>
            node.product_1?.product?.map((product) => (
              <li className="product-list">
                <Image
                  src={product?.image?.mediaItemUrl!}
                  alt={product?.image?.altText!}
                  height={120}
                  width={120}
                  className="image"
                />

                <div className="product-name">
                  <div className="align-product-name">
                    <p className="product-amount">{product?.amount}x</p>
                    <p>{product?.title}</p>
                  </div>
                  <button className="remove-button">x Remove</button>
                </div>

                <p className="product-price">${product?.price}</p>
              </li>
            ))
          )}
        </ul>

        <dl className="">
          {pages?.nodes.map((node) => {
            const totalPrice = node.product_1?.product?.reduce(
              (sum, currentProduct) =>
                sum + currentProduct?.price! * currentProduct?.amount!,
              0
            );
            return (
              <div className="total-price-section">
                <dt id="total">Total</dt>

                <dd className="total-price">
                  <p className="currency">USD</p>${totalPrice}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

export default OrderSummary;
