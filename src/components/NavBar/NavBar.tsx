import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  BsBarChart,
  BsBook,
  BsBriefcase,
  BsCash,
  BsChatDots,
  BsCheckCircle,
  BsClipboard,
  BsClock,
  BsCpu,
  BsGear,
  BsGraphUp,
  BsLightbulb,
  BsPeople,
  BsPersonCheck,
  BsPieChart,
  BsSearch,
} from "react-icons/bs";

interface SubLink {
  label: string;
  path: string;
  icon: React.ReactNode; // Using React.ReactNode for icon to support various types of icons
  sublinks?: SubLink[]; // Array of sublinks if needed
}

interface LinkProps {
  label: string;
  link: string;
  path?: string;
  sublinks?: SubLink[]; // Array of sublinks if needed
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
        label: "Reporting And Analytics",
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
        icon: <BsCpu />,
      },
    ],
  },
  {
    label: "Services",
    link: "/services",
    sublinks: [
      {
        label: "SAP HXM Implementation",
        path: "services/sap-hxm-implementation",
        icon: <BsGear />,
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
            label: "Integration Services",
            path: "services/integration-services",
            icon: "",
          },
          {
            label: "Data Migration",
            path: "services/data-migration",
            icon: "",
          },
          {
            label: "Talent Intelligence Hub",
            path: "services/sap-talent-intelligence",
            icon: "",
          },
        ],
      },
      {
        label: "Consulting",
        path: "services/consulting",
        icon: <BsBriefcase />,
        sublinks: [
          {
            label: "HR Process Design",
            path: "services/hr-process-implementation",
            icon: "",
          },
          {
            label: "HR Tech Roadmap Transformation",
            path: "services/hr-roadmap-transformation",
            icon: "",
          },
          {
            label: "Change Management",
            path: "services/change-management",
            icon: "",
          },
          {
            label: "Test Management",
            path: "services/test-management",
            icon: "",
          },
          { label: "Health Check", path: "services/health-check", icon: "" },
        ],
      },
      {
        label: "Training",
        path: "services/training",
        icon: <BsBook />,
      },
      {
        label: "Staff Augmentation",
        path: "services/staff-augmentation",
        icon: <BsPeople />,
      },
      {
        label: "Value Assurance Services",
        path: "services/value-assurance",
        icon: <BsCheckCircle />,
        sublinks: [
          {
            label: "Design Review",
            path: "services/design-review",
            icon: "",
          },
          {
            label: "Solution Review",
            path: "services/solution-architecture",
            icon: "",
          },
          {
            label: "Business Readyness Review",
            path: "services/business-readyness",
            icon: "",
          },
          {
            label: "Cloud Planning Workshop",
            path: "services/cloud-planning",
            icon: "",
          },
          {
            label: "Preparation & Governance",
            path: "services/preparation-governance",
            icon: "",
          },
          {
            label: "Solution & Integration  Architecture Services ",
            path: "services/preparation-governance",
            icon: "",
          },
          {
            label: "Subject Matter Expertise Advice & Guidance",
            path: "services/preparation-governance",
            icon: "",
          },
        ],
      },
      {
        label: "Support Services",
        path: "services/support-services",
        icon: <BsChatDots />,
        sublinks: [
          {
            label: "Application Management Support(AMS)",
            path: "services/application-support",
            icon: "",
          },
          {
            label: "Payroll Support",
            path: "services/payroll-support",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    label: "Products",
    link: "/products",
    sublinks: [
      {
        label: "DHR Easy Move",
        path: "/dhr-easy-move",
        icon: "",
      },
    ],
  },
  /*This code is commented because Tools are going to be available only for admin in future .*/
  /*{
    label: "Tools",
    link: "/tools",
    sublinks: [
      {
        label: "DHR Estimator Implementation",
        path: "/dhr-estimator-implementation",
        icon: "",
      },
      {
        label: "DHR Estimator Services",
        path: "/dhr-estimator-services",
        icon: "",
      },
      {
        label: "DHR Estimator AMS",
        path: "/dhr-estimator-ams",
        icon: "",
      },
    ],
  },*/
  { label: "About US", link: "/about-us", path: "/about-us" },
  {
    label: "Resources",
    link: "/Services",
    sublinks: [
      { label: "Blogs", path: "/blogs", icon: "" },
      { label: "How We Deliver", path: "/how-we-deliver", icon: "" },
      /*{ label: "News", path: "/news", icon: "" },
      { label: "Events", path: "/events", icon: "" },*/
    ],
  },
];

const NavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeNestedIndex, setActiveNestedIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };
  const handleNestedClick = (index: number) => {
    setActiveNestedIndex(activeNestedIndex === index ? null : index);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark p-md-2   `}>
      <div className="container">
        <div className="nav-bar-container">
          <Link className="navbar-brand" to="/"></Link>
        </div>

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
                onClick={() => link.sublinks && handleClick(index)}>
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
                        className="dropdown-item nested-nav2"
                        to={sublink.path}>
                        {sublink.icon && (
                          <span className="sub-icon-orange px-2">
                            {sublink.icon}
                          </span>
                        )}
                        <span className="align-items-center  ">
                          {sublink.label}
                        </span>
                        {sublink.sublinks && (
                          <div
                            className={`dropdown-menu nested-dropdown${
                              activeIndex === index ? " show" : ""
                            }`}>
                            {sublink.sublinks.map((sublink, subIndex) => (
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
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="nav-item contact-us-link">
              <Link className="nav-link mx-2" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-3 contact-us-button">
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
