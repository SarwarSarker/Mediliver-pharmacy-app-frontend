import React from "react";
import Form from "react-bootstrap/Form";

const ShippingInfo = ({ handleChange }) => {
  return (
    <div className="shipping_info info_box d-flex flex-column align-items-center p-2 p-md-3 p-lg-5">
      <i className="fas fa-shipping-fast fs-1 pb-3"></i>
      <h2>Shipping Info</h2>
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Name"
          onChange={handleChange("name")}
          name="name"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Address"
          onChange={handleChange("address")}
          name="address"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Country"
          onChange={handleChange("country")}
          name="country"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="City"
          onChange={handleChange("last_name")}
          name="city"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Phone No"
          onChange={handleChange("gender")}
          name="phone"
        />
      </Form.Group>
    </div>
  );
};

export default ShippingInfo;
