import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
import "./SupportServices.css";

const SAPSupportServices = () => {
  useScrollToTop();
  return (
    <Container className="AMS">
      <Row className="my-3">
        <Col md={12}>
          <h1>
            Application Management Services(AMS) For SAP Total Workforce
            Solution
          </h1>
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
                  <h2>Why To Choose us</h2>
                  <p>
                    DHR Technology collaborates with organizations of all sizes,
                    industries, and geographic locations. To meet the diverse
                    needs of our clients, we offer a variety of service types,
                    including: Flexible: DHR Technology AMS Supports team
                    provide application support for organizations ranging from
                    small and medium-sized businesses to large multinational
                    corporations. Compliant: Our service adheres to
                    standardized, ITIL-compliant practices, ensuring smooth
                    integration with your internal systems. Standardized:
                    Service delivery is structured around three clearly defined
                    service packages: Bronze, Silver, and Gold. Also we
                    understnd that predefined support packages/duration mayn't
                    satisfy your need, hence we are proud to introduce our AMS
                    Service estimator to provide tailor AMS support packages
                    based on your need.
                  </p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Support Model</h2>
                  <p>
                    <div className="d-flex justify-content-center pb-3">
                      <img
                        className="img-fluid"
                        src="/public/assets/images/AMS-support-model.png"
                        alt="To be updated"
                      />
                    </div>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2 className="pb-4">Services Packages Available</h2>
                  <Row className="mb-2">
                    <Col md={4}>
                      <img
                        className="img-fluid"
                        src="/assets/images/bronze.png"
                        alt="Gold"
                      />
                    </Col>
                    <Col md={8}>
                      <h5 className="d-flex bronze package">Bronze</h5>
                      <p>
                        A cost-effective support offering targeting smaller
                        customers with a simple installation. Covers fewer
                        business-critical processes and includes no or limited
                        interfaces. Note: No Release Management included.
                      </p>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>
                      <img
                        className="img-fluid"
                        src="/assets/images/silver.png"
                        alt="Gold"
                      />
                    </Col>
                    <Col md={8}>
                      <h5 className="d-flex silver package">Silver</h5>
                      <p>
                        A cost-effective support offering designed for customers
                        with a more complex installation than Standard. Covers
                        multiple business-critical processes and includes
                        several interfaces. Release Management is included.
                      </p>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>
                      <img
                        className="img-fluid"
                        src="/assets/images/gold.png"
                        alt="Gold"
                      />
                    </Col>
                    <Col md={8}>
                      <h5 className=" d-flex gold package">Gold</h5>
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
                  <h2>Payroll Support</h2>
                  <p>
                    The SAP SuccessFactors EC Payroll solution streamlines
                    global payroll processes, ensuring employees are paid
                    accurately and on time. However, after implementation,
                    ongoing support is needed to accommodate changes in business
                    needs, legislation, system integration, compatibility with
                    other systems, and SAP's updates and innovations. Unlike
                    general application support, SAP payroll support must
                    address compliance and legal requirements specific to
                    various countries and industries. With over twenty(20) years
                    of experience and a global client base, we are expertise to
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
