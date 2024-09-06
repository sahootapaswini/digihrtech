import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SuccessionDevelopment = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            In uncertain times, future-proofing your business is a top
            priority—and that starts from within. Succession planning is a
            proactive approach to identifying and developing your existing top
            talent so you stay competitive. Using this information, you can
            develop your “star performers” for upcoming job transitions without
            losing your valuable internal knowledge base.
            <br />
            SAP SuccessFactors Succession & Development helps identify, develop,
            and retain talent at every level of your company. By using robust
            succession planning software, you can easily map staff moves across
            teams and borders. You can also create new department hiring plans
            while providing employees with greater visibility into the future of
            their careers.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Quickly and accurately assess your talent to formulate valuable
              insights about your workforce with information on backgrounds,
              expertise, performance, and career aspirations.
            </li>
            <li>
              Uncover hidden talent by expanding your internal talent search
              efforts beyond your immediate sphere.
            </li>
            <li>Find the best candidate to fill your leadership gaps.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              Higher visibility into your existing talent pools to proactively
              train and develop employees for key positions.
            </li>
            <li>
              Gain an overview of your talent gaps, including key indicators
              such as the impact of loss and bench strength.
            </li>
            <li>
              Empower HR leaders to establish strategic talent review
              conversations with managers and executives.
            </li>
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

export default SuccessionDevelopment;
