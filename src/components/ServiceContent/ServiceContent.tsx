import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsClockFill,
  BsFillPeopleFill,
  BsFillCalendarFill,
  BsWallet,
  BsCash,
  BsSearch,
  BsClipboard,
  BsBarChart,
  BsGraphUp,
  BsLightbulb,
  BsPieChart,
  BsCurrencyDollar,
} from "react-icons/bs"; // Import other icons if needed
import "./ServiceContent.css";
import EmployeeCentral from "./components/EmployeeCentral/EmployeeCentral";
import Payroll from "./components/Payroll/Payroll";
import TimeManagement from "./components/TimeManagement/TimeManagement";
import Recruiting from "./components/Recruiting/Recruiting";
import Onboarding from "./components/Onboarding/Onboarding";
import PerformanceGoals from "./components/PerformanceGoals/PerformanceGoals";
import SuccessionDevelopment from "./components/SuccessionDevelopment/SuccessionDevelopment";
import Learning from "./components/Learning/Learning";
import WorkforceAnalytics from "./components/WorkforceAnalytics/WorkforceAnalytics";
import Compensation from "./components/Compensation/Compensation";
import BusinessAIForHR from "./components/BusinessAIForHR/BusinessAIForHR";
import { IconBase } from "react-icons";

const links = [
  {
    icon: <BsFillPeopleFill />,
    label: "Employee Central",
    path: "solutions/employee-central",
    componentName: <EmployeeCentral />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Payroll",
    path: "payroll",
    componentName: <Payroll />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Time Management",
    path: "time-management",
    componentName: <TimeManagement />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Recruiting",
    path: "recruiting",
    componentName: <Recruiting />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Onboarding",
    path: "onboarding",
    componentName: <Onboarding />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Performance and Goals",
    path: "performance-goals",
    componentName: <PerformanceGoals />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Succession and Development",
    path: "succession-development",
    componentName: <SuccessionDevelopment />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Learning",
    path: "learning",
    componentName: <Learning />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Workforce Analytics",
    path: "workforce-analytics",
    componentName: <WorkforceAnalytics />,
  },
  {
    icon: <BsCash />,
    label: "Compensation",
    path: "compensation",
    componentName: <Compensation />,
  },
  {
    icon: <BsFillPeopleFill />,
    label: "Business AI for HR",
    path: "business-ai-hr",
    componentName: <BusinessAIForHR />,
  },
];

const ServiceContent = () => {
  return (
    <section className="solutions-list">
      <Container>
        <Row className="solutions">
          <Col xs={12} md={3} className="nav-container">
            <div className="nav-wrapper">
              {links.map((link) => (
                <Link key={link.path} to={link.path} className="nav-link">
                  <div className="row">
                    <div className="col-auto">{link.icon}</div>
                    <div className="col">{link.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Col>
          {/* Right Column for Content */}
          <Col xs={12} md={9} className="content-container">
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

export default ServiceContent;
