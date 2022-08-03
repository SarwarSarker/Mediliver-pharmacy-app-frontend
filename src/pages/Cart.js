import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, decreaseCart, removeCart } from "../features/cart/cartSlice";
import "../styles/cart.scss";

const Cart = () => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <section className="cart">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="text-center fw-bold pb-5">Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-5 flex flex-col">
              <h4 className="text-2xl font-bold mb-2">
                Your Cart is currently empty.
              </h4>
              <Link to="/">
                <Button className="px-4 py-2 bg-dark text-light">
                  Go Back
                </Button>
              </Link>
            </div>
          ) : (
            <div className="card mb-5">
              <div className="row">
                <div className="col-md-9 cart-detail p-3">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <h4 className="fw-bold ">Shopping Cart</h4>
                    <p className="text-muted">{cartTotalQuantity} items</p>
                  </div>
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
                          <button
                            className="border p-1 me-2"
                            onClick={() => dispatch(decreaseCart(cart))}
                          >
                            -
                          </button>
                          <div className="border text-center p-2">
                            {cart.quantity}
                          </div>
                          <button
                            className="border p-1 ms-2"
                            onClick={() => dispatch(addCart(cart))}
                          >
                            +
                          </button>
                        </div>
                        <div>$ {cart.unit_price}</div>
                        <div> $ {cart.unit_price * cart.quantity}</div>
                        <div>
                          <Button
                            variant="danger"
                            onClick={() => dispatch(removeCart(cart))}
                          >
                            &#10005;
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="back-to-shop p-2">
                    <Link to="/" className="text-muted text-decoration-none">
                      <i className="fas fa-long-arrow-alt-right me-2"></i>
                      Back to shop
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 summary p-3">
                  <h5 className="fw-bold ">Summary</h5>
                  <div className="row pt-3">
                    <div className="col">ITEMS {cartTotalQuantity}</div>
                    <div className="col text-right">$ {cartTotalAmount}</div>
                  </div>
                  <div className="row pt-3">
                    <div className="col">TOTAL PRICE</div>
                    <div className="col text-right">$ {cartTotalAmount}</div>
                  </div>
                  <Link to="/checkout" className="btn btn-dark checkout">
                    CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Cart;
