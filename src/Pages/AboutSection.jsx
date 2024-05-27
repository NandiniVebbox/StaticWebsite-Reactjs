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
          <div className=" mainsection-height mb-2"><p>We are consummate custom software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation.</p>
          </div>
        </Col>
        
        <Col md={6} xs={12}  >
        <div className=" mainsection-height mb-2"><p>Our proficiency in understanding business challenges and professional competence allows us to create a better experience for our customers. Our efforts focus on concept, design, development and re-engineering of web businesses. We are working closely with software majors on new applications.</p>
          </div>
        </Col>
    </Row>
    </Container>
    </>
  )
}
