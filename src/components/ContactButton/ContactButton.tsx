import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!showPopup) {
      setShowPopup(true);
    } else {
      navigate("/contact");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Row className="fixedContant">
      {!showPopup && (
        <Col>
          <Button
            variant="primary"
            onClick={handleClick}
            className="contact-button border-0">
            Contact Us
          </Button>
        </Col>
      )}
      {showPopup && (
        <Col md={4} className=" py-4 contactPopup">
          <Row className="pb-3">
            <Col md={8}>
              <h3>Contact</h3>
              <div>
                <div>Got questions?</div>
                <div>Get in touch with us!</div>
              </div>
            </Col>

            <Col md={4} className="d-flex justify-content-end">
              <Button
                variant="link"
                className="close-button"
                onClick={handleClosePopup}>
                <i className="fa fa-times"></i>
              </Button>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col md={2} className="align-items-center d-flex">
              <i className="fa fa-phone clr-orange"></i>
            </Col>
            <Col md={10}>
              <div>Call Us</div>
              <div>+971 588278127</div>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col md={2} className="align-items-center d-flex">
              <i className="fa fa-envelope clr-orange"></i>
            </Col>
            <Col md={10}>
              <div>Mail Us</div>
              <div>info@digihrtech.com</div>
            </Col>
          </Row>
          <Row>
            <Col md={2} className="align-items-center d-flex">
              <i className="fa fa-question-circle clr-orange"></i>
            </Col>
            <Col md={10}>
              <div>Enquiry</div>
              <div>Contact</div>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default ContactButton;
