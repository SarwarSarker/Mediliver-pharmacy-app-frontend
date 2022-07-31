import React from "react";

const DeliveryInfo = ({ handleChange }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-7 bg-info p-5 rounded">
          <h4>Delivery address:</h4>
          <div>
            Name: <b>firstName</b>
          </div>
          <div>
            Tel: <b>phoneNumber</b>
          </div>
          <div>
            Country: <b>country</b>
          </div>
          <div>
            City: <b>city</b>
          </div>
          <div>
            Address: <b>address1 + " " + address2</b>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 bg-success p-5">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Order Summary</h5>
            <p>3 Items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryInfo;
