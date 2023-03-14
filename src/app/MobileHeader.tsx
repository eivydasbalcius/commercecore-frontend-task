"use client";

import { useState } from "react";
import Image from "next/image";

import cartImg from "../images/shoppingCart.svg";
import arrowImg from "../images/left-arrow.svg";
import upArrowImg from "../images/up-arrow.svg";
import OrderSummary from "./OrderSummary";
import { Order } from "../mapper/types";

function MobileHeader({ orderData }: { orderData: Order[] }) {
  const [isShown, setIsShown] = useState(false);

  const totalPrice = orderData?.reduce(
    (sum: number, currentProduct: { price: number; amount: number }) =>
      sum + currentProduct?.price! * currentProduct?.amount!,
    0
  );

  return (
    <div>
      <header>
        <div className="header-container">
          {!isShown ? (
            <>
              <div
                className="header-container"
                onClick={() => {
                  setIsShown(true);
                }}
              >
                <Image
                  src={cartImg}
                  alt="black shopping cart"
                  className="shopping-cart-img"
                />
                <span className="title">Order summary</span>
                <Image
                  src={arrowImg}
                  alt="left arrow image"
                  className="arrow-img"
                />
              </div>
            </>
          ) : (
            <>
              <div
                className="header-container"
                onClick={() => {
                  setIsShown(false);
                }}
              >
                <Image
                  src={cartImg}
                  alt="black shopping cart"
                  className="shopping-cart-img"
                />
                <span className="title">Order summary</span>
                <Image
                  src={upArrowImg}
                  alt="up arrow image"
                  className="arrow-img"
                />
              </div>
            </>
          )}
          <div className="header-total-price">
            <p>${totalPrice}</p>
          </div>
        </div>
        <div>
          {isShown ? (
            <div className="order-dropdown">
              <OrderSummary orderData={orderData} />
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default MobileHeader;
