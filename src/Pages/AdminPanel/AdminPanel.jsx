// import AdminHeader from "../../Components/AdminHeader/AdminHeader";

import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import "./adminPanel.css";
import { useContext, useState } from "react";
import { MainContext } from "../../Provider/MainProvider";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const AdminPanel = () => {
  const { handleShowMenu } = useContext(MainContext);
  const { handleSound } = useContext(MainContext);

  return (
    <div onClick={handleSound}>
      <AdminHeader></AdminHeader>
      <HiOutlineMenuAlt1 onClick={handleShowMenu} className="menu-button" />

      <div className="admin-body">
        <AdminNavbar></AdminNavbar>
        <div className="admin-content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
