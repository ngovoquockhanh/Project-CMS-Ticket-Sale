import Menubar from "../Menu/Menu";
import DeviceMain from "../Manager-ticker/Manager-used";


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
