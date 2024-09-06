import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SAPSupportServices = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>SAP SuccessFactors Support Services</h1>
          <p>
            As the first SAP SuccessFactors partner in Europe, Effective People
            has been providing a diverse range of clients across industries and
            geographical locations with SAP support services since 2005.
          </p>
          <p>
            Our SAP Human Resources support team empowers your organization
            through the assurance that you have our experience and expertise
            readily available. Our ongoing support means your resources can
            focus on optimizing the value and benefits of the most widely
            adopted Software as a Service (SaaS) in the world.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Our Comprehensive SAP Support and Implementation Services
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>Implementation</h5>
                  <p>
                    As you embark on your digital transformation journey, we
                    provide the SAP enterprise support services you need to
                    transition your human resource processes to the cloud,
                    helping you to define a roadmap that will build a foundation
                    for solid organizational success.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Managed Services</h5>
                  <p>
                    Having reliable and effective day-to-day SAP global service
                    and support for advanced users and administrators is
                    critical to ensure that your system always runs smoothly.
                    Your business is constantly changing and evolving, which
                    means SAP SuccessFactors must reflect those changes. Your
                    accredited SAP support consultant will assist with
                    everything from standard help desk support to full
                    application management, including payroll support.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Training and Support Services</h5>
                  <p>
                    As your team grows, Effective People helps upskill and
                    increase human resources support knowledge. SAP
                    SuccessFactors users are then equipped to maintain and
                    enhance functionality to benefit the organization through
                    continuous improvement, efficiency, and innovation.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SAPSupportServices;
