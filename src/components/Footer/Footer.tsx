import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import useScrollToTop from "../ReusableComponents/useScrollToTop";

const Footer: React.FC = () => {
  useScrollToTop();
  // Data for the footer sections
  const dthLinks = [
    { name: "About Us", url: "/about-us" },
    { name: "Current Opening", url: "#" },
    { name: "Blogs", url: "/blogs" },
    { name: "News", url: "/news" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Disclaimer", url: "/disclaimer" },
    { name: "Term Of Use", url: "/termsofuse" },
  ];
  const implementationLinks = [
    {
      name: "SuccessFactors Implementation",
      url: "/solutions/sap-successfactors",
    },
    { name: "S4 HANA/Employee Central Payroll", url: "/solutions/payroll" },
    { name: "S4 HANA HCM/Hybrid", url: "/services/sap-erp-hcm" },
    { name: "Reporting and Analytics", url: "/solutions/workforce-analytics" },
    { name: "Business AI For HR", url: "/solutions/business-ai-hr" },
  ];
  const servicesLink1 = [
    {
      name: "HR Business Process Implementation",
      url: "/services/hr-process-implementation",
    },
    {
      name: "HR Technology Roadmap Transformation",
      url: "/services/hr-roadmap-transformation",
    },
    {
      name: "Solution Architecture Advisory",
      url: "/services/solution-architecture",
    },
    { name: "Health Check", url: "health-check" },
    { name: "Support Services", url: "application-support" },
  ];
  const servicesLink2 = [
    { name: "Change Management", url: "/services/change-management" },
    { name: "Test Management", url: "/services/test-management" },
    { name: "Integration Services", url: "/services/integration-services" },
    { name: "Data Migration", url: "/services/data-migration" },
    { name: "Training", url: "/services/training" },
    {
      name: "Talent Intelligence Hub",
      url: "/services/sap-talent-intelligence",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/digital-hr-technology",
      iconClass: "fab fa-linkedin",
    },
    /*{
      name: "Twitter",
      url: "https://twitter.com/example",
      iconClass: "fab fa-twitter",
    },*/
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61565632024409",
      iconClass: "fab fa-facebook-f",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/971588278127",
      iconClass: "fab fa-whatsapp",
    },
  ];

  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-left bbwhite pt-5">
          <div className="col-md-2 px-5">
            <h5>Important Links</h5>
            <div className="footer-links">
              <ul className="list-unstyled">
                {dthLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} className="text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h5>Implementation Services</h5>
            <p>
              With over 20 years of experience, we are the world leading experts
              in SuccessFactors & Multi Country payroll implementation:
            </p>
            <div className="footer-links">
              <ul className="list-unstyled">
                {implementationLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} className="text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 px-5">
            <h5>Value Add Services</h5>
            <p>
              DHR Technology deliver a range of value add services to supplement
              your SAP SuccessFactors and payroll solution:
            </p>
            <div className="row">
              <div className="col">
                <div className="footer-links">
                  <ul className="list-unstyled">
                    {servicesLink1.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url} className="text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-links">
                  <ul className="list-unstyled">
                    {servicesLink2.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url} className="text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-4 px-5">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@example.com" className="text-white">
                  <i className="bi bi-envelope"></i>
                  info@digihrtech.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white">
                  <i className="fa fa-phone"></i>
                  <span className="mx-2">Phone:+971 588278127</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white">
                  <i className="fas fa-phone "></i>
                  <span className="mx-2"> Landline:+971 37821534</span>
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
        <div className="row px-5 py-3">
          <div className="col-md-4 px-2">
            <a
              href="https://maps.google.com/?q=Corniche,+Tower+A,+Abu+Dhabi,+UAE"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="img-fluid"
                src="/assets/images/locations/footer-3.jpeg"
                alt=""
              />
            </a>
            <div className="row">
              <div className="col-lg-6 col-md-10">
                Corniche Tower A, Al Bateen,Abu Dhabi, UAE, 20028
              </div>
            </div>
          </div>
          <div className="col-md-4 px-2">
            <a
              href="https://maps.google.com/?q=Corniche,+Tower+A,+Abu+Dhabi,+UAE"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="img-fluid"
                src="/assets/images/locations/footer-4.jpeg"
                alt=""
              />
            </a>
            <div className="row">
              <div className="col-lg-6 col-md-10">
                Corniche Tower A, Al Bateen,Abu Dhabi, UAE, 20028
              </div>
            </div>
          </div>
          <div className="col-md-4 px-2">
            <a
              href="https://maps.google.com/?q=Corniche,+Tower+A,+Abu+Dhabi,+UAE"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="img-fluid"
                src="/assets/images/locations/footer-5.jpeg"
                alt=""
              />
            </a>
            <div className="row">
              <div className="col-lg-6 col-md-10 ">
                Corniche Tower A, Al Bateen,Abu Dhabi, UAE, 20028
              </div>
            </div>
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
