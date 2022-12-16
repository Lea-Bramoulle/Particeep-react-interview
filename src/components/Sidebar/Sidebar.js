/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Sidebar.scss";

import Favorites from "../Favorites/Favorites";

// == Composant
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={require("../../assets/images/logo.png")}
        alt="logo movies"
        className="sidebar-logo"
      />
      <Favorites />
      <div>
        <div className="sidebar-toggle">
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
    </div>
  );
}

// == Export
export default Sidebar;
