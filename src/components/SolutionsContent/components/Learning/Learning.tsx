import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const Learning = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            As the demand for new skills accelerates, organizations need a
            learning management system (LMS) that supports employee learning and
            development with agility and innovation. The SAP SuccessFactors
            Learning solution helps companies deliver training and content for
            each learner in a way that’s relevant, engaging, and maximizes
            retention.
            <br />
            In a time when most employees are overwhelmed by floods of
            information, the ability to offer personalized learning embedded in
            the flow of work is invaluable. Not only are employees empowered to
            reach their own career goals, but they are also better equipped to
            contribute to a company’s overall growth strategy.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Benefits of SAP SuccessFactors Learning</h2>
          <ul>
            <li>
              The ability to design and curate learning experiences for
              employees at all stages, across an extended business network.
            </li>
            <li>
              Boosted learner engagement with blended learning capabilities and
              personalized content.
            </li>
            <li>
              A unified learning management system that provides a transparent
              view of employees’ activities, business goals, completion
              certificates, and more.
            </li>
            <li>
              Improved regulatory adherence and lowered legal risk through the
              automation of compliance training.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Capabilities</h2>
          <ul>
            <li>
              Access to learning wherever and whenever needed, through a wide
              variety of formats, and with the ability to connect and
              collaborate with peers.
            </li>
            <li>
              Unmatched content management, reporting, and analytics
              capabilities.
            </li>
            <li>
              Automated administration with intuitive wizard-based processes and
              assignment profiles.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Validated Learning and Validated SaaS</h2>
          <p>
            Validated Software as a Service (vSaaS) extends the concept of SaaS
            for customers who need a longer release cycle to validate their
            software to a regulator. Validation is not standard across
            industries or customers, and it usually requires highly detailed
            documentation that can take three to six months to produce.
            <br />
            Because of the validation requirements, SAP SuccessFactors offers an
            LMS as vSaaS, with an annual release schedule and some additional
            validation reporting features.
            <br />
            DHR Technology has collaborated with diverse clients over the past
            decade to support the implementation of their Validated Learning
            environment. This work includes integration with document-handling
            systems to ensure that learners can access the latest quality
            assurance documents directly from the learning system.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Validated (vSaaS) Learning Mobile App</h2>
          <p>
            After more than 15 years of supporting regulated industries with
            strict validation requirements, including FDA validation
            requirements, SAP SuccessFactors now offers a separate Validated
            Learning Mobile app for LMS customers (iPhone and iPad only; not
            available for Android).
            <br />
            The app empowers employees with the flexibility to learn at their
            convenience. They can identify their assigned courses, register for
            classes, consume content, search for courses in the library, review
            past history, create and view QuickGuides, and record completion of
            observations with task checklists. Instructors can also manage their
            learning courses wherever they go.
          </p>
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

export default Learning;
