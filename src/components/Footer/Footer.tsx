import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer: React.FC = () => {
  // Data for the footer sections
  const implementationLinks = [
    { name: "SuccessFactors Implementation", url: "#" },
    { name: "Employee Central", url: "#" },
    { name: "Payroll", url: "#" },
    { name: "Time Management", url: "#" },
    { name: "Recruiting", url: "#" },
    { name: "Onboarding", url: "#" },
    { name: "Performance and Goals", url: "#" },
    { name: "Succession and Development", url: "#" },
    { name: "Learning", url: "#" },
    { name: "Workforce Analytics", url: "#" },
    { name: "Compensation", url: "#" },
  ];
  const hrprocessLinks = [
    { name: "HR Process Implementation ", url: "#" },
    { name: "Payroll", url: "#" },
    { name: "Workforce Management", url: "#" },
    { name: "Analytics, Insights & Engagement", url: "#" },
  ];
  const servicesLinks = [
    { name: "SAP SuccessFactors Implementation", url: "#" },
    { name: "HR Process Implementation", url: "#" },
    { name: "Change Management", url: "#" },
    { name: "Test Management", url: "#" },
    { name: "Integration Services", url: "#" },
    { name: "Support Services", url: "#" },
    { name: "Data Migration", url: "#" },
    { name: "Training", url: "#" },
    { name: "SAP Talent Intelligence Hub", url: "#" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/example",
      iconClass: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/example",
      iconClass: "fab fa-twitter",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/example",
      iconClass: "fab fa-facebook-f",
    },
  ];

  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-left bbwhite pt-5">
          {/* SAP SuccessFactors Implementation Section */}
          <div className="col-md-4 px-5">
            <h5>SAP SuccessFactors Implementation</h5>
            <p>
              With over 20 years of experience, we are the world leading experts
              in SuccessFactors implementation:
            </p>
            <div className="footer-links">
              <ul className="list-unstyled">
                {implementationLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h5>HR Processes</h5>
            <p>
              See how we help implement solutions for specific HR processes:
            </p>
            <div className="footer-links">
              <ul className="list-unstyled">
                {hrprocessLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h5>Services</h5>
            <p>
              Effective People deliver a range of services to supplement your
              SAP SuccessFactors solution:
            </p>
            <div className="footer-links">
              <ul className="list-unstyled">
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-4 px-5">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@example.com" className="text-white">
                  info@digihrtech.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white">
                  +971 (050) 750-6389
                </a>
              </li>
              <li>Corniche, Tower A, Abu Dhabi, UAE, 20054</li>
              <li>
                <a
                  href="https://maps.google.com/?q=Corniche,+Tower+A,+Abu+Dhabi,+UAE"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4"></div>
          <div className="col-md-4 px-5">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-left">
              {socialLinks.map((social, index) => (
                <li key={index} className="me-3">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white">
                    <i className={`${social.iconClass} fa-2x`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Copyright Section */}
        <div className="row">
          <div className="col-12 text-end mt-1">
            <p>&copy; 2024 Digital HR Technology. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
