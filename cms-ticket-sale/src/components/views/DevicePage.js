import Menubar from "../../components/Menu/Menu";
import DeviceMain from "../ticket-sales-manager/ticket-sales-manager-Main";


const DevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
   
          <DeviceMain />
        </main>
      </div>
    </>
  );
};

export default DevicePage;
