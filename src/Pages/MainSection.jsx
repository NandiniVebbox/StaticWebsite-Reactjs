import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const MainSection = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={6} xs={12} >
            <div className="bg-info mainsection-height">main content</div>
          </Col>

          <Col md={6} xs={12} className="bg-info mainsection-height">
            <div>side</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
