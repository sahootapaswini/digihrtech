import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const HRProcessImplementation = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>HR Process Implementation</h1>
          <p>
            To remain competitive, companies need to introduce HR solutions that
            make the best use of technology to support employees and their
            ability to excel. Doing so creates a solid foundation for
            organizational success. This process of digital transformation
            requires more than the purchasing of new systems. If you want to
            succeed, you need a vision for your destination and a strategy for
            implementing the HR processes you need—on time and on budget.
          </p>
          <p>
            DHR Technology has managed, implemented, and delivered more than
            1,200 SAP SuccessFactors projects for clients, with proven results
            in leveraging technology for HR process improvement. With a wide
            range of SAP consulting services available, including HR strategy
            advising, implementation consulting, system integration, and
            continued operational support, our team can guide you from the
            beginning of your transformation journey through to value
            realization.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Expertise</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>Proven Track Record</h5>
                  <p>
                    Through our partnership with SAP, DHR Technology has
                    completed more than 1,200 successful SAP projects and
                    supported more than 150 clients. Our proven approaches and
                    frameworks enable your employees to leverage SAP technology
                    to improve performance and deliver key business outcomes.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Comprehensive Services</h5>
                  <p>
                    We offer a wide range of SAP consulting services, including
                    HR strategy advising, implementation consulting, system
                    integration, and continued operational support.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Global Experience</h5>
                  <p>
                    Our global team of experienced consultants is well-equipped
                    to guide your organization through the SAP SuccessFactors
                    journey, ensuring successful transformation and value
                    realization.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Why Choose DHR Technology?</Card.Title>
              <p>
                DHR Technology’s extensive experience in managing and
                delivering SAP SuccessFactors projects ensures that you receive
                expert guidance and support throughout your HR process
                implementation. Our proven methods and commitment to achieving
                key business outcomes will help you navigate your digital
                transformation successfully.
              </p>
              <Button variant="primary" href="#contact">
                Contact Us to Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HRProcessImplementation;
