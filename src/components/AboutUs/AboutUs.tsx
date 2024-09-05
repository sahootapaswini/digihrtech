import React from "react";
import "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white AboutUs">
      <div className="container py-5">
        {/* Centering the content with a row */}
        <div className="row justify-content-center">
          {/* Setting the column width to 70% (approx. 8 out of 12) */}
          <div className="col-12 col-md-10">
            <section className="px-5">
              <h1 className="text-center pb-2">
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
              <h2 className="text-center">Our Mission</h2>
              <p>
                "We are one global team dedicated to guiding customers through
                each phase of their digital people experience journey, combining
                local expertise with global reach"
              </p>
              <p>
                "People are at the heart of our business. We support both our
                employees and customers in achieving their highest performance"
              </p>
            </section>
            <section className="px-5">
              <h2 className="text-center">What We Do</h2>
              <p>
                We offer comprehensive SuccessFactors solution implementation
                across all modules, including Employee Central Payroll, S4 HANA
                Payroll, business consulting, solution architecture advisory,
                health checks, and Application Management Services (AMS) for all
                SuccessFactors HR applications and multi country payroll.
              </p>
              <p>
                For more details, please visit our{" "}
                <a href="/solutions">Solutions</a> &{" "}
                <a href="/sap-successfactors">Services</a> section.
              </p>
            </section>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center py-3">Our Values</h2>
            <div className="row card-deck">
              <div className="col-md-3 ">
                <div className="card border-0">
                  <img
                    src="/src/assets/images/cards/card.jpg"
                    className="card-img-top"
                    alt="Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Agile</h5>
                    <p className="card-text">
                      We Adapt quickly to changes and evolving needs within the
                      HR landscape and client environments by maintaining the
                      highest quality in services, solutions, and client
                      interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0">
                  <img
                    src="/src/assets/images/cards/card.jpg"
                    className="card-img-top"
                    alt="Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Integrity</h5>
                    <p className="card-text">
                      We uphold transparency, honesty, and ethical practices in
                      every interaction and solution. This is being reflected on
                      every solutions we implement and services being provided
                      to customer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="card border-0">
                  <img
                    src="/src/assets/images/cards/card.jpg"
                    className="card-img-top"
                    alt="Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Innovation</h5>
                    <p className="card-text">
                      Innovation is an integral part of who we are. We embrace
                      innovation as the key to unlocking new possibilities and
                      creative solutions to drive HR processes forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="card border-0">
                  <img
                    src="/src/assets/images/cards/card.jpg"
                    className="card-img-top"
                    alt="Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Compliant</h5>
                    <p className="card-text">
                      We are committed to follow strict compliance in all of our
                      implementation with the utmost precision in line with the
                      country's labor laws. We tailored the HR solution based on
                      customer need keeping legal compliance in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
