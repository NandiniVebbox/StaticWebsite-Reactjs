import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const  ClientSection = () => {
  return (
    <>
    <Container>
    <Row className='mt-5'>
    <Col md={6} xs={12}  >
          <div className="bg-info mainsection-height mb-2">Side D
          </div>
    </Col>
    <Col md={6} xs={12}  >
        <Row>
            <Col md={6} xs={12}  >
                
                <div className="bg-info clientsection-height mb-2">Side A
          </div>
            </Col>
            <Col md={6} xs={12}  >
                
                <div className="bg-info clientsection-height mb-2">Side B
          </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} xs={12}  >
                
                <div className="bg-info clientsection-height mb-2">Side A
          </div>
            </Col>
            <Col md={6} xs={12}  >
                
                <div className="bg-info clientsection-height mb-2">Side B
          </div>
            </Col>
        </Row>
    </Col>
    </Row>

    </Container>
    </>
  )
}
