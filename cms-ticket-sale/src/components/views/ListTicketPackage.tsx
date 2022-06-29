import React from "react";
import Menubar from "../Menu/menubar";
import ListTicketPackage from "../setting/ListTicketPackage";
const Setting = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <ListTicketPackage />
        </main>
      </div>
    </>
  );
};
export default Setting;
