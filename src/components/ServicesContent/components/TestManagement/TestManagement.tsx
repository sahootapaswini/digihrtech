import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const TestManagement = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>Software Test Management</h1>
          <p>
            Software test management is an important discipline to be included
            within a robust evaluation process, whether you’re implementing a
            new system or upgrading an existing one. It ensures that an
            organization delivers a high-quality, bug-free software application
            that meets customer requirements or organizational demands.
          </p>
          <p>
            DHR Technology helps clients benefit from best practices by taking
            advantage of our SAP test management tool, executed through our
            Quality Assurance (QA) program, which provides a flexible and
            tailored approach to managed testing, verification, and validation
            activities for a diverse range of client needs.
          </p>
          <p>
            The program is based on QA test management activities that are
            planned as deliverables and produced at each phase of the project.
            It includes initial preparation and test planning, design execution,
            and a QA governance report with key metrics to support
            decision-making around risk mitigation.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>The Five-Step Process</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
        
      </ListGroup.Item>

                <ListGroup.Item>
                  <strong>Phases 0 and 1: Prepare</strong> - Before testing
                  activities begin, the QA team analyzes the current landscape
                  and defines target stats. An outcome of the preparation phase
                  is a collaborative document outlining the entire test
                  strategy, including project scope, testing tools, roles,
                  responsibilities, and test execution guides.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phase 2: Explore</strong> - DHR Technology hosts
                  solution workshops in collaboration with the client, with the
                  goal of validating the chosen solution and determining
                  configuration values. In collaboration with the client, our
                  team identifies master data, aligns organizational
                  requirements, and cleanses data ahead of integration.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phase 3: Realize</strong> - Our team configures and
                  builds a test solution that best fits the client’s
                  organization. We’ll conduct end-to-end testing together with
                  comprehensive planning of cutover, as well as user training.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phase 4: Deploy</strong> - This is the “go-live” phase
                  for new and improved processes, which includes the execution
                  of transition, as well as cutover plans, and the establishment
                  of production support processes.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phase 5: Run</strong> - During this final phase, our
                  team monitors and optimizes changes to the software. Further
                  stabilization of changes in software takes place, as well as
                  focused resolution of outstanding issues.
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
              <Card.Title>Business Impact</Card.Title>
              <Card.Text>
                DHR Technology’s team can execute everything you need for
                qualified test planning and execution, including risk reduction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestManagement;
