import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading provider of HR solutions and SAP SuccessFactors
              implementation services. Our expert team helps organizations
              streamline their HR processes and achieve their business goals.
            </p>
          </div>
          <div className="col-md-4">
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
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="me-3">
                <a
                  href="https://www.linkedin.com/company/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>
              &copy; {new Date().getFullYear()} Digital HR Technology. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
