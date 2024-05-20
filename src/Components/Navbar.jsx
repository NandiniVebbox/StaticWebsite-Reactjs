import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css'

export const Navbar = () => {
  return (
    <>
    <Container>
      <Row  className="my-3 " >
        <Col xs={6} >
            <div className="bg-info">Logo</div>
        </Col>       
      
        <Col xs={6}>
          <Row >
          <Col xs={2}>
           <div className="bg-info">Home</div>
          </Col>
          <Col xs={2}>
           <div className="bg-info">Services</div>
          </Col>
          <Col xs={2}>
           <div  className="bg-info">Products</div>
          </Col>
          <Col xs={2}>
           <div className="bg-info">About</div>
          </Col>
          <Col xs={4}>
          <div className="bg-info"> Get Started</div>
          </Col>
          </Row>
        </Col>
        
      </Row>
      </Container>
    </>
  );
};
