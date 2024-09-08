import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const SAPSupportServices = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="my-3">
        <Col md={12}>
          <h1>Support for SAP Total Workforce Solution</h1>
          <p>
            Many organizations invest heavily in developing enterprise software
            solutions to automate their processes, but they often fail to fully
            leverage these systems once they are live. A common misconception is
            that the work is complete once the system is operational and that no
            further needs will emerge. In reality, the system's full potential
            is frequently not realized until it has stabilized. At this point,
            we step in to support customers with post-Go-Live issues, stabilize
            the system, and implement new enhancements and upgrades based on
            SAP's semi-annual releases.
          </p>
          <p>
            DHR Technology Application Management Service (AMS) that adheres to
            ITIL best practices and supports the SAP Total Workforce Management
            suite, including SAP ERP HCM, SAP Payroll and SuccessFactors all
            modules. Offered as an ‘on-demand’ service, customers pay only for
            the support they use, with optional services such as semi-annual
            Release Management available.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4 border-0">
            <Card.Body>
              <Card.Title>
                <h2>
                  Our Comprehensive SAP Application Management Services(AMS)
                </h2>
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Why To Choose us</h3>
                  <p>
                    DHR Technology collaborates with organizations of all sizes,
                    industries, and geographic locations. To meet the diverse
                    needs of our clients, we offer a variety of service types,
                    including: Flexible: Gavdi Application Value supports
                    organizations ranging from small and medium-sized businesses
                    to large multinational corporations. Compliant: Our service
                    adheres to standardized, ITIL-compliant practices, ensuring
                    smooth integration with your internal systems. Standardized:
                    Service delivery is structured around three clearly defined
                    service contracts: Standard, Enterprise, and Preferred.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Services Packages Available</h3>
                  <Row>
                    <Col>
                      <h5>Standard</h5>
                      <p>
                        A cost-effective support offering targeting smaller
                        customers with a simple installation. Covers fewer
                        business-critical processes and includes no or limited
                        interfaces. Note: No Release Management included.
                      </p>
                    </Col>
                    <Col>
                      <h5>Enterprise</h5>
                      <p>
                        A cost-effective support offering designed for customers
                        with a more complex installation than Standard. Covers
                        multiple business-critical processes and includes
                        several interfaces. Release Management is included.
                      </p>
                    </Col>
                    <Col>
                      <h5>Preferred</h5>
                      <p>
                        A comprehensive support offering for larger customers
                        with a complex installation. Covers multiple
                        business-critical processes and interfaces. Release
                        Management is included.
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Payroll Support</h3>
                  <p>
                    The SAP SuccessFactors EC Payroll solution streamlines
                    global payroll processes, ensuring employees are paid
                    accurately and on time. However, after implementation,
                    ongoing support is needed to accommodate changes in business
                    needs, legislation, system integration, compatibility with
                    other systems, and SAP's updates and innovations. Unlike
                    general application support, SAP payroll support must
                    address compliance and legal requirements specific to
                    various countries and industries. With over twenty years of
                    experience and a global client base, we are expertise to
                    navigate these unique demands, as well as handle repairs,
                    maintenance, and enhancements.Additionally, we offer
                    customized HR payroll support tailored to your specific
                    needs.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SAPSupportServices;
