import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PerformanceGoals = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Performance and Goals Management with SAP SuccessFactors</h1>
          <p>
            Employee evaluations are one of the most powerful tools for any
            HR/business leader to ensure an engaged, focused, and highly
            productive workforce. With SAP SuccessFactors Performance and Goals
            Management, you can easily measure individual employee contributions
            accurately, clearly, and objectively.
          </p>
          <p>
            Managers and employees can keep track of both individual goals and
            the broader goals to which they’re linked for a better understanding
            of how day-to-day responsibilities contribute to the organization’s
            long-term goals.
            <br />
            The solution allows managers to instantly track the status of all
            the goals across their team to save time, as well as provide HR with
            overviews of goal distribution and insights into goal progression.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Assign individuals measurable and clearly articulated goals that
              are visible to others.
            </li>
            <li>
              Improve goal alignment by using cascading to link goals from top
              to bottom and to strengthen collaboration between peers.
            </li>
            <li>
              Allows employees to make frequent updates, forecast the
              probability of success, and provide comments on their goals.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              Revolutionize your employee evaluation process: Slash much of the
              time and costs associated with cumbersome paper-based review
              processes.
            </li>
            <li>
              Boost compliance: Create an audit trail of discoverable documents
              to ensure the legality of evaluations for compliance and other
              industry-specific regulations such as Sarbanes-Oxley (SOX) and
              GDPR.
            </li>
            <li>
              Stimulate continuous dialogue and feedback with Continuous
              Performance Management between managers and employees to align and
              improve future performance.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Customer Testimonial</Card.Title>
              <Card.Text>
                “Not only did we meet our strategic objectives for the project,
                the organization really appreciated the ease and
                user-friendliness of the system.”
                <br />
                <strong>
                  Dinusha De Silva-Parker | Head of Global HR Organizational
                  Development, Coloplast
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="primary">Get in Touch</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceGoals;
