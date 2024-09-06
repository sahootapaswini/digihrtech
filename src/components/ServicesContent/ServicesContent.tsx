import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServicesContent.css";
import { BsCash } from "react-icons/bs";
import SapSuccessfactor from "./components/SapSuccessfactor/SapSuccessfactor";
import BreadcrumbsContainer from "../ReusableComponents/BreadCrumbs/BreadCrumbs";
import SapPayroll from "./components/SapPayroll/SapPayroll";
import SapTalentIntelligenceHub from "./components/SapTalentIntelligenceHub/SapTalentIntelligenceHub";
import ChangeManagement from "./components/ChangeManagement/ChangeManagement";
import TestManagement from "./components/TestManagement/TestManagement";
import SapIntegration from "./components/SapIntegration/SapIntegration";
import SAPSupportServices from "./components/SupportServices/SupportServices";
import SAPDataMigration from "./components/SAPDataMigration/SAPDataMigration";
import SAPTraining from "./components/SAPTraining/SAPTraining";
import HRProcessImplementation from "./components/HRProcessImplementation/HRProcessImplementation";

const links = [
  {
    label: "SAP SuccessFactors Implementation",
    path: "sap-successfactors",
    componentName: <SapSuccessfactor />,
  },
  {
    label: "SAP Payroll Cloud & On Premise Implementation",
    path: "sap-payroll",
    componentName: <SapPayroll />,
  },
  {
    label: "SAP ERP HCM/ Hybrid",
    path: "sap-erp-hcm",
  },
  {
    label: "HR Process Implementation",
    path: "hr-process-implementation",
    componentName: <HRProcessImplementation />,
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
    componentName: <ChangeManagement />,
  },
  {
    label: "Test Management",
    path: "test-management",
    componentName: <TestManagement />,
  },
  {
    label: "Integration Services",
    path: "integration-services",
    componentName: <SapIntegration />,
  },
  {
    label: "Application Support",
    path: "application-support",
    componentName: <SAPSupportServices />,
  },
  {
    label: "Data Migration",
    path: "data-migration",
    componentName: <SAPDataMigration />,
  },
  {
    label: "Training",
    path: "training",
    componentName: <SAPTraining />,
  },
  { label: "Health Check", path: "hr-scopping", icon: <BsCash /> },

  {
    label: "Talent Intelligence Hub",
    path: "sap-talent-intelligence",
    componentName: <SapTalentIntelligenceHub />,
  },
];

const ServicesContent = () => {
  return (
    <section className="services-list">
      <Container className="">
        <Row className="justify-content-center bt-orange main-content-top">
          <Col md={10} className="bcpage-section">
            <BreadcrumbsContainer />
            <h1 className="bg-orange text-white p-3">
              SAP SuccessFactors Implementation
            </h1>
            <p className="bg-lightgrey p-2">
              DHR Technology can help you quickly and easily implement a
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
