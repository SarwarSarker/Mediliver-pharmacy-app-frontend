import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../features/order/orderslice";
import "../styles/placeOrder.scss";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, shippingInfo, cartTotalQuantity, cartTotalAmount } =
    useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.auth);

  const onSubmit = () => {
    dispatch(createOrder());
    navigate("/orderSuccess");
  };

  return (
    <>
      <div className="container placeOrder py-5">
        <h1 className="py-3 text-center">Preview Order</h1>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="box mb-3 p-3">
              <h4 className="pb-2">Shipping Info:</h4>
              <div className="px-3 pt-2 pb-3">
                <h6>
                  <b>Name :</b> {shippingInfo.name}
                </h6>
                <h6>
                  <b>Address :</b> {shippingInfo.address}
                </h6>
                <h6>
                  <b>City:</b> {shippingInfo.city}
                </h6>
                <h6>
                  <b>Country :</b> {shippingInfo.country}
                </h6>
                <h6>
                  <b>Phone Number :</b> {shippingInfo.phone}
                </h6>
              </div>
              <Link to="/checkout" className="p-2">
                <button className="btn btn-info">Edit</button>
              </Link>
            </div>

            <div className="box mb-3 p-3">
              <h4 className="pb-2">Your Cart Items:</h4>
              <div className="p-3">
                {cartItems?.map((cart, index) => (
                  <div className="row" key={index}>
                    <div className="d-flex justify-content-between align-items-center border-top border-bottom py-md-2 ">
                      <div>
                        <img className="img-fluid" alt="" src={cart.image} />
                      </div>
                      <div>
                        <h3>{cart.name}</h3>
                        <h6 className="text-muted">{cart.dose}</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        {cart.cartQuantity}
                      </div>
                      <div>$ {cart.unit_price}</div>
                      <div> $ {cart.unit_price * cart.cartQuantity}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/cart" className="p-2">
                <button className="btn btn-info">Edit</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="widget px-5 py-4">
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h3 className="">Summary</h3>
                <h5 className="badge bg-dark">{cartTotalQuantity} items</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 ">
                <h6 className="fw-bolder">Price </h6>
                <h6>$ {cartTotalAmount}</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h6 className="">SHIPPING COST</h6>
                <h6>$ 20.00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h6 className="fw-bolder">TOTAL PRICE</h6>
                <h6 className="fw-bolder">$ {cartTotalAmount + 20}</h6>
              </div>
            </div>

            <div className="pt-3 text-center">
              <button
                type="submit"
                className="btn btn-lg btn-warning"
                onClick={onSubmit}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
