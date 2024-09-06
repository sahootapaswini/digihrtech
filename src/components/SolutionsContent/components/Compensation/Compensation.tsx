import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const Compensation = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            The SAP SuccessFactors Compensation module helps you build and
            manage strategic compensation programs that align with the needs of
            your employees, your business, and your budget. Compensation deals
            with a fixed salary paid to employees, typically known as the annual
            salary review, and simple one-time lump sums.
          </p>
          <p>
            Compensation is also used for long-term incentives, including
            stocks, options, and RSUs (Restricted Stock Units). Unlike personal
            productivity tools or other solutions that simply automate and
            streamline compensation planning, SAP SuccessFactors Compensation
            focuses on delivering meaningful rewards experiences that are
            personalized, relevant, frequent, and timely for your employees
            across the globe.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>SAP SuccessFactors Variable Pay</h2>
          <p>
            Variable Pay deals with variable pay bonus programs, typically known
            as a corporate bonus program or short-term incentive (STI). By
            rewarding individual, team, and business goal achievement, you’ll
            retain top talent and drive organizational performance. Plus, you’ll
            enjoy clearer visibility into individual employee performance when
            it comes time to make critical compensation planning decisions.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Manage your compensation in a secure environment with streamlined
              workflows where your data is determined via calculation and
              eligibility engines. This eliminates privacy breaches and human
              error.
            </li>
            <li>
              Design a compensation strategy with objective data and communicate
              it company-wide, showing a clear link between performance
              expectations and compensation.
            </li>
            <li>
              Prepare your end-of-year bonus statements early thanks to easy
              self-service access.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              Retain more of your top talent by rewarding great execution and
              letting them feel valued, appreciated, and consequently more
              likely to stay in your organization. You’ll also gain a better
              overview of individual employee performance when it comes to
              making critical compensation planning decisions.
            </li>
            <li>
              Optimize your budget by running “what-if” scenarios to instantly
              see how increasing merit pay to your best employees will impact
              your budget. The easy-to-use automated system will save
              compensation managers time and money.
            </li>
            <li>
              With audit compliance data stored automatically, you’ll experience
              a significantly reduced risk of loss, eliminating this burden for
              compensation administrators.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Why Choose SAP SuccessFactors Compensation?
              </Card.Title>
              <Card.Text>
                SAP SuccessFactors Compensation offers a comprehensive solution
                to manage your compensation programs with precision and
                efficiency. By integrating secure, data-driven workflows and
                providing insightful analytics, this module helps you make
                informed decisions, retain top talent, and optimize your budget.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Compensation;
