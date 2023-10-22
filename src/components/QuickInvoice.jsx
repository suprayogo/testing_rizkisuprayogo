import React from "react";
import "../assets/styles/QuickInvoice.scss";
import iconAdd from "../assets/images/add.svg";
import iconArrowDown from "../assets/images/arrow-down.svg";
import profileFoto1 from "../assets/images/Frame-3.svg";
import profileFoto2 from "../assets/images/Frame -2.svg";

function QuickInvoice() {
  return (
    <>
      <main id="quick-invoice">
        <div className="page-content">
          <div className="container-fluid">
            <div className="flex-container">
              <h4 className="">Quick Invoice</h4>
              <div className="circle">
                <img src={iconAdd} alt="add icon" />
              </div>
            </div>

            <div className="frame-group-1">
              <h5>Latest Transaction</h5>
              <div className="carousel">
                <div className="frame-group-2 me-2">
                  <img src={profileFoto1} alt="user profile" />
                  <div className="me-1">
                    <h4>Madrani Andi</h4>
                    <p>Madraniadi20@gmail</p>
                  </div>
                </div>
                <div className="frame-group-2 me-2">
                  <img src={profileFoto2} alt="user profile" />
                  <div className="me-1">
                    <h4>Josua Nunito</h4>
                    <p>Josh Nunito@gmail.com</p>
                  </div>
                </div>
                <div className="frame-group-2">
                  <img src={profileFoto1} alt="user profile" />
                  <div className="me-1">
                    <h4>Madrani Andi</h4>
                    <p>Madraniadi20@gmail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-border mt-4"></div>

            <form className="mt-4">
              <div class="row">
                <div class="col">
                  <div class="mb-4">
                    <label className="form-label">Customer name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type customer name"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-4">
                    <label className="form-label">Customer Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type customer email"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="mb-4">
                    <label className="form-label">Item name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type customer name"
                    />
                  </div>
                </div>

                <div class="col">
                  <div class="mb-4">
                    <label className="form-label">Item mount</label>
                    <select className="form-control">
                      <option value="USD">USD</option>
                      <option value="option2">IDR</option>
                      <option value="option3">YEN</option>
                    </select>
                    <img
                      src={iconArrowDown}
                      alt="Icon Arrow Down"
                      className="select-icon"
                    />
                  </div>
                </div>
              </div>

              <div class="row mt-2">
                <div class="col">
                  <button type="button" className="btn btn-outline-primary">
                    Add more details
                  </button>
                </div>

                <div class="col">
                  <div class="mb-3">
                    <button type="button" className="btn btn-primary">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default QuickInvoice;
