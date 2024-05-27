import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"

export const MainSection = () => {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={6} sm={12}  className=" mb-5 d-flex flex-column justify-content-center">
            <div >
              <h2>Grow your business with VEBBOX</h2>
              <h4>We are team of talented developers making Excellent Solutions to business</h4>
            </div>
          </Col>

          <Col md={6} sm={12} className="">
            <div className=" d-flex flex-column justify-content-center align-items-center" >
              <Image  src="https://www.vebbox.com/assets/img/hero-img.png" className="custom-img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
