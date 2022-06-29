import "./components/styles/app.scss";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/menubar";
import Home from "./components/views/HomePage";
import ManagerUsed from "./components/views/Manager-used";
import NoArguments from "./components/views/No-Arguments";
import Setting from "./components/views/ListTicketPackage";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/*" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manager-used" element={<ManagerUsed />} />       
          <Route path="/no-arguments" element={<NoArguments />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
