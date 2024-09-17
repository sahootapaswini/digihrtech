import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
import "./StaffAugmentation.css";

const StaffAugmentation: React.FC = () => {
  useScrollToTop();

  return (
    <div className="container my-4">
      <h1>Resource Augmentation</h1>
      <p>SAP SuccessFactors Teams On Demand For Post-Implementation Success</p>
      <h2>Building Your Extended SF Team</h2>
      <p>
        Successful implementation of SAP SuccessFactors isn’t always enough.
        Sure, you have ongoing maintenance support from the implementation
        partner, but what about expert product guidance to ease the workflows?
      </p>
      <p>
        It’s difficult to find, hire, and retain experienced SAP SuccessFactors
        professionals. It’s tougher to find an agile and cost-effective resource
        at short notice. At DHR Technology, we’ve built a considerable “bench
        strength” in SuccessFactors resourcing with experts who can accommodate
        easily into the existing HR support infrastructure. Resource
        Augmentation converges teams who combine deep system expertise and
        consultative approach – accessible for any length of time you need them.
      </p>
      <h2>Resource Pool For 360 Degrees SAP SuccessFactors Success</h2>
      <p>
        DHR Technology gives you a dependable and flexible resourcing solution
        for SAP SuccessFactors expertise that works in finding the best resource
        “on the inside” for your HR team without opting for a full-fledged
        permanent recruitment.
      </p>
      <h2>Differentiating Features</h2>
      <div className="d-flex justify-content-center pb-3">
        <img
          className="img-fluid"
          src="/assets/images/staff-augmentation.png"
          alt="Staff Augmentation"
        />
      </div>
      <div className="whyDHR">
        <h2>
          Resourcing and Staff Augmentation Service: Why DHR Technology
          Solutions
        </h2>
        <div className="row">
          <div className="col-md-5">
            <h4 className="pb-4">Why DHR Technology Solutions</h4>

            <ul className="custom-list">
              <li>
                Global legal presence in 2 countries: United Arab Emirates (UAE)
                and India.
              </li>
              <li>
                Delivery centers (offices) in key IT hubs: Bhubaneswar (Odisha)
                and Bangalore (Karnataka)
              </li>
              <li>Attracts different talents</li>
              <li>
                SAP Recognized Expertise Partner with strong bench in SAP HXM,
                S4Hana, and BTP / Cloud technical areas.
              </li>
              <li>SAP Certified consultants on bench for HXM</li>
              <li>
                Offers multiple engagement models including Time and Material
                (T&M), Back-to-Back (FPP), and Extended Shared Services (AMS)
              </li>
              <li>
                Dedicated Account Manager mapping with each SPOC for quick and
                quality delivery.
              </li>
              <li>
                Expert in fulfilling niche skills in SAP, Oracle, Java,
                Microsoft, and open sources.
              </li>
              <li>
                Team of 30+ recruitment specialists specialized in Technical,
                Functional, and Administrative IT resourcing.
              </li>
              <li>
                Good experience working with large and medium SI on Permanent,
                C2H, and C2C fulfillment.
              </li>
            </ul>
          </div>
          <div className="col-md-7">
            <div className="row mt-5 d-flex">
              <div className="col-md-6 mb-3">
                <div className="p-4 rounded-col bg-lightgrey">
                  <h5>Go to Person</h5>
                  <p>Advisor on "How to question"</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-4 rounded-col bg-lightgrey">
                  <h5>Level 1 Support</h5>
                  <p>Troubleshooting and issue resolution</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-4 rounded-col bg-lightgrey">
                  <h5>System Administrator</h5>
                  <ul>
                    <li>Role Based Permission (RBP) Admins</li>
                    <li>Scheduled Integration Jobs</li>
                    <li>Ad Hoc Reporting</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-4 rounded-col bg-lightgrey">
                  <h5>Extended HRIS Member</h5>
                  <ul>
                    <li>Consultant for new requirements</li>
                    <li>
                      Reviews new features and configures minor enhancements
                    </li>
                    <li>
                      Liaise with AMS vendor to execute major enhancements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentation;
