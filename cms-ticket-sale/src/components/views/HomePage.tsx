import React from "react";
import Menubar from "../Menu/menubar";
import HomePage from "../Home-page/Home";
const Home = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HomePage />
        </main>
      </div>
    </>
  );
};
export default Home;
