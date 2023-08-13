import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../features/cart/cartSlice";
import "../styles/productCard.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Col xs={12} md={6} lg={3} className="pb-4 productCard">
        <Card className="card p-1">
          <Card.Img
            variant="top"
            src={product.image}
            className="w-100 h-40 p-1"
          />
          <Card.Body>
            <Card.Title className="fw-bold">
              {product.name}
              <span className="fst-normal text-secondary ms-2">
                {product.dose}
              </span>
            </Card.Title>
            <Card.Subtitle className="fw-bold text-secondary py-1">
              {product.generic_name.substring(0, 26)}
            </Card.Subtitle>
            <Card.Text className="fw-bold text-danger">
              Price: ${product.unit_price}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Link
                className="text-decoration-none px-3 py-2 button rounded-pill"
                to={`products/${product._id}`}
              >
                View
              </Link>
              <button
                className="text-decoration-none p-2 button rounded-pill"
                onClick={() => dispatch(addCart(product))}
              >
                <i className="fas fa-shopping-bag me-2"></i>
                ADD TO CART
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
