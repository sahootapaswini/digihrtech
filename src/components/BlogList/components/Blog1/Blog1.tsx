import React from "react";
import styles from "./Blog1.module.css";
const Blog1: React.FC = () => {
  return (
    <div className="container pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <h2 className="pb-3 ">
            SAP’s Payroll Offerings <br />
            <span className="text-dark">
              Only SAP offers so many proven options for delivering payroll
            </span>
          </h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="row">
                <div className="col-12">
                  <h4>SAP S4 HANA Payroll</h4>
                  <img src="" alt="" />
                  <ul>
                    <li>Deployed On-Premise</li>
                    <li>58 SAP-provided countries</li>
                    <li>41 partner-supplied countries</li>
                  </ul>
                </div>
                <div className="col-12">
                  <h4>Provided options with Partners</h4>
                  <img src="" alt="" />
                  <ul>
                    <li>Payroll Outsourcing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="/assets/images/blog1.png"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-12">
                  <h4>Employee Central Payroll </h4>
                  <img src="" alt="" />
                  <ul>
                    <li>Deployed On-Premise</li>
                    <li>58 SAP-provided countries</li>
                    <li>41 partner-supplied countries</li>
                  </ul>
                </div>
                <div className="col-12">
                  <p>
                    All options based on SAP Payroll: one engine, many
                    deployment options paying nearly 100M employees and retirees
                    across 9000 customers in 99 countries
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h3>SAP is Uniquely Positioned with Payroll</h3>
            <div className="container mt-5">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>SAP Payroll</th>
                      <th>Employee Central Payroll</th>
                      <th>BPO partner-delivered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Deployment
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Deployed on-premise under the full control of the
                        customer
                      </td>
                      <td>
                        Deployed in a SAP SuccessFactors data center in the
                        cloud
                      </td>
                      <td>
                        Managed and hosted by a set of SAP BPO certified
                        partners with services
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Integration to Employee Central (EC)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Integration with Employee Central (EC) is provided;
                        additional integration work required by customer
                      </td>
                      <td>Fully integrated with EC</td>
                      <td>Fully integrated with EC</td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Customer Profile
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>
                            Existing ERP HCM customers who choose to focus on
                            moving Core HR to the cloud first, with a later
                            movement of payroll to the cloud
                          </li>
                          <li>
                            Have customizations and/or partner payrolls not
                            available in ECP
                          </li>
                          <li>Use of SAP (on-premise) Time Management</li>
                          <li>
                            Process payroll within the Finance organization
                            (keep with Finance deployment)
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            SAP cloud payroll option most optimized for EC
                          </li>
                          <li>Manage internally + partner support options</li>
                          <li>
                            Best to have at least 500 employees in each country
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            Customers who want to outsource their payroll
                            operations to a BPO provider
                          </li>
                          <li>Buy directly from partner</li>
                        </ul>
                        <p>Additional Options</p>
                        <ul>
                          <p>PMC (Partner Managed Cloud):</p>
                          <li>
                            Deployed in a SFSF data center and managed by a set
                            of SAP BPO certified partners with services
                          </li>
                          <li>
                            GB and smaller countries with employee counts up to
                            5,000
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        A combination of options can be deployed together to
                        support customer needs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog1;
