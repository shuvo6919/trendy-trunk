import { createContext, useState } from "react";
import clickSound from "../assets/audio/mouse-click-153941.mp3";
import Swal from "sweetalert2";
export const MainContext = createContext(null);
const MainProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSound = () => {
    new Audio(clickSound).play();
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const successAlert = (msg) => {
    Swal.fire({
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const deleteAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const info = {
    handleSound,
    successAlert,
    deleteAlert,
    handleShowMenu,
    showMenu,
  };
  return <MainContext.Provider value={info}>{children}</MainContext.Provider>;
};

export default MainProvider;
