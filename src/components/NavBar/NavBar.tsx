import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

interface Link {
  name: string;
  sublinks: string[];
}

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
  { name: "Blogs", sublinks: ["Blog1", "Blog2", "Blog3"] },
  { name: "Contact Us", sublinks: [] },
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
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark p-4 ${
          scrolled ? " scrolled" : ""
        }`}>
        <div className="container">
          <a className="navbar-brand" href="#"></a>
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
                <a className="btn btn-primary" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
