import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const  AboutSection = () => {
  return (
    <>
    <Container>
    <h1 className='text-center my-3'>About</h1>
    <Row  className="" >
        <Col md={6} xs={12} >
          <div className="bg-info mainsection-height mb-2">main content
          </div>
        </Col>
        
        <Col md={6} xs={12}  >
        <div className="bg-info mainsection-height mb-2">main content
          </div>
        </Col>
    </Row>
    </Container>
    </>
  )
}
