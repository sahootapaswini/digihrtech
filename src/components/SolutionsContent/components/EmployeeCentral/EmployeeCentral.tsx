import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const EmployeeCentral = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            Employee Central (EC) is a flexible, core HR functionality that
            allows you to consolidate and standardize HR processes on a global
            scale. EC is a cloud-based HRIS (Human Resource Information System)
            designed to empower your people through intuitive HR workflows
            accessible from anywhere and at any time. An intuitive dashboard
            presents you with a holistic overview of your organization to keep
            you up to date.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>SAP SuccessFactors Employee Central</Card.Title>
              <Card.Text>
                Moving to the cloud, SAP SuccessFactors Employee Central
                delivers a robust framework where enhancements and fixes are
                released to all clients at the same time. Customers don’t need
                to engage consultants or initiate a complex process of applying
                patches themselves.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features - Employee Central Implementation</h2>
          <ul>
            <li>
              A cloud-based, global, and unified platform that includes
              localization support in more than 100 countries worldwide.
            </li>
            <li>
              Self-service to support automation and improve data quality with
              24/7 access from any device.
            </li>
            <li>
              As part of our well-established implementation approach, Effective
              People delivers best-practice process maps for the most common
              employee lifecycle events, time-off rules for 60+ countries, and
              integrations to all common external systems.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact for Our Employee Central solution</h2>
          <ul>
            <li>Make data-driven decisions through live insights.</li>
            <li>
              Attract, develop, and retain employees using Employee Central.
            </li>
            <li>
              Increase process efficiency and data accuracy by managing master
              data and benefits processes.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeCentral;
