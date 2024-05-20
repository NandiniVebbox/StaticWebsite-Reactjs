import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const  ClientSection = () => {
  return (
    <>
    <Container>
    <Row className='mt-5'>
    <Col md={6} xs={12} className="bg-info" >
        Side D
    </Col>
    <Col md={6} xs={12} className="bg-info" >
        <Row>
            <Col md={6} xs={12} className="bg-info" >
                Side A
            </Col>
            <Col md={6} xs={12} className="bg-info" >
                Side B
            </Col>
        </Row>
        <Row>
            <Col md={6} xs={12} className="bg-info" >
                Side A
            </Col>
            <Col md={6} xs={12} className="bg-info" >
                Side B
            </Col>
        </Row>
    </Col>
    </Row>

    </Container>
    </>
  )
}
