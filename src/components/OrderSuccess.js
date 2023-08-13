import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center py-5">
          <h1 className="fw-bold">Thank You</h1>
          <p className="mt-2 fs-1">It&#039;s on the way!</p>
          <p className="mt-2 fs-3 text-scondary">
            Your order has been placed and will be shipped soon.
          </p>
          <Link to="/">
            <button className="btn btn-dark">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
