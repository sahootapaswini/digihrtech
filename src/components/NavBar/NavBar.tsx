import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";

interface LinkProps {
  label: string;
  path?: string;
  sublinks?: { label: string; path: string }[];
}

const links: LinkProps[] = [
  {
    label: "Solutions",
    sublinks: [
      { label: "Employee Central", path: "solutions/employee-central" },
      { label: "Payroll", path: "solutions/payroll" },
      { label: "Time Management", path: "solutions/time-management" },
      { label: "Recruiting", path: "solutions/recruiting" },
      { label: "Onboarding", path: "solutions/onboarding" },
      { label: "Performance and Goals", path: "solutions/performance-goals" },
      {
        label: "Succession and Development",
        path: "solutions/succession-development",
      },
      { label: "Learning", path: "solutions/learning" },
      { label: "Workforce Analytics", path: "solutions/workforce-analytics" },
      { label: "Compensation", path: "solutions/compensation" },
      { label: "Business AI for HR", path: "solutions/business-ai-hr" },
    ],
  },
  {
    label: "Services",
    sublinks: [
      {
        label: "SAP SuccessFactors Implementation",
        path: "/sap-successfactors",
      },
      {
        label: "SAP Payroll Cloud & On Premise Implementation",
        path: "/sap-payroll",
      },
      { label: "SAP ERP HCM/ Hybrid", path: "/sap-erp-hcm" },
      {
        label: "HR Process Implementation",
        path: "/hr-process-implementation",
      },
      {
        label: "HR Roadmap Transformation",
        path: "/hr-roadmap-transformation",
      },
      {
        label: "Solution Architecture Advisory",
        path: "/solution-architecture",
      },
      { label: "Change Management", path: "/change-management" },
      { label: "Test Management", path: "/test-management" },
      { label: "Integration Services", path: "/integration-services" },
      { label: "Application Support", path: "/application-support" },
      { label: "Data Migration", path: "/data-migration" },
      { label: "Training", path: "/training" },
      { label: "HR Scopping", path: "/hr-scopping" },
      {
        label: "SAP Talent Intelligence Hub",
        path: "/sap-talent-intelligence",
      },
    ],
  },
  {
    label: "Products",
    sublinks: [{ label: "Lift and Shift Tool", path: "/lift-and-shift" }],
  },
  { label: "About US", path: "/about-us" },
  {
    label: "Resources",
    sublinks: [
      { label: "Blogs", path: "/blogs" },
      { label: "News", path: "/news" },
      { label: "Events", path: "/events" },
    ],
  },
];

const NavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0.1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark p-4 ${
        scrolled ? "scrolled" : ""
      }`}>
      <div className="container">
        <Link className="navbar-brand" to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {links.map((link, index) => (
              <li
                key={index}
                className={`nav-item${link.sublinks ? " dropdown" : ""} mx-4`}
                onMouseEnter={() => link.sublinks && setActiveIndex(index)}
                onMouseLeave={() => link.sublinks && setActiveIndex(null)}>
                <Link
                  className={`nav-link${
                    link.sublinks ? " dropdown-toggle" : ""
                  }`}
                  to={link.path || "#"}
                  role="button"
                  aria-expanded={
                    link.sublinks
                      ? activeIndex === index
                        ? "true"
                        : "false"
                      : undefined
                  }>
                  {link.label}
                </Link>
                {link.sublinks && (
                  <div
                    className={`dropdown-menu${
                      activeIndex === index ? " show" : ""
                    }`}>
                    {link.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        className="dropdown-item"
                        to={sublink.path}>
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="nav-item mx-3">
              <Link className="btn btn-primary" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
