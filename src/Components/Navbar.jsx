import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css'

export const Navbar = () => {
  return (
    <>
    <Container>
      <Row  className="mt-2 navbar" >
        <Col xs={6} className="bg-primary">
            Logo
        </Col>       
      
        <Col xs={6}>
          <Row>
          <Col xs={2}>
          Home
          </Col>
          <Col xs={2}>
          Services
          </Col>
          <Col xs={2}>
          Products
          </Col>
          <Col xs={2}>
          About
          </Col>
          <Col xs={4}>
          Get Started
          </Col>
          </Row>
        </Col>
        
      </Row>
      </Container>
    </>
  );
};
