import React from "react";
import "./PayrollSupport.css";
const PayrollSupport: React.FC = () => {
  return (
    <section className="payroll-support-info">
      <div className="row container">
        <h1>SAP SuccessFactors EC Payroll Support</h1>
        <p className="fw-bold">
          The SAP SuccessFactors EC Payroll solution simplifies global payroll
          processes, so that employees can be paid accurately and on time. Once
          implemented, the system requires a level of ongoing payroll support to
          account for changes in the business, legislation, integration,
          compatibility with other systems, and innovations and upgrades from
          SAP.
        </p>
        <p>
          SAP payroll support services differ from other areas of application
          support due to compliance and legal demands unique to different
          countries and sectors. With a global client base and two decades of
          experience, DHR Technology has the necessary expertise to help you
          navigate these particular requirements, along with other repairs,
          maintenance, and improvement activities.
        </p>
        <p>We can also offer tailored HR payroll support for customers.</p>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10">
          <img
            className="img-fluid"
            src="/assets/images/payroll-support-img.png"
            alt="Payroll Support"
          />
        </div>
      </div>
    </section>
  );
};

export default PayrollSupport;
