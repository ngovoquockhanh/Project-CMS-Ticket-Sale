import "./components/styles/app.scss";
import Menu from "./components/Menu/Menu";
import ManagerUsed from "./components/views/Manager-used";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/menu/*" element={<Menu />} />
          <Route path="/manager-used" element={<ManagerUsed />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
