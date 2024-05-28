import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactSection = () => {
  return (
    <Container id="contact">
      <h1 className="text-center  my-3">Contact</h1>
      <Row className="">
        <Col lg={4} md={6} sm={12} className="d-flex flex-column ">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="#3498db"
                className="bi bi-geo-alt client-svg "
                viewBox="0 0 16 22"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              14, Mothilal St, (2nd Floor), Opposite to BSNL office near chennai
              silks, Kumbakonam, 612 001.
            </p>
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="#3498db"
                className="bi bi-geo-alt client-svg "
                viewBox="0 0 16 22"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              568, Kurinji Nagar, New housing unit, Thanjavur, 613 005.
            </p>
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="#3498db"
                className="bi bi-geo-alt client-svg "
                viewBox="0 0 16 22"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              624, Anna Salai, 3rd floor,Khivraj Building, Near Gemini Flyover,
              Chennai, 600 006.
            </p>
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="#3498db"
                className="bi bi-envelope-open-fill client-svg"
                viewBox="0 0 16 22"
              >
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
              </svg>
              info@vebbox.in
            </p>
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="#3498db"
                className="bi bi-telephone client-svg"
                viewBox="0 0 16 22"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              +91 63793 21835
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          sm={12}
          className="d-flex flex-column justify-content-start"
        >
          <div className=" mainsection-height mb-2 ">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-center"
                controlId="exampleForm.ControlTextarea1"
              >
                <Button
                  as="input"
                  type="submit"
                  value="Send Message"
                  className="btn1"
                />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
