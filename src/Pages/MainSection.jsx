import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const MainSection = () => {
  return (
    <>
      <Container>
        <Row >
          <Col md={6} xs={12} >
            <div className="bg-info mainsection-height mb-2">main content</div>
          </Col>

          <Col md={6} xs={12} >
            <div className="bg-info mainsection-height mb-2">side</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
