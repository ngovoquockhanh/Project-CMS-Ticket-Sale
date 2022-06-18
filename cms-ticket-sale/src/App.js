import "./components/styles/app.scss";
import Menu from "./components/Menu/Menu";
import ManagerUsed from "./components/views/Manager-used";
import Managernotused from "./components/views/Manager-not-used";
import ManagerExpires from "./components/views/Manager-Expires";
import HomePage from "./components/views/HomePage";
import Homeweek from "./components/views/Home-week";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/menu/*" element={<Menu />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/homeweek" element={<Homeweek />} />
          <Route path="/manager-used" element={<ManagerUsed />} />
          <Route path="/manager-not-used" element={<Managernotused />} />
          <Route path="/manager-expires" element={<ManagerExpires />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
