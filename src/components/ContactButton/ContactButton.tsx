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
        <Col md={4} className="p-3 contactPopup">
          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Button
                variant="link"
                className="close-button"
                onClick={handleClosePopup}>
                <i className="fa fa-times"></i>
              </Button>
            </Col>
          </Row>
          <Row className="pb-3">
            <h4>Contact</h4>
            <div>
              Got questions?
              <br />
              Get in touch with us!
            </div>
          </Row>
          <Row className="pb-3">
            <Col md={2}>
              <i className="fa fa-phone"></i>
            </Col>
            <Col md={10}>
              <div>Call Us</div>
              <div>6273627384835</div>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <i className="fa fa-envelope"></i>
            </Col>
            <Col md={10}>
              <div>Mail Us</div>
              <div>fhdsjfdjsjgsjg</div>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default ContactButton;
