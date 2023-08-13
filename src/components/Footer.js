import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={4} className="pb-4">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <h1 className="brandname">Mediliver</h1>
                </div>
                <p className="card-text">Molestie arcu pulvinar</p>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <h5 className="heading">Important Links</h5>
              <ul>
                <li>Cart</li>
                <li>Checkout</li>
                <li>My account</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h5 className="heading">Check This Out</h5>
              <ul className="card-text">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
