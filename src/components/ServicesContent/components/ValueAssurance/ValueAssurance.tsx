import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./ValueAssurance.module.css";
const ValueAssurance: React.FC = () => {
  return (
    <div className="{styles.container}">
      <h1>Value Assurance</h1>
      <p>
        These Special Premium services, included in our premium engagement
        contracts, ensure a secure ERP implementation with proactive support
        from our team, who will work alongside your current SI to guide the
        deployment, review the design as well as solution and manage project
        risks.
      </p>
      <h2>Key Benefits </h2>
      <ul>
        <li>
          DHR Technology as a proactive team member, assisting to guide the
          deployment roadmap and helping to reduce project risks.
        </li>
        <li>
          We provide actionable recommendations that help accelerate the
          customer’s project
        </li>
        <li>
          We guide our customers and implemenation partners to establish clear
          governance, institute solid design, and promote best practices
        </li>
      </ul>
      <h2>Diffrent Services Offered </h2>
      <ul>
        <li>
          Mandatory Components: Design,Solution & Business Rediness Review
          <Row className="justify-content-center pb-3">
            <Col md={10} className="text-center">
              <Image
                src="/assets/images/vas-minimum-review.png"
                alt="Health Check Methodology"
                fluid
              />
            </Col>
          </Row>
        </li>
        <li>
          Add-ons SuccessFactors Value Assurance Services. Optionally you can
          select one or more of these 4 services.
          <Row className="justify-content-center pb-3">
            <Col md={10} className="text-center">
              <Image
                src="/assets/images/vas-addtional.png"
                alt="Health Check Methodology"
                fluid
              />
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
export default ValueAssurance;
