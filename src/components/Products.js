import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../features/product/productSlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <section className="product py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">Trending Products</h2>
          <Row>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
          <div className="text-center py-3">
            <Link
              to="products"
              className="rounded bg-success text-light text-decoration-none p-3"
            >
              View More
              <i className="fas fa-long-arrow-alt-right ms-2"></i>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
