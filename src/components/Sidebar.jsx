import React from "react";
import "../assets/styles/Sidebar.scss";
import "../assets/styles/Home.css"
import logoImage from "../assets/images/gallery.svg";
import profileImage from "../assets/images/Frame.svg";
import dashboardIcon from "../assets/images/category-2.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <main id="sidebar-page" className="Sidebar">
        <div className="body-background">

            <div className="sidebar">
              <div className="d-flex align-items-center">
                <div className=" box-gray mb-3">
                  <img src={logoImage} alt="logo" />
                </div>
              </div>

              <div className="user-profile d-flex">
                <img src={profileImage} alt="Profile" />

                <div className=" ms-2">
                  <h6>Lekan Okeowo</h6>
                  <p>demo@gmail.com</p>
                </div>
              </div>

              <div className="mt-4 link-active">
                <ul>
                  <NavLink
                    to="/"
                    className="text-decoration-none d-flex align-items-center"
                  >
                    <img
                      src={dashboardIcon}
                      alt="Dashboard Icon"
                      className="icon"
                    />
                    Dashboard
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
 
      </main>
    </>
  );
}

export default Sidebar;
