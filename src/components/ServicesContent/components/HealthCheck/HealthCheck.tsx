import React from "react";
import styles from "./HealthCheck.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
const HealthCheck: React.FC = () => {
  useScrollToTop();
  return (
    <div className="{styles.container}">
      <h1>HealthCheck Component</h1>
    </div>
  );
};
export default HealthCheck;
