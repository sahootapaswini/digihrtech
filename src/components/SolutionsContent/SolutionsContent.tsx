import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFillPeopleFill,
  BsCash,
  BsSearch,
  BsClipboard,
  BsBarChart,
  BsGraphUp,
  BsLightbulb,
  BsPieChart,
  BsPeople,
  BsClock,
} from "react-icons/bs"; // Import other icons if needed
import "./SolutionsContent.css";
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
import BreadcrumbsContainer from "../ReusableComponents/BreadCrumbs/BreadCrumbs";
import useScrollToTop from "../ReusableComponents/useScrollToTop";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const links = [
  {
    icon: <BsPeople />,
    label: "Employee Central",
    path: "employee-central",
    componentName: <EmployeeCentral />,
  },
  {
    icon: <BsCash />,
    label: "Payroll",
    path: "payroll",
    componentName: <Payroll />,
  },
  {
    icon: <BsClock />,
    label: "Time Management",
    path: "time-management",
    componentName: <TimeManagement />,
  },
  {
    icon: <BsSearch />,
    label: "Recruiting",
    path: "recruiting",
    componentName: <Recruiting />,
  },
  {
    icon: <BsClipboard />,
    label: "Onboarding",
    path: "onboarding",
    componentName: <Onboarding />,
  },
  {
    icon: <BsBarChart />,
    label: "Performance and Goals",
    path: "performance-goals",
    componentName: <PerformanceGoals />,
  },
  {
    icon: <BsGraphUp />,
    label: "Succession and Development",
    path: "succession-development",
    componentName: <SuccessionDevelopment />,
  },
  {
    icon: <BsLightbulb />,
    label: "Learning",
    path: "learning",
    componentName: <Learning />,
  },
  {
    icon: <BsPieChart />,
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

const SolutionsContent = () => {
  useScrollToTop(); // Call the hook to enable scrolling to top
  // Determine the current path and corresponding breadcrumb item
  const currentPath = location.pathname.split("/").pop();
  const currentLink = links.find((link) => link.path === currentPath);

  return (
    <section className="solutions-list">
      <Container className="">
        <Row className="justify-content-center bt-teal main-content-top">
          <Col md={10} className="bcpage-section">
            <BreadcrumbsContainer />
            <h1 className="bg-teal text-white p-3">
              <span className="mx-2">Success Factor</span>
              {currentLink ? currentLink.label : ""}
            </h1>
            <p className="bg-lightgrey p-2">
              DHR Technology can help you quickly and easily implement a
              powerful pay-for-performance strategy.
            </p>
          </Col>
        </Row>
        <Row className="solutions">
          <Col xs={12} md={3} className="nav-container pt-2 px-0">
            <div className="nav-wrapper row">
              {links.map((link) => (
                <div className="col-6 col-md-12">
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link p-3 active" : "nav-link p-3"
                    }>
                    <div className="row">
                      <div className="col-sm-12 col-md-auto solutions-link-icon">
                        {link.icon}
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex align-items-center">
                        {link.label}
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </Col>
          {/* Right Column for Content */}
          <Col xs={12} md={9} className="content-container py-3 px-md-4">
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

export default SolutionsContent;
