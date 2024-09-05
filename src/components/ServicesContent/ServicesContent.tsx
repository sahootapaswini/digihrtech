import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCash, BsClockFill, BsPeople } from "react-icons/bs"; // Import other icons if needed
import "./ServicesContent.module.css";
import SapSuccessfactor from "./components/SapSuccessfactor/SapSuccessfactor";
import BreadcrumbsContainer from "../ReusableComponents/BreadCrumbs";

const links = [
  {
    label: "SAP SuccessFactors Implementation",
    path: "sap-successfactors",
    componentName: <SapSuccessfactor />,
  },
  {
    label: "SAP Payroll Cloud & On Premise Implementation",
    path: "sap-payroll",
  },
  {
    label: "SAP ERP HCM/ Hybrid",
    path: "sap-erp-hcm",
  },
  {
    label: "HR Process Implementation",
    path: "hr-process-implementation",
  },
  {
    label: "HR Roadmap Transformation",
    path: "hr-roadmap-transformation",
  },
  {
    label: "Solution Architecture Advisory",
    path: "solution-architecture",
  },
  {
    label: "Change Management",
    path: "change-management",
  },
  {
    label: "Test Management",
    path: "test-management",
  },
  {
    label: "Integration Services",
    path: "integration-services",
  },
  {
    label: "Application Support",
    path: "application-support",
  },
  {
    label: "Data Migration",
    path: "data-migration",
  },
  { label: "Training", path: "training", icon: <BsCash /> },
  { label: "HR Scopping", path: "hr-scopping", icon: <BsCash /> },
  {
    label: "SAP Talent Intelligence Hub",
    path: "sap-talent-intelligence",
  },
];

const ServicesContent = () => {
  return (
    <section className="services-list">
      <Container className="">
        <Row className="justify-content-left pt-5 bt-orange">
          <Col md={8} className="p-0">
            <BreadcrumbsContainer />
            <h1 className="bg-orange text-white p-3">
              SAP SuccessFactors Implementation
            </h1>
            <p className="bg-lightgrey p-2">
              Effective People can help you quickly and easily implement a
              powerful pay-for-performance strategy.
            </p>
          </Col>
        </Row>
        <Row className="solutions">
          <Col xs={12} md={3} className="nav-container pt-2 px-0">
            <div className="nav-wrapper">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link p-3 active" : "nav-link p-3"
                  }>
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      {link.label}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </Col>
          {/* Right Column for Content */}
          <Col xs={12} md={9} className="content-container py-3 px-4">
            <Routes>
              {links.map((link) => (
                <Route
                  key={link.path}
                  path={`/${link.path}`}
                  element={link.componentName}
                />
              ))}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesContent;
