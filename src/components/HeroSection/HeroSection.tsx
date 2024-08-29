import React from "react";
import {
  BsClockFill,
  BsFillPeopleFill,
  BsFillCalendarFill,
  BsWallet,
  BsCash,
  BsSearch,
  BsClipboard,
  BsBarChart,
  BsGraphUp,
  BsLightbulb,
  BsPieChart,
} from "react-icons/bs"; // Import other icons if needed
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css"; // Custom CSS for additional styling if needed

const HeroSection: React.FC = () => {
  const columns = [
    {
      icon: <BsFillPeopleFill />, // Use the icon component directly
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Employee Central",
      description:
        "Consolidate and standardize global HR processes. We have extensive experience helping companies implement the SAP SuccessFactors Employee Central module.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsCash />, // Example icon for the second column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Compensation",
      description:
        "Whether you’re just starting out with SuccessFactors or are starting from scratch, Effective People can help you quickly and easily implement a powerful pay-for-performance strategy.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsClockFill />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Time Management",
      description:
        "Effective People can help you implement SAP SuccessFactors’ time management module to track, approve and put in time off requests. Get error-free timesheets.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsSearch />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Recruiting",
      description:
        "Hire the right people for your business when you partner with Effective People to help you implement the SAP SuccessFactors Recruiting module.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsClipboard />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Onboarding",
      description:
        "Onboard with ease by implementing SAP SuccessFactors Onboarding. We’ll help you get going.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsBarChart />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Performance and Goals",
      description:
        "Create a successful business with the help of SAP SuccessFactors Performance and Goals Management—we’ll ensure your implementation happens quickly and smoothly!",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsGraphUp />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Succession and Development",
      description:
        "Don’t let resignations or retirements slow your business growth. Partner with Effective People to ensure implementation with ease.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsLightbulb />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Learning",
      description:
        "To stay competitive, you need an engaged and highly skilled workforce. With SAP SuccessFactors Learning Management System, you can track, train, and hone your employees’ skills within one unified, cloud-based system.",
      buttonText: "Find out more",
      buttonLink: "#",
    },
    {
      icon: <BsPieChart />, // Example icon for the third column
      subheader: "SAP SUCCESSFACTORS IMPLEMENTATION",
      header: "Workforce Analytics",
      description:
        "Make better decisions with workforce analytics–we’ll help you get started!",
      buttonText: "Find out more",
      buttonLink: "#",
    },
  ];

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row text-center">
          {columns.map((col, index) => (
            <div key={index} className="col-lg-4 mb-5 flex-column d-flex px-4">
              <div className="heroContent">
                <div className="icon-container mb-1">{col.icon}</div>
                <h2 className="subheader mb-2">{col.subheader}</h2>
                <h1 className="header mb-4">{col.header}</h1>
                <p className="description mb-4 px-2">{col.description}</p>
                <div className="button-container mt-auto mb-3">
                  <a href={col.buttonLink} className="btn btn-primary">
                    {col.buttonText}
                  </a>
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
