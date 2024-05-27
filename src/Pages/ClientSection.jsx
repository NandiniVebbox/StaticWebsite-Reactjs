import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export const ClientSection = () => {
  const content = [
    {
      numbers: "25",
      title: "Happy Clients ",
      body: "A satisfied customer is the best bussiness goal.",
    },
    {
      numbers: "135",
      title: "Working Technologies ",
      body: "we build projects with satisfied customers",
    },
    {
      numbers: "12",
      title: "Projects ",
      body: "We help enterprises accelerate adoption of new technologies, produce innovation.",
    },
    {
      numbers: "25",
      title: "Developers ",
      body: "Our skilled technicians and engineers to implement the new technologies.",
    },
  ];
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col
            md={6}
            xs={12}
            className="d-flex flex-column justify-content-center"
          >
            <div className="mainsection-height mb-2 text-center ">
              <Image
                src="https://www.vebbox.com/assets/img/counts-img.svg"
                rounded
                className="custom-img-fluid"
              />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Row>
              {content.map((item,index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="clientsection-height mb-2">
                    <h2>{item.numbers}</h2>
                    <p>
                      <b>{item.title}</b>
                      {item.body}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
