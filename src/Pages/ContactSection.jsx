import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const ContactSection = () => {
  return (
    <Container>
      <h1 className='text-center'>Contact</h1>
      <Row  className="mt-5" >
        <Col md={4} sm={12}  className="bg-info mainsection-height"  >
            Contact
        </Col>
        <Col md={4} sm={12}  className="bg-info mainsection-height" >
        Contact
        </Col>
              
        <Col md={4} sm={12}  className="bg-info mainsection-height"  >
        Contact
        </Col>    
    </Row>
   
    </Container>   
  )
}

export default ContactSection