import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const ProductSection = () => {
  const content = [
    {
      heading: "Data Analyzer",
      body: "The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs.",
      backgroundImage:
        "url('https://www.vebbox.com/assets/img/more-services-1.jpg')",
      borderRadius: "4px",
    },

    {
      heading: "Websites",
      body: "We create a enhanced website, customers can easily access information about your business. They can see what products or services you sell, your prices, your location and much more.",
      backgroundImage: "url('https://www.vebbox.com/assets/img/more.jpg')",
      borderRadius: "4px",
    },

    {
      heading: "Billing Software",
      body: "A billing software can be any software designed to handle time and billing tracking as well as invoicing customers for services and products.",
      backgroundImage:
        "url('https://www.vebbox.com/assets/img/more-services-3.jpg')",
      borderRadius: "4px",
    },

    {
      heading: "Industrial Trainings",
      body: "Our Industrial Training is to expose the students to actual working environment and enhance their knowledge and skill from what they have learned in the college.",
      backgroundImage:
        "url('https://www.vebbox.com/assets/img/more-services-4.jpg')",
      borderRadius: "4px",
    },
  ];
  const item = {};
  return (
    <Container className="my-5" id="products">
      <h1 className="text-center my-3">PRODUCTS</h1>
      <Row className="gy-3">
        {content.map((item, index) => (
          <Col key={index} lg={6} md={12} sm={12} className="d-flex">
            <div
              style={{
                backgroundImage: item.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: item.borderRadius,
              }}
              className="mb-2 pt-5 py-2 d-flex justify-content-center "
            >
              <div className="  mt-5 pt-1 w-60 text-center product-div">
                <h4>{item.heading}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
