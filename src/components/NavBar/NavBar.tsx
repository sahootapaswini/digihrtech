import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  BsBarChart,
  BsCash,
  BsClipboard,
  BsClock,
  BsGraphUp,
  BsLightbulb,
  BsPeople,
  BsPieChart,
  BsSearch,
} from "react-icons/bs";

interface LinkProps {
  label: string;
  link: string;
  path?: string;
  sublinks?: { label: string; path: string; icon: any }[];
}

const links: LinkProps[] = [
  {
    label: "Solutions",
    link: "/solutions",
    sublinks: [
      {
        label: "Employee Central",
        path: "solutions/employee-central",
        icon: <BsPeople />,
      },
      { label: "Payroll", path: "solutions/payroll", icon: <BsCash /> },
      {
        label: "Time Management",
        path: "solutions/time-management",
        icon: <BsClock />,
      },
      { label: "Recruiting", path: "solutions/recruiting", icon: <BsSearch /> },
      {
        label: "Onboarding",
        path: "solutions/onboarding",
        icon: <BsClipboard />,
      },
      {
        label: "Performance and Goals",
        path: "solutions/performance-goals",
        icon: <BsBarChart />,
      },
      {
        label: "Succession and Development",
        path: "solutions/succession-development",
        icon: <BsGraphUp />,
      },
      { label: "Learning", path: "solutions/learning", icon: <BsLightbulb /> },
      {
        label: "Workforce Analytics",
        path: "solutions/workforce-analytics",
        icon: <BsPieChart />,
      },
      {
        label: "Compensation",
        path: "solutions/compensation",
        icon: <BsCash />,
      },
      {
        label: "Business AI for HR",
        path: "solutions/business-ai-hr",
        icon: <BsCash />,
      },
    ],
  },
  {
    label: "Services",
    link: "/services",
    sublinks: [
      {
        label: "SAP SuccessFactors Implementation",
        path: "services/sap-successfactors",
        icon: "",
      },
      {
        label: "SAP Payroll Cloud & On Premise Implementation",
        path: "services/sap-payroll",
        icon: "",
      },
      {
        label: "SAP ERP HCM/ Hybrid",
        path: "services/sap-erp-hcm",
        icon: "",
      },
      {
        label: "HR Process Implementation",
        path: "services/hr-process-implementation",
        icon: "",
      },
      {
        label: "HR Roadmap Transformation",
        path: "services/hr-roadmap-transformation",
        icon: "",
      },
      {
        label: "Solution Architecture Advisory",
        path: "services/solution-architecture",
        icon: "",
      },
      {
        label: "Change Management",
        path: "services/change-management",
        icon: "",
      },
      { label: "Test Management", path: "services/test-management", icon: "" },
      {
        label: "Integration Services",
        path: "services/integration-services",
        icon: "",
      },
      {
        label: "Application Support",
        path: "services/application-support",
        icon: "",
      },
      {
        label: "Data Migration",
        path: "services/data-migration",
        icon: "",
      },
      { label: "Training", path: "services/training", icon: "" },
      { label: "HR Scopping", path: "services/hr-scopping", icon: "" },
      {
        label: "SAP Talent Intelligence Hub",
        path: "services/sap-talent-intelligence",
        icon: "",
      },
    ],
  },
  {
    label: "Products",
    link: "/products",
    sublinks: [
      {
        label: "Lift and Shift Tool",
        path: "/lift-and-shift",
        icon: " ",
      },
    ],
  },
  { label: "About US", link: "/about-us", path: "/about-us" },
  {
    label: "Resources",
    link: "/Services",
    sublinks: [
      { label: "Blogs", path: "/blogs", icon: "" },
      { label: "News", path: "/news", icon: "" },
      { label: "Events", path: "/events", icon: "" },
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
                className={`nav-item${link.sublinks ? " dropdown" : ""} mx-2`}
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
                        {sublink.icon && (
                          <span className="sub-icon-orange px-2">
                            {sublink.icon}
                          </span>
                        )}
                        <span className="align-items-center  ">
                          {sublink.label}
                        </span>
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
