import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const ContactSection = () => {
  return (
    <Container>
      <h1 className='text-center'>Contact</h1>
      <Row  className="" >
        <Col md={4} sm={12}    >
        <div className="bg-info mainsection-height mb-2">Contact</div>
        </Col>
        <Col md={4} sm={12}   >
        <div className="bg-info mainsection-height mb-2">Contact</div>
        </Col>
              
        <Col md={4} sm={12}   >
        <div className="bg-info mainsection-height mb-2">Contact</div>
        </Col>    
    </Row>
   
    </Container>   
  )
}

export default ContactSection