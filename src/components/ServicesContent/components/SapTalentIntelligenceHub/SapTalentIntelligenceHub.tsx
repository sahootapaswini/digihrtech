import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SapTalentIntelligenceHub = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-5">
        <Col md={12}>
          <h1>SAP Talent Intelligence Hub</h1>
          <p>
            The SAP Talent Intelligence Hub is expertly crafted to streamline
            your strategic HR planning. This innovative tool not only provides a
            comprehensive understanding of your talent pool but also facilitates
            accurate employee assessment, encompassing a range of attributes
            beyond just competency assessment. Additionally, all HR data
            analytics are conveniently accessible for in-depth analysis through
            the 'Report Stories' feature.
          </p>
          <p>
            Let's explore how the most recent SAP HR solution can transform your
            organization's workforce strategy and planning.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>What is it?</Card.Title>
              <Card.Text>
                The Talent Intelligence Hub is part of the SuccessFactors
                Platform, your all-in-one talent management system, offering:
              </Card.Text>
              <ul>
                <li>
                  <strong>Skills Ontology:</strong> Drawing from an extensive
                  array of external databases and global job postings, this
                  feature guarantees a holistic and constantly updated view of
                  the most in-demand skills, leading to the most effective
                  workforce optimization strategies.
                </li>
                <li>
                  <strong>Attributes Library:</strong> This is a centralized hub
                  that consolidates all attribute types you've selected for use
                  within your talent management tool, addressing both individual
                  and organizational requirements.
                </li>
                <li>
                  <strong>Growth Portfolio:</strong> This is much more than a
                  mere dashboard; it's a thoughtfully designed space dedicated
                  to fostering employee growth in harmony with organizational
                  objectives. Grounded in the “whole-self model”, it
                  acknowledges that an employee's success transcends mere skills
                  by incorporating elements like work style, aspirations,
                  motivation, education, and communication preferences. Such
                  comprehensive profiling ensures that the information about
                  your workforce is complete, facilitating superior HR resources
                  planning that goes beyond traditional assessments of employee
                  skills and competencies.
                </li>
              </ul>
              <p>
                Some of the features mentioned will be even further developed in
                2024.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Benefits of SAP Talent Intelligence Hub</Card.Title>
              <Card.Text>
                In the realm of HR, challenges abound, and the Talent
                Intelligence Hub addresses them all, supporting workforce
                strategy and planning:
              </Card.Text>
              <ul>
                <li>
                  <strong>Personalized Learning:</strong> Tailored to strategic
                  HR planning, our system recommends learning content, ensuring
                  your workforce stays aligned with your talent strategy.
                </li>
                <li>
                  <strong>Efficient Recruitment:</strong> Streamline recruitment
                  with workforce management software, reducing time-consuming
                  manual searches and improving your talent pool.
                </li>
                <li>
                  <strong>Optimized Team Formation:</strong> Eliminate gut
                  feelings and biases in team building, ensuring a strategic
                  workforce strategy and planning approach.
                </li>
                <li>
                  <strong>Personalized Career Growth:</strong> Offer tailored
                  career growth opportunities, fostering employee satisfaction
                  and optimizing your talent pool.
                </li>
                <li>
                  <strong>Enhanced Mentorship:</strong> Improve mentor-mentee
                  relationships with our assessment tools, aligning based on
                  skills and other coachable attributes.
                </li>
                <li>
                  <strong>Informed Leadership:</strong> Equip your leadership
                  with HR data analytics, providing transparent insights into
                  employee competencies and goals for strategic HR planning.
                </li>
                <li>
                  <strong>Tailored Career Planning:</strong> Move away from
                  standardized career planning and embrace attribute-based
                  development strategies, tailored for strategic workplace
                  planning.
                </li>
                <li>
                  <strong>Reduced Bias in Succession Planning:</strong> Make
                  competency- and skill-based successor recommendations with our
                  talent management system to reduce unconscious biases and
                  align with your talent strategy.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Why Invest in SAP Talent Intelligence Hub?
              </Card.Title>
              <Card.Text>
                The Talent Intelligence Hub empowers you to make informed and
                unbiased decisions about your workforce, enhancing your
                strategic HR planning, employee satisfaction, and a sense of
                belonging within the company. Gain deep insights into your
                talent pool, identify strengths, recommend training, choose
                optimal successors, and make precise recruitment selections.
                Stay at the forefront of workforce management with ongoing SAP
                integration and improved ROI.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                Is SAP Talent Intelligence Hub Suitable for All Companies?
              </Card.Title>
              <Card.Text>
                The Talent Intelligence Hub is designed for medium to large
                enterprises across various industries with a focus on workforce
                analytics, human resource planning, and strategic workforce
                planning. If you have complex HR and workforce management needs,
                substantial employee data, and a desire for data-driven
                decision-making, this solution is tailored for you.
              </Card.Text>
              <Button variant="primary" href="path-to-your-one-pager.pdf">
                Download Our One-Pager
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-DHR Technology
            <Card.Body>
              <Card.Title>How Effective People Can Help</Card.Title>
              <Card.Text>
                We offer a comprehensive approach that includes valuable
                insights and optimal configuration to facilitate your
                transition. The Talent Intelligence Hub is continuously
                evolving, providing workforce optimization and strategic
                workforce planning, and our ongoing support ensures your
                organization maintains a strong position in talent management.
                Join us for an enriching experience and transform the way you
                manage your workforce while enhancing your strategic HR planning
                and human resource analytics. Your journey to better talent
                management begins here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SapTalentIntelligenceHub;
