import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser, reset } from "../features/auth/authSlice";
import { getTotals } from "../features/cart/cartSlice";
import "../styles/header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Mediliver.
            </Link>
          </Navbar.Brand>
          <div className="d-flex justify-content-center align-items-center order-lg-2">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  <i className="fas fa-user-alt fs-3"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item>
                    <Button variant="danger" onClick={onLogout}>
                      Logout
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-decoration-none text-light m-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-decoration-none text-light m-2"
                >
                  Signin
                </Link>
              </>
            )}

            <Link to="/cart" className="position-relative ms-2">
              <i className="fas fa-cart-plus text-light fs-3"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge bg-danger text-light rounded-circle">
                {cart.cartTotalQuantity}
              </span>
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav__icon"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="products" className="nav-link ">
                Shop
              </Link>
              <Link to="/" className="nav-link ">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
