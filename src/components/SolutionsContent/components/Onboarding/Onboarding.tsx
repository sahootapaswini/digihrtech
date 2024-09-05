import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Onboarding = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            Onboarding gets new hires in the door and contributing quickly to
            your company’s business goals. It’s a critical part of a strategic
            talent management program but it’s also often overlooked or poorly
            handled. Loads of paperwork, missed details, and busy managers can
            fail to make new hires feel welcome, creating a poor first
            impression and slowing down time to productivity—all of which might
            cause the new hire to leave again.
          </p>
          <p>
            SAP SuccessFactors Onboarding sets new hires up for success by
            integrating support systems and intuitive processes that contribute
            to your company’s business goals. Convert candidates to employees
            with a seamless workflow that streamlines the process and paperwork
            before day one and gets your new hire ramped up quickly with the
            SuccessFactors employee network and content-sharing solution.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Connect new hires to a secure talent portal before they’ve even
              started.
            </li>
            <li>
              Manage internal tasks by sending email notifications to IT,
              security, finance, and anyone else who’s part of the onboarding
              process.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              First impressions count. Retain new talent from the get-go with a
              positive onboarding experience.
            </li>
            <li>
              Adopt a fully digital onboarding experience, eliminating the need
              for redundant paperwork—plus, it’s also better for the
              environment!
            </li>
            <li>
              Save time with a scheduled workflow that includes features such as
              automatic task triggers and new-hire reminders.
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

export default Onboarding;
