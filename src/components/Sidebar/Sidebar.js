/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Sidebar.scss";

// == Composant
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={require("../../assets/images/logo.png")}
        alt="logo movies"
        className="sidebar-logo"
      />
      <h1>Composant : Sidebar</h1>
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
