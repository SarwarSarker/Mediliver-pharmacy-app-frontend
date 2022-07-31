import React from "react";

const LocationInfo = ({ handleChange }) => {
  return (
    // <div className="d-flex flex-column align-items-center">
    //   <h2>Location Info</h2>
    //   <Form.Group className="w-75 mt-4">
    //     <Form.Control
    //       placeholder="State"
    //       onChange={handleChange("state")}
    //       name="state"
    //     />
    //   </Form.Group>
    //   <Form.Group className="w-75 mt-4">
    //     <Form.Control
    //       placeholder="City"
    //       onChange={handleChange("city")}
    //       name="city"
    //     />
    //   </Form.Group>
    // </div>
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="box">
              <h4 className="">Delivery address:</h4>
              <h6>Name: firstName</h6>
              <h6>Address: firstName</h6>
              <h4>City: firstName</h4>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="widget">
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h3 className="fw-bold ">Summary</h3>
                <h5 className="badge bg-dark">2 items</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 ">
                <h6 className="fw-bold">Product </h6>
                <h6 className="fw-bold">Total</h6>
              </div>
              <div className="border-bottom border-top border-dark">
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="w-75">
                    Carbon Fiber Gear Shift Box Panel Cover
                  </p>
                  <p className="">$ 200</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h6 className="fw-bold">SHIPPING COST</h6>
                <h6>$ 20.00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h6 className="fw-bold">TOTAL PRICE</h6>
                <h6 className="fw-bold">$ 22222</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
