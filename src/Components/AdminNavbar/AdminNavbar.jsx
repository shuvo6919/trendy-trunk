import React, { useContext } from "react";
import "./adminNavbar.css";
import { FaClipboardList, FaKeyboard, FaTshirt } from "react-icons/fa";
import { IoMdCalendar, IoMdHelp } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MainContext } from "../../Provider/MainProvider";
const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <ul>
        <NavLink to={"/admin/dashboard"}>
          <li>
            <MdDashboard />
            Dashboard
          </li>
        </NavLink>
        <NavLink to={"/admin/peoples"}>
          <li>
            <BsFillPeopleFill />
            People
          </li>
        </NavLink>
        <NavLink to={"/admin/products"}>
          <li>
            <FaTshirt />
            Products
          </li>
        </NavLink>
        <NavLink to={"/admin/projects"}>
          <li>
            <FaClipboardList />
            Projects
          </li>
        </NavLink>
        <NavLink to={"/admin/calendar"}>
          <li>
            <IoMdCalendar />
            Calendar
          </li>
        </NavLink>
        <NavLink to={"/admin/training"}>
          <li>
            <PiTelevisionBold />
            Training
          </li>
        </NavLink>
        <NavLink to={"/admin/timesheet"}>
          <li>
            <CgSandClock />
            Timesheet
          </li>
        </NavLink>
        <NavLink to={"/admin/reports"}>
          <li>
            <BiSolidMessageDetail />
            Reports
          </li>
        </NavLink>
        <NavLink to={"/admin/administration"}>
          <li>
            <FaKeyboard />
            Administration
          </li>
        </NavLink>
        <NavLink to={"/admin/help"}>
          <li>
            <IoMdHelp />
            Help
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNavbar;
