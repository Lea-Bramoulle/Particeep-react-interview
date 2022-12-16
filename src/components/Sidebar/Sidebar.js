/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Sidebar.scss";

import { useDispatch, useSelector } from "react-redux";

import Favorites from "../Favorites/Favorites";

import { setToggleSidebar } from "../../store/actions";

// == Composant
function Sidebar() {
  const dispatch = useDispatch();

  const { toggleSidebar } = useSelector((state) => state);

  return (
    <div
      className="sidebar"
      style={toggleSidebar ? { width: "350px" } : { width: "150px" }}
    >
      <img
        src={require("../../assets/images/logo.png")}
        alt="logo movies"
        className="sidebar-logo"
      />
      <Favorites />
      <div>
        <div className="sidebar-toggle">
          <i
            className={
              toggleSidebar
                ? "fa-solid fa-chevron-right"
                : "fa-solid fa-chevron-left"
            }
            onClick={() => dispatch(setToggleSidebar())}
          />
        </div>
      </div>
    </div>
  );
}

// == Export
export default Sidebar;
