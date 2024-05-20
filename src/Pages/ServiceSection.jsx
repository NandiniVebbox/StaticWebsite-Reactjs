import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
const ServiceSection = () => {
  return (
    <>
    <Container>
        <h1 className='text-center my-3'>Services</h1>
    <Row  className="" >
        <Col md={3} sm={6} xs={12}   >
            <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}   >
           <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}   >
            <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}   >
            <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>                
    </Row>
    <Row  className="" >
        <Col md={3} sm={6} xs={12}  >
            <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}  >
             <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}  >
             <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>
        <Col md={3} sm={6} xs={12}  >
            <div className="bg-info mainsection-height mb-2" >main content</div>
        </Col>                
    </Row>
    </Container>
    </>    
  )
}

export default ServiceSection


