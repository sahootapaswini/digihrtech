import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SAPDataMigration = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>Data Migration Solutions</h1>
          <p>
            Data migration solutions are required when an organization needs to
            move data from one location, format, or application to another.
            Also, the implementation of Software as a Service (SaaS) to support
            an HR transformation strategy requires advanced data migration tools
            to ensure the safe transition of data to the new solution.
          </p>
          <p>
            Effective People’s expertise in selecting, preparing, extracting,
            and transforming data and permanently transferring it to the cloud
            is based on proven migration methods and tools, combined with our
            experience in managing more than 1,200 successfully completed data
            migration projects for diverse clients.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Data Migration Approach</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>Phase 1: Prepare & Explore</h5>
                  <p>
                    The first step involves exploration to gain a unified view
                    of an organization’s business processes, by identifying data
                    and target entities and analyzing source systems. We engage
                    with HR and IT departments to review major risk areas for
                    data migration, such as localization requirements and
                    organizational structure.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Phase 2: Realize</h5>
                  <p>
                    Based on our validation rules and engagement with local HR
                    managers, our data migration consultants extract and convert
                    data from source systems. We conduct migration workshops to
                    ensure high-quality data migration and perform data quality
                    assessments using our proven Key Performance Indicators
                    (KPIs).
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Phase 3: Deploy</h5>
                  <p>
                    In the deploy stage, our expert team loads the converted
                    data into the new system using our proven approach, and
                    conducts validation of key data, relationships, and data
                    quality based on industry best practices, our pre-built
                    checks, and reports.
                  </p>
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
              <p>
                Data migration solutions are an integral part of the HR
                transformation journey. Effective People’s extensive framework
                for risk mitigation and quality assurance can help you safely
                navigate your way through the complexities involved.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SAPDataMigration;
