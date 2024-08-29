import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

interface Link {
  name: string;
  sublinks: string[];
}

const topLinks: string[] = ["About Us", "Careers", "Partners"];

const links: Link[] = [
  {
    name: "SAP SuccessFactors",
    sublinks: [
      "SAP SuccessFactors Implementation",
      "Employee Central",
      "Payroll",
      "Time Management",
      "Recruiting",
      "Onboarding",
      "Performance and Goals",
      "Succession and Development",
      "Learning",
      "Workforce Analytics",
      "Compensation",
    ],
  },
  {
    name: "Services",
    sublinks: [
      "SAP SuccessFactors Implementation",
      "HR Process Implementation",
      "Change Management",
      "Test Management",
      "Integration Services",
      "Support",
      "Data Migration",
      "Training",
      "SAP Talent Intelligence Hub",
    ],
  },

  { name: "Products", sublinks: ["Lift and Shift Tool"] },
  { name: "Contact Us", sublinks: [] }, // Contact Us will be handled separately
];

const NavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Top Links Row */}
      <div className="bg-light py-2">
        <div className="container">
          <div className="d-flex justify-content-end">
            {topLinks.map((link, index) => (
              <a key={index} className="text-dark mx-2" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark px-5">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {links.slice(0, -1).map(
              (
                link,
                index // Exclude Contact Us from dropdown links
              ) => (
                <li
                  key={index}
                  className="nav-item dropdown mx-4"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded={activeIndex === index ? "true" : "false"}>
                    {link.name}
                  </a>
                  <div
                    className={`dropdown-menu${
                      activeIndex === index ? " show" : ""
                    }`}>
                    {link.sublinks.map((sublink, subIndex) => (
                      <a key={subIndex} className="dropdown-item" href="#">
                        {sublink}
                      </a>
                    ))}
                  </div>
                </li>
              )
            )}
            <li className="nav-item mx-3">
              <a className="btn btn-light text-dark" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
