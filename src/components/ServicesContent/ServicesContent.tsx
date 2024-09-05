import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCash, BsClockFill, BsPeople } from "react-icons/bs"; // Import other icons if needed
import "./ServicesContent.module.css";
import SapSuccessfactor from "./components/SapSuccessfactor/SapSuccessfactor";

const links = [
  {
    icon: <BsPeople />,
    label: "SAP SuccessFactors Implementation",
    path: "sap-successfactors",
    componentName: <SapSuccessfactor />,
  },
  {
    icon: <BsCash />,
    label: "SAP Payroll Cloud & On Premise Implementation",
    path: "/sap-payroll",
  },
  { label: "SAP ERP HCM/ Hybrid", path: "/sap-erp-hcm", icon: <BsCash /> },
  {
    label: "HR Process Implementation",
    path: "/hr-process-implementation",
    icon: <BsCash />,
  },
  {
    label: "HR Roadmap Transformation",
    path: "/hr-roadmap-transformation",
    icon: <BsCash />,
  },
  {
    label: "Solution Architecture Advisory",
    path: "/solution-architecture",
    icon: <BsCash />,
  },
  {
    label: "Change Management",
    path: "/change-management",
    icon: <BsCash />,
  },
  { label: "Test Management", path: "/test-management", icon: <BsCash /> },
  {
    label: "Integration Services",
    path: "/integration-services",
    icon: <BsCash />,
  },
  {
    label: "Application Support",
    path: "/application-support",
    icon: <BsCash />,
  },
  { label: "Data Migration", path: "/data-migration", icon: <BsCash /> },
  { label: "Training", path: "/training", icon: <BsCash /> },
  { label: "HR Scopping", path: "/hr-scopping", icon: <BsCash /> },
  {
    label: "SAP Talent Intelligence Hub",
    path: "/sap-talent-intelligence",
    icon: <BsCash />,
  },
];

const ServicesContent = () => {
  return (
    <section className="solutions-list">
      <Container className="">
        <Row className="justify-content-left pt-5 bt-orange">
          <Col md={8}>
            <h1 className="bg-orange text-white p-3">
              SAP SuccessFactors Compensation
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
                <Link key={link.path} to={link.path} className="nav-link p-3">
                  <div className="row">
                    <div className="col-auto solutions-link-icon">
                      {link.icon}
                    </div>
                    <div className="col d-flex align-items-center">
                      {link.label}
                    </div>
                  </div>
                </Link>
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
