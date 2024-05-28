import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ServiceSection = () => {
  const content = [
    {
      head: "Custom Application Development Services",
      body: "We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.",
    },
    {
      head: "App Maintenance Services",
      body: "Our application maintenance and modernization services are designed to ensure the scalability, performance, and sustainability of your entire software infrastructure as your business grows.",
    },
    {
      head: "QA and Software Testing Services",
      body: "Comprehensive quality assurance is built into our custom software service model, but we can also provide on-demand QA and a suite of functional and usability software tests upon request.",
    },
    {
      head: "API Integration Services",
      body: "We build and implement custom APIs for all breeds of applications, helping to add functionality to your software systems and facilitate communication between your apps and others.",
    },
    {
      head: "IT Security Services",
      body: "Our thorough threat audits help us identify your software infrastructure's most pressing vulnerabilities, allowing us to integrate the encryptions, security services and access protocols you require.",
    },
    {
      head: "Software Deployment Services",
      body: "Our implementation specialists will work with your IT team to establish detailed software deployment objectives and timelines, covering configuration, testing, project governance, troubleshooting and more.",
    },
    {
      head: "Data Backup and Recovery Services",
      body: "We implement robust data backup and recovery strategies for cloud-based, on-premises and hybrid servers, designed to ensure the integrity of your data and the continuity of your business.",
    },
    {
      head: "Software Migration Services",
      body: "We perform cloud-based migrations, system upgrades and other vital software modernization services prioritizing system uptime and data integrity throughout an often daunting IT transition.",
    },
  ];

  return (
    <>
      <Container className="my-5" id="services">
        <h1 className="text-center my-3">SERVICES</h1>
        <Row className="gy-3">
          {content.map((item, index) => (
            <Col
              key={index}
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className="d-flex"
            >
              <div className="d-flex flex-column p-3 service-div shadow w-100 h-100  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  className="bi bi-globe-central-south-asia service-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" />
                </svg>
              
                <h4 >{item.head}</h4>
                
                <p >{item.body}</p>
              
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServiceSection;
