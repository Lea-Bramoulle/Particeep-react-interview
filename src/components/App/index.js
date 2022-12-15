/* eslint-disable quotes */
// == Import
import "./styles.scss";

import Movies from "../Movies/Movies";
import Sidebar from "../Sidebar/Sidebar";

// == Composant
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Movies />
    </div>
  );
}

// == Export
export default App;
