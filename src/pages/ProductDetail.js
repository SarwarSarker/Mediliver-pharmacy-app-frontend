import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProductById } from "../features/product/productSlice";
import "../styles/productDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="wappper py-5">
        <Container>
          <Row>
            <Col>
              <img alt="" src={selectedProduct.image} />
            </Col>
            <Col>
              <h1 className="">
                {selectedProduct.name}
                <span className="text-secondary ms-2 fs-6">
                  {selectedProduct.dosage_form}
                </span>
              </h1>
              <h6 className="text-secondary">
                Unit Sold: {Math.floor(Math.random() * 10)}
              </h6>
              <hr />

              <h5 className="text-secondary py-1">
                {selectedProduct.generic_name}
              </h5>
              <h6 className="text-secondary">{selectedProduct.dose}</h6>
              <h6 className="text-secondary">{selectedProduct.brand}</h6>

              <h3 className="text-secondary py-4">
                Unit Price : ${selectedProduct.unit_price} (10's pack : $
                {selectedProduct.unit_price * 10})
              </h3>

              <div className="text-secondary">
                <h6 className="bg-descrption p-2">Description</h6>
                <div>
                  <span className="">{selectedProduct.description}</span>
                </div>
              </div>

              <div className="d-flex gap-5 py-4">
                <button className="btn btn-success">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Add To Cart
                </button>
                <button className="btn btn-danger">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Checkout
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetail;
