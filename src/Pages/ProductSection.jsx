import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const ProductSection = () => {
  return (
    <Container>
      <h1 className='text-center my-3'>Products</h1>
    <Row  className="" >
        <Col md={6} sm={12}  className="bg-info mainsection-height"  >
            product content
        </Col>
        <Col md={6} sm={12}  className="bg-info mainsection-height" >
        product content
        </Col>
                  
    </Row>
    <Row  className="" >
        <Col md={6} sm={12}  className="bg-info mainsection-height">
        product content
        </Col>
        <Col md={6} sm={12}  className="bg-info mainsection-height">
        product content
        </Col>
         
    </Row>
    </Container>    
  )
}
