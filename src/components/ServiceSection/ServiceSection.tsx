// ServiceSection.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceSection.css";

// Define the data structure
const serviceData = [
  {
    title: " Consulting",
    description: `Our consulting services address challenges before implementing SAP SuccessFactors 
    and payroll systems, ensuring a smoother process. Our health checks throughout the project lifecycle 
    ensure a robust ERP system`,
    icon: "/assets/images/consulting-icon.png",
    buttonLink: "services/hr-process-implementation",
  },
  {
    title: "Implementation",
    description: `We are specializing in tailor the solutions to fit your business
    needs, from greenfield and brownfield implementations to
    operational enhancements and ongoing support. Our team of
    certified and experienced consultants is dedicated to your success
    at every stage.`,
    icon: "/assets/images/implement-icon.png",
    buttonLink: "services/sap-successfactors",
  },
  {
    title: "Resource Augmentation",
    description: `Are you in need of additional expertise to bolster your team's
    capabilities? Look no further. Our Resource/Staff Augmentation Service
    provides you with skilled & certified professionals who seamlessly
    integrate into your existing workforce to support your projects
    and initiatives.`,
    icon: "/assets/images/augment-icon.png",
    buttonLink: "services/staff-augmentation",
  },
  {
    title: "Training",
    description: `Unlock the full potential of SAP SuccessFactors with our
    comprehensive training services. Whether you're a new adopter or
    looking to deepen your team's expertise, our tailored training
    programs ensure you maximize the benefits of this powerful HR
    solution..`,
    icon: "/assets/images/training-icon.png",
    buttonLink: "services/training",
  },
  {
    title: "Value Assurance Services(VAS)",
    description: `These Special Premium services, included in our premium engagement contracts, 
    ensure a secure ERP implementation with proactive support from our team, who will work 
    alongside your current SI to guide the deployment, review the design as well as solution
    and manage project risks`,
    icon: "/assets/images/vas-icon.png",
    buttonLink: "services/value-assurance",
  },
  {
    title: "Support",
    description: `Do you need support partners post Go-Live? <br />
    We have comprehensive set of predefined service packages
    (Standard, Bronze, Silver & Gold) Or you can build your own
    support using our DHR AMS Estimator Tool. Also there is a separate 
    support for SAP payroll`,
    icon: "/assets/images/support-icon.png",
    buttonLink: "services/application-support",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="sectionWrapper bg-lightgrey ServiceSection">
      <div className="container py-5">
        <h1>Your Trusted SAP SuccessFactors & Payroll Solution Provider </h1>
        <div className="row text-center pb-4">
          <div className="col-md-5 px-5 py-2">
            <img
              className="transformation-icon img-fluid"
              src="/assets/images/transformation.PNG"
              alt="SAP HR Digital Transformation Journey"
            />
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div>
              <h2 className="text-center mb-4">A highlight of our Services</h2>
              <p className="font-weight-bold mb-5">
              A leading Human Resource Technology Organization, We deliver comprehensive 
              value as a HR Tech service provider of SAP SuccessFactors and payroll solutions. 
              Our portfolio encompasses twenty-two(22) distinct services across six(6) categories: 
              Implementation, Consulting, Support, Value Assurance, Training, and Staff Augmentation. 
              We expertly handle all aspects of the Hire-to-Retire processes and offer tailored solutions/package 
              to meet your specific requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="p-4 w-100 serviceName">
                <div className="row">
                  <div className="col-9 d-flex align-items-center">
                    <h3 className="font-weight-bold">{service.title}</h3>
                  </div>
                  <div className="col-3 service-icon">
                    <img className="img-fluid" src={service.icon} alt="" />
                  </div>
                </div>

                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: service.description }}></p>
                  <a className="orange text-decoration-none fw-bold" href={service.buttonLink}>Find out more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
