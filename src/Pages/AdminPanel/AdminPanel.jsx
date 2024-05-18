// import AdminHeader from "../../Components/AdminHeader/AdminHeader";

import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import "./adminPanel.css";
import { useContext } from "react";
import { MainContext } from "../../Provider/MainProvider";

const AdminPanel = () => {
  const { handleSound } = useContext(MainContext);
  return (
    <div onClick={handleSound}>
      <AdminHeader></AdminHeader>
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
