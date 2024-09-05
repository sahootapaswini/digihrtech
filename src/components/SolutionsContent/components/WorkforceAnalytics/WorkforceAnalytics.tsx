import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const WorkforceAnalytics = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
            <p>
            You don’t have to be a data scientist to benefit from people
            analytics! With SAP SuccessFactors Workforce Analytics, you’ll gain
            a reliable view of your workforce and how every employee impacts
            business results. Through a cloud-based, single platform, Workforce
            Analytics on HANA (WFA on HANA) provides actionable insights on
            workforce data to drive your business strategy and help you plan for
            the future.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Designed to give businesses actionable insights about their
              workforce trends.
            </li>
            <li>
              Fully integrated with SuccessFactors, offering easy-to-use
              insights and tools for action.
            </li>
            <li>
              Empowers HR professionals, analysts, and business partners to
              answer questions quickly and accurately.
            </li>
            <li>
              Allows analysis of metrics such as senior manager retirements, new
              hire turnover, and organizational diversity.
            </li>
            <li>
              Provides insights into how metrics impact the organization and how
              they have changed over time.
            </li>
            <li>
              Offers flexibility to analyze data by various time models and
              demographics such as Org Unit, Country & Location, Manager
              Hierarchy, Job Family, Age Range, Tenure, and Gender.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              Uncover hidden workforce trends and make them visible to the
              organization.
            </li>
            <li>
              Make faster, more accurate decisions through access to data
              insights and HR dashboards.
            </li>
            <li>
              Increase the effectiveness of your HR teams with a comprehensive
              library of standard metrics covering Workforce, Diversity,
              Mobility, Recruiting, Performance, Goals, Succession, HR Service
              Delivery, and Compensation.
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Why Choose SAP SuccessFactors Workforce Analytics?
              </Card.Title>
              <Card.Text>
                Half the struggle for most organizations is defining what they
                should be measuring and how they compare to their competitors.
                With SAP SuccessFactors Workforce Analytics, your decisions
                won’t be based on assumptions but instead leveraged by
                data-driven, proven technologies that provide you with full
                visibility of your workforce.
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

export default WorkforceAnalytics;
