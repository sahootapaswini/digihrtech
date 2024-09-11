import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SapPayroll.css"; // Import your custom CSS file

const SapPayroll = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>SAP Payroll – Cloud & On Premise</h1>
          <p>
            With over 50 payroll experts, DHR Technology is one of the most
            experienced payroll consultancies in the Middle East region. Payroll
            is a crucial process which requires high quality and timely data
            inputs, combined with logical, accurate calculations and appropriate
            outputs. SAP provides market-leading payroll solutions that offer a
            proven global payroll engine that is seamlessly tied with a leading
            next-generation core HR system, so you can be assured that your
            payroll will be safe, fast, and accurate.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            src="/assets/images/sap-payroll-cloud.jpg"
            alt="Sap Payroll Cloud"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>SAP ERP™ HCM Payroll</Card.Title>
              <Card.Text>
                DHR Technology has an unrivalled expertise in deploying SAP
                Payroll, which has recently extended to Employee Central
                Payroll, SAP’s cloud version of its award-winning payroll
                engine. This payroll solution is a sophisticated, powerful
                product with full tax compliance and approval for each country
                that it serves. It has comprehensive retroactive accounting
                functionality, in addition to sophisticated data validation
                functionality.
              </Card.Text>
              <ul className="borderless-list">
                <li>Full online reporting history</li>
                <li>
                  Complete automation of occupational absence schemes –
                  including off-setting of statutory payments
                </li>
                <li>Multiple employment scenarios are supported</li>
                <li>
                  Employee transfers across the organisation are supported
                  without the need to end the old employee number and use a new
                  employee number for payroll. The same employee number will be
                  used.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>Payroll Reporting</Card.Title>
              <Card.Text>
                SAP provides a powerful suite of reporting tools including, but
                not limited to, the following:
              </Card.Text>
              <ul className="borderless-list">
                <li>
                  Customer specific payroll exceptions reporting (for example of
                  significant value changes from one payroll period to the next)
                </li>
                <li>Payment/deduction analysis reporting</li>
                <li>
                  Automatic controlled updates via ‘XML’ from local tax
                  authorities (e.g. tax codes, student loans etc.)
                </li>
                <li>Seamless year-end reporting</li>
                <li>Real Time Information (RTI)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>Payslips</Card.Title>
              <Card.Text>
                The remuneration statement engine will be used to generate
                payslips from payroll results. These can be viewed online,
                printed, or both.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>Employee Central Payroll</Card.Title>
              <Card.Text>
                SAP Employee Central Payroll provides organisations with the
                opportunity to manage their payroll using SAP’s award-winning
                Payroll Engine, but with the flexibility of the cloud.
              </Card.Text>
              <ul className="borderless-list">
                <li>
                  Consolidated platform supporting all payroll types: hourly,
                  salaried, regular, or simulation runs
                </li>
                <li>Real-time financials integration</li>
                <li>Standard delivered tax reporting capabilities</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>SAP Differentiators</Card.Title>
              <ul className="borderless-list">
                <li>
                  Integrations: Real-time integrations with both HR and Finance
                  – one source of data
                </li>
                <li>
                  Scalability: Ability to efficiently manage payroll processes
                  for organisations of all sizes with a variety of payment
                  frequencies and Terms & Conditions
                </li>
                <li>
                  Compliance: Reduced manual intervention. Data Validation and
                  Audit Trail
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>Why Choose DHR Technology?</Card.Title>
              <Card.Text>
                We have used this expertise to create an Employee Central
                Payroll solution with pre-developed content based on best
                practices and powered by SAP’s award-winning Payroll Engine.
                Customers regain control of payroll processes quickly and
                easily, with a simple implementation cost, yearly subscription
                fee, and ongoing support.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SapPayroll;
