// import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../features/cart/cartSlice";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [name, setName] = useState(shippingInfo.name || "");
  const [address, setAddress] = useState(shippingInfo.address || "");
  const [city, setCity] = useState(shippingInfo.city || "");
  const [country, setCountry] = useState(shippingInfo.country || "");
  const [phone, setPhone] = useState(shippingInfo.phone || "");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ name, address, city, country, phone }));

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        name,
        address,
        city,
        phone,
        country,
      })
    );
    navigate("/placeOrder");
  };

  return (
    <>
      <div className="checkout container pt-2 pb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-7 col-md-12">
            <div className="box px-5 py-3">
              <h1 className="py-3 text-center">Shipping Address</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="mt-3 text-center">
                  <Button variant="info" type="submit">
                    Continue
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
