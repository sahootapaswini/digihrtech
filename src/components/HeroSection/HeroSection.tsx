import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css"; // Custom CSS for additional styling if needed

const HeroSection: React.FC = () => {
  const columns = [
    {
      icon: "/assets/images/icons/dhr-ec-icon.jpg", // Use the icon component directly
      header: "Employee Central",
      description:
        "Consolidate and standardize global HR processes. We have extensive experience helping companies implement the SAP SuccessFactors Employee Central module.",
      buttonText: "Find out more",
      buttonLink: "solutions/employee-central",
    },
    {
      icon: "/assets/images/icons/dhr-compensation-icon.png",
      header: "Compensation",
      description:
        "Whether you’re just starting out with SuccessFactors or are starting from scratch, DHR Technology can help you quickly and easily implement a powerful pay-for-performance strategy.",
      buttonText: "Find out more",
      buttonLink: "solutions/compensation",
    },
    {
      icon: "/assets/images/icons/dhr-time-icon.png", // Example icon for the third column
      header: "Time Management",
      description:
        "DHR Technology can help you implement SAP SuccessFactors’ time management module to track, approve and put in time off requests. Get error-free timesheets.",
      buttonText: "Find out more",
      buttonLink: "solutions/time-management",
    },
    {
      icon: "/assets/images/icons/dhr-recruiting-icon.jpg", // Example icon for the third column
      header: "Recruiting",
      description:
        "Hire the right people for your business when you partner with DHR Technology to help you implement the SAP SuccessFactors Recruiting module.",
      buttonText: "Find out more",
      buttonLink: "solutions/recruiting",
    },
    {
      icon: "/assets/images/icons/dhr-onboard-icon.jpg", // Example icon for the third column
      header: "Onboarding",
      description:
        "Onboard with ease by implementing SAP SuccessFactors Onboarding. We’ll help you get going.",
      buttonText: "Find out more",
      buttonLink: "solutions/onboarding",
    },
    {
      icon: "/assets/images/icons/dhr-performance-icon.jpg", // Example icon for the third column
      header: "Performance and Goals",
      description:
        "Create a successful business with the help of SAP SuccessFactors Performance and Goals Management—we’ll ensure your implementation happens quickly and smoothly!",
      buttonText: "Find out more",
      buttonLink: "solutions/performance-goals",
    },
    {
      icon: "/assets/images/icons/dhr-suc-dev-icon.png", // Example icon for the third column

      header: "Succession and Development",
      description:
        "Don’t let resignations or retirements slow your business growth. Partner with DHR Technology to ensure implementation with ease.",
      buttonText: "Find out more",
      buttonLink: "solutions/succession-development",
    },
    {
      icon: "/assets/images/icons/dhr-learn-icon2.png", // Example icon for the third column
      header: "Learning",
      description:
        "To stay competitive, you need an engaged and highly skilled workforce. With SAP SuccessFactors Learning Management System, you can track, train, and hone your employees’ skills within one unified, cloud-based system.",
      buttonText: "Find out more",
      buttonLink: "solutions/learning",
    },
    {
      icon: "/assets/images/icons/dhr-report-icon.png", // Example icon for the third column
      header: "Reporting and Analytics",
      description:
        "Make better decisions with SAP Analytics Cloud and SuccessFactors People Analytics Reports –we’ll help you get started!",
      buttonText: "Find out more",
      buttonLink: "solutions/workforce-analytics",
    },
    {
      icon: "/assets/images/icons/dhr-payroll-icon.png", // Example icon for the third column
      header: "Payroll",
      description:
        "Pay the employee with confidence in error free payroll.We have extensive experience helping companies implement Employee Central Payroll & S4 HANA Payroll",
      buttonText: "Find out more",
      buttonLink: "solutions/payroll",
    },
    {
      icon: "/assets/images/icons/dhr-ai-icon.jpg", // Example icon for the third column
      header: "Business AI for HR",
      description:
        "Make work easier with SAP Business AI. It helps employees,manager,recruiter & HR  do their jobs better",
      buttonText: "Find out more",
      buttonLink: "solutions/business-ai-hr",
    },
  ];

  return (
    <section className="hero-section py-4">
      <div className="container">
        <div className="row text-center  d-flex justify-content-center">
          {columns.map((col, index) => (
            <div key={index} className="col-lg-4 mb-5 flex-column d-flex px-4">
              <div className="heroContent">
                <div className="icon-container mb-1 py-2">
                  <Image src={col.icon} alt={col.header} fluid />
                </div>
                <h3 className="header mb-4">{col.header}</h3>
                <p className="description mb-4 px-2">{col.description}</p>
                <div className="button-container mt-auto mb-3">
                  <Link
                    to={col.buttonLink}
                    className="text-white btn btn-primary">
                    {col.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
