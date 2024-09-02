import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ServiceContent.css";
import EmployeeCentral from "./EmployeeCentral/EmployeeCentral";
import Payroll from "./Payroll/Payroll";
import SapSuccessFactor from "./SapSuccessFactor/SapSuccessFactor";

const ServiceContent = () => {
  return (
    <section className="solutions-list">
      <Container>
        <Row className="solutions">
          <Col xs={12} className="nav-container">
            <div className="nav-wrapper">
              <Link to="/" className="nav-link">
                Employee Central
              </Link>
              <Link to="/payroll" className="nav-link">
                Payroll
              </Link>
              <Link to="/successfactor" className="nav-link">
                Success Factor
              </Link>
            </div>
          </Col>
          <Col xs={12} className="content-container">
            <Routes>
              <Route path="/" element={<EmployeeCentral />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/successfactor" element={<SapSuccessFactor />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceContent;
