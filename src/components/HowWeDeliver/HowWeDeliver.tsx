import React from "react";
import "./HowWeDeliver.css";
import useScrollToTop from "../ReusableComponents/useScrollToTop";
import sapActivateImage from "/assets/images/sap-activate.png";
import predictableImage from "/assets/images/predictable.png";
import simpleImage from "/assets/images/simple.png";
const HowWeDeliver: React.FC = () => {
  useScrollToTop();
  return (
    <div className="bg-white HowWeDeliver">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
            <section className="py-5">
              <h1 className="text-center mb-3">
                Delivery Approach- How We delivered
              </h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-4 image-container">
                      <img src={predictableImage} alt="SAP Activate" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <h4>Predictable</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <ul>
                      <li>
                        Use state-of-the-art solution design and leading
                        practices
                      </li>
                      <li>Minimize risk with proven end-to-end solutions</li>
                      <li>
                        Leverage know-how from SAP’s global service organization
                      </li>
                      <li>
                        Help in realizing a positive impact on our business at
                        the earliest possible
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-4 image-container">
                      <img src={simpleImage} alt="SAP Activate" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <h4>Simple</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <ul>
                      <li>
                        Simplify our transition to a digital HR platform using
                        tools & Accelerators
                      </li>
                      <li>Reduce complexity and use turn-key solution</li>
                      <li>Benefit from a fully integrated solution</li>
                      <li>Reduce non-value adding tasks to a minimum</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-4 image-container">
                      <img src={simpleImage} alt="SAP Standardize" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <h4>Standardize</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <ul>
                      <li>
                        Help in standardize and automate our processes and
                        removing cost and complexity
                      </li>
                      <li>
                        Always follow Clean-Core approach so that SAP Future
                        enhancements and AI features can be activated and
                        consumed easily.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-5">
              <h1 className="text-center">SAPACTIVATE Methodology</h1>
              <div className="row">
                <div className="col">
                  <p>
                    The SAPACTIVATE methodology represents the next generation
                    of agile practices designed to drive customer success. This
                    approach is harmonized and agile, effectively accommodating
                    cloud, on-premise, and hybrid deployments.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <ul>
                    <li>
                      <strong>Modular, Flexible, and Scalable:</strong> Adapts
                      to both current and future delivery models, including
                      those of SAP partners.
                    </li>
                    <li>
                      <strong>Accelerated Project Delivery:</strong> Utilizes
                      SAP Best Practices, fit-to-standard analysis, and agile
                      project management to speed up project timelines.
                    </li>
                    <li>
                      <strong>Guided Procedures:</strong> Provides prescriptive
                      and comprehensive procedures for project managers and team
                      members, ensuring clarity and direction.
                    </li>
                    <li>
                      <strong>Co-Innovation:</strong> Encourages collaborative
                      innovation with customers and is accessible to partners.
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 image-container">
                  <img src={sapActivateImage} alt="SAP Activate" />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col">
                  <p>
                    SAP Activate Methodology have built on following three
                    building Blocks which help consultants deliver consistent
                    and successful results across industries and customer
                    environments.
                  </p>
                </div>
              </div>
              <div className="row"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowWeDeliver;
