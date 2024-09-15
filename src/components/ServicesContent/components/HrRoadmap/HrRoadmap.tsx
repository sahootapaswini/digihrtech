import React from "react";
import styles from "./HrRoadmap.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
const HrRoadmap: React.FC = () => {
  useScrollToTop();
  return (
    <div className="{styles.container}">
      <h1>Human Resource Technology Roadmap</h1>
      <p> Planning out your organization’s technology roadmap is important to successfully 
        implement the correct technologies at the right time. We are experienced to help you 
        build a roadmap based on your organization’s business processes and requirements.
        </p>
        <h2>Our HR Technology Roadmap Approach</h2>
        <p> Planning out your organization’s technology roadmap is important to successfully 
        implement the correct technologies at the right time. We are experienced to help you 
        build a roadmap based on your organization’s business processes and requirements.
        </p>
        <div className="row d-flex justify-content-center pb-3">
          <div className="col-md-10">
          <img className="img-fluid" src="/public/assets/images/hr-tech-roadmap.png" alt="To be updated" />
          </div>
         
          </div>

    </div>
  );
};
export default HrRoadmap;
