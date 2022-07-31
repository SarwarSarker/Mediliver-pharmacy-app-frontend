import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/service.scss";

const Service = () => {
  return (
    <>
      <section className="service py-5">
        <Container className="service-bar py-2 d-none d-sm-block">
          <Row className="">
            <Col xs={12} md={6} lg={3} className="border p-3">
              <div className="d-flex justify-content-around align-items-center">
                <i className="fas fa-capsules service-bar__icon1 fs-2 p-3 rounded-circle"></i>
                <div>
                  <h6 className="fw-bold">Medicine</h6>
                  <p className="">Over 250000 Products</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="border p-3">
              <div className="d-flex justify-content-around align-items-center">
                <i className="fas fa-thumbs-up service-bar__icon2 fs-2 p-3 rounded-circle"></i>
                <div>
                  <h6 className="fw-bold">95% Positive</h6>
                  <p className="">Feedbacks</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="border p-3">
              <div className="d-flex justify-content-around align-items-center">
                <i className="fas fa-dollar-sign service-bar__icon3 fs-2 p-3 rounded-circle"></i>
                <div>
                  <h6 className="fw-bold">Payment</h6>
                  <p className="">Secure System</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="border p-3">
              <div className="d-flex justify-content-around align-items-center">
                <i className="fas fa-american-sign-language-interpreting service-bar__icon4 fs-2 p-3 rounded-circle"></i>
                <div>
                  <h6 className="fw-bold">Only Best</h6>
                  <p className="">Brands</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="">
            <Col xs={12} md={6} lg={4} className="mt-4">
              <div className="box1 rounded px-5 py-5 text-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-bold pe-5">Fast & Free Delivery</h4>
                  <i className="fas fa-biking"></i>
                </div>
                <p className="pt-3">
                  Fast and Free delivery all over the country.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mt-4">
              <div className="box2 rounded px-5 py-5 text-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-bold pe-5">The Highest Product Quality</h4>
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <p className="pt-3">
                  Provides accurate and high quality prescription drugs.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mt-4">
              <div className="box3 rounded px-5 py-5 text-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-bold pe-5">Online Support 24/7</h4>
                  <i className="fas fa-user-md"></i>
                </div>
                <p className="pt-3">
                  Provides 24 hour nonstops service from us.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Service;
