import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Recruiting = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            The discipline of recruitment has changed significantly in the last
            couple of years as organizations look for better ways to secure top
            talent to ensure business results. Social networking, unknown just a
            decade ago, has changed the way recruiting works, and recruiters are
            seeking new ways to maximize results. Furthermore, organizations are
            looking to break through recruiting silos to align the process with
            their overall talent management strategy and engage the entire
            hiring team.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features</h2>
          <ul>
            <li>
              Facilitates a strategic approach to hiring by making workforce
              planning, succession, and other key talent management functions
              integral parts of the recruitment process.
            </li>
            <li>
              Facilitates collaboration internally to help everyone involved in
              the process share ideas and comments, working as a coordinated
              team.
            </li>
            <li>
              Simplified design that combines cutting-edge web technologies with
              a consumer-like experience that’s easy to use for everyone
              involved in the hiring process.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recruiting Marketing</Card.Title>
              <Card.Text>
                Previously its own SuccessFactors module, Recruiting Marketing
                (RMK) is now a part of the SAP SuccessFactors Recruiting module.
                RMK allows customers to find and engage the best talent in the
                marketplace within a single platform. This supporting submodule
                allows users to access efficient candidate sourcing, engagement,
                and management—all in one unified system.
                <br />
                <br />
                Recruiting Marketing offers an enhanced careers website,
                multi-channel job postings, and social network
                integrations—available across multiple devices. It applies
                marketing best practices and leverages a multi-channel approach
                to your recruiting efforts. In our digital-first age, it’s
                difficult enough to attract top talent using just your applicant
                tracking system (ATS). Candidates tend to avoid lengthy
                application processes, and chances are high that they’ll opt out
                of applying if you make it too difficult for them to apply.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features of Recruiting Marketing</h2>
          <ul>
            <li>
              Get full control over your career site, including branding and
              visuals.
            </li>
            <li>
              Source candidates across more than 4,000 job boards, schools,
              universities, and social media networks.
            </li>
            <li>
              Get found on search machines. With Google Maps search
              functionality, candidates can find jobs in the area where they
              would like to move or jobs near their current location.
            </li>
            <li>
              Automatically takes your job postings and makes them searchable.
              As soon as a job is posted, it’s available in RMK for you to
              market.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact</h2>
          <ul>
            <li>
              Social media integration makes it easier for candidates to apply
              for positions with their smartphones or tablets from anywhere.
            </li>
            <li>
              Can streamline recruiting with a centrally managed, global hiring
              process.
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

export default Recruiting;
