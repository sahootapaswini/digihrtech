import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface LinkProps {
  name: string;
  path?: string; // Add a path property for routing
  sublinks?: { name: string; path: string }[]; // Update sublinks to include path
}

const links: LinkProps[] = [
  {
    name: "Solutions",
    sublinks: [
      { name: "Employee Central", path: "/employee-central" },
      { name: "Payroll", path: "/payroll" },
      { name: "Time Management", path: "/time-management" },
      { name: "Recruiting", path: "/recruiting" },
      { name: "Onboarding", path: "/onboarding" },
      { name: "Performance and Goals", path: "/performance-goals" },
      { name: "Succession and Development", path: "/succession-development" },
      { name: "Learning", path: "/learning" },
      { name: "Workforce Analytics", path: "/workforce-analytics" },
      { name: "Compensation", path: "/compensation" },
      { name: "Business AI for HR", path: "/business-ai-hr" },
    ],
  },
  {
    name: "Services",
    sublinks: [
      {
        name: "SAP SuccessFactors Implementation",
        path: "/sap-successfactors",
      },
      {
        name: "SAP Payroll Cloud & On Premise Implementation",
        path: "/sap-payroll",
      },
      { name: "SAP ERP HCM/ Hybrid", path: "/sap-erp-hcm" },
      { name: "HR Process Implementation", path: "/hr-process-implementation" },
      { name: "HR Roadmap Transformation", path: "/hr-roadmap-transformation" },
      {
        name: "Solution Architecture Advisory",
        path: "/solution-architecture",
      },
      { name: "Change Management", path: "/change-management" },
      { name: "Test Management", path: "/test-management" },
      { name: "Integration Services", path: "/integration-services" },
      { name: "Application Support", path: "/application-support" },
      { name: "Data Migration", path: "/data-migration" },
      { name: "Training", path: "/training" },
      { name: "HR Scopping", path: "/hr-scopping" },
      { name: "SAP Talent Intelligence Hub", path: "/sap-talent-intelligence" },
    ],
  },
  {
    name: "Products",
    sublinks: [{ name: "Lift and Shift Tool", path: "/lift-and-shift" }],
  },
  { name: "About US", path: "/about-us" },
  {
    name: "Resources",
    sublinks: [
      { name: "Blogs", path: "/blogs" },
      { name: "News", path: "/news" },
      { name: "Events", path: "/events" },
    ],
  },
  { name: "Contact Us", path: "/contact-us" },
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

    // Clean up the event listener on component unmount
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
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {links.slice(0, -1).map((link, index) => (
              <li
                key={index}
                className="nav-item dropdown mx-4"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}>
                <Link
                  className="nav-link dropdown-toggle"
                  to={link.path || "#"}
                  role="button"
                  aria-expanded={activeIndex === index ? "true" : "false"}>
                  {link.name}
                </Link>
                <div
                  className={`dropdown-menu${
                    activeIndex === index ? " show" : ""
                  }`}>
                  {link.sublinks?.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      className="dropdown-item"
                      to={sublink.path}>
                      {sublink.name}
                    </Link>
                  ))}
                </div>
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
