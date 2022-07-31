import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getAllProduct } from "../features/product/productSlice";

const Product = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <section className="py-5">
        <Container>
          <h1 className="text-center fw-bold pb-5">All Products</h1>
          <Row>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Product;
