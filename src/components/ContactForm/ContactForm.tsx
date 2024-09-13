import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; // Custom CSS for additional styling if needed
import useScrollToTop from "../ReusableComponents/useScrollToTop";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from React Bootstrap

const ContactForm: React.FC = () => {
  useScrollToTop();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Form state management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    businessEmail: "",
    jobTitle: "",
    country: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivacyPolicyChecked(e.target.checked);
  };

  // Handle preferred services checkbox change
  const handleServiceCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const service = e.target.value;
    setSelectedServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((item) => item !== service)
        : [...prevServices, service]
    );
  };

  // Handle form submission
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if privacy policy is accepted
    if (!isPrivacyPolicyChecked) {
      setStateMessage(
        "You must agree to the privacy policy before submitting."
      );
      return;
    }

    setIsSubmitting(true);

    const serviceID = "service_ias1vwr";
    const templateID = "template_65to09g";
    const publicKey = "DULc-BfoXjN75vFcp";

    emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey).then(
      (result) => {
        setIsSubmitting(false);
        setShowModal(true); // Show modal on success

        // Reset form fields
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          businessEmail: "",
          jobTitle: "",
          country: "",
          message: "",
        });
        setIsPrivacyPolicyChecked(false);
      },
      (error) => {
        setStateMessage("Something went wrong, please try again later");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      }
    );
  };

  return (
    <section className="contact-form-section bg-lightgrey">
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">
              Need assistance implementing SAP SuccessFactors & Payroll?
            </h2>
            <p className="text-center mb-4">
              Whether you’re a new user or are looking to build solutions from
              the ground up, we’d love to help. Get in touch with one of our
              experts for more.
            </p>
            <form onSubmit={sendEmail} ref={formRef}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label required">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="company" className="form-label required">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-control"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label
                    htmlFor="businessEmail"
                    className="form-label required">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    className="form-control"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="jobTitle" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    className="form-control"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country" className="form-label required">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {/* Preferred Services Section */}
                <div className="col-12 mb-3">
                  <label className="form-label">
                    Select Preferred Services
                  </label>
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service1"
                        value="Service 1"
                        checked={selectedServices.includes("Service 1")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service1" className="ms-2">
                        SAP HXM Implementation
                      </label>
                    </div>
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service2"
                        value="Service 2"
                        checked={selectedServices.includes("Service 2")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service2" className="ms-2">
                        Consulting
                      </label>
                    </div>
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service3"
                        value="Service 3"
                        checked={selectedServices.includes("Service 3")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service3" className="ms-2">
                        Training
                      </label>
                    </div>
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service4"
                        value="Service 4"
                        checked={selectedServices.includes("Service 4")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service4" className="ms-2">
                        Staff Augmentation
                      </label>
                    </div>
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service5"
                        value="Service 5"
                        checked={selectedServices.includes("Service 5")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service5" className="ms-2">
                        Value Assurance Services
                      </label>
                    </div>
                    <div className="col-md-4 mb-2">
                      <input
                        type="checkbox"
                        id="service6"
                        value="Service 6"
                        checked={selectedServices.includes("Service 6")}
                        onChange={handleServiceCheckboxChange}
                      />
                      <label htmlFor="service6" className="ms-2">
                        Support Services
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      className="form-check-input"
                      checked={isPrivacyPolicyChecked}
                      onChange={handleCheckboxChange}
                      required
                    />
                    <label
                      htmlFor="privacyPolicy"
                      className="form-check-label required">
                      I agree to the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-danger text-decoration-none">
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Get in Touch"}
                  </button>
                </div>
              </div>
            </form>
            {stateMessage && (
              <div className="alert alert-info mt-3">{stateMessage}</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for success message */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body className="text-center p-4">
          <p className="mb-3">
            Thank you for contacting. We will get back to you as soon as
            possible.
          </p>
          <Button className="bg-orange" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ContactForm;
