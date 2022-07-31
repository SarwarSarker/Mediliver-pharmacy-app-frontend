import React from "react";
import MultiForm from "../components/MultiForm";
import "../styles/checkout.scss";

const Checkout = () => {
  return (
    <>
      <h1 className="text-center fw-bold py-5">Checkout</h1>

      <MultiForm />
    </>
  );
};

export default Checkout;
