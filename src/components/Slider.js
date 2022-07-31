import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import web1 from "../assets/slider1.png";
import web2 from "../assets/slider2.png";
import "../styles/slider.scss";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <div className="px-2 px-sm-0 py-4">
                  <h1 className="fw-bold text-start">Flat 25% Off</h1>
                  <h1 className="fw-bold text-start">Medicine Offer</h1>
                  <div className="d-flex justify-content-start align-items-center py-3">
                    <div className="d-flex justify-content-start align-items-center me-5">
                      <i className="fas fa-hand-holding-usd fs-3 me-2 bg-light p-3 rounded-circle"></i>
                      <h5>Win Big Offer Everyday</h5>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-trailer fs-3 me-2 bg-light p-3 rounded-circle"></i>
                      <h5>Free Delivery</h5>
                    </div>
                  </div>
                  <button className="d-flex align-items-center mt-4">
                    <span>Shop Now</span>
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </button>
                </div>
              </Col>
              <Col>
                <img
                  className="img-fluid d-none d-sm-block "
                  src={web1}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <div className="px-2 px-sm-0 py-4">
                  <h1 className="fw-bold text-start">Flat 25% Off</h1>
                  <h1 className="fw-bold text-start">Medicine Offer</h1>
                  <div className="d-flex justify-content-start align-items-center py-3">
                    <div className="d-flex justify-content-start align-items-center me-5">
                      <i className="fas fa-hand-holding-usd fs-3 me-2 bg-light p-3 rounded-circle"></i>
                      <h5>Win Big Offer Everyday</h5>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-trailer fs-3 me-2 bg-light p-3 rounded-circle"></i>
                      <h5>Free Delivery</h5>
                    </div>
                  </div>
                  <button className=" d-flex align-items-center mt-4">
                    <span>Shop Now</span>
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </button>
                </div>
              </Col>
              <Col>
                <img
                  className="img-fluid d-none d-sm-block "
                  src={web2}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
