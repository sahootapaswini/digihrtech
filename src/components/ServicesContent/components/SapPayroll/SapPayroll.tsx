import React from "react";
import styles from "./componenet.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
const SapPayroll: React.FC = () => {
  useScrollToTop();
  return (
    <div className="{styles.container}">
      <h1>Payroll Services Content goes here</h1>
    </div>
  );
};
export default SapPayroll;
