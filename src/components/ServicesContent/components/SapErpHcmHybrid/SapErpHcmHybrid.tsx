import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SapErpHcmHybrid.css"; // Import your custom CSS file

const SapErpHcmHybrid = () => {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h1>SAP ERP HCM / Hybrid</h1>
          <p>
            Whilst many organisations are switching to cloud based technologies
            such as SAP SuccessFactors, some organisations are either unable to
            move to cloud or want to maximise their investment in their ‘on
            premise’ solutions before moving to cloud solutions.
          </p>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>SAP ERP™ HCM</Card.Title>
              <Card.Text>
                SAP still provides a powerful suite of ‘on premise’ HR and
                Payroll solutions to meet customer’s needs, with an enhanced
                user experience (with HR Renewal, for example) to ensure that
                these organisations can continue to reap the benefits of this
                solution.
              </Card.Text>
              <Card.Text>
                DHR Technology and SAP’s relationship extends over 20 years and
                this combined experience and commitment to global HR and Payroll
                rollouts brings significant benefits. DHR Technology has an
                experienced team of SAP trained and certified professionals,
                with an average of over 12 years SAP experience, who are able to
                quickly understand what needs to be done and deliver value early
                in the implementation.
              </Card.Text>
              <Card.Text>
                DHR Technology has focused its SAP HCM practice around the
                following service lines:
              </Card.Text>
              <ul className="borderless-list">
                <li>Human Capital Management and Payroll</li>
                <li>
                  ‘Fast start’ HR & Self Services (accredited Rapid Deployment
                  Solution)
                </li>
                <li>
                  Business execution (aligning business goals to people goals
                  and executing these through ‘best of breed’ Talent Management
                  solutions)
                </li>
                <li>Mobile Applications</li>
                <li>A full range of SAP HCM products</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>Time Management</Card.Title>
              <Card.Text>
                Time Management enables organisations to effectively and
                efficiently plan, record and maintain all aspects of their time
                data – from the input of timesheets (where appropriate) to the
                management of holidays, maternity/paternity/adoption leave and
                sickness absence.
              </Card.Text>
              <Card.Text>
                It offers support in performing all human resources processes
                involving the planning, recording, and valuation of internal and
                external employees’ work performed and absence times. It also
                provides other SAP applications with planning data and delivers
                information to business processes such as:
              </Card.Text>
              <ul className="borderless-list mb-3">
                <li>Determining personnel costs</li>
                <li>Creating invoices</li>
                <li>Confirmations</li>
                <li>Service entry of external employees</li>
              </ul>
              <Card.Text>
                SAP Time Management has user-oriented interfaces that support
                centralised and decentralised entry and administration of time
                and labour data. Data can be processed centrally by
                administrators in the human resources department or in
                individual departments by dedicated time administrators,
                including employees themselves.
              </Card.Text>
              <Card.Text>
                SAP Time Management enables organisations to record time and
                labour data online or by using self-service applications. These
                self-service applications range from the classic time recording
                subsystem, web applications and mobile business applications.
                Employees can use these applications to request leave, record
                working times for orders or projects, for example, and display
                their key time accounts.
              </Card.Text>
              <Card.Text>
                Time Management permits organisations to represent all company
                agreements, collective agreement stipulations, and legal
                requirements the world over.
              </Card.Text>
              <Card.Text>
                DHR Technology has implemented Time Management to some of the
                world’s largest organisations and we pride ourselves in our
                ability to support all types of deployment – from the simple and
                most straight forward, to the most complex requiring interfaces
                to external 3rd party solutions and sophisticated shift planning
                and integrations to SAP Payroll.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="borderless-card">
            <Card.Body>
              <Card.Title>HCM SAP as HYBRID</Card.Title>
              <Card.Text>
                Where organisations are not able to move directly to a cloud
                solution for their HR and/or payroll data, it is still possible
                (and even likely) that they will want to utilise the latest
                cloud-based technologies to attract, engage and retain
                employees. As such, a popular option is to use SAP ERP HCM (HR &
                Payroll) ‘on premise’ and integrate them with the SAP
                SuccessFactors cloud talent suite.
              </Card.Text>
              <Card.Text>
                DHR Technology has the knowledge and expertise in both SAP HCM
                and SuccessFactors to deploy such a ‘hybrid’ environment quickly
                and efficiently.
              </Card.Text>
              <Card.Text>
                Based on this experience we have found that this method provides
                the following benefits:
              </Card.Text>
              <ul className="borderless-list">
                <li>
                  All ‘sensitive’ employee and organisational data is held
                  behind the organisation’s own firewalls – the organisation is
                  responsible for data security and maintenance.
                </li>
                <li>Cloud talent solutions can be deployed and be used for:</li>
                <ul className="borderless-list">
                  <li>Ease of implementation and maintenance</li>
                  <li>Ease of upgrading</li>
                  <li>Agile set-up</li>
                  <li>
                    Improved employee engagement, satisfaction and retention
                  </li>
                  <li>To improve overall ‘employer branding’</li>
                </ul>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col md={4}>
          <img
            className="img-fluid"
            src="/assets/images/s4hana-hcmhybrid.jpg"
            alt="S4 Hana Hybrid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SapErpHcmHybrid;
