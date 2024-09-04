import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        {/* Centering the content with a row */}
        <div className="row justify-content-center">
          {/* Setting the column width to 70% (approx. 8 out of 12) */}
          <div className="col-12 col-md-10">
            <section className="px-5">
              <h1 className="text-center text-danger pb-2">
                Welcome to DHR Technology Consulting & Advisory
              </h1>
              <p>
                We are a premium SAP HR Consulting Company founded by team
                experts from SAP, Accenture, Deloitte, and IBM with vast
                experience in implementing and managing SuccessFactors and
                multi-country payroll solutions across all industries over the
                last 20 years.
              </p>
              <p>
                We help our clients plan and execute successful HR digital
                transformation journeys while offering continued support and
                application management services (AMS).
              </p>
              <p>
                We bring our experience and expertise to every interaction and
                in all phases of the projects and services we render to our
                customers.
              </p>
            </section>
            <section className="px-5">
              <h2 className="text-danger text-center">Our Mission</h2>
              <p>
                We are one global team dedicated to guiding customers through
                each phase of their digital people experience journey, combining
                local expertise with global reach.
              </p>
              <p>
                People are at the heart of our business. We support both our
                employees and customers in achieving their highest performance.
              </p>
            </section>
            <section className="px-5">
              <h2 className="text-danger text-center">What We Do</h2>
              <p>
                We offer comprehensive SuccessFactors solution implementation
                across all modules, including Employee Central Payroll, S4 HANA
                Payroll, business consulting, solution architecture advisory,
                health checks, and Application Management Services (AMS) for all
                SuccessFactors HR applications and payroll.
              </p>
              <p>
                For more details, please visit our{" "}
                <a href="/solutions">Solutions</a> &{" "}
                <a href="/sap-successfactors">Services</a> section.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
