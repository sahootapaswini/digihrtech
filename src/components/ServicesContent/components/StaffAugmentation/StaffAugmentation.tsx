import React from "react";
import styles from "./StaffAugmentation.module.css";
import useScrollToTop from "../../../ReusableComponents/useScrollToTop";
const StaffAugmentation: React.FC = () => {
  useScrollToTop();
  return (
    <div className="{styles.container}">
      <h1>StaffAugmentation Component</h1>
    </div>
  );
};
export default StaffAugmentation;
