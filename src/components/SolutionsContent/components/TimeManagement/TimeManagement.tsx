import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const TimeManagement = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            The Time Management module within SAP SuccessFactors is a
            cloud-based application that provides capabilities across three
            areas: Time Sheet, Time Off, and Time Tracking.
          </p>
          <p>
            The Time Sheet application tracks all your employees’ working time,
            including holidays. Time Off is used to track time off requests,
            both on mobile and desktop, and includes a team absence calendar.
            Time Tracking provides your organization with several tools to
            improve and configure time management processes.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>Comprehensive, flexible attendance and absence recording.</li>
            <li>Unified experience across any device.</li>
            <li>
              Mobile clock in and clock out to help employees accurately track
              their time.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>Supports simplifying time and HR processes.</li>
            <li>
              Streamlines complex workforce scheduling through automation.
            </li>
            <li>Reduces payroll errors and overtime costs.</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TimeManagement;
