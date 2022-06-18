import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import fimail from "../../assets/images/fi_mail.png";
import ticketmanager from "../../assets/images/ticket-manager.png";
import changeticket from "../../assets/images/change-ticket.png";
import iconsetting from "../../assets/images/iconsetting.png";
import { Link, NavLink } from "react-router-dom";
import chandung from "../../assets/images/chandung.jpg";
import bell from "../../assets/images/bell.png";
import { FiSearch } from "react-icons/fi";

const Menubar = () => {
  return (
    <>
      <section className="menubar" id="menubar">
        <div className="menubar-main">
          <div className="devicemain-container-box">
            <div className="search1">
              <input type="text" placeholder="Search" />
              <span>
                <FiSearch />
              </span>
            </div>
            <img src={fimail} alt="" className="imgnotify2" />
          <img src={bell} alt="" className="imgnotify" />

           <img src={chandung} alt="" className="imguser" />
  
          </div>
          <NavLink to="/dashboard">
            <img src={logo} alt="" className="imgmenubar" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/home"
            exact="true"
          >
            <img src={home} alt="" className="icondashboard" />
            Trang chủ
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/manager-used"
            exact="true"
          >
            <img src={ticketmanager} alt="" className="icondevice" />
            Quản lý vé
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/"
            exact="true"
          >
            <img src={changeticket} alt="" className="iconservice" />
            Đổi soát vé
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menubar-main-box active setting"
                : "menubar-main-box setting"
            }
            to="/manage-role"
            exact="true"
          >
            <img src={iconsetting} alt="" className="iconsetting" />
            Cài đặt
            <div className="navigation">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/manage-role"
                    exact="true"
                  >
                    Quản lý vai trò
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/manage-user"
                    exact="true"
                  >
                    Quản lý tài khoản
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/history"
                    exact="true"
                  >
                    Nhật ký hoạt động
                  </NavLink>
                </li>
              </ul>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Menubar;
