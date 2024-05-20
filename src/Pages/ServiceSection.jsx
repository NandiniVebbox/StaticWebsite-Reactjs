import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
const ServiceSection = () => {
  return (
    <>
    <Container>
        <h1 className='text-center my-3'>Serices</h1>
    <Row  className="" >
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height"  >
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height" >
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height" >
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height" >
            main content
        </Col>                
    </Row>
    <Row  className="" >
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height">
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height">
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info mainsection-height">
            main content
        </Col>
        <Col md={3} sm={6} xs={12}  className="bg-info">
            main content
        </Col>                
    </Row>
    </Container>
    </>    
  )
}

export default ServiceSection


