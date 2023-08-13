import React from "react";
import ShippingAddress from "../components/ShippingAddress";
import "../styles/checkout.scss";

const Checkout = () => {
  return (
    <>
      <h1 className="text-center fw-bold py-5">Checkout</h1>

      <ShippingAddress />
    </>
  );
};

export default Checkout;
