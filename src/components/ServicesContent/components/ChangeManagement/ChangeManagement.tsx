import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const ChangeManagement = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>Effective Change Management in HR Transformation</h1>
          <p>
            When an organization realizes it’s time to move to cloud-based HR
            solutions, much of the focus can fall on the technical side of
            implementation—but we warn our clients not to neglect the people
            side of change management, as this is what will ultimately ensure
            continuous improvement in efficiency and innovation.
          </p>
          <p>
            An effective change management process introduces new ways of
            working that generate a culture of ownership and accountability
            inside the organization, thereby greatly increasing a project’s
            chance of success.
          </p>
          <p>
            With more than 20 years of experience in managing change in
            organizations, DHR Technology is highly skilled in managing the
            challenges that arise in HR transformation processes. We have the
            expertise to help identify, mitigate, and manage any potential
            employee resistance. Through a tried-and-trusted enabling framework
            for change management, users are adequately prepared, equipped, and
            supported through the process, so that they ultimately become
            champions of the mindset necessary to make the transition to
            cloud-based services.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Key Elements of Successful Change Management
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Leadership:</strong> Role models the new ways of
                  working and creates a culture of ownership and accountability.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>HR Leadership:</strong> Sets the tone of
                  standardization and efficiency.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Governance:</strong> Set up from the beginning in
                  order to facilitate continuous improvement.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Line Managers:</strong> Actively supported throughout
                  the process.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Change Champions:</strong> Support basic issue
                  resolution and are thus key to greater system adoption.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Employee Adoption:</strong> Measured, and continuous
                  learning is built into HR processes.
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
              <Card.Title>How DHR Technology Can Help</Card.Title>
              <Card.Text>
                Whether you are at the start of your transformation journey or
                are looking for advice to take your workforce to the next level,
                DHR Technology has the market-leading skills to help you not
                only meet the technical challenges related to change but also
                the people-focused expertise to steer you safely through the
                people side of the organizational change you need to make.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangeManagement;
