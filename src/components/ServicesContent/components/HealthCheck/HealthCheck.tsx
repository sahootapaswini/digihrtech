import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import useScrollToTop from '../../../ReusableComponents/useScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './HealthCheck.module.css';

const HealthCheck: React.FC = () => {
  useScrollToTop();

  return (
    <Container className={styles.container}>
      <h1>Health Check</h1>
      <p>
        Assist organizations in consistently achieving value and improvement from its SuccessFactors Investment.
        Conduct HR process assessment to maximize SuccessFactors solution investment and initiate solution adoption for 
        all HR functions.
      </p>

      <h2>Benefits of Health Check</h2>
      <ul>
        <li>
          Provide an overall health check which can be used to pinpoint areas for a more detailed analysis and action plan.
        </li>
        <li>
          Provide tactical recommendations that Licensee can implement without the need for a more detailed analysis – the “low hanging fruits”.
        </li>
        <li>
          Discuss findings, best practices and recommendations from the assessment to define a go-forward approach.
        </li>
        <li>
          A roadmap for the upgrade.
        </li>
        <li>
          Use of SF standard functionality in place of the customized reports.
        </li>
        <li>
          Alignment with SuccessFactors future roadmap strategy.
        </li>
      </ul>

      <h2>Our Methodology & Approach</h2>
      <Row className="justify-content-center pb-3">
        <Col md={10} className="text-center">
          <Image src="/assets/images/health-check.png" alt="Health Check Methodology" fluid />
        </Col>
      </Row>

      <h2>Why DHR Technology</h2>
      <ul>
        <li>
          Offer leading practices for implementing SuccessFactors.
        </li>
        <li>
          Provide tightly integrated and comprehensive services.
        </li>
        <li>
          Provide Future Roadmap with action plans (Quick-Wins, Short-term, Mid-term & Long-term).
        </li>
      </ul>
    </Container>
  );
};

export default HealthCheck;
