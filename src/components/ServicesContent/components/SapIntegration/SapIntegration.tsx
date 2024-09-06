import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SapIntegration = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>SAP Integration</h1>
          <p>
            SAP integration is the process companies use to connect their SAP
            systems to other systems throughout their organization. SAP data
            integration is a critical part of digital transformation. When
            businesses can effortlessly connect their data, applications, and
            systems across their landscape, they can speed up project delivery
            to boost organizational success.
          </p>
          <p>
            Effective People is uniquely positioned to support your cloud
            platform integration requirements, through leveraging our expertise
            within the SAP SuccessFactors suite, combined with our team’s
            technical competencies in developing standard SuccessFactors
            integration models based on the SuccessFactors APIs.
          </p>
          <p>
            Based on the principles defined in the SuccessFactors methodology,
            we have developed and refined our own Interface Build Approach, a
            delivery methodology that is constantly evolving through multiple
            project lifecycles.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Five-Step Implementation Process</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Prepare:</strong> Working with our clients, we analyze
                  how to ensure the optimal interface approach, including
                  preferred middleware technologies, build approach, bundling,
                  roles and responsibilities, a project and activity plan with
                  well-defined deliverables for the involved parties, and the
                  operations and maintenance approach.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Explore:</strong> Identify a list of potential
                  interfaces and perform comprehensive analysis of interfaces in
                  scope.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Realize:</strong> Build interfaces using Effective
                  People's methodology aligned with SAP SuccessFactors.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Deploy:</strong> Execute the deployment of the built
                  interfaces and ensure they integrate seamlessly into the
                  existing systems.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Run:</strong> Monitor and maintain the interfaces,
                  ensuring they continue to operate efficiently and effectively.
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
              <Card.Title>Our Accelerators</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Reusable and purposeful assets (Artefacts and Integration
                  Templates)
                </ListGroup.Item>
                <ListGroup.Item>
                  Test Scripts for easy use and user adoption
                </ListGroup.Item>
                <ListGroup.Item>
                  In-house built Integration Monitoring tool
                </ListGroup.Item>
                <ListGroup.Item>
                  Implement standard processes fast and simple
                </ListGroup.Item>
                <ListGroup.Item>
                  Build innovative solutions with modern tools
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SapIntegration;
