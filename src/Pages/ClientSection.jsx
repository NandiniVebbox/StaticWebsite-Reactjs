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
      svg: `     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      fill="#3498db"
      className="bi bi-emoji-smile client-svg mx-1 "
      viewBox="0 0 16 20"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
    </svg>`,
    },
    {
      numbers: "12",
      title: "Projects ",
      body: "We help enterprises accelerate adoption of new technologies, produce innovation.",
      svg: `     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      fill="#3498db"
      className="bi bi-file-post-fill client-svg mx-1"
      viewBox="0 0 16 20"
    >
    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M4.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5"/>
    </svg>`,
    },
    {
      numbers: "135",
      title: "Working Technologies ",
      body: "we build projects with satisfied customers",
      svg: `     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      fill="#3498db"
      className="bi bi-clock client-svg mx-1"
      viewBox="0 0 16 20"
    >
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>`,
    },
    {
      numbers: "25",
      title: "Developers ",
      body: "Our skilled technicians and engineers to implement the new technologies.",
      svg: `     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      fill="#3498db"
      className="bi bi-trophy-fill client-svg mx-1"
      viewBox="0 0 16 20"
    >
      
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
    </svg>`,
    },
  ];
  return (
    <>
      <Container id="">
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
              {content.map((item, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="clientsection-height mb-2">
                    <div
                      className="pt-2"
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                    />

                    <div className="clientsection-height1 mb-2">
                      <h2>{item.numbers}</h2>
                      <p>
                        <b>{item.title}</b>
                        {item.body}
                      </p>
                    </div>
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
