import Menubar from "../../components/Menu/Menu";
import Update from "../device/Update";
import HeaderManageDevice from "../device/HeaderManageDevice";
const ManageDevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderManageDevice />
          <Update />
        </main>
      </div>
    </>
  );
};

export default ManageDevicePage;
