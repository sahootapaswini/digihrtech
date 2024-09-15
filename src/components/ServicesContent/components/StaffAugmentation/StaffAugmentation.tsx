import React from "react";
import styles from "./StaffAugmentation.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";

const StaffAugmentation: React.FC = () => {
  useScrollToTop();

  return (
    <div className={styles.container}>
      <h1>Resource Augmentation</h1>
      <p>SAP SuccessFactors Teams On Demand For Post-Implementation Success</p>
      <h2>Building Your Extended SF Team</h2>
      <p>
        Successful implementation of SAP SuccessFactors isn’t always enough. 
        Sure, you have ongoing maintenance support from the implementation partner, 
        but what about expert product guidance to ease the workflows?
      </p>
      <p>
        It’s difficult to find, hire, and retain experienced SAP SuccessFactors professionals.
        It’s tougher to find an agile and cost-effective resource at short notice. 
        At DHR Technology, we’ve built a considerable “bench strength” in SuccessFactors resourcing 
        with experts who can accommodate easily into the existing HR support infrastructure. 
        Resource Augmentation converges teams who combine deep system expertise and consultative 
        approach – accessible for any length of time you need them.
      </p>
      <h2>Resource Pool For 360 Degrees SAP SuccessFactors Success</h2>
      <p>
        DHR Technology gives you a dependable and flexible resourcing solution for 
        SAP SuccessFactors expertise that works in finding the best resource “on the inside” 
        for your HR team without opting for a full-fledged permanent recruitment.
      </p>
      <h2>Differentiating Features</h2>
      <div className="row justify-content-center pb-3">
        <div className="col-md-12 text-center">
          <img className="img-fluid" src="/assets/images/staff-augmentation.png" alt="Staff Augmentation" />
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentation;