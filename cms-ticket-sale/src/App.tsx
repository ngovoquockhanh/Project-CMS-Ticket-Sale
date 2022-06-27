import "./components/styles/app.scss";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/menubar";
import Home from "./components/views/HomePage";
import ManagerUsed from "./components/views/Manager-used";
import Managernotused from "./components/views/Manager-not-used";
import ManagerExpires from "./components/views/Manager-Expires";
import NoArguments from "./components/views/No-Arguments";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/*" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manager-used" element={<ManagerUsed />} />
          <Route path="/manager-not-used" element={<Managernotused />} />
          <Route path="/manager-expires" element={<ManagerExpires />} />
          <Route path="/no-arguments" element={<NoArguments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
