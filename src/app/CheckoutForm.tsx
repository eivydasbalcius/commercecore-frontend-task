import Image from "next/image";

import mcafeeImg from "../images/icon_mcafee.svg";
import comodoImg from "../images/icon_comodo.svg";
import nortonImg from "../images/icon_norton.svg";
import versignImg from "../images/icon_verisign.svg";

function CheckoutForm() {
  return (
    <>
      <p id="form-title">Payment and shipping</p>
      <div className="checkout-form-container">
        <form className="checkout-form">
          <div>
            <section className="contact-info-heading">
              <h2 id="contact-info-heading">Customer Information</h2>
              <h3>Fields marked as (*) are required</h3>

              <div className="customer-info-input-boxes">
                <div>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First name*"
                    required
                    className="customer-info customer-info-mobile"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last name*"
                    required
                    className="customer-info"
                  />
                </div>
              </div>
            </section>
            <section className="shipping-section">
              <h2 id="shipping-heading">Shipping Address</h2>
              <div className="address-input-box">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address*"
                  required
                  className="shipping-address-input-box"
                />
              </div>
              <div className="dropdowns">
                <div>
                  <select>
                    <option selected hidden>
                      Select
                    </option>
                  </select>
                  <span className="dropdown-title">Country*</span>
                </div>
                <div>
                  <select>
                    <option selected hidden>
                      Select
                    </option>
                  </select>
                  <span className="dropdown-title">Region/State*</span>
                </div>
                <div>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Postal Code*"
                    required
                    className="postal-code-input-box"
                  />
                </div>
              </div>
            </section>
            <section className="payment-section">
              <h2 id="payment-heading">Payment Method</h2>

              <div className="credit-card-title-container">Credit Card</div>
              <div className="payment-method-container">
                <div className="card-number-box">
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="Card Number"
                    required
                    className="payment-card-number"
                  />
                </div>

                <div className="mm-yy-ccv-box">
                  <div className="">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      placeholder="MM/YY"
                      required
                      className="mm-yy"
                    />
                  </div>

                  <div className="">
                    <input
                      type="text"
                      name="ccv"
                      id="ccv"
                      placeholder="CCV"
                      required
                      className="ccv"
                    />
                  </div>
                </div>
              </div>
            </section>
            <button className="complete-order-button">COMPLETE ORDER</button>
            <div className="sponsors">
              <Image
                src={nortonImg}
                alt="norton image"
                width={91}
                height={50}
                className="norton"
              />
              <Image
                src={versignImg}
                alt="versign image"
                width={91}
                height={50}
                className="versign"
              />
              <Image
                src={mcafeeImg}
                alt="mcafee image"
                width={91}
                height={50}
                className="mcafee"
              />
              <Image
                src={comodoImg}
                alt="comodo image"
                width={91}
                height={50}
                className="comodo"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;
