import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ContactSection = () => {
  return (
    <Container>
      <h1 className="text-center">Contact</h1>
      <Row className="">
        <Col
          lg={4}
          md={6}
          sm={12}
          className="d-flex flex-column "
        >
          <div className="mainsection-height mb-2">
            <h4>VEBBOX</h4>
            <p>
              Our mission is to enhance business growth of our customers with
              creative design, development and to deliver market defining high
              quality solutions that create value and reliable competitive
              advantage to customers around the globe.
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          sm={12}
          className="d-flex flex-column justify-content-center"
        >
          <div className="mainsection-height mb-2">
            <p>
              14, Mothilal St, (2nd Floor), Opposite to BSNL office near chennai
              silks, Kumbakonam, 612 001.
            </p>
            <p>568, Kurinji Nagar, New housing unit, Thanjavur, 613 005.</p>
            <p>
              624, Anna Salai, 3rd floor,Khivraj Building, Near Gemini Flyover,
              Chennai, 600 006.
            </p>
            <p>info@vebbox.in</p>
            <p>+91 63793 21835</p>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          sm={12}
          className="d-flex flex-column justify-content-center"
        >
          <div className="bg-info mainsection-height mb-2 ">Contact</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
