import React from "react";
import "../styles/checkout.scss";

const Check = () => {
  return (
    <>
      {/* <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-6">
            <form id="regForm">
              <h1 id="register">Register</h1>
              <div class="all-steps" id="all-steps">
                {" "}
                <span class="step"></span> <span class="step"></span>{" "}
                <span class="step"></span> <span class="step"></span>{" "}
              </div>
              <div class="tab">
                <p>
                  <input
                    placeholder="First name..."
                    oninput="this.className = ''"
                    name="fname"
                  />
                </p>
                <p>
                  <input
                    placeholder="Last name..."
                    oninput="this.className = ''"
                    name="lname"
                  />
                </p>
              </div>
              <div class="tab">
                <p>
                  <input
                    placeholder="City"
                    oninput="this.className = ''"
                    name="dd"
                  />
                </p>
                <p>
                  <input
                    placeholder="State"
                    oninput="this.className = ''"
                    name="nn"
                  />
                </p>
              </div>
              <div class="tab">
                <p>
                  <input
                    placeholder="E-mail..."
                    oninput="this.className = ''"
                    name="email"
                  />
                </p>
                <p>
                  <input
                    placeholder="Phone..."
                    oninput="this.className = ''"
                    name="phone"
                  />
                </p>
              </div>
              <div class="tab">
                <p>
                  <input
                    placeholder="Username..."
                    oninput="this.className = ''"
                    name="uname"
                  />
                </p>
                <p>
                  <input
                    placeholder="Password..."
                    oninput="this.className = ''"
                    name="pword"
                    type="password"
                  />
                </p>
              </div>
              <div class="thanks-message text-center" id="text-message">
                {" "}
                <img
                  src="https://i.imgur.com/O18mJ1K.png"
                  alt=""
                  class="mb-4"
                />
                <h3>Thanks for your information!</h3>{" "}
                <span>
                  Your information has been saved! we will contact you shortly!
                </span>
              </div>
              <div id="nextprevious">
                <div>
                  {" "}
                  <button type="button" id="prevBtn" onclick="nextPrev(-1)">
                    Previous
                  </button>{" "}
                  <button type="button" id="nextBtn" onclick="nextPrev(1)">
                    Next
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <div className="checkout-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="billing-info-wrap">
                <h3>Billing Details</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>First Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>Company Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="billing-select mb-20">
                      <label>Country</label>
                      <select>
                        <option>Select a country</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>Street Address</label>
                      <input
                        className="billing-address"
                        placeholder="House number and street name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>Town / City</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>State / County</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Postcode / ZIP</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Phone</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Email Address</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="your-order-area">
                <h3>Your order</h3>
                <div className="your-order-wrap gray-bg-4">
                  <div className="your-order-product-info">
                    <div className="your-order-top">
                      <ul>
                        <li>Product</li>
                        <li>Total</li>
                      </ul>
                    </div>
                    <div className="your-order-middle">
                      <ul></ul>
                    </div>
                    <div className="your-order-bottom">
                      <ul>
                        <li className="your-order-shipping">Shipping</li>
                        <li>Free shipping</li>
                      </ul>
                    </div>
                    <div className="your-order-total">
                      <ul>
                        <li className="order-total">Total</li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <div className="payment-method"></div>
                </div>
                <div className="place-order mt-25">
                  <button className="btn-hover">Place Order</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="item-empty-area text-center">
                <div className="item-empty-area__icon mb-30">
                  <i className="pe-7s-cash"></i>
                </div>
                <div className="item-empty-area__text">
                  No items found in cart to checkout <br />{" "}
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
