import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const Payroll = () => {
  useScrollToTop();
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <p>
            SAP SuccessFactors EC Payroll is a combination of proven
            technologies, latest innovations, and service delivery in a single
            solution that represents the next generation of global payroll
            process automation. This market-leading solution offers a proven
            global payroll engine that seamlessly integrates with a leading
            next-generation core HR system, so you can be assured that your
            cloud-based payroll will be safe, fast, and reliable.
          </p>
          <p>
            Based on SAP’s 30+ years of market-leading payroll practices, SAP
            SuccessFactors EC Payroll is fully integrated into SuccessFactors’
            core HR module, Employee Central, serving more than 100 million
            people globally. All employee master data is stored in one place,
            which ensures compliance, better data quality, increased governance,
            and a reduction of cost and effort in maintenance.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>The Payroll Control Centre (PCC)</Card.Title>
              <Card.Text>
                The Payroll Control Centre caters for the trend of moving away
                from batch-style processing to a continuous payroll process with
                real-time payroll monitoring. Gone are the days when payroll
                administrators had to spend considerable time digging through
                countless error logs, spools, reports, and check tools or
                creating spreadsheet lookups to find payroll-related errors.
                <br />
                <br />
                The Payroll Control Centre pushes any errors to payroll managers
                in real time. The managers can, in turn, assign these errors to
                payroll administrators in a flexible way, using default rules or
                the new team tool that enables payroll team members to select
                any errors in the payroll error queue for resolution.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Key Features: SuccessFactors EC Payroll</h2>
          <ul>
            <li>
              Localized payroll functionality to run in-house payrolls in 49
              countries.
            </li>
            <li>
              Fully integrable with the SAP SuccessFactors Employee Central core
              HR, time management, and global benefits processes.
            </li>
            <li>
              Off-cycle support, retroactive payments, and payroll processing
              for concurrent employment.
            </li>
            <li>
              Fully GDPR compliant so companies can manage and automate master
              data privacy and retention policies to maintain compliance with
              regional, federal, and local rules.
            </li>
            <li>
              Offers global payroll consolidation, with local support for 49
              countries with local tax regulations, including tax reporting.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>Business Impact: SAP Core HR and Payroll</h2>
          <ul>
            <li>
              A safe, fast, and accurate payroll system, leveraging the proven
              SAP payroll engine.
            </li>
            <li>
              Automates and accelerates processing, reduces risk, and simplifies
              payroll management.
            </li>
            <li>
              Continual enhancements by innovative technologies (Payroll Control
              Centre) to make payroll professionals more responsive to business
              needs.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Payroll;
