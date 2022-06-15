import "./components/styles/app.scss";
import Menu from "./components/Menu/Menu";
import DevicePage from "./components/views/DevicePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/menu/*" element={<Menu />} />
          <Route path="/device" element={<DevicePage />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
