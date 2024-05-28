import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
    <Container className="mt-5 shadow-lg footer px-5 pt-5 pb-3" fluid>
    <Container>
        <Row className="">
            <Col>
            <div>
            © Copyright <b>VEBBOX SOFTWARE SOLUTIONS.</b> All Rights Reserved
            
            </div>
         
            </Col>
        </Row>
        <Row className="">
            <Col>
            
            <div>
            Designed by vebbox software solutions
            </div>
            </Col>
        </Row>
    </Container>
    </Container>
    </>
  )
}

export default Footer