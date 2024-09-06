import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SAPTraining = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>Admin Training for SAP SuccessFactors</h1>
          <p>
            Managing SAP SuccessFactors requires a comprehensive approach to
            ensure the seamless operation of all system components. Given the
            varying technical skills within HR teams, it can be particularly
            challenging to maintain the necessary level of expertise across all
            users.
          </p>
          <p>
            Effective People provides admin training tailored to improve your HR
            admins’ technical knowledge. Our training sessions are interactive
            and practical, focusing on real-world applications to ensure your
            team can confidently apply their new skills.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Key Benefits</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>Improve Internal Knowledge and Technical Capabilities</h5>
                  <p>
                    Enhance your team's understanding and technical skills in
                    SAP SuccessFactors.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Increase Efficiency and Consistency</h5>
                  <p>
                    Ensure consistency across systems and improve efficiency
                    with training from certified specialists.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Reduce Manual Errors and Mitigate Risks</h5>
                  <p>
                    Minimize manual errors and risks with comprehensive training
                    tailored to system admins.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Promote Active Knowledge Sharing</h5>
                  <p>
                    Facilitate knowledge sharing within your organization with
                    our extensive training materials.
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
              <Card.Title>Why Work with Effective People?</Card.Title>
              <p>
                After a successful go-live, your system and processes need
                continuous support and maintenance. Our team of certified
                experts brings extensive experience and in-depth knowledge of
                SAP SuccessFactors, ensuring top-quality training for your
                organization.
              </p>
              <p>
                With a proven track record, we have successfully trained
                numerous organizations, enhancing efficiency, reducing errors,
                and helping them achieve their HR goals. We are ready to assist
                you in maximizing the benefits of your SAP SuccessFactors
                solution with comprehensive admin training.
              </p>
              <Button variant="primary" href="#contact">
                Contact Us to Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SAPTraining;
