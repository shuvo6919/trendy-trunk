import "./adminHeader.css";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const AdminHeader = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="" />
        <h2>TrendyTrunk</h2>
      </div>
      <div className="search-box">
        <FaSearch />
        <input type="text" name="search" placeholder="Quick search" />
      </div>
      <div className="notification">
        <IoMdNotifications />
      </div>
    </div>
  );
};

export default AdminHeader;
