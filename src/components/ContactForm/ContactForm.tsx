import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; // Custom CSS for additional styling if needed

const ContactForm: React.FC = () => {
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

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1 className="text-center mb-4">Get in Touch</h1>
            <p className="text-center mb-4">
              Need assistance implementing SAP SuccessFactors? Whether you’re a
              new user or are looking to build solutions from the ground up,
              we’d love to help. Get in touch with one of our experts for more.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
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
                  <label htmlFor="lastName" className="form-label">
                    LastName
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
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-control"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="businessEmail" className="form-label">
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
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
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
                    required></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
