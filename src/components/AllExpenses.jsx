import React, { useState } from "react";
import "../assets/styles/AllExpenses.scss";
import iconMoney from "../assets/images/moneys.svg";
import iconCardReceive from "../assets/images/card-receive.svg";
import iconCardSend from "../assets/images/card-send.svg";
import arrowRightIcon from "../assets/images/arrow-right.png";
import arrowRightIcon2 from "../assets/images/arrow-right.svg";

function AllExpenses() {
  const [selectedFilter, setSelectedFilter] = useState("Monthly");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <main id="all-expenses">
      <div className="page-content">
        <div className="container-fluid">
          <div className="flex-container">
            <h4 className="">All Expenses</h4>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedFilter}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleFilterChange("Monthly")}
                  >
                    Monthly
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleFilterChange("Years")}
                  >
                    Years
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <div className="card card-active">
                <div className="card-body">
                  <div className="flex-container ">
                    <div className="circle">
                      <img src={iconMoney} alt="Money Icon" />
                    </div>
                    <img src={arrowRightIcon} alt="Arrow Right Icon" />
                  </div>

                  <div className="frame-grup">
                    <h6>Balance</h6>
                    <p>April 2022</p>
                    <h2>$20,129</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div className="flex-container ">
                    <div className="circle">
                      <img src={iconCardReceive} alt="Receive Icon" />
                    </div>
                    <img src={arrowRightIcon2} alt="Arrow Right Icon" />
                  </div>

                  <div className="frame-grup">
                    <h6>Income</h6>
                    <p>April 2022</p>
                    <h2>$20,129</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div className="flex-container ">
                    <div className="circle">
                      <img src={iconCardSend} alt="Send Icon" />
                    </div>
                    <img src={arrowRightIcon2} alt="Arrow Right Icon" />
                  </div>

                  <div className="frame-grup">
                    <h6>Expenses</h6>
                    <p>April 2022</p>
                    <h2>$20,129</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AllExpenses;
