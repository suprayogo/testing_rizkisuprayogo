import React, { useState } from "react";
import "../assets/styles/MyCard.scss";
import cardCoverImage from "../assets/images/Mask-group.svg";
import logoImage from "../assets/images/gallery.svg";

function MyCard() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleIndicatorClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <main id="my-card">
      <div className="page-content">
        <div className="container-fluid">
          <div className="flex-container">
            <h4 className="">My Card</h4>
          </div>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-indicators">
              <div
                className={`indicator ${activeSlide === 0 ? "active" : ""}`}
                onClick={() => handleIndicatorClick(0)}
              ></div>
              <div
                className={`indicator ${activeSlide === 1 ? "active" : ""}`}
                onClick={() => handleIndicatorClick(1)}
              ></div>
              <div
                className={`indicator ${activeSlide === 2 ? "active" : ""}`}
                onClick={() => handleIndicatorClick(2)}
              ></div>
            </div>
            <div className="carousel-inner">
              <div
                className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}
              >
                <div className="carousel-content mt-2">
                  <div className="frame-name-card">
                    <h6>Name card</h6>
                    <h4>Syah Bandi</h4>
                  </div>
                  <div className="image-logo">
                    <img src={logoImage} alt="logo" />
                  </div>
                  <div className="frame-number-card">
                    <h2>0918 8124 0042 8129</h2>
                    <div className="frame-date-cvv">
                      <span>
                        12/20 <span>-</span>120
                      </span>
                    </div>
                  </div>

                  <img src={cardCoverImage} alt="" />
                </div>
              </div>
              <div
                className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}
              >
                <div className="carousel-content mt-2">
                  <div className="frame-name-card">
                    <h6>Name card</h6>
                    <h4>Rizki Suprayogo</h4>
                  </div>
                  <div className="image-logo">
                    <img src={logoImage} alt="logo" />
                  </div>
                  <div className="frame-number-card">
                    <h2>0918 8124 0042 8129</h2>
                    <div className="frame-date-cvv">
                      <span>
                        12/20 <span>-</span>120
                      </span>
                    </div>
                  </div>

                  <img src={cardCoverImage} alt="" />
                </div>
              </div>
              <div
                className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}
              >
                <div className="carousel-content mt-2">
                  <div className="frame-name-card">
                    <h6>Name card</h6>
                    <h4>Marquez Rosi</h4>
                  </div>
                  <div className="image-logo">
                    <img src={logoImage} alt="logo" />
                  </div>
                  <div className="frame-number-card">
                    <h2>0918 8124 0042 8129</h2>
                    <div className="frame-date-cvv">
                      <span>
                        12/20 <span>-</span>120
                      </span>
                    </div>
                  </div>

                  <img src={cardCoverImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-border mt-5"></div>

          <div className="flex-container mt-3">
            <h6>Transaction History</h6>
            <p>See all</p>
          </div>

          <div className="frame-history-money">
            <p>13 April 2022</p>
          </div>
          <div className="credit-money mb-3">
            <div className="flex-container">
              <div className="credit-date">
                <h4>Cash Withdrawal</h4>
                <span className="credit-date-span">13 Apr, 2022 </span>
              </div>
              <span className="credit-money-span">$20,129</span>
            </div>
          </div>


          <div className="debit-money mb-3">
            <div className="flex-container">
              <div className="debit-date">
                <h4>Landing Page project</h4>
                <span className="debit-date-span">13 Apr, 2022 at 3:30 PM</span>
              </div>
              <span className="debit-money-span">$20,129</span>
            </div>
          </div>

          <div className="debit-money mb-3">
            <div className="flex-container">
              <div className="debit-date">
                <h4>Juni Mobile App project</h4>
                <span className="debit-date-span">13 Apr, 2022 at 3:30 PM</span>
              </div>
              <span className="debit-money-span">$20,129</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default MyCard;
