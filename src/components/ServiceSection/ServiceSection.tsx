// ServiceSection.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceSection.css";

// Define the data structure
const serviceData = [
  {
    title: " Consulting Services",
    description: `Our consulting services evaluate issues and challenges before implementing 
    SAP SuccessFactors in your organization. Our goal is to facilitate a smoother and more 
    successful implementation of your company's SAP HR information system and payroll software. 
    In this phase, we also uncover broader opportunities to enhance your HR operating model. 
    We offer a range of services, including HR Process Implementation, HR Technology Roadmap 
    Transformation, Change Management, Test Management, and Health Checks.`,
  },
  {
    title: "Implementation Services",
    description: `We are specializing in tailor the solutions to fit your business
    needs, from greenfield and brownfield implementations to
    operational enhancements and ongoing support. Our team of
    certified and experienced consultants is dedicated to your success
    at every stage. Along with Sucessfactors & Payroll implementaion we do some specialized
    services such as Integration, data migration,implemenation for business AI for HR and Talent
    intelligent hub.`,
  },
  {
    title: "Staff Augmentation",
    description: `Are you in need of additional expertise to bolster your team's
    capabilities? Look no further. Our Staff Augmentation Service
    provides you with skilled & certified professionals who seamlessly
    integrate into your existing workforce to support your projects
    and initiatives.`,
  },
  {
    title: "Training",
    description: `Unlock the full potential of SAP SuccessFactors with our
    comprehensive training services. Whether you're a new adopter or
    looking to deepen your team's expertise, our tailored training
    programs ensure you maximize the benefits of this powerful HR
    solution..`,
  },
  {
    title: "Value Assurance Services(VAS)",
    description: `We offer a variety of value-added services under the umbrella of 
    Value Assurance to enhance your SAP SuccessFactors and payroll solution. 
    Our proactive team members will work alongside your current implementation team, 
    guiding the deployment roadmap and helping to mitigate project risks..`,

  },
  {
    title: "Application Management Services (AMS)",
    description: `Do you need support partners post Go-Live? <br />
    We have comprehensive set of predefined service packages
    (Standard, Bronze, Silver & Gold) Or you can build your own
    support using our DHR AMS Estimator Tool.`,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="sectionWrapper bg-lightgrey ServiceSection">
      <div className="container py-5">
        <div className="row text-center">
          <div className="col">
            <h2 className="text-center mb-4">Our Services</h2>
            <p className="font-weight-bold mb-5">
              We offer nearly 15 different types of services across 12 HR
              business areas (modules). You can select services based on your
              specific needs, and our packages and solutions can be customized
              to fit the requirements of your organization.
            </p>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="col-md-6 mb-4 d-flex justify-content-center">
              <div className="border border-warning rounded p-4 w-100 serviceName">
                <h3 className="font-weight-bold text-center">
                  {service.title}
                </h3>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: service.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
