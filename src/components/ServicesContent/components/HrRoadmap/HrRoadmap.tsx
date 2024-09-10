import React from "react";
import styles from "./HrRoadmap.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
const HrRoadmap: React.FC = () => {
  useScrollToTop();
  return (
    <div className="{styles.container}">
      <h1>HrRoadmap Component</h1>
    </div>
  );
};
export default HrRoadmap;
